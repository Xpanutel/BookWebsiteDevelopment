from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.users.router import router as user_router
from app.users.router import router_auth as auth_user_router
from redis import asyncio as aioredis
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_versioning import VersionedFastAPI

openapi_url=None
redoc_url=None

if settings.MODE in ["DEV","TEST"]:
    openapi_url="/openapi.json"
    redoc_url="/redoc"
    
app = FastAPI(
    title="ReManga",
    version="0.1.0",
    root_path="/api",
    openapi_url=openapi_url, 
    redoc_url=redoc_url
    )

app.include_router(user_router)
app.include_router(auth_user_router)

origins = [
    "http://localhost:3001",
    "http://localhost:3000",
    "ws://localhost:3001",
    "ws://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", 
                   "Access-Control-Allow-Origin",
                   "Authorization"],
)

app = VersionedFastAPI(app,
    version_format='{major}',
    prefix_format='/api/v{major}',
)

if settings.MODE == "TEST":
    redis = aioredis.from_url(f"redis://{settings.REDIS_HOST}:{settings.REDIS_PORT}", encoding="utf8", decode_responses=True)
    FastAPICache.init(RedisBackend(redis), prefix="cache")
    
@app.on_event("startup")
def startup():
    redis = aioredis.from_url(f"redis://{settings.REDIS_HOST}:{settings.REDIS_PORT}", encoding="utf8", decode_responses=True)
    FastAPICache.init(RedisBackend(redis), prefix="cache")