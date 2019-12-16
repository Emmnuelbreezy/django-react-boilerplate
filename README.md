# Django React Boilerplate

[![alt text](https://github.com/Emmnuelbreezy/django-react-boilerplate/master/thumbnail1.png "Sample1(localhost:8000/)")]
[![alt text](https://github.com/Emmnuelbreezy/django-react-boilerplate/master/thumbnail2.png "Sample2(/post/login)")]

This repository contains a boilerplate project setup for Django and React. The project contains a simple integration of a create app served in django project.

## Backend development workflow

```json
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver
```
## Frontend Style
Download Semantic ui css minfy file and the themes package, place it in the `build/static/css` folder before you run python manage.py collectstatic
``` json
	semantic.min.css
	theme/
```

## Frontend development workflow

```json
npm i
npm start
```

## For deploying

```json
npm run build
```
## Backend development workflow2
After build run python manage.py collectstatic then `python manage.py runserver`
```json
	python manage.py collectstatic
	python manage.py runserver
	serve at http://localhost:8000
```
