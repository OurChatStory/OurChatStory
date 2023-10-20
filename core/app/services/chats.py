# make a class that stores all of the chats
import datetime
import pandas as pd
from app.services.preprocess import extract_emojis, parse_message

from app.utils.phone_type import get_phone_type
import app.utils.constants as c
import re

from app.utils.time import check_dayfirst, parse_datetime


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
            chats[i] = chats[i].strip().replace("\u200e", "").replace("\r", "")
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
        return chats_df

    def get_chat_members(self):
        members = self.df["sender"].unique().tolist()
        members = [member for member in members if str(member) != "nan"]
        return members

    def get_no_of_messages(self):
        return len(self.df)

    def get_no_of_messages_per_member(self):
        return self.df["sender"].value_counts().to_dict()

    def get_no_of_messages_per_month(self) -> tuple:
        m_count = self.df["month"].value_counts().to_dict()
        months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ]

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

    def get_no_of_messages_per_hour(df):
        df["hour"] = df["time"].dt.hour
        return df["hour"].value_counts().to_dict()
