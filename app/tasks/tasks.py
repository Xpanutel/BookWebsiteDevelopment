import smtplib
from pydantic import EmailStr
from app.config import settings
from app.tasks.celery import celery

from app.tasks.email_templates import create_message_template_forget_password

@celery.task
def send_email_forget_password(forget_url: str, email_to: EmailStr):
    msg_content = create_message_template_forget_password(forget_url, email_to)
    with smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT) as server:
        server.login(settings.SMTP_USER, settings.SMTP_PASS)
        server.send_message(msg_content)
        