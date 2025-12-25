import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("uvicorn")

def log_metadata(stats: dict):
    """Log metadata about the current request."""
    logger.info("=" * 50)
    logger.info(f"Chats of {', '.join(stats['members'])}")
    logger.info("=" * 50)
    logger.info(f"Total Chats           : {stats['total_no_of_chats']}")
    logger.info(f"Total Days Talked     : {stats['total_days_talked']}")
    logger.info(f"Who Texts First       : {stats['who_texts_first']}")
    logger.info(f"Most Active Date      : {stats['most_active_date']}")
    logger.info(f"Most Active Member    : {stats['most_active_member']['member']}")
    logger.info(f"Most Active Month     : {stats['most_active_month']['month']}")
    logger.info(f"Most Active Day       : {stats['most_active_day']['day']}")
    logger.info(f"Most Active Hour      : {stats['most_active_hour']['hour']}")
    logger.info(f"Longest Gap           : {stats['longest_gap']['length']}")
    logger.info(f"Longest Session       : {stats['longest_session']['total_time']}")
    logger.info(f"Avg Reply Time        : {stats['longest_session']['avg_reply_time']}")
    logger.info(f"Total Call Duration   : {stats['call_stats']['total_minutes']}")
    logger.info(f"Most Called Month     : {stats['call_stats']['most_minutes_month']['month']}")
    logger.info("=" * 50)
