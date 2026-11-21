# Portfolio Django CMS

This folder contains the MySQL-ready Django CMS and REST API for the React portfolio.

## Setup

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

## URLs

- CMS admin: `http://127.0.0.1:8000/admin/`
- API root: `http://127.0.0.1:8000/api/`
- Swagger documentation: `http://127.0.0.1:8000/api/docs/`
- OpenAPI schema: `http://127.0.0.1:8000/api/schema/`

## MySQL

Set `MYSQL_DATABASE`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_HOST`, and `MYSQL_PORT` in `.env`.
If `MYSQL_DATABASE` is empty, Django uses SQLite for local development.

## Public API collections

- `api/profile/`
- `api/skills/`
- `api/education/`
- `api/experience/`
- `api/projects/`
- `api/achievements/`
- `api/contact/` (`POST`)
