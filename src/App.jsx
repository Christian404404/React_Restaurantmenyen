import React from "react";
import DataMenu from "./data/DataMenu.jsx";
import Menu from "./components/Menu.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Restaurant Meny</h1>
        <Menu dishes={DataMenu} />
      </div>
    </>
  );
}

export default App;
