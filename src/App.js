import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
         
        </a>{" "}
         Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/shital-singh-7925b01b6/">
         Shital kumari
        </a>{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
