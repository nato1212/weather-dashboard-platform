import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CurrentStatus from "./Weather_Current";
import HourlyForecast from "./Weather_Hourly";
import DailyForecast from "./Weather_Daily";
import "./Weather.css";

const Weather = () => {
  const [cityName, setCityName] = useState("Addis Ababa");
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [dailyData, setDailyData] = useState([]);

  const search = async (city) => {
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }

      setCityName(city); // ✅ Update displayed city name
      setWeatherData({
        temperature: data.list[0].main.temp,
        location: data.city.name,
        humidity: data.list[0].main.humidity,
        windSpeed: data.list[0].wind.speed,
        // icon: data.list[0].weather[0].icon,
        icon: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
      });

      setHourlyData(
        data.list.slice(0, 6).map((hour) => ({
          time: new Date(hour.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: hour.main.temp,
          icon: hour.weather[0].icon,
        }))
      );

      const dailyMap = {};
      data.list.forEach((entry) => {
        const date = new Date(entry.dt * 1000).toLocaleDateString();
        if (!dailyMap[date]) {
          dailyMap[date] = {
            tempMax: entry.main.temp_max,
            tempMin: entry.main.temp_min,
            icon: entry.weather[0].icon,
          };
        } else {
          dailyMap[date].tempMax = Math.max(
            dailyMap[date].tempMax,
            entry.main.temp_max
          );
          dailyMap[date].tempMin = Math.min(
            dailyMap[date].tempMin,
            entry.main.temp_min
          );
        }
      });

      setDailyData(
        Object.entries(dailyMap)
          .slice(0, 5)
          .map(([date, data]) => ({
            date,
            tempMax: data.tempMax,
            tempMin: data.tempMin,
            icon: data.icon,
          }))
      );
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Addis Ababa");
  }, []);

  return (
    <>
      <SearchBar onSearch={search} />
      <h2 className="text-center text-3xl font-bold mt-6">
        {cityName} Weather
      </h2>
      <div className="weather-container">
        <div className="current-container">
          <CurrentStatus weatherData={weatherData} />
        </div>
        <div className="forecast-container">
          <HourlyForecast hourlyData={hourlyData} />
          <DailyForecast dailyData={dailyData} />
        </div>
      </div>
    </>
  );
};

export default Weather;
