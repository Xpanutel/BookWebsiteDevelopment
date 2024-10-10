from datetime import date, datetime
from decimal import Decimal
from typing import Optional
from uuid import UUID
from pydantic import BaseModel, EmailStr, field_validator, validator
from enum import Enum

class SBooksFilters(BaseModel):
    types: int
    genres: int
    autor_username: str
    # tags: int
    status: int
    # translate_status: int
    age_limit: int
    # issue_year_gte: int
    # issue_year_lte: int
    # rating_gte: int
    # rating_lte: int
    # count_chapters_gte: int
    # count_chapters_lte: int
    # exclude_types: int
    # exclude_genres: int
    # exclude_tags: int
    
class SStatusBooks(BaseModel):
    id: int
    name: str
    
class STranslateStatusBooks(BaseModel):
    id: int
    name: str
    
class STypeBooks(BaseModel):
    id: int
    name: str
    
class SCategoryBooks(BaseModel):
    id: int
    name: str

class SGenreBooks(BaseModel):
    id: int
    name: str

class SCreatorsBooks(BaseModel):
    id: UUID
    name: str
    img: str
    status: str
    
    
class SBooksListCatalog(BaseModel):
    id: int
    book_url: str 
    ru_name: str
    eu_name: str
    img: dict
    age_limit: int
    is_yaoi: bool
    is_hentai: bool
    avg_rating: Decimal
    issue_year: int
    genre: SGenreBooks
    
class SBooksListMain(BaseModel):
    id: int
    book_url: str 
    ru_name: str
    eu_name: str
    img: dict
    age_limit: int
    is_yaoi: bool
    is_hentai: bool
    avg_rating: Decimal
    issue_year: int
    genre: SGenreBooks
    
    
    
    
class SBooksOrdering(str, Enum):
    issue_yearASC = 'issue_year'
    issue_yearDESC = '-issue_year'
    avg_ratingASC = 'avg_rating'
    avg_ratingDESC = '-avg_rating'