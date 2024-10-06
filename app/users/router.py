import base64
from json import JSONDecodeError
import json
from typing import Union
import uuid
from fastapi import APIRouter, Depends, Query, Request, Response
from httpx import AsyncClient

from app.exceptions.schemas import SException
from app.exceptions.users.exceptions import (
    CannotAddDataToDatabase,
    TokenExpiredExceptionError,
    UserAlreadyExistsException,
    UserAlreadyExistsUsername,
    UserCheckAValidEmail,
    UserConfirmPasswordError,
    UserExit,
    UserForgetPasswordOK,
    UserJsonDecodeError,
    UserPasswordComplete,
    UserVKError
)
from app.config import settings
from app.tasks.tasks import send_email_forget_password
from app.users.auth import authenticate_user, create_access_token, create_reset_password_token, decode_reset_password_token, get_password_hash
from app.users.dao import UsersDAO
from app.users.dependencies import get_current_user
from app.users.models import Users
from app.users.schemas import ForgetPasswordRequest, ResetForegetPassword, SGoogleAuthError, SUser, SUserAccessToken, SUserLogin, SUserRegister, SUserURLResponse, SVKAuthError
from utils.generate_code_vk import generate_code_challenge, generate_code_verifier

router_auth = APIRouter(
    prefix="/auth",
    tags=["Auth"],
)

router = APIRouter(
    prefix='/users',
    tags=['Users']
)

#Register
@router_auth.post("/register/email", status_code=201)
async def register_user(user_data: SUserRegister) -> SUser:
    existing_user = await UsersDAO.find_one_or_none(email=user_data.email)
    check_username = await UsersDAO.find_one_or_none(username=user_data.username)
    if existing_user:
        raise UserAlreadyExistsException
    if check_username:
        raise UserAlreadyExistsUsername
    if user_data.password != user_data.confirm_password:
        raise UserConfirmPasswordError
    hashed_password = get_password_hash(user_data.password)
    new_user = await UsersDAO.add(email=user_data.email, username=user_data.username, hashed_password=hashed_password, role="user")
    if not new_user:
        raise CannotAddDataToDatabase
    return new_user

@router_auth.get("/google")
async def auth_google(
    response_auth: Response, 
    code: str = Query(..., description="example: 4/0AVG7fiT5P9SS4P-DbVhK4J18OTIkUcVtd07ZsO6zpaWGByuquiQFUoine2noZdeNRT0Lfw")
    ) -> Union[SUser, SException]:
    token_url = "https://accounts.google.com/o/oauth2/token"
    json = {
        "grant_type": "authorization_code",
        "code": code,
        "client_id": settings.GOOGLE_CLIENT_ID,
        "client_secret": settings.GOOGLE_CLIENT_SECRET,
        "redirect_uri": settings.GOOGLE_REDIRECT_URI
    }
    async with AsyncClient() as client:
        response = await client.post(token_url, json=json)
        access_token = response.json().get("access_token")
        user_info = await client.get("https://www.googleapis.com/oauth2/v1/userinfo", headers={"Authorization": f"Bearer {access_token}"})
        user_data = user_info.json()
        
        if str(user_info.status_code).startswith(("4", "5")):
            raise UserJsonDecodeError
        
        existing_user = await UsersDAO.find_one_or_none(email=user_data["email"])
        
        if existing_user:
            access_token = create_access_token({"sub": str(existing_user.id)})
            response_auth.set_cookie("access_token", access_token, httponly=True)
            return existing_user
        
        password = uuid.uuid4()
        hashed_password = get_password_hash(str(password))
        new_user = await UsersDAO.add(email=user_data["email"], username=user_data["email"], hashed_password=hashed_password, img=user_data["picture"], role="user")
        
        if not new_user:
            raise CannotAddDataToDatabase
        
        access_token = create_access_token({"sub": str(new_user.id)})
        response_auth.set_cookie("access_token", access_token, httponly=True)
        return new_user
    
@router_auth.get("/yandex")
async def auth_yandex(response_auth: Response, code: str = Query(..., description="example: 4543439")) -> Union[SUser, SException]:
    try:
        token_url = "https://oauth.yandex.ru/token"
        data = {
            "grant_type": "authorization_code",
            "code": code,
            "client_id": settings.YANDEX_CLIENT_ID,
            "client_secret": settings.YANDEX_CLIENT_SECRET,
        }
        credentials = f"{settings.YANDEX_CLIENT_ID}:{settings.YANDEX_CLIENT_SECRET}"
        encoded_credentials = base64.b64encode(credentials.encode()).decode()
        async with AsyncClient() as client:
            response = await client.post(token_url, data=data, headers={"Authorization": f"Basic {encoded_credentials}", "Content-Type": "application/x-www-form-urlencoded"})
            access_token = response.json().get("access_token")
            user_info = await client.get("https://login.yandex.ru/info", params={"format": "json"},headers={"Authorization": f"OAuth {access_token}"})
            user_data = user_info.json()
            
            existing_user = await UsersDAO.find_one_or_none(email=user_data["default_email"])
            
            if existing_user:
                access_token = create_access_token({"sub": str(existing_user.id)})
                response_auth.set_cookie("access_token", access_token, httponly=True)
                return existing_user
            
            password = uuid.uuid4()
            hashed_password = get_password_hash(str(password))
            img = f"https://avatars.yandex.net/get-yapic/{user_data['default_avatar_id']}/islands-200"
            new_user = await UsersDAO.add(email=user_data["default_email"], username=user_data["default_email"], hashed_password=hashed_password, img=img, role="user")
            
            if not new_user:
                raise CannotAddDataToDatabase
            
            access_token = create_access_token({"sub": str(new_user.id)})
            response_auth.set_cookie("access_token", access_token, httponly=True)
            return new_user
    except JSONDecodeError:
        raise UserJsonDecodeError
    
