import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="search-bar-container">
        <p>Best Food Waiting For Your Belly</p>
        <input
          type="text"
          placeholder="Search Food Items"
          id="banner-search-input"
        />
        <button className="sarch-btn">Search</button>
      </div>
    </div>
  );
};

export default Banner;
