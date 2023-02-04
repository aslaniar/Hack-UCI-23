from flask import Flask, jsonify, request 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# @app.route("/")
# def hello_world():
#     return jsonify({"message": "anything"})

@app.route("/")
def get_artist_name():
    name = request.args.get('artist')
    print(name)
    return jsonify({"message": name})
