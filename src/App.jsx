import React from "react";
import Meny from "./data/meny.jsx";
import Menyen from "./components/menyen.jsx";
import Retter from "./components/retter.jsx";
import "./App.module.css";

function App() {
  return (
    <>
      <div>
        <h1 className="header">Restaurant Meny</h1>
        <Menyen Retter={Meny} />
      </div>
    </>
  );
}

export default App;
