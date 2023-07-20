import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import MainComponent from "./MainComponent";
import { AboutMeComponent } from "./AboutMeComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Portafolio de
          Adrià Casas Llorens
        </h1>
      </header>
      <main>
        <div>
          <AboutMeComponent />
        </div>
        <div>
          <MainComponent />
        </div>
      </main>
      <footer>
        <Component />
      </footer>
    </div>
  );
}

export default App;
