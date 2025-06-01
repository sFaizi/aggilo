import { useState } from "react";
import styles from "./Authenticate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login, signup, logout } from "../redux/authSlice";

const Authenticate = () => {
  const [loginView, setLoginView] = useState(true);
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
    birtYear: "",
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleView = () => setLoginView((prev) => !prev);
  const handleFormChange = (e) =>
    setForm((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginView ? login(form) : signup(form));
  };
  const handleLogout = () => dispatch(logout());

  return (
    <div className={styles.container}>
      {auth.isAuthenticated && (
        <div>
          <h1>Welcome</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!auth.isAuthenticated && (
        <form className={styles.form} onSubmit={handleSubmit}>
          {loginView ? (
            <div className={styles.login}>
              <h2>Login</h2>
              <div className={styles.field}>
                <label>Username</label>
                <input
                  onChange={handleFormChange}
                  name="name"
                  type="text"
                ></input>
              </div>
              <div className={styles.field}>
                <label>Password</label>
                <input
                  onChange={handleFormChange}
                  name="password"
                  type="password"
                ></input>
              </div>
            </div>
          ) : (
            <div className={styles.signup}>
              <h2>Signup</h2>
              <div className={styles.field}>
                <label>Name</label>
                <input
                  onChange={handleFormChange}
                  name="name"
                  type="text"
                ></input>
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input
                  onChange={handleFormChange}
                  name="email"
                  type="email"
                ></input>
              </div>
              <div className={styles.field}>
                <label>Password</label>
                <input
                  onChange={handleFormChange}
                  name="password"
                  type="password"
                ></input>
              </div>
              <div className={styles.field}>
                <label>Year of birth</label>
                <input
                  onChange={handleFormChange}
                  name="birtYear"
                  type="date"
                ></input>
              </div>
            </div>
          )}

          <button type="submit">{loginView ? "Login" : "Signup"}</button>
          {auth.error && <p>{auth.error}</p>}
          <p onClick={handleView}>{loginView ? "or signup" : "or login"}</p>
        </form>
      )}
    </div>
  );
};

export default Authenticate;
