FROM node:14-alpine

# Установка рабочей директории в контейнере
WORKDIR /front

# Копирование файлов проекта в контейнер
COPY . .

# Установка зависимостей
RUN npm install

# Сборка проекта
# RUN npm run build

# Установка Nginx
RUN apk add nginx

# Копирование конфигурационных файлов для Nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Открытие порта для веб-сервера Nginx
EXPOSE 5173

# Запуск Nginx в фоновом режиме и вывод логов в консоль
CMD nginx -g 'daemon off;' && tail -f /var/log/nginx/access.log