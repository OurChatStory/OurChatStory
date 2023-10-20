from fastapi import APIRouter, Depends, UploadFile

from app.dependencies import check_file_type

router = APIRouter()


@router.post("/wrap/", tags=["wrap"])
async def wrap(file: dict = Depends(check_file_type)):
    return {"file_type": file["file_type"]}
