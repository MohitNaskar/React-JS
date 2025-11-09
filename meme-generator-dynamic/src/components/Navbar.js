// Navbar.jsx
import React from "react";
import trollFace from "../image/Troll Face.png"; // adjust path as needed
import memegenerator from "../image/Meme Generator.png"

// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="meme-nav">
      <div className="logo-group">
        <img src= {trollFace} className="meme-logo" alt="logo 1" />
        <img src= {memegenerator} className="meme-logo second" alt="logo 2" />
      </div>
      <h2 className="project-title">React Course - Project 3</h2>
    </nav>
  );
}
