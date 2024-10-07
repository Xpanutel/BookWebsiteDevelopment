from fastapi import HTTPException, status
from app.exceptions.base import BaseException

class UserExit(BaseException):
    status_code = status.HTTP_200_OK
    detail = "Вы вышли из системы"

class UsersRegisterOK(BaseException):
    status_code = status.HTTP_201_CREATED
    detail = "Пользователь зарегистрирован"

class UserAlreadyExistsException(BaseException):
    status_code=status.HTTP_409_CONFLICT
    detail="Пользователь уже существует"
    
class UserAlreadyExistsUsername(BaseException):
    status_code=status.HTTP_409_CONFLICT
    detail="Такой username уже используется"
        
class IncorrectEmailOrPasswordException(BaseException):
    status_code=status.HTTP_401_UNAUTHORIZED
    detail="Неверная почта или пароль"
        
class TokenExpiredException(BaseException):
    status_code=status.HTTP_401_UNAUTHORIZED
    detail="Срок действия токена истек"
        
class TokenAbsentException(BaseException):
    status_code=status.HTTP_401_UNAUTHORIZED
    detail="Токен отсутствует"
        
class IncorrectTokenFormatException(BaseException):
    status_code=status.HTTP_401_UNAUTHORIZED
    detail="Неверный формат токена"
        
class UserIsNotPresentException(BaseException):
    status_code=status.HTTP_401_UNAUTHORIZED

class CannotAddDataToDatabase(BaseException):
    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
    detail="Не удалось добавить запись"
    
class UserCheckAdminRole(BaseException):
    status_code=status.HTTP_403_FORBIDDEN
    detail="Недостаточно прав"
    
class UserCheckAValidEmail(BaseException):
    status_code=status.HTTP_403_FORBIDDEN
    detail="Данный email не зарегистрирован"
    
class UserForgetPasswordOK(BaseException):
    status_code=status.HTTP_201_CREATED
    detail="Ссылка для восстановления пароля отправлена на указанный email"
    
class TokenExpiredExceptionError(BaseException):
    status_code=status.HTTP_401_UNAUTHORIZED
    detail="Неверный токен или срок его действия истек"
    
class UserConfirmPasswordError(BaseException):
    status_code=status.HTTP_401_UNAUTHORIZED
    detail="Пароли не совпадают"
    
class UserPasswordComplete(BaseException):
    status_code=status.HTTP_201_CREATED
    detail="Пароль изменён"
    
class UserUsernameValidate(BaseException):
    status_code=status.HTTP_400_BAD_REQUEST
    detail="Имя должно быть в пределах 3-20 символов"
    
class UserJsonDecodeError(BaseException):
    status_code=status.HTTP_400_BAD_REQUEST
    detail="Код не действителен"
    
class UserVKError(BaseException):
    status_code=status.HTTP_400_BAD_REQUEST
    detail="device_id или code не действителен"
    
    
class UserCheckPassword(BaseException):
    status_code=status.HTTP_400_BAD_REQUEST
    detail="Длина пароля должна составлять минимум 8 символов"
    
class UserCheckOLDPassword(BaseException):
    status_code=status.HTTP_400_BAD_REQUEST
    detail="Старый пароль указан не верно"
    
class UserDeleteOK(BaseException):
    status_code=status.HTTP_200_OK
    detail="Пользователь полностью удалён"
    
class UserChangeOK(BaseException):
    status_code=status.HTTP_200_OK
    detail="Изменено"
