from email.message import EmailMessage
from app.config import settings
from pydantic import EmailStr

def create_message_template_forget_password(forget_url: str, email_to: EmailStr):
    email = EmailMessage()
    email['subject'] = 'Восстановление пароля'
    email['from'] = settings.SMTP_USER
    email['To'] = email_to
    
    email.set_content(
        f"""
        <h1>Восстановление пароля</h1>
        forget_url_link: {forget_url}
        """,
        subtype='html'
    )
    return email

    
