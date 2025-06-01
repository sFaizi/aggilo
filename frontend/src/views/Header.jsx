import React from "react";
import styles from "./Header.module.css";
import Nav from "../features/Nav";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div></div>
      <div></div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
