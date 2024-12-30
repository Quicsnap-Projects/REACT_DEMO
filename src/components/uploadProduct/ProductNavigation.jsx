import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductNavigation.module.css";

const ProductNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/train" className={styles.navItem}>
        <img src="/icons/train.svg" alt="" />
        Train
      </NavLink>
      <NavLink to="/create" className={styles.navItem}>
        <img src="/icons/create.svg" alt="" />
        Create
      </NavLink>
      <NavLink to="/canvas" className={styles.navItem}>
        <img src="/icons/canvas.svg" alt="" />
        Canvas
      </NavLink>
    </nav>
  );
};

export default ProductNavigation;
