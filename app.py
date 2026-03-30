from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io, json, base64, os

app = Flask(__name__)
CORS(app)

print("Loading model...")
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Try .keras format first, fall back to .h5
keras_path = os.path.join(BASE_DIR, 'best_model.keras')
h5_path = os.path.join(BASE_DIR, 'best_model.h5')

if os.path.exists(keras_path):
    model = tf.keras.models.load_model(keras_path)
elif os.path.exists(h5_path):
    model = tf.keras.models.load_model(h5_path, compile=False)
else:
    raise FileNotFoundError("No model file found!")

print("✅ Model loaded!")

with open(os.path.join(BASE_DIR, 'class_indices.json')) as f:
    class_indices = json.load(f)

idx_to_label = {v: k for k, v in class_indices.items()}
print("Classes:", idx_to_label)

IMG_SIZE = (224, 224)

from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

MOISTURE_RANGES = {
    'dry':      (8,  28),
    'moderate': (30, 55),
    'wet':      (60, 90)
}

IRRIGATION = {
    'dry': {
        'recType': 'warn',
        'recommendation': '⚠️ Irrigation Required',
        'detail': 'The soil is critically dry. Water the field immediately to prevent crop stress.'
    },
    'moderate': {
        'recType': 'monitor',
        'recommendation': '🔵 Monitor Soil',
        'detail': 'Soil moisture is moderate. Monitor after 2 hours and irrigate if it drops further.'
    },
    'wet': {
        'recType': 'ok',
        'recommendation': '✅ No Irrigation Needed',
        'detail': 'Soil has sufficient moisture. No irrigation required. Ensure proper drainage.'
    }
}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if not data or 'image' not in data:
            return jsonify({'error': 'No image provided'}), 400

        img_data = data['image']
        if ',' in img_data:
            img_data = img_data.split(',')[1]
        img_bytes = base64.b64decode(img_data)

        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        img = img.resize(IMG_SIZE)
        arr = np.array(img, dtype=np.float32)
        arr = preprocess_input(arr)
        arr = np.expand_dims(arr, axis=0)

        preds = model.predict(arr)[0]
        pred_idx = int(np.argmax(preds))
        pred_label = idx_to_label[pred_idx]
        confidence = float(preds[pred_idx]) * 100

        low, high = MOISTURE_RANGES[pred_label]
        moisture_pct = round(low + (confidence / 100) * (high - low), 1)

        scores = {
            idx_to_label[i]: round(float(preds[i]) * 100, 1)
            for i in range(len(preds))
        }

        irr = IRRIGATION[pred_label]

        return jsonify({
            'success': True,
            'level': pred_label.capitalize(),
            'percent': moisture_pct,
            'confidence': round(confidence, 1),
            'scores': scores,
            'recType': irr['recType'],
            'recommendation': irr['recommendation'],
            'detail': irr['detail']
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
