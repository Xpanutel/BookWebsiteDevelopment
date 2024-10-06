import os
import base64
import hashlib

def generate_code_verifier(length: int = 43) -> str:
    """ Генерирует код-верификатор для PKCE """
    random_bytes = os.urandom(length)
    code_verifier = base64.urlsafe_b64encode(random_bytes).rstrip(b'=').decode('utf-8')
    return code_verifier

def generate_code_challenge(code_verifier: str) -> str:
    """ Генерирует код-подтверждение для PKCE """
    sha256 = hashlib.sha256()
    sha256.update(code_verifier.encode('utf-8'))
    code_challenge = base64.urlsafe_b64encode(sha256.digest()).rstrip(b'=').decode('utf-8')
    return code_challenge