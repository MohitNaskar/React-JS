import  Header  from "./components/Header";
import  Main  from "./components/Main";
import   Footer   from "./components/Footer";
import "./App.css";
import React from "react";
export default function App() {
  return (
    <div className="app-container">
      <div className="card">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
