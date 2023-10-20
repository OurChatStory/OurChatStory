from fastapi import APIRouter, Depends, HTTPException, UploadFile

from app.dependencies import get_chats

router = APIRouter()


@router.post("/wrap/", tags=["wrap"])
async def wrap(chats: str = Depends(get_chats)):
    try:
        # TODO: Implement wrap logic
        pass
    except Exception as e:
        HTTPException(status_code=400, detail=str(e))
    return {"hello": "world"}
