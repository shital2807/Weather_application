import React, { useState } from 'react';
import axios from 'axios';

function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/weather?city=${location}`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to retrieve weather data.');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={getWeatherData}>Get Weather</button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
