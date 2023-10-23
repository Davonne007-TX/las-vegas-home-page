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
