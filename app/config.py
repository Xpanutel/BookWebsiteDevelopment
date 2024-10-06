from typing import Literal
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env.dev")

    MODE: Literal["DEV", "TEST", "PROD"]

    DB_HOST: str
    DB_NAME: str
    DB_PORT: str
    DB_USER: str
    DB_PASS: str

    SECRET_KEY: str
    ALGORITHM: str
    
    REDIS_HOST: str
    REDIS_PORT: int
    
    SMTP_HOST: str
    SMTP_PORT: str
    SMTP_USER: str
    SMTP_PASS: str
    
    APP_HOST: str
    
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    @property
    def DATABASE_URL(self):
        return f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASS}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"


settings = Settings()
