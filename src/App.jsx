import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import Component from "./components/Component";
import MainComponent from "./components/MainComponent";
import AboutMeComponent from "./components/AboutMeComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Portafolio de Adrià Casas Llorens</h1>
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
