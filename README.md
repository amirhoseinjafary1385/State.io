# State.io

ساختار درختی :









project_folder/
│
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── script.js
│   │   └── theme.js
│   └── Aipng.png
│
├── templates/
│   └── state.html
│   └── welcome.html
│
└── main.py

















بازی انحصاری به شیوه خودم.

داخل phpmyadmin با wamp یا lamp یا host دیتابیس mysql را اجرا کرده و در داخل Sql query Box این فیلد هارا وارد میکنیم!:








CREATE DATABASE mygame;

USE mygame;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);











-------------------------------------------------------------
python -m venv venv



windows:
source ./venv/scripts/activate


Bash:
source ./venv/bin/activate


pip install -r requirements.txt


pip install Flask-MySQLdb


pip install Flask

