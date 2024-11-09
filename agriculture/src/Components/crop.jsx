import React, { useState } from 'react';
import axios from 'axios';
import cropImage from './images/young-corn-plants-growing-on-600nw-2299683499.webp';
import './crop.css';

function CropPredictionForm() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    rainfall: '',
    humidity: '',
    ph: '',
    crop: '',
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Send data to Flask backend
      const response = await axios.post('http://127.0.0.1:5000/predict', formData);
      setResult(response.data.predicted_yield);
    } catch (err) {
      setError('Error fetching prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <img className="imageofCrop" src={cropImage} alt="Crop" />
        <div className="resultContainer">
      <form className="fromForCrop" onSubmit={handleSubmit}>
        <div className="field">
          <label>Nitrogen</label>
          <input type="text" name="N" value={formData.N} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Phosphorus</label>
          <input type="text" name="P" value={formData.P} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Potassium</label>
          <input type="text" name="K" value={formData.K} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Temperature</label>
          <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Rainfall</label>
          <input type="text" name="rainfall" value={formData.rainfall} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Humidity</label>
          <input type="text" name="humidity" value={formData.humidity} onChange={handleChange} />
        </div>
        <div className="field">
          <label>pH</label>
          <input type="text" name="ph" value={formData.ph} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Crop</label>
          <input type="text" name="crop" value={formData.crop} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Predict Yield</button>
      </form>


      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {result !== null && (
          
          <p className="result">Predicted Yield: {result.toFixed(3)}%</p>
        )}
        </div>
    </div>
  );
}

export default CropPredictionForm;
