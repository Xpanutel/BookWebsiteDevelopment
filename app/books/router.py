from typing import List, Optional
from fastapi import APIRouter, Query
from app.books.dao import BooksDAO
from app.books.schemas import SBooksFilters, SBooksListCatalog, SBooksListMain, SBooksOrdering
from app.users.dao import UsersProfileDAO


router = APIRouter(
    prefix="/books",
    tags=["Books"]
)

@router.get("/catalog")
async def books_catalog(
    types: Optional[list[int]] = Query(default=None),
    genres: Optional[list[int]] = Query(default=None),
    creator: Optional[str] = None,
    status: Optional[int] = None,
    age_limit: Optional[int] = None,
    ordering: SBooksOrdering = None
) -> list[SBooksListCatalog]:
    books = await BooksDAO.find_books_catalog(
        types=types,
        genres=genres,
        creator=creator,
        status=status,
        age_limit=age_limit,
        ordering=ordering
    )
    return books

@router.get("/main")
async def books_main(
) -> list[SBooksListMain]:
    books = await BooksDAO.find_books_main()
    return books
    