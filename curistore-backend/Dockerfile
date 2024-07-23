FROM bitnami/laravel

WORKDIR /usr/src/app/

COPY . .

EXPOSE 8000

RUN composer install

RUN php artisan key:generate