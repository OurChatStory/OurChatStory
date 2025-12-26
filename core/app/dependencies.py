from fastapi import File, HTTPException, UploadFile
import app.utils.constants as c
from app.utils.extractor import decode_csv, extract_zip
from app.utils.logger import get_logger

logger = get_logger("app.dependencies")


async def get_chats(file: UploadFile = File(...)):
    file_type = file.filename.split(".")[-1].lower()
    logger.info("Received file '%s' of type '%s'", file.filename, file_type)
    try:
        if file_type not in c.ALLOWED_FILE_TYPES:
            raise HTTPException(status_code=400, detail="File type not supported")
        if file_type == "zip":
            return await extract_zip(file)
        return await decode_csv(file)
    except HTTPException:
        logger.warning("Unsupported file type received: %s", file_type)
        raise
    except Exception as exc:
        logger.error("Failed to process uploaded file: %s", exc, exc_info=True)
        raise HTTPException(status_code=500, detail="Error reading file")
