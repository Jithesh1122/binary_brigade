from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Load the dataset from a CSV file
data = pd.read_csv(r'C:\Users\asus\extract\binary_brigade\Crop_yeild.csv')

# Remove the Yield column
data = data.drop(columns=['Yield'])

# Separate features and target
X = data.drop(columns=['crop'])
y = data['crop']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)

# Train the model
model.fit(X_train, y_train)

# Initialize Flask app
app = Flask(__name__)
CORS(app) 

# Define the crop recommendation function
def recommend_crop(input_conditions):
    input_data = np.array(input_conditions).reshape(1, -1)
    predicted_crop = model.predict(input_data)
    return predicted_crop[0]

# Define the route for crop recommendation
@app.route('/recommend_crop', methods=['POST'])
def recommend_crop_api():
    # Get data from the JSON request
    data = request.get_json()
    input_conditions = [
        data['N'], 
        data['P'], 
        data['K'], 
        data['temperature'], 
        data['humidity'], 
        data['ph'], 
        data['rainfall']
    ]
    
    # Get the recommended crop
    recommended_crop = recommend_crop(input_conditions)
    
    # Return the result as JSON
    return jsonify({'recommended_crop': recommended_crop.title()})

if __name__ == '__main__':
    # Run the app on port 8000
    app.run(debug=True,host='localhost',port=8000)
