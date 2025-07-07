import React, { useEffect } from "react";
import Lottie from "lottie-react";
import sunAnimation from "../assets/animations/sun-animation.json";
import rainAnimation from "../assets/animations/rain-cloud.json";
import heavyRain from "../assets/animations/cloud-with-lightning.json";

const CurrentTemp = ({ city, weather, setWeather }) => {
  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da96d3f55a3e6963efe758dad659e35b&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod !== 200) {
          setWeather(null);
          alert("City not found:");
          return;
        }
        console.log("Weather data:", data); // 🧪 debug log
        setWeather(data);
      })
      .catch((err) => console.log("API error:", err));
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);
  const getAnimation = (condition) => {
    switch (condition) {
      case "clear":
        return sunAnimation;

      case "Rain":
        return rainAnimation;
      case "Thunderstorm":
        return heavyRain;

      default:
        return sunAnimation;
    }
  };
  return (
    <div className="currentTemp-main-div">
      {weather ? (
        <>
          <div className="sun-animation">
            <Lottie
              animationData={getAnimation(weather.weather[0].main)}
              loop={true}
            />
          </div>

          <div style={{ marginRight: "40px" }}>
            <h1>
              {weather.name} {weather.sys.countrys}
            </h1>
          </div>

          <div>
            <span className="currentTempInCelsius">
              {Math.round(weather.main.temp)}&deg;
            </span>
            <div className="alerts">{weather.weather[0].description}</div>
          </div>

          <div className="min-max-container">
            <div className="min-div">
              <div>
                <span className="material-symbols-outlined arrow-downward">
                  arrow_downward
                </span>
              </div>
              <div className="min-deg">
                <span className="min-max-color">min</span>
                <span className="min-max-font">
                  {Math.floor(weather.main.temp_min)}&deg;
                </span>
              </div>
            </div>

            <div className="max-div">
              <div>
                <span className="material-symbols-outlined arrow-upward">
                  arrow_upward
                </span>
              </div>
              <div className="min-deg">
                <span className="min-max-color">max</span>
                <span className="min-max-font">
                  {Math.ceil(weather.main.temp_max)}&deg;
                </span>
              </div>
            </div>
          </div>
          <div style={{ color: "red" }}>
            Feels like <span>{Math.round(weather.main.feels_like)}&deg;</span>
          </div>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default CurrentTemp;
