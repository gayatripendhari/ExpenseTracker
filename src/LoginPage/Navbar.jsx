import React from "react";
import styles from "./Navbar.module.css"
const Navbar = ({ onButtonClick }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7a/2c/73/7a2c738b-83b7-6473-d660-6fd8fc2640ed/AppIcon-0-0-1x_U007epad-0-1-85-220.png/434x0w.webp"
          alt="Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>ExpenseTracker</h1>
      </div>
      <div className={styles.right}>
        <button className={styles.button} onClick={() => onButtonClick("signin")}>
          Sign In
        </button>
        <button className={styles.button} onClick={() => onButtonClick("signup")}>
          Sign Up
        </button>
        <button className={styles.button} onClick={() => onButtonClick("signin")}>
          logout
        </button>
      </div>
    </nav>
  );
};


export default Navbar;
