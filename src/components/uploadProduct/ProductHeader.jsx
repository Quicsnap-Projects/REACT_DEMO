import React from "react";
import styles from "./ProductHeader.module.css";

const ProductHeader = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Company Logo" className={styles.logo} />
      <img src="/profile.jpg" alt="User Profile" className={styles.profile} />
    </header>
  );
};

export default ProductHeader;
