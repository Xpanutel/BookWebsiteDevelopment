from typing import Optional
from sqlalchemy import asc, desc, select
from app.books.models import Books, CategoryBooks, GenreBooks, StatusBooks, TranslateStatusBooks, TypeBooks
from app.books.schemas import SBooksListCatalog
from app.dao.base import BaseDAO
from app.database import async_session_maker
from app.users.models import Creators, Users, UsersProfiles
from app.books.models import book_creator
from sqlalchemy.orm import selectinload, joinedload
from app.database import engine

class BooksDAO(BaseDAO):
    model = Books
    
    
    @classmethod
    async def find_books_catalog(
        cls, 
        types: Optional[list[int]] = None,
        genres: Optional[list[int]] = None,
        creator: Optional[str] = None,
        status: Optional[int] = None,
        age_limit: Optional[int] = None,
        ordering: Optional[str] = None
    ):
        async with async_session_maker() as session:
            query = select(Books). \
                options(
                    selectinload(Books.genre),
                    joinedload(Books.type),
                    joinedload(Books.status),
                    selectinload(Books.creators)
                ). \
                join(GenreBooks, Books.id == GenreBooks.book_id, isouter=True). \
                join(TypeBooks, Books.id == TypeBooks.book_id, isouter=True). \
                join(StatusBooks, Books.id == StatusBooks.book_id, isouter=True). \
                join(book_creator, Books.id == book_creator.c.book_id, isouter=True). \
                join(Creators, Creators.user_id == book_creator.c.creator_id, isouter=True). \
                distinct(Books.id)

            if types:
                query = query.filter(TypeBooks.id.in_(types))
            if genres:
                query = query.filter(GenreBooks.id.in_(genres))
            if creator:
                query = query.filter(Creators.name == creator)
            if status is not None:
                query = query.filter(StatusBooks.id == status)
            if age_limit is not None:
                query = query.filter(Books.age_limit == age_limit)
            
            order_by = [Books.id]  
            if ordering is not None:
                if ordering.startswith("-"):
                    order_by.append(desc(getattr(Books, ordering[1:], None))) 
                else:
                    order_by.append(asc(getattr(Books, ordering, None)))
            
            query = query.order_by(*order_by)

            print(query.compile(engine, compile_kwargs={"literal_binds": True}))

            result = await session.execute(query)
            result_orm = result.scalars().all()
            result_dto = [SBooksListCatalog.model_validate(row, from_attributes=True) for row in result_orm]

            return result_dto
