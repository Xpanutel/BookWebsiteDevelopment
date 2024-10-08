from datetime import date, datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, field_validator
from uuid import UUID

from app.exceptions.users.exceptions import UserAboutMeError, UserCheckPassword, UserHidingHentaiError, UserHidingYaoiError, UserSexError, UserUsernameValidate
from enum import Enum



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
    
    @field_validator("password")
    def check_password(v:str):
        if len(v) < 8:
            raise UserCheckPassword
        return v
    
class SUserLogin(BaseModel):
    email: EmailStr
    password: str
    
    
class SUser(BaseModel):
    id: UUID
    email: EmailStr
    register_date: date
    sex: int
    about_me: Optional[str] = None
    username: str
    role: str
    img: Optional[str] = None
    hiding_yaoi: int
    hiding_hentai: int
    notification_vk: bool
    mailing_mail: bool
    auth2: bool
    access_catalog: bool
    closed_profile: bool
    
    
    
class SUserAccessToken(BaseModel):
    access_token: str
    
class SForgetPasswordRequest(BaseModel):
    email: EmailStr
    
class SResetForegetPassword(BaseModel):
    secret_token: str
    new_password: str
    confirm_password: str
      
class SUserURLResponse(BaseModel):
    url: str
    
class SVKAuthError(BaseModel):
    error: str
    error_description: str
    
class SChangePassword(BaseModel):
    old_password: str
    new_password: str
    confirm_password: str
    
    @field_validator("new_password")
    def check_new_password(v:str):
        if len(v) < 8:
            raise UserCheckPassword
        return v
    
class SUserUpdateInfo(BaseModel):
    sex: int = 0
    username: str
    about_me: Optional[str] = None
    hiding_yaoi: int = 0
    hiding_hentai: int = 0
    notification_vk: bool = False
    mailing_mail: bool = False
    auth2: bool = False
    access_catalog: bool = False
    closed_profile: bool = False
    
    @field_validator("sex")
    def check_sex(v: int):
        if v not in [0,1,2]:
            raise UserSexError
        return v
    
    @field_validator("about_me")
    def check_about_me(v: str):
        if len(v) > 1000:
            raise UserAboutMeError
        return v
    
    @field_validator("username")
    def check_username(v:str):
        if len(v) < 3 or len(v) > 20:
            raise UserUsernameValidate
        return v
    
    @field_validator("hiding_yaoi")
    def check_hiding_yaoi(v: int):
        if v not in [0,1,2]:
            raise UserHidingYaoiError
        return v
    
    @field_validator("hiding_hentai")
    def check_hiding_hentai(v: int):
        if v not in [0,1,2]:
            raise UserHidingHentaiError
        return v