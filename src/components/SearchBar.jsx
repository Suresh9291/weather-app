import React from "react";
import { useState } from "react";
const SearchBar = ({ setCity }) => {
  const [isSettingsCliked, setIsSettingsCliked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleClick = (isSettingsCliked) => {
    setIsSettingsCliked(!isSettingsCliked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue.trim());
  };

  return (
    <>
      <div className="searchBar">
        <form action="" onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            placeholder="Search for a location"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>

        <span className="material-symbols-outlined icon-search">search</span>
        <div className="setting-wrapper">
          {isSettingsCliked && (
            <div className="clickedSettings">
              {" "}
              <div className="xyz">
                {" "}
                <span className="material-symbols-outlined icon-light">
                  light_mode
                </span>{" "}
                <span>light </span>
              </div>
              <div className="xyz">
                <span className="material-symbols-outlined icon-temp">
                  device_thermostat
                </span>{" "}
                <span>faherenhit </span>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              handleClick(isSettingsCliked);
            }}
            className="settings"
          >
            {" "}
            <span className="material-symbols-outlined icon-settings">
              settings
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
