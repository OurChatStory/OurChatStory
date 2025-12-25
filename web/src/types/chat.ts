export interface ChatData {
  group: boolean;
  members: string[];
  total_no_of_chats: number;
  total_days_talked: number;
  most_active_date: string;
  no_of_messages_per_member: Array<{
    member: string;
    count: number;
  }>;
  most_active_member: {
    member: string;
    count: number;
  };
  who_texts_first: string;
  monthly_chats_count: Array<{
    month: string;
    count: number;
  }>;
  hourly_chats_count: Array<{
    hour: number;
    count: number;
  }>;
  most_used_emoji: Array<{
    emoji: string;
    count: number;
  }>;
  wordcloud: Array<{
    text: string;
    value: number;
  }>;
  longest_conversation_date: string;
  longest_conversation_count: number;
  cold_days: number;
  [key: string]: any;
}
