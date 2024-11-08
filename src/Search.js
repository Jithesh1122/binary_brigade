// import React, { useState } from 'react';

// const Search = () => {
//   const [cropName, setCropName] = useState('');
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/get/${id}`);
//       const data = await response.json();

//       if (response.ok) {
//         setUser(data);  // If found, display the user data
//         setError('');  // Clear any error messages
//       } else {
//         setUser(null);  // Clear user data if not found
//         setError(data.status || 'User not found');
//       }
//     } catch (err) {
//       setError('Error fetching data');
//       setUser(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Search Crop</h1>
//       <input
//         type="text"
//         placeholder="Enter Crop Name"
//         value={cropName}
//         onChange={(e) => setCropName(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {user && (
//         <div>
//           <h2>Crop Found</h2>
//           <p>Name: {user.name}</p>
//           <p>Details: {user.details}</p> {/* Replace 'details' with the actual fields from the response */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [id, setId] = useState('');
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!id) return;

//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await axios.get(`http://localhost:8000/get/${id}`);
//       setData(response.data); // Store the fetched data
//     } catch (err) {
//       setError('Error fetching data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Fetch Data by ID</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter ID"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Loading...' : 'Fetch Data'}
//         </button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {data && (
//         <div>
//           <h3>Fetched Data:</h3>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;



import React, { useState } from 'react';
import axios from 'axios';

const CropSearch = () => {
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
      const response = await axios.get(`http://localhost:8000/crop?Crop_name=${cropName}`);
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
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', width: '100%' }}>Search</button>
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

export default CropSearch;
