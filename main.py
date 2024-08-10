from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("state.html")

@app.route("/welcome", methods=["POST"])
def welcome():


    first_name = request.form.get("first_name")
    last_name = request.form.get("last_name")
    #گرفتن نام و نام خانوادگی کاربر
    full_name = f"{first_name} {last_name}"
    return render_template("welcome.html", full_name=full_name)

if __name__ == "__main__":
    app.run(debug = True, port = 5000)



