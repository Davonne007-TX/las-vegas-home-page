import React from "react";
import "./css/Home.css";
import MyLinks from "./MyLinks";

export default function Home() {
  function changeToday() {
    const change = document.getElementById("change");
    change.innerHTML = "Tomorrow!";
  }

  function backToToday() {
    const back = document.getElementById("change");
    back.innerHTML = "Today!";
  }

  return (
    <div className="home-container">
      <MyLinks />

      <div>
        <h1 className="heading-container">
          Plan Your Travel
          <div onMouseOver={changeToday} id="change" onMouseOut={backToToday}>
            Today!
          </div>
        </h1>
      </div>
    </div>
  );
}
