from pydantic import BaseModel, EmailStr, Field, HttpUrl


class HealthResponse(BaseModel):
    status: str = Field(..., examples=["ok"])


class ProfileResponse(BaseModel):
    name: str
    role: str
    location: str
    summary: str
    skills: list[str]


class Project(BaseModel):
    name: str
    description: str
    stack: list[str]
    url: HttpUrl | None = None


class ProjectsResponse(BaseModel):
    projects: list[Project]


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    message: str = Field(min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    delivered: bool
    detail: str