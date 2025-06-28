import "./App.css";
import CurrentTemp from "./components/CurrentTemp";
import HourlyWeather from "./components/HourlyWeather";
import SearchBar from "./components/SearchBar";
import Measures from "./components/WeatherInfo";
import WeeklyWeather from "./components/WeeklyWeather";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("ahmedabad");
  return (
    <>
      <SearchBar setCity={setCity} />
      <CurrentTemp city={city} />
      <Measures />
      <HourlyWeather />
      <WeeklyWeather />
    </>
  );
}

export default App;
