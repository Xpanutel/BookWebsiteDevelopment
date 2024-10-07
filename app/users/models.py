import uuid
from sqlalchemy import Column, Date, Integer, String, UUID, Enum, Boolean, Text, func
from sqlalchemy.orm import relationship

from app.database import Base

class Users(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), nullable=False, unique=True)
    register_date = Column(Date, nullable=False, default=func.current_date())
    username = Column(String(30), nullable=False, unique=True)
    role = Column(String, nullable=False)
    sex = Column(Integer, default=0, nullable=False)
    img = Column(String, nullable=True)
    about_me = Column(Text, nullable=True)
    hiding_yaoi = Column(Integer, default=0, nullable=False) 
    hiding_hentai = Column(Integer, default=0, nullable=False)
    hashed_password = Column(String, nullable=False)
    
    def __str__(self):
        return f"Пользователь {self.email}"