const express = require('express');
const axios = require('axios');
const app = express();
const cors=require('cors');

app.use(cors());
// Endpoint to fetch current weather using Open-Meteo API
app.get('/api/weather', async (req, res) => {
  const { lat, lon } = req.query;  // Extract 'lat' and 'lon' query parameters

  // Validate if lat and lon are provided
  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and Longitude parameters are required' });
  }

  try {
    // Make request to Open-Meteo API
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true
      }
    });

    // Extract weather data from response
    const data = response.data.current_weather;

    // Return weather data in JSON format
    res.json({
      temperature: `${data.temperature}°C`,
      wind_speed: `${data.windspeed} km/h`,
      weather_code: data.weathercode
    });

  } catch (error) {
    // Handle any errors and send a response with a status code of 500
    console.error(error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
