from typing import Optional
from uuid import UUID
from sqlalchemy import select, update, insert
from app.dao.base import BaseDAO
from app.users.models import Users, UsersProfiles
from app.database import async_session_maker


class UsersDAO(BaseDAO):
    model = Users
    
    user_profile_columns = (
    Users.id, 
    Users.email, 
    Users.register_date, 
    Users.role,
    Users.is_banned,
    Users.is_deactivate,
    UsersProfiles.username,
    UsersProfiles.sex,
    UsersProfiles.about_me,
    UsersProfiles.img,
    UsersProfiles.hiding_yaoi,
    UsersProfiles.hiding_hentai,
    UsersProfiles.notification_vk,
    UsersProfiles.mailing_mail,
    UsersProfiles.auth2,
    UsersProfiles.access_catalog,
    UsersProfiles.closed_profile
)
    
    @classmethod
    async def find_one_or_none_user(cls, id: UUID):
        async with async_session_maker() as session:
            query = select(
                *cls.user_profile_columns
            ).select_from(Users).join(
                UsersProfiles, UsersProfiles.user_id == Users.id, isouter=True
            ).where(Users.id == id)

            finish = await session.execute(query)
            finish_result = finish.mappings().one_or_none()

            return finish_result
    
    @classmethod
    async def add_user(cls, email: str, role: str, hashed_password: str, username: str, img: Optional[str] = None):
        async with async_session_maker() as session:
            query_add_user = insert(Users).values(
                email=email, 
                role=role,
                hashed_password=hashed_password
            ).returning(Users)

            result = await session.execute(query_add_user)
            new_user = result.scalars().first()

            query_add_user_profile = insert(UsersProfiles).values(
                user_id=new_user.id,
                img=img,
                username=username
            ).returning(UsersProfiles)

            await session.execute(query_add_user_profile)
            
            finish_query = select(
                *cls.user_profile_columns
            ).select_from(Users).join(
                UsersProfiles, UsersProfiles.user_id == Users.id, isouter=True
            ).where(Users.id == new_user.id)
            finish = await session.execute(finish_query)
            finish_result = finish.mappings().one_or_none()

            await session.commit() 

            return finish_result
        
    @classmethod
    async def deactivate_user(cls, id: UUID, is_deactivate: bool):
        async with async_session_maker() as session:
            query = (
                update(Users)
                .where(Users.id == id)
                .values(is_deactivate=is_deactivate)
            )
            
            result = await session.execute(query)
            await session.commit()
            return result
            
            
    
    @classmethod
    async def update_password(cls, id: UUID, hashed_password: str):
        async with async_session_maker() as session:
            query = (
                update(Users)
                .where(Users.id == id)
                .values(hashed_password=hashed_password)
                .returning(Users.__table__._columns)
            )
            
            result = await session.execute(query)
            await session.commit()
            return result
        
    @classmethod
    async def update_user_profile_info(cls, id: UUID, **kwargs):
        async with async_session_maker() as session:
            query = (
                update(UsersProfiles)
                .where(UsersProfiles.user_id == id)
                .values(**kwargs)
                .returning(UsersProfiles)
            )

            result = await session.execute(query)
            await session.commit()

            result_query = select(
                *cls.user_profile_columns
            ).select_from(Users).join(
                UsersProfiles, UsersProfiles.user_id == Users.id, isouter=True
            ).where(Users.id == id)

            result = await session.execute(result_query)
            return result.mappings().one_or_none()
        
    @classmethod
    async def update_img(cls, id: UUID, img: str):
        async with async_session_maker() as session:
            query = (
                update(UsersProfiles)
                .where(UsersProfiles.user_id == id)
                .values(img=img)
            )
            
            finish_result = select(
                *cls.user_profile_columns
            ).select_from(Users).join(
                UsersProfiles, UsersProfiles.user_id == Users.id, isouter=True
            ).where(Users.id == id)
            
            await session.execute(query)
            finish = await session.execute(finish_result)
            
            await session.commit()
            
            return finish.mappings().one_or_none()
        
class UsersProfileDAO(BaseDAO):
    model = UsersProfiles
    
    
    
    