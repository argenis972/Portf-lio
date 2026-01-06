from app.config import settings
from app.models import ContactRequest


def deliver_contact_message(payload: ContactRequest) -> None:
    # Serviço mínimo e realista: aqui você conectaria SMTP, SendGrid, SES etc.
    # Mantemos simples para execução local, mas com fronteira clara (rota -> serviço).
    to_email = settings.contact_to_email
    from_email = settings.contact_from_email

    _message = {
        "to": to_email,
        "from": from_email,
        "reply_to": payload.email,
        "subject": f"Portfolio contact from {payload.name}",
        "body": payload.message,
    }

    # Em produção: enviar e-mail / publicar em fila / persistir em DB.
    return