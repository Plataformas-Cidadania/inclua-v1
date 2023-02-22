#!/bin/sh
composer install
php artisan key:generate
php artisan config:cache
php artisan migrate
php artisan serve --host=0.0.0.0 --port=8000