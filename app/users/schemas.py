from pydantic import BaseModel, EmailStr, field_validator
from uuid import UUID

from app.exceptions.users.exceptions import UserUsernameValidate


class SUserRegister(BaseModel):
    email: EmailStr
    username: str
    password: str
    confirm_password: str
    
    @field_validator("username")
    def check_username(v:str):
        if len(v) < 3 or len(v) > 20:
            raise UserUsernameValidate
        return v
    
class SUserLogin(BaseModel):
    email: EmailStr
    password: str
    
    
class SUser(BaseModel):
    id: UUID
    email: EmailStr
    username: str
    role: str
    
class SUserAccessToken(BaseModel):
    access_token: str
    
class ForgetPasswordRequest(BaseModel):
    email: EmailStr
    
class ResetForegetPassword(BaseModel):
    secret_token: str
    new_password: str
    confirm_password: str