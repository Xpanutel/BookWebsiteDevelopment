from pydantic import BaseModel


class SException(BaseModel):
    detail: str