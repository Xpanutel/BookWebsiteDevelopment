from fastapi import APIRouter, Depends, Response
from sqlalchemy import text

from app.exceptions.schemas import SException
from app.exceptions.users.exceptions import (
    CannotAddDataToDatabase,
    TokenExpiredExceptionError,
    UserAlreadyExistsException,
    UserCheckAValidEmail,
    UserConfirmPasswordError,
    UserExit,
    UserForgetPasswordOK,
    UserPasswordComplete
)
from app.config import settings
from app.tasks.tasks import send_email_forget_password
from app.users.auth import authenticate_user, create_access_token, create_reset_password_token, decode_reset_password_token, get_password_hash
from app.users.dao import UsersDAO
from app.users.dependencies import get_current_user
from app.users.models import Users
from app.users.schemas import ForgetPasswordRequest, ResetForegetPassword, SUser, SUserAccessToken, SUserLogin, SUserRegister

router_auth = APIRouter(
    prefix="/auth",
    tags=["Auth"],
)

router = APIRouter(
    prefix='/users',
    tags=['Users']
)


@router_auth.post("/register/email", status_code=201)
async def register_user(user_data: SUserRegister) -> SUser:
    existing_user = await UsersDAO.find_one_or_none(email=user_data.email)
    if existing_user:
        raise UserAlreadyExistsException
    if user_data.password != user_data.confirm_password:
        raise UserConfirmPasswordError
    hashed_password = get_password_hash(user_data.password)
    new_user = await UsersDAO.add(email=user_data.email, username=user_data.username, hashed_password=hashed_password, role="user")
    if not new_user:
        raise CannotAddDataToDatabase
    return new_user

@router_auth.post("/login/email")
async def login_user(response: Response, user_data: SUserLogin) -> SUserAccessToken:
    user = await authenticate_user(user_data.email, user_data.password)
    access_token = create_access_token({"sub": str(user.id)})
    response.set_cookie("access_token", access_token, httponly=True)
    return {"access_token": access_token}

@router_auth.post("/logout")
async def logout_user(response: Response) -> SException:
    response.delete_cookie("access_token")
    raise UserExit

@router.get("/me")
async def read_user_me(user: Users = Depends(get_current_user)) -> SUser:
    return user


@router_auth.post("/forget-password")
async def forget_password(fpr: ForgetPasswordRequest):
    secret_token = create_reset_password_token(email=fpr.email)
    forget_url_link = f"{settings.APP_HOST}/forget-password/{secret_token}"
    
    send_email_forget_password.delay(forget_url_link, fpr.email)
    raise UserForgetPasswordOK

@router_auth.post("/reset-password")
async def reset_password(
    rfp: ResetForegetPassword,
):
    info = decode_reset_password_token(token=rfp.secret_token)
    if info is None:
        raise TokenExpiredExceptionError
    if rfp.new_password != rfp.confirm_password:
        raise UserConfirmPasswordError

    hashed_password = get_password_hash(rfp.new_password) 
    user = await UsersDAO.find_one_or_none(email=info)
    await UsersDAO.update_password(email=user.email, hashed_password=hashed_password)
    raise UserPasswordComplete





