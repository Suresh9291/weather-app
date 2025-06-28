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
const WeatherInfo = () => {
  const [tempParameter, settempParameter] = useState([
    {
      rain: "0%",
      wind: "311km/h",
      Sunrise: "6.12 AM",
      Sunset: "7:30 PM",
      uvIndex: "1.2",
      Pressure: "952 hPa",
      Humidity: "98%",
      Guests: "452 km/h",
    },
  ]);
  return (
    <div className="icons-weather">
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <CloudRainWind color="#3a2fca" />
        </div>

        <di className="info ">
          <div> Rain</div>
          <div className="percentage">{tempParameter.rain}</div>
        </di>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <CircleArrowUp color="#A0D8EF" />
        </div>

        <di className="info ">
          <div>Wind</div>
          <div>{tempParameter.wind}</div>
        </di>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Sunrise color="#FFA500" />
        </div>

        <diV className="info ">
          <div>Sunrise</div>
          <div>{tempParameter.Sunrise}</div>
        </diV>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Sunset color="#FF8C00" />
        </div>

        <diV className="info ">
          <div>Sunset</div>
          <div>{tempParameter.Sunset}</div>
        </diV>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Sun color="#FF8C00" />
        </div>

        <div className="info ">
          <div>UV index</div>
          <div>{tempParameter.uvIndex}</div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Gauge color="#4A90E2" />
        </div>

        <div className="info ">
          <div>Pressure</div>
          <div>{tempParameter.Pressure}</div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Droplet color="#00BFFF" />
        </div>

        <div className="info ">
          <div>Humidity</div>
          <div>{tempParameter.Humidity}</div>
        </div>
      </div>
      <div className="rain-chances-icons">
        <div className="icon">
          {" "}
          <Wind color="#7FDBFF" />
        </div>

        <div className="info ">
          <div>Guests</div>
          <div>{tempParameter.Guests}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
