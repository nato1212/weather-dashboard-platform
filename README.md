# Weather Dashboard

## Overview

This Weather Dashboard is a React-based application that allows users to search for a city's weather forecast. It fetches real-time weather data from the OpenWeather API and displays it in an intuitive UI. The current implementation includes a functional search bar, city name display, and essential styling.

## Features

- **Search Bar**: Users can search for a city's weather.
- **City Name Display**: The searched city name is shown on the screen.
- **Input Clearing**: After searching, the input field is automatically cleared.
- **Styled UI**: The application has a clean, user-friendly design.

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

- (To be implemented) Displays an hourly forecast.

### 5. `Weather_Daily.jsx`

- (To be implemented) Displays a daily forecast.

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

## Future Improvements

- Fetch and display weather data in `CurrentStatus`, `HourlyForecast`, and `DailyForecast` components.
- Enhance UI with animations and additional styling.
- Add error handling for invalid city searches.

## License

This project is open-source under the MIT License.

---

Developed with ❤️ using React.
