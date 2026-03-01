type Props = {
  forecast: any[];
};

function Forecast({ forecast }: Props) {

  const getDayName = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short"
    });
  };

  return (
    <div className="forecast-container">

      {forecast.map((item, index) => {

        const iconUrl =
          `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

        return (
          <div className="forecast-card" key={index}>

            <h6 className="forecast-day">
              {getDayName(item.dt_txt)}
            </h6>

            <img
              src={iconUrl}
              alt="weather icon"
              className="forecast-icon"
            />

            <p className="forecast-temp">
              {Math.round(item.main.temp)}°C
            </p>

            <small className="forecast-condition">
              {item.weather[0].main}
            </small>

          </div>
        );
      })}

    </div>
  );
}

export default Forecast;