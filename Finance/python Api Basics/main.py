from flask import Flask, request, jsonify

app = Flask(_name_)

@app.route("/")
def home():
    return "Home"

if __name__ == "__main__":
    app.run(debug=True)
