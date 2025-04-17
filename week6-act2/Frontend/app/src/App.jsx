import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Custom styles

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/get-weather", { city });
      setWeather(response.data.weather);
      setLoading(false);
    } catch (err) {
      setError("Error fetching weather. Try again.");
      setLoading(false);
    }
  };

  // Fake real-time updates (adjusting static data slightly)
  useEffect(() => {
    if (!weather) return;

    const interval = setInterval(() => {
      setWeather((prev) => ({
        ...prev,
        temperature: {
          ...prev.temperature,
          current: Math.round(prev.temperature.current + (Math.random() > 0.5 ? 1 : -1)), // Small fluctuations
        },
        humidity: prev.humidity + (Math.random() > 0.5 ? 1 : -1), // Minor humidity changes
      }));
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, [weather]);

  return (
    <div className="container text-center my-5">
      <h1 className="text-light fw-bold">Weather App</h1>
      
      <div className="input-group my-4 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-dark" onClick={fetchWeather}>Get Weather</button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="spinner-border text-light" role="status"></div>}

      {weather && (
        <div className="card weather-card p-4 shadow-lg">
          <h3 className="fw-bold">{weather.location}</h3>
          <h4 className="text-warning">{weather.conditions}</h4>
          <p><strong>Temperature:</strong> {weather.temperature.current}°C</p>
          <p><strong>Feels Like:</strong> {weather.temperature.feels_like}°C</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
          <p><strong>Wind:</strong> {weather.wind.speed} km/h ({weather.wind.direction})</p>
          <small className="text-muted">Last Updated: {weather.last_updated}</small>
        </div>
      )}
    </div>
  );
};

export default App;
