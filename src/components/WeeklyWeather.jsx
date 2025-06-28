import React from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import sunAnimation from "../assets/animations/sun-animation.json";
import rainAnimation from "../assets/animations/rain-cloud.json";
import heavyRain from "../assets/animations/cloud-with-lightning.json";
import { v4 as uuidv4 } from "uuid";
const WeeklyWeather = () => {
  const [weeklyMapping, setweeklyMapping] = useState([
    {
      icons: sunAnimation,
      day: "MON",
      date: "27 JUN",
      minTemp: "25",
      maxTemp: "30",
      index: uuidv4(),
    },
    {
      icons: rainAnimation,
      day: "THU",
      date: "28 JUN",
      minTemp: "26",
      maxTemp: "31",
      index: uuidv4(),
    },
    {
      icons: heavyRain,
      day: "WED",
      date: "29 JUN",
      minTemp: "27",
      maxTemp: "32",
      index: uuidv4(),
    },
    {
      icons: sunAnimation,
      day: "THU",
      date: "30 JUN",
      minTemp: "28",
      maxTemp: "33",
      index: uuidv4(),
    },
    {
      icons: rainAnimation,
      day: "FRI",
      date: "31 JUN",
      minTemp: "29",
      maxTemp: "35",
      index: uuidv4(),
    },
    {
      icons: heavyRain,
      day: "SAT",
      date: "1 JULY",
      minTemp: "30",
      maxTemp: "36",
      index: uuidv4(),
    },
  ]);
  return (
    <>
      <div className="hourly-weather">
        <h1>This Week</h1>
      </div>
      <div className="weekly-container">
        {weeklyMapping.map((weekData) => {
          return (
            <div className="days" key={weekData.index}>
              <div className="animation">
                <span>
                  <Lottie animationData={weekData.icons} loop={true} />{" "}
                </span>
              </div>
              <div className="dates">
                {" "}
                <span className="date">{weekData.day}</span>
                <span className="date-font">{weekData.date}</span>
                <div className="temp">
                  {" "}
                  <span className="deg-font"> {weekData.minTemp}&deg;</span>
                  <span className="min">min</span>
                </div>
              </div>
              <div className="max-deee">
                {" "}
                <span className="deg-font">{weekData.maxTemp}&deg;</span>
                <span className="min">max</span>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeeklyWeather;
