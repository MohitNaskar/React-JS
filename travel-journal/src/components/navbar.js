import logo from "../images/logo.png"
import React from "react"

export default function Navbar() {
    return (
    <nav className="navbar">
      <img src={logo} className="nav-logo" alt="Airbnb logo" />
    </nav>
    )
}