@router_auth.get("/vk")
async def auth_vk(
    response_auth: Response, 
    request: Request,
    device_id: str = Query(..., description="example: iRXewzPKpGwQtrIaOjTSY_ykrmwWTYkAk600-UlL6p6PrM_QNtxOybf3WMRJ2g8whXLQLSee76DbqYENXt3kEQ"), 
    code: str = Query(..., description="example: vk2.a.ANY6Dk6gjbCQaM5raG8dWa2PfSYd7xUZNxlW5Mf7xHXR2Nwo4r0IgVHErNz9x_Y_myW3MR1ZLnIgawd6tmlIpuTrKQ2KouCbQa8Xa_OgMCBgZvvaTACRBS6Se0v_evE1FqI8ozWCopFnWilLkjsOEsLjM_czod5a0vG7xj8HtQq5PcgRmnF508RIQyy67DEG_GhOz4baEhSACkwn81rvSQ"),
    state: str = Query(..., description="example: 7df3db9c-a8cf-4f39-ac86-0107f6118e5e")
    )  -> Union[SUser,SVKAuthError]:
    code_verifier = request.cookies.get("code_verifier")
    token_url = "https://id.vk.com/oauth2/auth"
    data = {
        "grant_type": "authorization_code",
        "code_verifier": code_verifier,
        "redirect_uri": settings.VK_REDIRECT_URI,
        "code": code,
        "client_id": settings.VK_CLIENT_ID,
        "device_id":device_id,
        "state": state,
    }
    async with AsyncClient() as client:
        response = await client.post(token_url, data=data, headers={"Content-Type": "application/x-www-form-urlencoded"})
        id_token = response.json().get("id_token")
        print(response.json())
        print(id_token)
        user_info = await client.post(
            "https://id.vk.com/oauth2/public_info", 
            data={
                "client_id": settings.VK_CLIENT_ID,
                "id_token": id_token
                },
            headers={"Content-Type": "application/x-www-form-urlencoded"})
        user_data = user_info.json()
        print(user_data)
        
        user_info_text = user_info.text
        user_info_data = json.loads(user_info_text)
        if "error" in user_info_data:
            return user_info_data
        
        existing_user = await UsersDAO.find_one_or_none(email=user_data["user"]["email"])
        
        if existing_user:
            access_token = create_access_token({"sub": str(existing_user.id)})
            response_auth.set_cookie("access_token", access_token, httponly=True)
            return existing_user
        
        password = uuid.uuid4()
        hashed_password = get_password_hash(str(password))
        new_user = await UsersDAO.add(email=user_data["user"]["email"], username=user_data["user"]["email"], hashed_password=hashed_password, img=user_data["user"]["avatar"], role="user")
        
        if not new_user:
            raise CannotAddDataToDatabase
        
        access_token = create_access_token({"sub": str(new_user.id)})
        response_auth.set_cookie("access_token", access_token, httponly=True)
        return new_user
    
#Login
@router_auth.post("/login/email")
async def login_user(response: Response, user_data: SUserLogin) -> SUserAccessToken:
    user = await authenticate_user(user_data.email, user_data.password)
    access_token = create_access_token({"sub": str(user.id)})
    response.set_cookie("access_token", access_token, httponly=True)
    return {"access_token": access_token}

@router_auth.get("/login/google")
async def login_google() -> SUserURLResponse:
    return {
        "url": f"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id={settings.GOOGLE_CLIENT_ID}&redirect_uri={settings.GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email&access_type=offline"
    } 
    
@router_auth.get("/login/yandex")
async def login_yandex() -> SUserURLResponse:
    return {
        "url": f"https://oauth.yandex.ru/authorize?response_type=code&client_id={settings.YANDEX_CLIENT_ID}&redirect_uri={settings.YANDEX_REDIRECT_URI}"
    } 
    
@router_auth.get("/login/vk")
async def login_vk(response: Response) -> SUserURLResponse:
    code_verifier = generate_code_verifier()
    code_challenge = generate_code_challenge(code_verifier)
    response.set_cookie("code_verifier", code_verifier, httponly=True)
    state = uuid.uuid4()
    return {
        "url": f"https://id.vk.com/authorize?response_type=code&client_id={settings.VK_CLIENT_ID}&code_challenge={code_challenge}&code_challenge_method=s256&state={state}&redirect_uri={settings.VK_REDIRECT_URI}&code_verifie={code_verifier}"
    } 

@router_auth.post("/logout")
async def logout_user(response: Response) -> SException:
    response.delete_cookie("access_token")
    raise UserExit

@router.get("/me")
async def read_user_me(user: Users = Depends(get_current_user)) -> SUser:
    return user


@router_auth.post("/forget-password")
async def forget_password(fpr: ForgetPasswordRequest) -> SException:
    secret_token = create_reset_password_token(email=fpr.email)
    forget_url_link = f"{settings.APP_FRONT_HOST}/forget-password/{secret_token}"
    
    send_email_forget_password.delay(forget_url_link, fpr.email)
    raise UserForgetPasswordOK

@router_auth.post("/reset-password")
async def reset_password(
    rfp: ResetForegetPassword,
) -> SException:
    info = decode_reset_password_token(token=rfp.secret_token)
    if info is None:
        raise TokenExpiredExceptionError
    if rfp.new_password != rfp.confirm_password:
        raise UserConfirmPasswordError

    hashed_password = get_password_hash(rfp.new_password) 
    user = await UsersDAO.find_one_or_none(email=info)
    await UsersDAO.update_password(email=user.email, hashed_password=hashed_password)
    raise UserPasswordComplete





