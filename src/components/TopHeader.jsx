import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Hotels from "./Hotels";
import Events from "./Events";
import Book from "./Book";
import Explore from "./Explore";

export default function TopHeader() {
  return (
    <>
      <Link to="/">Las Vegas</Link>
      <br />
      <Link to="/hotels">Hotels</Link>
      <Link to="/events">Events</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/book">Book </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/events" element={<Events />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  );
}
