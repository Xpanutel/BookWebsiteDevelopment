from uuid import UUID
from sqlalchemy import update
from app.dao.base import BaseDAO
from app.users.models import Users
from app.database import async_session_maker


class UsersDAO(BaseDAO):
    model = Users
    
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
    async def update_user_info(cls, id: UUID, about_me: str, sex: str, hiding_yaoi: bool, hiding_hentai: bool):
        async with async_session_maker() as session:
            query = (
                update(Users)
                .where(Users.id == id)
                .values(
                    about_me=about_me,
                    sex=sex,
                    hiding_yaoi=hiding_yaoi,
                    hiding_hentai=hiding_hentai
                )
                .returning(Users)
            )
            
            result = await session.execute(query)
            await session.commit()
            return result.scalars().first()
    
    
    