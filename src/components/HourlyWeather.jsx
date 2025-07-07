import React from "react";
import Lottie from "lottie-react";
import sunAnimation from "../assets/animations/sun-animation.json";
import rainAnimation from "../assets/animations/rain-cloud.json";
import heavyRain from "../assets/animations/cloud-with-lightning.json";
import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
const HourlyWeather = ({ city }) => {
  const [hourdata, setHourdata] = useState(null);

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
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=85ccd5c1a2473997708e623f999add62&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        const transformed = data.list.slice(0, 8).map((entry) => {
          return {
            time: entry.dt_txt,
            temp: Math.round(entry.main.temp),
            icon: entry.weather[0].main,
          };
        });
        setHourdata(transformed);
      })

      .catch((err) => console.log("API-ERROR: ", err));
  }, [city]);

  return (
    <>
      <div className="hourly-weather">
        <h1>Hourly</h1>
      </div>

      <div className="hourly-container">
        {hourdata?.map((value, index) => {
          return (
            <div className="hour-border" key={index}>
              <span>
                {new Date(value.time).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
              <div className="animation">
                {" "}
                <span>
                  <Lottie
                    animationData={getAnimation(value.icon)}
                    loop={true}
                  />
                </span>
              </div>
              <span>{Math.round(value.temp)}&deg;C</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HourlyWeather;
