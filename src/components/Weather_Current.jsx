import React from "react";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import "./Weather.css";

const CurrentStatus = ({ weatherData }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-[400px] p-8 bg-[#4496e4] rounded-xl shadow-lg weatherCard">
      {weatherData ? (
        <img
          src={weatherData.icon}
          alt="Weather Icon"
          className="w-[150px] my-8"
        />
      ) : (
        <div>Loading...</div>
      )}
      {weatherData ? (
        <>
          <p className="text-white text-[80px] leading-[1]">
            {weatherData.temperature}°C
          </p>
          <p className="text-white text-[40px]">{weatherData.location}</p>
          <div className="w-full mt-10 text-white flex justify-between">
            <div className="flex items-center justify-center gap-3 text-2xl">
              <img
                className="w-[26px] mt-[10px]"
                src={humidity_icon}
                alt="Humidity"
              />
              <div className="text-center">
                <p>{weatherData.humidity} %</p>
                <span className="block text-[16px]">Humidity</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-2xl">
              <img
                className="w-[26px] mt-[10px]"
                src={wind_icon}
                alt="Wind Speed"
              />
              <div className="text-center">
                <p>{weatherData.windSpeed} km/h </p>
                <span className="block text-[16px]">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading weather data...</div>
      )}
    </div>
  );
};

export default CurrentStatus;
