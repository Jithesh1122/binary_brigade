import React, { useState } from 'react';
import axios from 'axios';
import cropImage from './images/pepper.jpg';
import './crop.css';

function CropRecommendationForm() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    rainfall: '',
    humidity: '',
    ph: '',
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
  
    if (name === "N" || name === "P" || name === "K" || name === "temperature" || name === "rainfall" || name === "humidity" || name === "ph") {
      if (isNaN(value)) {
        // You can add a condition to restrict non-numeric input
        alert(`${name} must be a number`);
        return;
      }
    }
  
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Send data to Flask backend for crop recommendation
      const response = await axios.post('http://localhost:8000/recommend_crop', formData);
      setResult(response.data.recommended_crop);
    } catch (err) {
        console.error(err); 
      setError('Error fetching crop recommendation. Please try again.');
    } finally {
        setLoading(false);
    }
  };

  return (
      <div className="form-container">
      <img className="imageofCrop" src={cropImage} alt="Crop" />
        <div className='resultContainer'>
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
        <button type="submit" className="submit-btn">Recommend Crop</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {result && (
          <p className="result">Recommended Crop: {result}</p>
        )}
        </div>
    </div>
  );
}

export default CropRecommendationForm;
