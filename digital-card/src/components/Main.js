import React from "react";

export default function Main() {
  return (
    <main>
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p className="website">laurasmith.website</p>

      <div className="buttons">
        <button className="email-btn">
          <i className="fa fa-envelope"></i> Email
        </button>
        <button className="linkedin-btn">
          <i className="fa fa-linkedin"></i> LinkedIn
        </button>
      </div>

      <section className="info-section">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks...
        </p>
      </section>

      <section className="info-section">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff...
        </p>
      </section>
    </main>
  );
}
