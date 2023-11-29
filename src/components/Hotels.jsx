import React from "react";
import MyLinks from "./MyLinks";
import "./css/Hotels.css";

export default function Hotels() {
  return (
    <>
      <div className="hotels">
        <MyLinks />
        <div className="heading-container">
          <h1 className="find">Find Your Dream Hotel</h1>
          <input type="search" className="search" />
          <button className="explore">Search</button>
        </div>
      </div>
    </>
  );
}
