import React from "react";
import styles from "./CreateModel.module.css";

export const CreateModelHeader = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/0987cc05f2b54e22a01f04a1e711a223/fd8f9dc5902ee95330a4c16a767f784779ebee9215b4b2e932ca4cb162fffb2a?apiKey=0987cc05f2b54e22a01f04a1e711a223&"
        alt="Logo"
        className={styles.logo}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/0987cc05f2b54e22a01f04a1e711a223/2d7602f07afc30f79feb4cb94d0c3446de32c7ecf5649926b70ff20ec03906e3?apiKey=0987cc05f2b54e22a01f04a1e711a223&"
        alt="User profile"
        className={styles.profile}
      />
    </header>
  );
};
