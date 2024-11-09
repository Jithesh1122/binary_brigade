import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Load the dataset
df = pd.read_csv('./Crop_yeild.csv')

# Encode the 'crop' column
label_encoder = LabelEncoder()
df['crop'] = label_encoder.fit_transform(df['crop'])

# Scale the numerical features
scaler = StandardScaler()
scaled_features = scaler.fit_transform(df.drop('crop', axis=1))

# Apply the synthetic yield formula without errors
df['Yield'] = (
    0.5 * df['N'] + 
    0.3 * df['P'] + 
    0.2 * df['K'] + 
    0.1 * df['temperature'] + 
    0.1 * df['rainfall'] + 
    np.random.normal(0, 1, df.shape[0])  # Adding some noise for variability
)

# Create a DataFrame with the scaled features
X = pd.DataFrame(scaled_features, columns=df.columns[:-1])
y = df['Yield']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Flask app
app = Flask(__name__)
CORS(app) 

# Route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from request
    data = request.get_json()
    
    # Parse input data
    N = data['N']
    P = data['P']
    K = data['K']
    temperature = data['temperature']
    rainfall = data['rainfall']
    humidity = data['humidity']
    ph = data['ph']
    crop = data['crop']  # Crop name as string

    # Convert 'crop' to its encoded value
    crop_encoded = label_encoder.transform([crop])[0]
    
    # Create input array for prediction
    new_input = np.array([[N, P, K, temperature, rainfall, humidity, ph, crop_encoded]])
    
    # Scale the new input data using the fitted scaler (excluding the crop column)
    scaled_input = scaler.transform(new_input)

    # Predict the yield
    predicted_yield = model.predict(scaled_input)[0]

    # Return the prediction result as JSON
    return jsonify({
        "predicted_yield": predicted_yield
    })

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)