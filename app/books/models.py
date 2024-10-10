import uuid
from sqlalchemy import JSON, Column, Date, Float, Integer, String, UUID, Enum, Boolean, Table, Text, func, ForeignKey
from sqlalchemy.orm import relationship, Mapped
from app.database import Base

book_creator = Table(
    "book_creator", Base.metadata,
    Column("book_id", Integer, ForeignKey("books.id"), primary_key=True),
    Column("creator_id", UUID(as_uuid=True), ForeignKey("creators.id"), primary_key=True)
)

class Books(Base):
    __tablename__ = "books"
    
    id = Column(Integer, autoincrement=True, primary_key=True)
    book_url = Column(String(255), nullable=False)
    eu_name = Column(String(255), nullable=False)
    ru_name = Column(String(255), nullable=False)
    img = Column(JSON, nullable=False)
    description = Column(Text, nullable=False)
    
    age_limit = Column(Integer, nullable=False)
    
    issue_year = Column(Integer, nullable=False)
    
    avg_rating = Column(Float, default=0.0, nullable=False)
    
    count_chapters = Column(Integer, nullable=False)
    total_views = Column(Integer, default=0, nullable=False)
    total_votes = Column(Integer, default=0, nullable=False)
    
    is_yaoi = Column(Boolean, nullable=False)
    is_hentai = Column(Boolean, nullable=False)
    
    creators: Mapped[list["Creators"]] = relationship(secondary="book_creator", back_populates="books")
    genre: Mapped["GenreBooks"] = relationship(back_populates="book")
    categories: Mapped[list["CategoryBooks"]] = relationship(back_populates="book")
    type: Mapped["TypeBooks"] = relationship(back_populates="book")
    translate_status: Mapped["TranslateStatusBooks"] = relationship(back_populates="book")
    status: Mapped["StatusBooks"] = relationship(back_populates="book")
 
 
class StatusBooks(Base):
    __tablename__ = "status_books"   
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    book_id = Column(Integer, ForeignKey("books.id", ondelete="CASCADE"), nullable=False, unique=True)
    
    book: Mapped["Books"] = relationship(back_populates="status")
    
    
class TranslateStatusBooks(Base):
    __tablename__ = "translate_status_books"   
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    book_id = Column(Integer, ForeignKey("books.id", ondelete="CASCADE"), nullable=False, unique=True)
    
    book: Mapped["Books"] = relationship(back_populates="translate_status")
    
class TypeBooks(Base):
    __tablename__ = "type_books"   
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    book_id = Column(Integer, ForeignKey("books.id", ondelete="CASCADE"), nullable=False, unique=True)
    
    book: Mapped["Books"] = relationship(back_populates="type")
    
class CategoryBooks(Base):
    __tablename__ = "category_books"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    book_id = Column(Integer, ForeignKey("books.id", ondelete="CASCADE"), nullable=False)
    
    book: Mapped["Books"] = relationship(back_populates="categories")
    
class GenreBooks(Base):
    __tablename__ = "genre_books"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    book_id = Column(Integer, ForeignKey("books.id", ondelete="CASCADE"), nullable=False, unique=True)
    
    book: Mapped["Books"] = relationship(back_populates="genre")
       
class RatingsBooks(Base):
    __tablename__ = "ratings_books"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    rated_book_id = Column(Integer, ForeignKey("books.id", ondelete="CASCADE"), nullable=False)
    score = Column(Integer, nullable=False)
    