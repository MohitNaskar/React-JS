import React from "react";
import jokes from "../data";

export default function Jokes() {
  return (
    <div className="jokes-container">
      <h1>Jokes</h1>
      {jokes.map((joke) => (
        <React.Fragment key={joke.id}>
          <h3>{joke.punchline}</h3>
          <li>{joke.text}</li>
        </React.Fragment>
      ))}
    </div>
  );
}
