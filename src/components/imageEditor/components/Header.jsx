import React from "react";
import styles from "../styles/ImageEditor.module.css";

export const Header = () => (
  <div className={styles.header}>
    <img src="/logo.svg" alt="Logo" className={styles.logo} />
    <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />
  </div>
);
