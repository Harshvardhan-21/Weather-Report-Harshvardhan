type Props = {
  forecast: any[];
};

function Forecast({ forecast }: Props) {

  const getDay = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short"
    });
  };

  return (
    <div className="row mt-4">

      {forecast.map((item, index) => {

        const icon =
          `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

        return (
          <div className="col-6 col-md-4 mb-3" key={index}>
            <div className="forecast-card">

              <h6>{getDay(item.dt_txt)}</h6>

              <img src={icon} />

              <p>{Math.round(item.main.temp)}°C</p>

              <small>{item.weather[0].main}</small>

            </div>
          </div>
        );
      })}

    </div>
  );
}

export default Forecast;