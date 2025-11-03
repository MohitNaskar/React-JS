import React from "react";
export function Navbar() {
  return (
    <header>
      <div className="left-group">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          width="60"
        />
        <h2>ReactFacts</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
