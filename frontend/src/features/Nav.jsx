import { useState } from "react";
import styles from "./Nav.module.css"; // Make sure you create this file
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen((prev) => !prev);
  const handleLogout = () => dispatch(logout());

  return (
    <div className={styles.container}>
      <div className={styles.menu_bars} onClick={toggle}>
        <div className={styles.menu_bar}>&nbsp;</div>
        <div className={styles.menu_bar}>&nbsp;</div>
        <div className={styles.menu_bar}>&nbsp;</div>
      </div>
      {isOpen && (
        <div className={styles.menu_opts_box}>
          <div className={styles.close} onClick={toggle}>
            X
          </div>
          <ul className={styles.menu_opts_ul}>
            <li className={styles.menu_opt}>Home</li>
            <li className={styles.menu_opt}>About</li>
            <li className={styles.menu_opt}>Contact</li>
            <li className={styles.menu_opt} onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
