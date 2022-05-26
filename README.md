# react-mesto-api-full

Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`.

Пожалуйста, прикрепите в это описание ссылку на сайт, размещенный на Яндекс.Облаке.
для коммита
server {
listen 80;

      server_name mesto.students.nomoreparties.sbs;

      location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
      }

}
server {
listen 80;

        server_name api.mesto.students.nomoreparties.sbs;

        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

}

server {
listen 80;

        server_name mesto.students.nomoreparties.sbs;

        root /home/heavyrain/react-mesto-api-full/frontend;

                #location / {
                # Тут будут настройки для фронтенда
                #}

}
