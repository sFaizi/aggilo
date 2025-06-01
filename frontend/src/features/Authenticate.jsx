import styles from "./Authenticate.module.css";

const Authenticate= (props) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
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
        <button>Login</button>
      </form>
    </div>
  );
};

export default Authenticate;
