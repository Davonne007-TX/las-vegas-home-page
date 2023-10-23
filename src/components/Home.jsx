import React from "react";
import "./css/Home.css";
import MyLinks from "./MyLinks";

export default function Home() {
  return (
    <div className="home-container">
      <MyLinks />
      <h1>Plan Your Travel Today</h1>
      <button>Get Started!</button>
    </div>
  );
}
