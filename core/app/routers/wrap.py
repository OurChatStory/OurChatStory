from fastapi import APIRouter, Depends, HTTPException, UploadFile

from app.dependencies import get_chats
from app.services.stats import get_wrap
from app.utils.constants import MODE
from app.utils.logger import get_logger

router = APIRouter()
logger = get_logger("app.routers.wrap")


@router.post("/wrap", tags=["wrap"])
async def wrap(chats: str = Depends(get_chats)):
    try:
        return get_wrap(chats)
    except HTTPException:
        raise
    except ValueError as exc:
        logger.warning("Validation failed while generating wrap: %s", exc)
        if MODE == "dev":
            raise
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        logger.error("Unexpected error in /wrap handler: %s", exc, exc_info=True)
        if MODE == "dev":
            raise
        raise HTTPException(status_code=500, detail="Unable to generate wrap right now")
