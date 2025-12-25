import logging

logger = logging.getLogger("uvicorn")


def log_metadata(stats: dict):
    """Log metadata about the current request."""
    logger.info("---------------------------------------")
    logger.info(f"Chats of {', '.join(stats['members'])}")
    logger.info("---------------------------------------")
    logger.info(f"Total Chats\t\t: {stats['total_no_of_chats']}")
    logger.info(f"Total Days Talked\t: {stats['total_days_talked']}")
    logger.info(f"Who Texts First\t\t: {stats['who_texts_first']}")
    logger.info(f"Most Active Date\t: {stats['most_active_date']}")
    logger.info(f"Most Active Member\t: {stats['most_active_member']['member']}")
    logger.info(f"Most Active Month\t: {stats['most_active_month']['month']}")
    logger.info(f"Most Active Day\t\t: {stats['most_active_day']['day']}")
    logger.info(f"Most Active Hour\t: {stats['most_active_hour']['hour']}")
    logger.info(f"Longest Gap\t\t: {stats['longest_gap']['length']}")
    logger.info(f"Longest Session\t\t: {stats['longest_session']['total_time']}")
    logger.info(f"Avg Reply Time\t\t: {stats['longest_session']['avg_reply_time']}")
    logger.info(f"Total Call Duration\t: {stats['call_stats']['total_minutes']}")
    logger.info(f"Most Called Month\t: {stats['call_stats']['most_minutes_month']['month']}")
