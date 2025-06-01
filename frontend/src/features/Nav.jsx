import { useState } from "react";
import styles from "./Nav.module.css"; // Make sure you create this file

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
