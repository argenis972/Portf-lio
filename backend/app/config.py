from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="backend/.env", extra="ignore")

    app_name: str = Field(default="Backend Portfolio API", alias="APP_NAME")
    app_env: str = Field(default="local", alias="APP_ENV")
    api_prefix: str = Field(default="/api", alias="API_PREFIX")

    allowed_origins: str = Field(
        default="http://localhost:5500,http://127.0.0.1:5500",
        alias="ALLOWED_ORIGINS",
    )

    contact_to_email: str = Field(default="recruiter@example.com", alias="CONTACT_TO_EMAIL")
    contact_from_email: str = Field(default="no-reply@example.com", alias="CONTACT_FROM_EMAIL")

    def allowed_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.allowed_origins.split(",") if origin.strip()]

settings = Settings()