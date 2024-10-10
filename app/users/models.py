import uuid
from sqlalchemy import Column, Date, Integer, String, UUID, Enum, Boolean, Text, func, ForeignKey
from sqlalchemy.orm import relationship, Mapped

from app.database import Base

class Creators(Base):
    __tablename__ = "creators"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False, unique=True)
    name = Column(String(30), nullable=False, unique=True)
    img = Column(String(255), nullable=True)
    status = Column(String(20), nullable=False)
    description = Column(Text, nullable=True)
    
    books: Mapped[list["Books"]] = relationship(secondary="book_creator", back_populates="creators")
    
    def __str__(self):
        return f"Создатель {self.publisher_name}"

class Users(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), nullable=False, unique=True)
    register_date = Column(Date, nullable=False, default=func.current_date())
    role = Column(String(20), nullable=False)
    is_banned = Column(Boolean, default=False, nullable=False)
    is_deactivate = Column(Boolean, default=False, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    
    profile: Mapped["UsersProfiles"] = relationship(back_populates="user")
    
    def __str__(self):
        return f"Пользователь {self.email}"
    
    
class UsersProfiles(Base):
    __tablename__ = "users_profiles"
    
    id = Column(Integer, autoincrement=True, primary_key=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False, unique=True)
    username = Column(String(30), nullable=False, unique=True)
    sex = Column(Integer, default=0, nullable=False)
    img = Column(String(255), nullable=True)
    about_me = Column(Text, nullable=True)
    hiding_yaoi = Column(Integer, default=0, nullable=False) 
    hiding_hentai = Column(Integer, default=0, nullable=False)
    notification_vk = Column(Boolean, default=False, nullable=False)
    mailing_mail = Column(Boolean, default=False, nullable=False)
    auth2 = Column(Boolean, default=False, nullable=False)
    access_catalog = Column(Boolean, default=False, nullable=False)
    closed_profile = Column(Boolean, default=False, nullable=False)
    is_creator = Column(Boolean, default=False, nullable=False)
    
    user: Mapped["Users"] = relationship(back_populates="profile")
    
    def __str__(self):
        return f"Профиль {self.username}"
    
