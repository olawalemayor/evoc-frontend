import React from "react";
import "./App.css";
import "./UI/ui.css";
import Header from "./UI/header/header";
import TopBar from "./UI/topBar/topBar";
import NavBar from "./UI/navbar/navBar";
import Routing from "./UI/routing";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container-wrapper">
        <header className="App-header">
          <Header />
        </header>
      </div>
      <div className="sticky-top">
        <NavBar />
      </div>
      <Routing />
    </div>
  );
}

export default App;
