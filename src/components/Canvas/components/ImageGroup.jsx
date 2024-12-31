import React from "react";
import styles from "../styles/ImageEditor.module.css";

export const ImageGroup = ({ images, isActive, onClick }) => {
  return (
    <div
      className={`${styles.imageGroup} ${
        isActive ? styles.imageGroupActive : ""
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && onClick()}
      aria-label="Image group"
    >
      <div className={styles.groupImageContainer}>
        {images.slice(0, 2).map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt=""
            className={styles.groupImage}
            loading="lazy"
          />
        ))}
      </div>
      <div className={styles.groupImageContainer}>
        {images.slice(2, 4).map((image, index) => (
          <img
            key={`${image}-${index + 2}`}
            src={image}
            alt=""
            className={styles.groupImage}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
