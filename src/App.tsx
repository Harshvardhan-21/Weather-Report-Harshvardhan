import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";
import useWeather from "./hooks/useWeather";
import "./styles/Weather.css";

function App() {

  const { weather, forecast, loading, error, fetchWeather } = useWeather();
  const [darkMode, setDarkMode] = useState(false);

  document.body.className = darkMode ? "dark" : "light";

  return (
    <div className="app-wrapper">

      <div className="weather-card">

        <div className="top-bar">
          <h2>Weather Report || Harsh</h2>

          <button
            className="mode-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <SearchBar onSearch={fetchWeather} />

        {loading && <p>Loading...</p>}
        {error && <div className="alert alert-danger">{error}</div>}

        {weather && <CurrentWeather weather={weather} />}
        {forecast.length > 0 && <Forecast forecast={forecast} />}

      </div>

    </div>
  );
}

export default App;