const express = require('express');
const axios = require('axios');
const app = express();

// Use your actual OpenWeatherMap API key here
 // Replace with your OpenWeatherMap API key

// Endpoint to fetch weather for a city
app.get('/api/weather', async (req, res) => {
  const { city } = req.query;  // Extract 'city' query parameter

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    // Make request to OpenWeatherMap API
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast`
    );

    // Return weather data in JSON format
    res.json({
      name: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind_speed: response.data.wind.speed,
    });
  } catch (error) {
    // Handle errors and return a meaningful message
    console.error(error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
