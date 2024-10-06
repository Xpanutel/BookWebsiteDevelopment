import uuid
from sqlalchemy import Column, Integer, String, UUID
from sqlalchemy.orm import relationship

from app.database import Base


class Users(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), nullable=False)
    username = Column(String(30), nullable=False)
    role = Column(String, nullable=False)
    img = Column(String, nullable=True)
    hashed_password = Column(String, nullable=False)
    
    def __str__(self):
        return f"Пользователь {self.email}"