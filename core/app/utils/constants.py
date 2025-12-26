import os
from dotenv import load_dotenv
from app.utils.logger import get_logger

load_dotenv()

logger = get_logger("app.constants")

MODE = os.getenv("MODE") or "prod"
YEAR = int(os.getenv("WRAPPED_YEAR")) or 2025
ALLOWED_FILE_TYPES = ["txt", "TXT", "zip", "ZIP"]
REGEX = {
    "IOS": r"^[{1}[0-9]+[\/|\–|\-|\.][0-9]+[\/|\–|\-|\.][0-9]+,?\s[0-9]+[:|.][0-9]+[:|.][0-9]+.*$",
    "ANDROID": r"^[0-9]+/[0-9]+/[0-9]+,?\s[0-9]+[:|.][0-9]+\s.*$",
}
MIN_CHATS_REQUIRED = 75
MIN_MEMBERS_REQUIRED = 2
MAX_EMOJIS = 5
WORDCLOUD_WIDTH = int(os.getenv("WORDCLOUD_WIDTH")) or 480
WORDCLOUD_HEIGHT = int(os.getenv("WORDCLOUD_HEIGHT")) or 640
LOG = int(os.getenv("LOG")) or 0

logger.info("OurChatStory %s %s", YEAR, MODE)
