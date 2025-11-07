import React from "react";
import logo from "../images/airbnb 1.png"; // ← your logo file

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="nav-logo" alt="Airbnb logo" />
    </nav>
  );
}
