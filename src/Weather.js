import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [latitude, setLatitude] = useState(''); // State to store latitude
  const [longitude, setLongitude] = useState(''); // State to store longitude
  const [data, setData] = useState(null); // State to store fetched weather data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!latitude || !longitude) return; // Ensure both latitude and longitude are entered

    setLoading(true);
    setError(''); // Reset error before making the request

    try {
      // Sending latitude and longitude as part of the API request
      const response = await axios.get(`http://localhost:3000/api/weather?lat=${latitude}&lon=${longitude}`);
      setData(response.data); // Set the fetched weather data in state
    } catch (err) {
      setError('Error fetching weather data. Please check the coordinates or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fetch Weather by Latitude and Longitude</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <input
            type="number"
            step="any"
            placeholder="Enter latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)} // Update latitude on input change
            style={{ padding: '10px', marginRight: '10px' }}
          />
          <input
            type="number"
            step="any"
            placeholder="Enter longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)} // Update longitude on input change
            style={{ padding: '10px', marginRight: '10px' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
          {loading ? 'Loading...' : 'Fetch Weather'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error if any */}

      {data && (
        <div>
          <h3>Weather Data for Latitude: {latitude}, Longitude: {longitude}:</h3>
          <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
            {JSON.stringify(data, null, 2)} {/* Pretty print the fetched weather data */}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Weather;
