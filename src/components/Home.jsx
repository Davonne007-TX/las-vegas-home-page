import React from "react";
import "./css/Home.css";
import { Routes, Route, Link } from "react-router-dom";
import Hotels from "./Hotels";
import Events from "./Events";
import Book from "./Book";
import Explore from "./Explore";

export default function Home() {
  return (
    <div className="home-container">
      <Link to="/">Las Vegas</Link>
      <br />
      <Link to="/hotels">Hotels</Link>
      <Link to="/events">Events</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/book">Book </Link>
    </div>
  );
}
