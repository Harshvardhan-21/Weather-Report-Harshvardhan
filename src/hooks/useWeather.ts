import { useState } from "react";

export type WeatherType = any;
export type ForecastType = any[];

const useWeather = () => {

  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [forecast, setForecast] = useState<ForecastType>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError("");

      /* CURRENT WEATHER */
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const currentData = await currentRes.json();

      /* FORECAST */
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const forecastData = await forecastRes.json();

      if (currentData.cod !== 200) {
        throw new Error("City not found");
      }

      /* ✅ DAILY FORECAST FIX */
      const dailyData = forecastData.list.filter((item: any) =>
        item.dt_txt.includes("12:00:00")
      );

      setWeather(currentData);
      setForecast(dailyData.slice(0, 5));

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeather };
};

export default useWeather;