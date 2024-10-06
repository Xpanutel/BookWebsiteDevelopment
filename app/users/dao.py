from sqlalchemy import update
from app.dao.base import BaseDAO
from app.users.models import Users
from app.database import async_session_maker


class UsersDAO(BaseDAO):
    model = Users
    
    @classmethod
    async def update_password(cls, email: str, hashed_password: str):
        async with async_session_maker() as session:
            query = (
                update(Users)
                .where(Users.email == email)
                .values(hashed_password=hashed_password)
                .returning(Users.__table__._columns)
            )
            
            result = await session.execute(query)
            await session.commit()
            return result
    
    
    