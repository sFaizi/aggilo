import styles from "./Home.module.css";
import Authenticate from "../features/Authenticate";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Authenticate />
    </div>
  );
};

export default Home;
