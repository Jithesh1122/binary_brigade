import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'

const Search = () => {
  // State variables
  const [cropName, setCropName] = useState('');
  const [cropData, setCropData] = useState(null);
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!cropName) {
      setError('Please enter a crop name');
      return;
    }

    try {
      // Fetch data from the server
      const response = await axios.get(`http://localhost:7000/crop?Crop_name=${cropName}`);
      setCropData(response.data);
      setError('');
    } catch (err) {
      setCropData(null);
      if (err.response && err.response.status === 404) {
        setError('Crop not found');
      } else {
        setError('Error fetching crop data');
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Search for a Crop</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          placeholder="Enter crop name"
          style={{ width: '478px', padding: '15px', marginBottom: '10px',fontSize:'19px',outline:'solid 2px green',border:'none', }}
        />
        <button type="submit" style={{  marginLeft:'5px', fontSize:'15px',backgroundColor:'#c8591d',borderRadius:'20px' ,padding: '10px', width: '500px'}}>Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cropData && (
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px' }}>
          <h3>Crop Details</h3>
          <p><strong>Name:</strong> {cropData.Crop_name}</p>
          <p><strong>State:</strong> {cropData.State}</p>
          <p><strong>Climate:</strong> {cropData.Climate}</p>
          <p><strong>Sunlight:</strong> {cropData.Sunlight}</p>
          <p><strong>Soil:</strong> {cropData.Soil}</p>
          <p><strong>Watering:</strong> {cropData.Watering}</p>
          <p><strong>Fertilizer:</strong> {cropData.Fertilizer}</p>
          <p><strong>Pollination:</strong> {cropData.Pollination}</p>
          <p><strong>Pest:</strong> {cropData.Pest}</p>
          <p><strong>Harvesting:</strong> {cropData.Harvesting}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
