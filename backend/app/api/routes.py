from fastapi import APIRouter

from app.models import (
    ContactRequest,
    ContactResponse,
    HealthResponse,
    ProfileResponse,
    Project,
    ProjectsResponse,
)
from app.services import deliver_contact_message

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(status="ok")


@router.get("/profile", response_model=ProfileResponse)
def profile() -> ProfileResponse:
    return ProfileResponse(
        name="Your Name",
        role="Backend Engineer",
        location="Remote",
        summary="Backend-focused portfolio: clean REST, validated inputs, and production-minded structure.",
        skills=["FastAPI", "Python", "Pydantic", "REST", "PostgreSQL", "Docker", "CI/CD"],
    )


@router.get("/projects", response_model=ProjectsResponse)
def projects() -> ProjectsResponse:
    items = [
        Project(
            name="Portfolio API",
            description="Minimal FastAPI API demonstrating validation, service boundaries and clean JSON contracts.",
            stack=["FastAPI", "Pydantic"],
        ),
        Project(
            name="Contact Service Boundary",
            description="Validated contact request calling a dedicated service function.",
            stack=["REST", "Validation"],
        ),
    ]
    return ProjectsResponse(projects=items)


@router.post("/contact", response_model=ContactResponse)
def contact(payload: ContactRequest) -> ContactResponse:
    deliver_contact_message(payload)
    return ContactResponse(delivered=True, detail="Message received.")