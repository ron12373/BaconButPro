from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_URL = "http://145.223.81.79:2006/bypass?url="

# Anti-fetch: Only allow requests with Origin of "null" (typical for userscripts)
@app.before_request
def block_non_userscript():
    origin = request.headers.get('Origin')
    # If Origin header is present and is not "null", block the request.
    if origin and origin.lower() != 'null':
        return jsonify({"error": "Unauthorized: This endpoint is only accessible via a userscript"}), 403

@app.route('/bypass', methods=['GET'])
def fetch_data():
    url = request.args.get('url')
    if not url:
        return jsonify({"error": "Missing 'url' parameter"}), 400
    
    try:
        response = requests.get(API_URL + url)
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
