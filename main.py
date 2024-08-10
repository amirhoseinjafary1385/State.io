from flask import Flask, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your_password_name'
app.config['MYSQL_DB'] = 'stateio' 
app.config['MYSQL_HOST'] = '127.0.0.1' #localhost

mysql = MySQL(app)

@app.route("/")

def index():
    return render_template("state.html")

@app.route("/welcome", methods=["POST"])

def welcome():
    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")

  # اتصال به پایگاه داده و ذخیره داده‌ها
    connect = mysql.connection
    cursor = connect.cursor() 
    cursor.execute("INSERT INTO users (first_name, last_name) VALUES (%s, %s)", (first_name, last_name))
    connect.commit()
    cursor.close()


    #گرفتن نام و نام خانوادگی کاربر
    full_name = f"{first_name} {last_name}"
    return render_template("welcome.html", full_name=full_name)

if __name__ == "__main__":
    #yoU could Change the Port In your Own Port !....
    #میتوانید پورت هارا به دلخواه عوض کنید ...
    app.run(debug = True, port = 5000)



