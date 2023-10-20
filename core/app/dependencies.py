from fastapi import File, HTTPException, UploadFile
import app.utils.constants as c


async def check_file_type(file: UploadFile = File(...)):
    file_type = file.filename.split(".")[-1]
    if file_type not in c.ALLOWED_FILE_TYPES:
        raise HTTPException(status_code=400, detail="File type not supported")
    return {
        "file": file,
        "file_type": file_type
    }
