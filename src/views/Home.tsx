import React from "react";
import styles from "./Home.module.css";
import Authenticate from "../features/Authenticate";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Authenticate />
    </div>
  );
};

export default Home;
