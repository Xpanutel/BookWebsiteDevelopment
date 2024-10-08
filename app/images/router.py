from fastapi import APIRouter, Depends, File, UploadFile
from app.users.dependencies import get_current_user
from app.users.models import Users
from app.users.schemas import SUser
from utils.s3 import s3_client
from app.config import settings
from app.users.dao import UsersDAO

router = APIRouter(prefix="/images", tags=["Uploading Images"])


@router.post("/users")
async def image_user(file: UploadFile = File(...), user: Users = Depends(get_current_user)) -> SUser:
    await s3_client.upload_file(file)
    img_path = f"{settings.DOMAIN_S3}/{file.filename}"
    update_user = await UsersDAO.update_img(id=user.id, img=img_path)
    return update_user
    