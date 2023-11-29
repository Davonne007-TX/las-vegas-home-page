import React from "react";
import MyLinks from "./MyLinks";
import "./css/Explore.css";

export default function Explore() {
  return (
    <>
      <div className="lasVegas">
        <MyLinks />

        <h1>Explore Sin City</h1>
        <input type="search" className="vegas-search" />
        <button className="search-vegas-btn">Search</button>
      </div>
    </>
  );
}
