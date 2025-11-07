import React from "react";
import heroImg from "../images/Group 77.png"; // ← your collage image

export default function Main() {
  return (
    <section className="Main">
      <img src={heroImg} className="hero-img" alt="Airbnb experiences collage" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
}
