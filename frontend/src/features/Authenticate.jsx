import styles from "./Authenticate.module.css";
import { useSelector } from "react-redux";

const Authenticate = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {isAuthenticated ? (
          <div className={styles.login}>
            <h2>Login</h2>
            <div>
              <label>Username</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Password</label>
              <input type="password"></input>
            </div>
          </div>
        ) : (
          <div className={styles.signup}>
            <h2>Signup</h2>
            <div>
              <label>Name</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Email</label>
              <input type="email"></input>
            </div>
            <div>
              <label>Password</label>
              <input type="password"></input>
            </div>
            <div>
              <label>Year of birth</label>
              <input type="date"></input>
            </div>
          </div>
        )}

        <button>Signup</button>
        <p>or login</p>
      </form>
    </div>
  );
};

export default Authenticate;
