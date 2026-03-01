type Props = {
  weather: any;
};

function CurrentWeather({ weather }: Props) {

  const icon =
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="text-center">

      <h3>{weather.name}</h3>

      <img src={icon} alt="weather" />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].main}</p>

      <div className="row mt-3">

        <div className="col">
          <p>Humidity</p>
          <h6>{weather.main.humidity}%</h6>
        </div>

        <div className="col">
          <p>Wind</p>
          <h6>{weather.wind.speed} km/h</h6>
        </div>

      </div>

    </div>
  );
}

export default CurrentWeather;