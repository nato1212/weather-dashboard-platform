import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CurrentStatus from "./Weather_Current";
import HourlyForecast from "./Weather_Hourly";
import DailyForecast from "./Weather_Daily";

const Weather = () => {
  const [cityName, setCityName] = useState("Addis Ababa");

  const search = async (city) => {
    if (city === "") {
      alert("Please enter a city name");
      return;
    }

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
    console.log(data);
  };

  useEffect(() => {
    search("Addis Ababa");
  }, []);

  return (
    <>
      <SearchBar onSearch={search} />
      <h2 className="text-center text-3xl font-bold mt-4">
        {cityName} Weather
      </h2>
      <div className="flex justify-center items-center min-h-screen gap-8">
        <CurrentStatus />
        <HourlyForecast />
        <DailyForecast />
      </div>
    </>
  );
};

export default Weather;
