import React from "react";
import menu from "./data/Menu.jsx";
import Menyen from "./components/menyen.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div>
        <h1 className={styles.header}>Restaurant Meny</h1>
        <Menyen Retter={Meny} />
      </div>
    </>
  );
}

export default App;
