#!/usr/bin/env bash
set -o errexit

python manage.py migrate
python manage.py collectstatic --noinput

python manage.py createsuperuser \
  --noinput \
  --username "$DJANGO_SUPERUSER_USERNAME" \
  --email "$DJANGO_SUPERUSER_EMAIL" || true

gunicorn backend.wsgi:application
