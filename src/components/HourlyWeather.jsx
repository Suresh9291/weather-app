import React from "react";
import Lottie from "lottie-react";
import sunAnimation from "../assets/animations/sun-animation.json";
import rainAnimation from "../assets/animations/rain-cloud.json";
import heavyRain from "../assets/animations/cloud-with-lightning.json";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
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
        // const transformed = data.list.slice(0, 8).map((entry) => ({
        //   time: entry.dt_txt,
        //   temp: Math.round(entry.main.temp),
        //   icon: entry.weather[0].main, // We will map this to animation later
        //   id: uuidv4(),
        // }));
        // const shaped = data.list.slice(0, 8).map(/* shape it */);
        // setHourdata(shaped);
        // sethourdata(transformed);
        setHourdata(data);
      })

      .catch((err) => console.log("API-ERROR: ", err));
  }, []);

  return (
    <>
      <div className="hourly-weather">
        <h1>Hourly</h1>
      </div>

      <div className="hourly-container">
        {hourdata?.list?.slice(0, 8).map((entry, index) => {
          const icon = entry.weather[0].main;
          return (
            <div className="hour-border" key={index}>
              <span>
                {new Date(entry.dt_txt).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
              <div className="animation">
                {" "}
                <span>
                  <Lottie animationData={getAnimation(icon)} loop={true} />
                </span>
              </div>
              <span>{Math.round(entry.main.temp)}&deg;C</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HourlyWeather;
