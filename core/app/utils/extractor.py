from fastapi import File, UploadFile
from zipfile import ZipFile
import io


async def extract_zip(file: UploadFile = File(...)):
    contents = file.read()
    zip_file = ZipFile(io.BytesIO(contents))
    return {name: zip_file.read(name) for name in zip_file.namelist()}
