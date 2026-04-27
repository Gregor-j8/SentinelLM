import os
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=("../.env", ".env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "SentinelLM"
    debug: bool = False

    database_url: str = "postgresql+asyncpg://sentinel:sentinel@localhost:5432/SentinelLM"

    redis_url: str = "redis://localhost:6379"

    entra_tenant_id: str = ""
    entra_client_id: str = ""
    entra_jwks_url: str = ""

    dev_key_vault_bypass: bool = False
    dev_target_api_key: str = ""

    key_vault_url: str = ""

    ollama_endpoint: str = "http://localhost:11434/v1"
    ollama_deployment: str = "llama3"

    scan_rate_limit: str = "20/hour"
    api_rate_limit: str = "100/minute"

    def model_post_init(self, __context):
        if not self.entra_jwks_url and self.entra_tenant_id:
            object.__setattr__(
                self,
                "entra_jwks_url",
                f"https://login.microsoftonline.com/{self.entra_tenant_id}/discovery/v2.0/keys",
            )


@lru_cache
def get_settings() -> Settings:
    return Settings()


class KeyProvider:
    def __init__(self, settings: Settings):
        self._settings = settings
        if settings.dev_key_vault_bypass:
            if os.getenv("DEPLOYED"):
                raise RuntimeError(
                    "DEV_KEY_VAULT_BYPASS must not be set in deployed environments"
                )

    def get_provider(self, encrypted_key: str = "", key_version: str = ""):
        if self._settings.dev_key_vault_bypass:
            dev_key = self._settings.dev_target_api_key
            return lambda: dev_key
        return lambda: self._decrypt_from_key_vault(encrypted_key, key_version)

    def _decrypt_from_key_vault(self, encrypted_key: str, key_version: str) -> str:
        raise NotImplementedError("Key Vault integration not yet implemented")
