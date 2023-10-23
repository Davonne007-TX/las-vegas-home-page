import React from "react";
import { Link } from "react-router-dom";

export default function MyLinks() {
  return (
    <>
      <Link to="/">Las Vegas</Link>
      <br />
      <Link to="/hotels">Hotels</Link>
      <Link to="/events">Events</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/book">Book </Link>
    </>
  );
}
