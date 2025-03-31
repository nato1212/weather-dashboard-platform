# Weather Dashboard

## Overview

The Weather Dashboard is a React-based application that allows users to search for a city's weather forecast. It fetches real-time weather data from the OpenWeather API and displays it in an intuitive, responsive UI. The application provides a functional search bar, current weather details, hourly and daily forecasts, and a clean, modern design, with full responsiveness across devices.

## Features

- **Search Bar**: Users can search for a city's weather.
- **City Name Display**: Displays the searched city name on the screen.
- **Current Weather**: Shows the current weather conditions for the searched city.
- **Hourly and Daily Forecasts**: Displays the weather forecast for the next few hours and days.
- **Input Clearing**: The input field automatically clears after searching.
- **Styled UI**: Features a modern, user-friendly design that adapts to different screen sizes. -**Footer**

## Components

The project is structured into the following React components:

### 1. `Weather.jsx`

- Manages the weather search functionality.
- Displays the searched city name.
- Renders the main components (`SearchBar`, `CurrentStatus`, `HourlyForecast`, and `DailyForecast`).

### 2. `SearchBar.jsx`

- Contains an input field for entering a city name.
- Calls the `onSearch` function passed from `Weather.jsx`.
- Clears the input field after searching.

### 3. `Weather_Current.jsx`

- (To be implemented) Displays current weather status.

### 4. `Weather_Hourly.jsx`

- Displays the hourly forecast, showing temperature, weather conditions, and time of the forecasted data.

### 5. `Weather_Daily.jsx`

- Displays the daily weather forecast with temperature highs/lows and conditions for the next 7 days.

### 6. `Footer.jsx`

- Displays footer information.

## Installation & Setup

### Prerequisites:

- Node.js & npm/yarn installed
- A valid OpenWeather API key stored in `.env` as `VITE_APP_ID`

### Steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/weather-dashboard.git
   cd weather-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm run dev
   ```

## Usage

1. Enter a city name in the search bar.
2. Click the search icon to fetch weather data.
3. The city name appears on the screen, and the input clears.
4. The application displays the current weather, hourly forecast, and daily forecast for the selected city.

## Future Improvements

- Fetch and display weather data in `CurrentStatus`, `HourlyForecast`, and `DailyForecast` components.
- Enhance UI with animations and additional styling.
- Add error handling for invalid city searches.

## License

This project is open-source under the MIT License.

---

Developed using React.
