import pandas as pd
from app.services.preprocess import extract_emojis, parse_message
from app.services.wordcloud import word_cloud_to_base64

from app.utils.phone_type import get_phone_type
import app.utils.constants as c
import re
from app.utils.zscore import zscore
from app.utils.time import check_dayfirst, parse_datetime

months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

class WhatsAppChat:
    def __init__(self, chats: str, year: int = None):
        self.df = (
            self._parse_chats(chats) if year is None else self._get_year_x(chats, year)
        )

    def _parse_chats(self, chats: str) -> pd.DataFrame:
        """Parse chats into a df
        Args:
            chats (str): chats in string format
        Returns:
            DataFrame: chats in dataframe format
        """
        chats = re.split("\n", chats)
        new_chats = []
        phone_type = get_phone_type(chats[0])
        c_idx = 0
        i = 0

        while i < len(chats):
            chats[i] = (
                chats[i]
                .strip()
                .replace("\u200e", "")
                .replace("\r", "")
                .replace("\u202f", "")
            )
            new_chats.append(chats[i])
            i += 1
            while i < len(chats) and not bool(re.search(c.REGEX[phone_type], chats[i])):
                new_chats[c_idx] += "\n" + chats[i]
                i += 1
            c_idx += 1

        chats_df = pd.DataFrame(new_chats, columns=["chats"])
        chats_df = chats_df["chats"].apply(parse_message, args=(phone_type,))
        chats_df = pd.DataFrame(
            chats_df.tolist(), columns=["time", "sender", "message"]
        )

        chats_df.columns = ["time", "sender", "message"]

        chats_df["sender"] = chats_df["sender"].astype(str).str.lstrip("~")

        dayfirst = check_dayfirst(chats_df["time"])
        chats_df["time"] = chats_df["time"].apply(parse_datetime, args=(dayfirst,))

        # extra columns
        chats_df["month"] = chats_df["time"].dt.month
        chats_df["date"] = chats_df["time"].dt.date

        chats_df.dropna(inplace=True)
        chats_df.reset_index(drop=True, inplace=True)

        return chats_df

    def _get_year_x(self, chats: str, year: int) -> pd.DataFrame:
        """Get chats of a particular year
        Args:
            year (int): year
        Returns:
            DataFrame: chats of that year
        """
        chats_df = self._parse_chats(chats)
        chats_df = chats_df[chats_df["time"].dt.year == year]
        chats_df.reset_index(drop=True, inplace=True)
        return chats_df

    def get_chat_members(self):
        members = self.df["sender"].unique().tolist()
        members = [member for member in members if str(member) != "nan"]
        return members

    def get_no_of_messages(self):
        return len(self.df)

    def get_no_of_messages_per_member(self):
        members = self.df[self.df["sender"].astype(str) != "nan"]["sender"].value_counts().to_dict()
        members = [{"member": x, "count": members[x]} for x in members]
        return members

    def get_no_of_messages_per_month(self) -> tuple:
        m_count = self.df["month"].value_counts().to_dict()
        month_count = [{"month": x, "count": 0} for x in months]

        for mc in m_count:
            month_count[mc - 1]["count"] = m_count[mc]

        month_df = pd.DataFrame(month_count)
        month_df["month_codes"] = pd.Series(range(1, 13))
        month_corr = month_df["month_codes"].corr(month_df["count"])
        return month_count, month_corr

    def get_no_of_days_talked(self) -> int:
        return len(self.df["date"].unique())

    def get_most_used_emojis(self, top: int = 5):
        emojis = self.df["message"].apply(extract_emojis)
        emojis = emojis[emojis != ""]
        emojis = emojis.str.cat(sep="")
        emojis = (
            emojis.replace("\U0001f3fb", "")
            .replace("\U0001f3fc", "")
            .replace("\U0001f3fd", "")
            .replace("\U0001f3fe", "")
            .replace("\U0001f3ff", "")
        )
        emojis = pd.Series(list(emojis))
        emojis = emojis.value_counts().to_dict()
        top_emojis = sorted(emojis, key=emojis.get, reverse=True)[:top]
        return top_emojis

    def get_no_of_messages_per_hour(self):
        hours = self.df["time"].dt.hour.value_counts().to_dict()
        hours = [{"hour": x, "count": hours[x]} for x in hours]
        return hours

    def get_no_of_messages_per_day(self):
        days = self.df["time"].dt.day_name().value_counts().to_dict()
        days = [{"day": x, "count": days[x]} for x in days]
        return days

    def get_most_active_date(self):
        return self.df["date"].value_counts().idxmax()

    def get_longest_gap(self):
        dates = self.df["date"].unique()
        dates.sort()
        longest_gap = 0
        start_date = None
        end_date = None
        for i in range(len(dates) - 1):
            gap = (dates[i + 1] - dates[i]).days
            if gap > longest_gap:
                longest_gap = gap
                start_date = dates[i]
                end_date = dates[i + 1]
        return {
            "length": longest_gap,
            "start_date": start_date,
            "end_date": end_date,
        }

    def get_longest_session(self):
        streak = {
            "total_time": 0,
            "start_time": None,
            "end_time": None,
            "total_messages": 0,
            "avg_reply_time": 0,
        }

        start_time = None
        end_time = None
        total_messages = 0
        total_time = 0

        for i in range(len(self.df) - 1):
            time_diff = self.df.iloc[i + 1]["time"] - self.df.iloc[i]["time"]
            if time_diff.total_seconds() / 60 <= 5:
                if start_time is None:
                    start_time = self.df.iloc[i]["time"]
                end_time = self.df.iloc[i + 1]["time"]
                total_messages += 1
                total_time = end_time - start_time
            else:
                if total_messages > streak["total_messages"]:
                    streak["total_messages"] = total_messages
                    streak["start_time"] = start_time
                    streak["end_time"] = end_time
                    streak["avg_reply_time"] = total_time / total_messages
                    streak["total_time"] = total_time
                start_time = None
                end_time = None
                total_messages = 0
                total_time = 0

        return streak

    def get_who_texts_first(self):
        time_diff = self.df["time"].diff().dt.total_seconds() / 3600
        time_diff = time_diff[time_diff > 5]
        first_texters = self.df.iloc[time_diff.index - 1][self.df.iloc[time_diff.index - 1]["sender"].astype(str) != "nan"]["sender"].value_counts()
        first_texter = first_texters.idxmax()
        return first_texter

    def get_top_percent(self):
        total_chats = self.get_no_of_messages()
        z, p = zscore(total_chats)
        top_percent = 1 - p
        return top_percent

    def get_wordcloud(self):
        return word_cloud_to_base64(self.df)
    
    def get_call_stats(self):
        call_pattern = r"(?:Video call|Voice call), (?:\d+ (?:min|hr))"
        calls = self.df[self.df["message"].str.contains(call_pattern, regex=True, na=False)]
        if calls.empty:
            month_wise_minutes = [{"month": month, "duration": 0} for month in months]
            return {"total_minutes": 0, "month_wise_minutes": month_wise_minutes, "most_minutes_month": {"month": None, "minutes": 0}}
        call_pattern_extract = r"(Video call|Voice call), (\d+ (min|hr))"
        call_info = calls["message"].str.extract(call_pattern_extract)
        call_info.columns = ["call_type", "duration", "unit"]
        call_info["duration"] = call_info.apply(
            lambda row: int(row["duration"].split()[0]) * (60 if row["unit"] == "hr" else 1), axis=1
        )
        call_info["month"] = calls["time"].dt.month
        total_minutes_per_month = call_info.groupby("month")["duration"].sum().to_dict()
        
        month_wise_minutes = [{"month": months[i-1], "duration": total_minutes_per_month.get(i, 0)} for i in range(1, 13)]
        total_minutes = sum(total_minutes_per_month.values())
        
        most_minutes_month = max(total_minutes_per_month, key=total_minutes_per_month.get, default=None)
        most_minutes_month = {"month": months[most_minutes_month-1], "minutes": total_minutes_per_month[most_minutes_month]} if most_minutes_month else {}

        return {"total_minutes": total_minutes, "month_wise_minutes": month_wise_minutes, "most_minutes_month": most_minutes_month}

    def _get_message_consistency_score(self) -> float:
        """Calculate message consistency (0-1) based on daily message distribution variance"""
        daily_counts = self.df["date"].value_counts().values
        if len(daily_counts) < 2:
            return 0.5
        
        mean = daily_counts.mean()
        variance = daily_counts.var()
        coefficient_of_variation = (variance ** 0.5) / mean if mean > 0 else 0
        
        # Lower CV = more consistent. Map to 0-1 where lower CV is higher score
        consistency_score = 1 / (1 + coefficient_of_variation)
        return min(consistency_score, 1.0)

    def _get_reciprocity_balance_score(self) -> float:
        """Calculate reciprocity balance (0-1) for message distribution between members"""
        members = self.df[self.df["sender"].astype(str) != "nan"]["sender"].value_counts()
        
        if len(members) == 0:
            return 0.0
        
        total_messages = members.sum()
        percentages = (members / total_messages * 100).values
        
        # For 2 people: ideal is 50-50, for groups: more balanced is better
        max_percentage = percentages.max()
        
        if len(members) == 1:
            return 0.0
        elif len(members) == 2:
            # For direct chat, 50-50 is perfect
            balance_score = 1 - (abs(max_percentage - 50) / 50)
        else:
            # For group chat, balance when max is close to (100/n)%
            ideal_percentage = 100 / len(members)
            balance_score = 1 - (max_percentage - ideal_percentage) / (100 - ideal_percentage)
        
        return max(min(balance_score, 1.0), 0.0)

    def _get_engagement_intensity_score(self) -> float:
        """Calculate engagement intensity (0-1) based on messages per active day and session quality"""
        total_messages = len(self.df)
        active_days = len(self.df["date"].unique())
        
        if active_days == 0:
            return 0.0
        
        messages_per_day = total_messages / active_days
        
        # Get quick response sessions (messages within 5 min)
        time_diffs = self.df["time"].diff().dt.total_seconds() / 60
        quick_responses = (time_diffs <= 5).sum()
        quick_response_ratio = quick_responses / max(len(self.df) - 1, 1)
        
        # Get longest session duration
        streak = self.get_longest_session()
        session_quality = min(streak["total_messages"] / max(messages_per_day, 1), 1.0)
        
        # Combine metrics: prioritize messages per day
        intensity_score = (messages_per_day / 100) * 0.5 + quick_response_ratio * 0.3 + session_quality * 0.2
        
        return min(intensity_score, 1.0)

    def _get_communication_channels_score(self) -> float:
        """Calculate score based on presence and frequency of calls (0-1)"""
        call_stats = self.get_call_stats()
        total_minutes = call_stats["total_minutes"]
        
        # Score based on call presence and duration
        # No calls: 0.2, some calls: scale up
        if total_minutes == 0:
            return 0.2
        elif total_minutes < 60:
            return 0.4
        elif total_minutes < 300:
            return 0.6
        elif total_minutes < 1000:
            return 0.8
        else:
            return 1.0

    def _get_temporal_overlap_score(self) -> float:
        """Calculate temporal overlap based on active hours distribution"""
        hourly_count = self.get_no_of_messages_per_hour()
        
        if not hourly_count or len(hourly_count) < 2:
            return 0.5
        
        hours_dict = {item["hour"]: item["count"] for item in hourly_count}
        counts = list(hours_dict.values())
        
        if len(counts) < 2:
            return 0.5
        
        # More hours with activity = better overlap
        active_hours = len([c for c in counts if c > 0])
        max_hours = 24
        active_hours_ratio = active_hours / max_hours
        
        # Distribution concentration: if concentrated in few hours, likely same timezone/schedule
        concentration = max(counts) / sum(counts) if sum(counts) > 0 else 0
        
        # Ideal is some concentration (same hours) but not all in one hour
        temporal_score = (active_hours_ratio * 0.4 + (1 - concentration) * 0.6)
        
        return min(temporal_score, 1.0)

    def _get_interaction_pattern_score(self) -> float:
        """Calculate based on 'who texts first' frequency (engagement indicator)"""
        time_diff = self.df["time"].diff().dt.total_seconds() / 3600
        gaps = time_diff[time_diff > 5]
        
        if len(gaps) == 0:
            return 0.5  # Continuous conversation
        
        # More frequent resumption of conversations = higher engagement
        gap_frequency = len(gaps) / len(self.df) if len(self.df) > 0 else 0
        
        # Ideal: someone actively re-initiates without too many long gaps
        interaction_score = 1 - (gap_frequency * 0.5)
        
        return min(interaction_score, 1.0)

    def get_friendship_score(self) -> int:
        """Calculate overall friendship score (0-100)"""
        consistency_score = self._get_message_consistency_score()
        reciprocity_score = self._get_reciprocity_balance_score()
        engagement_score = self._get_engagement_intensity_score()
        channels_score = self._get_communication_channels_score()
        temporal_score = self._get_temporal_overlap_score()
        interaction_score = self._get_interaction_pattern_score()
        
        # Weighted average
        friendship_score = (
            consistency_score * 0.25 +
            reciprocity_score * 0.20 +
            engagement_score * 0.20 +
            channels_score * 0.15 +
            temporal_score * 0.10 +
            interaction_score * 0.10
        )
        
        return int(friendship_score * 100)

    def _analyze_message_content(self) -> dict:
        """Analyze message content for emotional indicators"""
        messages = self.df["message"].astype(str)
        
        # Emoji analysis
        emoji_pattern = r"[😀-🙏🌀-🗿]|❤️|💕|😂|🤣|😭|😍|🔥|👍|💯"
        emoji_count = messages.str.contains(emoji_pattern, regex=True).sum()
        emoji_frequency = emoji_count / len(messages) if len(messages) > 0 else 0
        
        # Punctuation analysis
        exclamation_count = messages.str.count("!").sum()
        question_count = messages.str.count("\\?").sum()
        caps_count = messages.str.count(r"[A-Z]").sum()
        
        exclamation_frequency = exclamation_count / len(messages) if len(messages) > 0 else 0
        question_frequency = question_count / len(messages) if len(messages) > 0 else 0
        
        # Message length analysis
        avg_message_length = messages.str.len().mean()
        
        # Formality indicators: contractions, slang
        informal_words = messages.str.contains(
            r"\b(hey|hi|lol|omg|btw|idk|nah|yeah|yup|gonna|wanna|u r|ur|txt|u)\b",
            regex=True, case=False
        ).sum()
        informality_score = informal_words / len(messages) if len(messages) > 0 else 0
        
        return {
            "emoji_frequency": emoji_frequency,
            "exclamation_frequency": exclamation_frequency,
            "question_frequency": question_frequency,
            "avg_message_length": avg_message_length,
            "informality_score": informality_score,
        }

    def get_friendship_type(self) -> str:
        """Classify friendship type based on communication patterns and content"""
        # Get all metrics
        consistency = self._get_message_consistency_score()
        reciprocity = self._get_reciprocity_balance_score()
        engagement = self._get_engagement_intensity_score()
        channels = self._get_communication_channels_score()
        interaction = self._get_interaction_pattern_score()
        
        members = self.df[self.df["sender"].astype(str) != "nan"]["sender"].unique()
        is_group = len(members) > 2
        
        # Get content analysis
        content = self._analyze_message_content()
        emoji_freq = content["emoji_frequency"]
        exclamation_freq = content["exclamation_frequency"]
        question_freq = content["question_frequency"]
        avg_msg_len = content["avg_message_length"]
        informality = content["informality_score"]
        
        # Get hourly distribution to detect work hours
        hourly_count = self.get_no_of_messages_per_hour()
        hours_dict = {item["hour"]: item["count"] for item in hourly_count}
        business_hours_messages = sum(hours_dict.get(h, 0) for h in range(9, 18))
        total_messages = sum(hours_dict.values())
        business_hours_ratio = business_hours_messages / total_messages if total_messages > 0 else 0
        
        # Get day distribution
        day_count = self.get_no_of_messages_per_day()
        day_dict = {item["day"]: item["count"] for item in day_count}
        weekend_messages = sum(day_dict.get(d, 0) for d in ["Saturday", "Sunday"])
        weekend_ratio = weekend_messages / total_messages if total_messages > 0 else 0
        
        # Classification logic
        friendship_score = self.get_friendship_score()
        
        # For group chats
        if is_group:
            if engagement > 0.7 and reciprocity > 0.6:
                return "Close Friend Group"
            elif engagement > 0.5:
                return "Regular Friend Group"
            else:
                return "Casual Friend Group"
        
        # For 1-on-1 chats
        # Romantic/Partnership
        if (reciprocity > 0.8 and consistency > 0.75 and 
            engagement > 0.7 and channels > 0.6 and emoji_freq > 0.15):
            return "Romantic/Partnership"
        
        # Best Friends
        if (engagement > 0.75 and reciprocity > 0.65 and emoji_freq > 0.2 and 
            exclamation_freq > 0.1 and informality > 0.3 and avg_msg_len > 30):
            return "Best Friends"
        
        # Close Friends
        if (engagement > 0.6 and reciprocity > 0.5 and emoji_freq > 0.1 and 
            (weekend_ratio > 0.3 or consistency > 0.6)):
            return "Close Friends"
        
        # Work/School Friends
        if business_hours_ratio > 0.65 and emoji_freq < 0.1 and avg_msg_len < 50:
            return "Work/School Friends"
        
        # Casual Friends
        if (weekend_ratio > 0.5 and engagement < 0.5 and consistency < 0.5 and
            question_freq > exclamation_freq):
            return "Casual Friends"
        
        # Acquaintances
        if engagement < 0.3 and reciprocity < 0.4 and emoji_freq < 0.05:
            return "Acquaintances"
        
        # Default classification based on engagement level
        if friendship_score > 75:
            return "Close Friends"
        elif friendship_score > 50:
            return "Friends"
        else:
            return "Casual Friends"

