import React from "react";
import styles from "../styles/NavigationItem.module.css";

export const NavigationItem = ({ icon, text, isActive }) => {
  return (
    <div className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
      <img loading="lazy" src={icon} alt="" className={styles.navIcon} />
      <div className={styles.navText}>{text}</div>
    </div>
  );
};
