# kolibri-web-frontend

Standalone web frontend for Kolibri.

## Project setup
```
yarn install
```

At the moment, this project is hard-coded to communicate with a Kolibri server running at http://localhost:8000. This server must be configured to provide CORS headers in its response such that the web frontend is allowed to make requests from Kolibri's API. I achieved this with the following steps.

Install [django-cors-headers](https://pypi.org/project/django-cors-headers/):

    pip install django-cors-headers

In Kolibri's install directory, edit `kolibri/deployment/default/settings/base.py` to include the following:

```
INSTALLED_APPS = [
    "kolibri.core",
    ...
    "morango",
    "corsheaders"
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]

CORS_ALLOW_ALL_ORIGINS = True
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
