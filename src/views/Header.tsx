import React from "react";
import styles from "./Header.module.css";
import Nav from "../features/Nav";

interface Props {}

const Header: React.FC<Props> = (props) => {
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
