import React from "react";
import styles from "../styles/ImageEditor.module.css";

const navItems = [
  { id: "train", icon: "/icons/train.svg", label: "Train", active: false },
  { id: "create", icon: "/icons/create.svg", label: "Create", active: true },
  { id: "canvas", icon: "/icons/canvas.svg", label: "Canvas", active: false },
];

export const Navigation = () => (
  <nav className={styles.navigation}>
    {navItems.map((item) => (
      <div
        key={item.id}
        className={`${styles.navItem} ${item.active ? styles.active : ""}`}
      >
        <img src={item.icon} alt={item.label} />
        <span>{item.label}</span>
      </div>
    ))}
  </nav>
);
