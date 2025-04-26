from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_URL = "http://melo.pylex.xyz:10211/bypass?url="

@app.route('/bypass', methods=['GET'])
def fetch_data():
    url = request.args.get('url')
    if not url:
        return jsonify({"error": "Missing 'url' parameter"}), 400
    
    ip = request.remote_addr
    # Gọi API tạo token từ main server
    token_create_url = f"http://de01.uniplex.xyz:1812/token-create?IP={ip}"
    try:
        token_resp = requests.get(token_create_url, timeout=5)
        token_data = token_resp.json()
        # Nếu response chứa error từ main server, trả về luôn thông báo đó
        if "error" in token_data:
            return jsonify({"error": token_data["error"]}), 403
        token = token_data.get("token")
        if not token:
            return jsonify({"error": "Failed to generate token"}), 500
    except Exception:
        return jsonify({"error": "Error while connect to Main server"}), 500

    # Gọi API bypass của token.js với thêm token và IP
    full_url = API_URL + url + f"&token={token}&IP={ip}"
    try:
        response = requests.get(full_url)
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Entry point for Netlify Functions
def handler(event, context):
    with app.app_context():
        return app(event, context)
