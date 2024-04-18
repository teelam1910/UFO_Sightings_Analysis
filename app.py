from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load the UFO sightings data
data = pd.read_csv('static/Resources/highlighted_data.csv')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_sightings', methods=['POST'])
def get_sightings():
    state = request.form['state']
    sightings = data[data['State'] == state].to_dict(orient='records')
    return jsonify(sightings)

if __name__ == '__main__':
    app.run(debug=True)
