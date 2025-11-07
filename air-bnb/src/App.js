import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CardList from "./components/CardList"
import "./App.css";
function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Main />
      <CardList />
    </div>
  );
}

export default App;