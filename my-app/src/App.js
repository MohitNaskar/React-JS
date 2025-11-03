import { Navbar } from "./components/Navbar";
import { MainContent } from "./components/Main";
import { Footer } from "./components/Footer";
import React from 'react';

export default function App() {
  return (
    <div className="app-container">
        <div className="header">
          <Navbar />
        </div>
        <div className="main-content">
          <MainContent />
        </div>
        <Footer />
    </div>
  );
}
