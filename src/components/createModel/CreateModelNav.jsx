import React from "react";
import { NAV_ITEMS } from "./CreateModelTypes";
import styles from "./CreateModel.module.css";

export const CreateModelNav = () => {
  return (
    <nav className={styles.navigation} role="navigation">
      {NAV_ITEMS.map((item, index) => (
        <div
          key={index}
          className={`${styles.navItem} ${item.isActive ? styles.active : ""}`}
          role="button"
          tabIndex={0}
          aria-selected={item.isActive}
        >
          <img src={item.icon} alt="" className={styles.navIcon} />
          <span>{item.text}</span>
        </div>
      ))}
    </nav>
  );
};
