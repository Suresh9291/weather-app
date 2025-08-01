import "./App.css";
import CurrentTemp from "./components/CurrentTemp";
import HourlyWeather from "./components/HourlyWeather";
import SearchBar from "./components/SearchBar";

import WeatherInfo from "./components/WeatherInfo";

import { useState } from "react";

function App() {
  const [city, setCity] = useState("ahmedabad");
  const [weather, setWeather] = useState(null);
  return (
    <>
      <SearchBar setCity={setCity} />
      <CurrentTemp city={city} weather={weather} setWeather={setWeather} />
      <WeatherInfo weather={weather} setWeather={setWeather} />
      <HourlyWeather city={city} />
    </>
  );
}

export default App;
