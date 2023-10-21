from fastapi import FastAPI
from app.routers import wrap
import uvicorn

app = FastAPI(title="OurChatStory API", version="3.0.0")

app.include_router(wrap.router)


@app.get("/")
async def root() -> dict:
    return {"message": "OurChatStory API is running!"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
