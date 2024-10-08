from datetime import datetime, timedelta

from jose import ExpiredSignatureError, JWTError, jwt
from passlib.context import CryptContext
from pydantic import EmailStr

from app.config import settings
from app.exceptions.users.exceptions import IncorrectEmailOrPasswordException, IncorrectTokenFormatException, TokenExpiredException
from app.users.dao import UsersDAO

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    # expire = datetime.utcnow() + timedelta(minutes=120)
    # to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode, settings.SECRET_KEY, settings.ALGORITHM
    )
    return encoded_jwt

def create_reset_password_token(email: str):
    to_encode = {"sub": email, "exp": datetime.utcnow() + timedelta(minutes=15)}
    token = jwt.encode(to_encode, settings.SECRET_KEY, settings.ALGORITHM)
    return token

def decode_reset_password_token(token: str):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, settings.ALGORITHM)
        email: str = payload.get("sub")
        return email
    except ExpiredSignatureError:
        raise TokenExpiredException
    except JWTError:
        raise IncorrectTokenFormatException


async def authenticate_user(email: EmailStr, password: str):
    user = await UsersDAO.find_one_or_none(email=email)
    if not (user and verify_password(password, user.hashed_password)):
        raise IncorrectEmailOrPasswordException
    return user
