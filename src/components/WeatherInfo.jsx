import React from "react";
import { useState } from "react";
import {
  Sun,
  CloudRain,
  Wind,
  Sunrise,
  Sunset,
  Thermometer,
  Droplet,
  TrendingUp,
  CloudRainWind,
  CircleArrowUp,
  Gauge,
} from "lucide-react";
const WeatherInfo = ({ weather }) => {
  // const [tempParameter, settempParameter] = useState([
  //   {
  //     rain: "0%",
  //     wind: "311km/h",
  //     Sunrise: "6.12 AM",
  //     Sunset: "7:30 PM",
  //     uvIndex: "1.2",
  //     Pressure: "952 hPa",
  //     Humidity: "98%",
  //     Guests: "452 km/h",
  //   },
  // ]);
  return (
    <div className="icons-weather">
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <CloudRainWind color="#3a2fca" />
        </div>

        <div className="info ">
          <div> Rain</div>
          <div className="percentage"></div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <CircleArrowUp color="#A0D8EF" />
        </div>

        <div className="info ">
          <div>Wind</div>
          <div>{weather?.wind.speed} m/s</div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Sunrise color="#FFA500" />
        </div>

        <div className="info ">
          <div>Sunrise</div>
          <div>
            {" "}
            {weather?.sys?.sunrise
              ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString(
                  "en-IN",
                  { hour: "2-digit", minute: "2-digit" }
                )
              : "--"}
          </div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Sunset color="#FF8C00" />
        </div>

        <div className="info ">
          <div>Sunset</div>
          <div>
            {weather?.sys?.sunset
              ? new Date(weather.sys.sunset * 1000).toLocaleTimeString(
                  "en-IN",
                  { hour: "2-digit", minute: "2-digit" }
                )
              : "--"}
          </div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Sun color="#FF8C00" />
        </div>

        <div className="info ">
          <div>UV index</div>
          <div></div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Gauge color="#4A90E2" />
        </div>

        <div className="info ">
          <div>Pressure</div>
          <div>{weather?.main.pressure} hPA</div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Droplet color="#00BFFF" />
        </div>

        <div className="info ">
          <div>Humidity</div>
          <div>{weather?.main?.humidity}% </div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Wind color="#7FDBFF" />
        </div>

        <div className="info ">
          <div>Guests</div>
          <div>{weather?.wind.gust} m/s</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
