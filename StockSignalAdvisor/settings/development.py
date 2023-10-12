from StockSignalAdvisor.settings.common import *
from pathlib import Path


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# ------ Defauld DB-----
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }
# ----------------------

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'stadatabase',       # Your database name
        'USER': 'postgres',          # Your PostgreSQL username
        'PASSWORD': 'admin',         # Your PostgreSQL password
        'HOST': 'localhost',         # Set to the PostgreSQL server's host (e.g., localhost)
        'PORT': '',                  # Leave empty to use the default PostgreSQL port (5432)
    }
}

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'
