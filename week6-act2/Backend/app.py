from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get-weather', methods=['POST'])
def get_weather():
    data = request.get_json()
    city = data.get('city', '')

    if not city:
        return jsonify({'error': 'City not provided'}), 400

    fake_weather_data = {
        'location': f"{city}, Country",
        'temperature': {
            'current': 41,
            'feels_like': 0,
        },
        'humidity': 70,
        'conditions': 'Clear sky',
        'wind': {
            'speed': 5,
            'direction': 'N',
        },
        'last_updated': '2025-03-26 12:00:00',
    }

    return jsonify({'weather': fake_weather_data})

if __name__ == '__main__':
    app.run(debug=True)
