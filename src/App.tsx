import React from "react";
import "./App.css";
import { TopBar, Header, NavBar, Routing, Footer } from "./UI";
import "./UI/ui.css";

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
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
