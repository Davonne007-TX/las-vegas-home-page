import React from "react";
import { Link } from "react-router-dom";
import "./css/MyLinks.css";

export default function MyLinks() {
  return (
    <>
      <div className="myLinks">
        <Link to="/">Welcome To Las Vegas</Link>
        <br />
        <Link to="/hotels">Hotels</Link>
        <Link to="/events">Events</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/book">Book </Link>
      </div>
    </>
  );
}
