1. MySQL Database Setup

Run these commands in MySQL:

mysql -u root -p;
CREATE DATABASE task_scheduler_db;
CREATE USER 'taskuser'@'localhost' IDENTIFIED BY 'your-password-here';
GRANT ALL PRIVILEGES ON task_scheduler_db.* TO 'taskuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;

------------------------------------

Create a .env File inside the backend folder:

DB_NAME=task_scheduler_db
DB_USER=taskuser
DB_PASSWORD=your-password-here
DB_HOST=localhost
DB_PORT=3306

2. Start Backend (Django)
cd backend
python -m venv env
.\env\Scripts\Activate.ps1

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000

3. Start Frontend (React)

Open a new terminal:

cd frontend
npm install
npm start