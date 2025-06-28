import React from "react";
import Lottie from "lottie-react";
import sunAnimation from "../assets/animations/sun-animation.json";
import rainAnimation from "../assets/animations/rain-cloud.json";
import heavyRain from "../assets/animations/cloud-with-lightning.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const HourlyWeather = () => {
  const [hourlyData, sethourlyData] = useState([
    {
      time: "5 AM",
      icon: sunAnimation,
      hourtempteture: "26",
      index: uuidv4(),
    },
    {
      time: "6 AM",
      icon: rainAnimation,
      hourtempteture: "26",
      index: uuidv4(),
    },
    {
      time: "7 AM",
      icon: heavyRain,
      hourtempteture: "26",
      index: uuidv4(),
    },
    {
      time: "8 AM",
      icon: sunAnimation,
      hourtempteture: "26",
      index: uuidv4(),
    },
    {
      time: "9 AM",
      icon: rainAnimation,
      hourtempteture: "26",
      index: uuidv4(),
    },
    {
      time: "10 AM",
      icon: heavyRain,
      hourtempteture: "26",
      index: uuidv4(),
    },
    {
      time: "11 AM",
      icon: sunAnimation,
      hourtempteture: "26",
      index: uuidv4(),
    },
    {
      time: "12 AM",
      icon: rainAnimation,
      hourtempteture: "26",
      index: uuidv4(),
    },
  ]);
  return (
    <>
      <div className="hourly-weather">
        <h1>Hourly</h1>
      </div>

      <div className="hourly-container">
        {hourlyData.map((data) => {
          return (
            <div className="hour-border" key={data.index}>
              <span>{data.time}</span>
              <div className="animation">
                {" "}
                <span>
                  <Lottie animationData={data.icon} loop={true} />
                </span>
              </div>

              <span>{data.hourtempteture}&deg;</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HourlyWeather;
