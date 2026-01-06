# Backend (FastAPI)

## What this is
A minimal REST API that supports a developer portfolio frontend.

## Endpoints
- `GET /api/health`
- `GET /api/profile`
- `GET /api/projects`
- `POST /api/contact`

## How to run
From repository root:

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
```

API will be at:
- http://localhost:8000/api/health
- http://localhost:8000/docs