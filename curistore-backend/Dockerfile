FROM bitnami/laravel

WORKDIR /usr/src/app/

COPY . .

RUN cp .env.example .env

EXPOSE 8000

RUN composer install

RUN php artisan key:generate