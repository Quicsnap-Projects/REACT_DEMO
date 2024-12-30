import React from "react";
import styles from "../styles/ImageCard.module.css";

export const ImageCard = ({ images }) => {
  return (
    <div className={styles.cardContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            loading="lazy"
            src={image.src}
            alt={image.alt || ""}
            className={styles.cardImage}
          />
        </div>
      ))}
    </div>
  );
};
