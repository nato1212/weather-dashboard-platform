import React from "react";

const HourlyForecast = ({ hourlyData }) => {
  return (
    <div className="w-[400px] p-8 bg-[#4496e4] rounded-xl shadow-lg weatherCard">
      <h2 className="text-white text-2xl mb-12">Hourly Forecast</h2>
      <div className="grid grid-cols-2 gap-4">
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className="p-4 bg-[#62b0f4] rounded-lg text-white text-center"
          >
            <p>{hour.time}</p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`}
              alt="Weather"
              className="w-[50px] mx-auto"
            />
            <p>{hour.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
