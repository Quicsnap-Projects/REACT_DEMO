import React from "react";
import styles from "../styles/ImageEditor.module.css";
import imageUrls from "../constants/images.json";

export const NavItem = ({ icon, label, isActive, onClick }) => {
  return (
    <div
      className={isActive ? styles.navItemActive : styles.navItem}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && onClick()}
      aria-label={label}
    >
      <img src={imageUrls.icons[icon]} alt="" className={styles.navIcon} />
      <span>{label}</span>
    </div>
  );
};
