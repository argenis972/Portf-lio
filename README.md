# Backend-Focused Developer Portfolio (FastAPI + Vanilla Frontend)

This repository is a minimal, production-oriented portfolio project designed to be reviewed quickly.

## What to look at (1 minute)
- Backend API: `backend/app/api/routes.py`
- Validation models: `backend/app/models.py`
- Config via `.env`: `backend/app/config.py`
- Service boundary (contact): `backend/app/services.py`
- Frontend consuming API: `frontend/app.js`
- i18n JSON files: `frontend/i18n/*.json`

## Purpose
Show backend discipline with:
- Clear REST endpoints
- Pydantic validation
- Environment-based configuration
- Simple service boundary (route validates -> service executes)
- A very light frontend that consumes the API (no frameworks)

## API (REST)
Base prefix: `/api`

Endpoints:
- `GET /api/health` — basic operational maturity
- `GET /api/profile` — typed response model
- `GET /api/projects` — structured data (not a random list)
- `POST /api/contact` — validation + calls a service function

Responses are simple JSON and consistent via Pydantic response models.

## Architecture decisions (clean, not overengineered)
- `config.py`: settings via `.env` (Pydantic Settings)
- `models.py`: request/response contracts (Pydantic)
- `api/routes.py`: HTTP layer only (no business logic)
- `services.py`: business operation(s), called by routes
- No database for this minimal version (easy to add later)

## Language rules
- Code: English
- Comments in code: Portuguese
- UI: EN / ES / PT (JSON-based i18n)

## Run locally

### 1) Backend
```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

Docs:
- http://localhost:8000/docs
Health check:
- http://localhost:8000/api/health

### 2) Frontend
Use any static server (examples):

**Python**
```bash
python -m http.server 5500 --directory frontend
```

Then open:
- http://localhost:5500

The frontend calls the backend at:
- `http://localhost:8000/api`

## Notes for production
- Replace the contact service with real email delivery (SMTP/SendGrid/SES) or a queue.
- Add structured logging in `services.py`.
- Add rate limiting to `/api/contact` if public.