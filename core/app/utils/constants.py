# get values from dotenv
import os
from dotenv import load_dotenv

load_dotenv()

YEAR = os.getenv("YEAR") or 2023
ALLOWED_FILE_TYPES = ["txt", "TXT", "zip", "ZIP"]
REGEX = {
    "IOS": "^[{1}[0-9]+[\/|\–|\-|\.][0-9]+[\/|\–|\-|\.][0-9]+,?\s[0-9]+[:|.][0-9]+[:|.][0-9]+.*$",
    "ANDROID": "^[0-9]+/[0-9]+/[0-9]+,?\s[0-9]+[:|.][0-9]+\s.*$",
}
MIN_CHATS_REQUIRED = 75
MIN_MEMBERS_REQUIRED = 2
MAX_EMOJIS = 5
WORDCLOUD_WIDTH = os.getenv("WORDCLOUD_WIDTH") or 480
WORDCLOUD_HEIGHT = os.getenv("WORDCLOUD_HEIGHT") or 640
