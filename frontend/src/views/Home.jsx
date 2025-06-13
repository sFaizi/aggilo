import styles from "./Home.module.css";
import Authenticate from "../features/Authenticate";
import Dashboard from "../features/Dashboard";

const Home = () => {
  return (
    <div className={styles.container}>
      <Authenticate>
        <Dashboard />
      </Authenticate>
    </div>
  );
};

export default Home;
