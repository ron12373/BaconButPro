from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import urllib.parse

app = Flask(__name__)
CORS(app)

# Your x-api-key
API_KEY = "3527a2333c63c3691c8b2f76ebe904e69718f6ede4f59d1568ebb02e49016599"

# Base URL for the API
BASE_URL = "https://ethos.kys.gay/api/bypass?url="

@app.route("/api/bypass", methods=["GET"])
def fetch_api():
    # Get the URL parameter from the request
    target_url = request.args.get("url")
    if not target_url:
        return jsonify({"status": "error", "message": "Missing 'url' parameter"}), 400

    # Encode the URL
    encoded_url = urllib.parse.quote(target_url)

    # Make the request to the external API
    headers = {"x-api-key": API_KEY}
    response = requests.get(f"{BASE_URL}{encoded_url}", headers=headers)

    if response.status_code != 200:
        return jsonify({"status": "error", "message": "Failed to fetch API"}), response.status_code

    api_data = response.json()

    # Prepare the response
    return jsonify({
        "status": "success",
        "result": api_data.get("result", ""),
        "credits": (
            "ETHOS / GB: https://bypass.vip/discord \\n"
            "https://discord.com/invite/uxCB83JG86 \\n"
            "https://discord.gg/MS6zsR33pA \\n"
            "https://discord.gg/5JQ8nw5Gkv \\n"
            "https://discord.gg/Rtw32CkWZJ"
        )
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=1777)
