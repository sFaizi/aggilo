import styles from "./Home.module.css";
import Authenticate from "../features/Authenticate";

const Home = () => {
  return (
    <div className={styles.container}>
      <Authenticate />
    </div>
  );
};

export default Home;
