import React from "react";
import styles from "../styles/ImageEditor.module.css";

const images = [
  ["/groups/1/1.jpg", "/groups/1/2.jpg", "/groups/1/3.jpg", "/groups/1/4.jpg"],
  ["/groups/2/1.jpg", "/groups/2/2.jpg", "/groups/2/3.jpg", "/groups/2/4.jpg"],
];

export const SelectedGroup = ({
  selectedImage,
  setSelectedImage,
  selectedGroup,
}) => (
  <div className={styles.selectedGrid}>
    <div className={styles.thumbnails}>
      {images[selectedGroup].map((image, index) => (
        <div
          key={index}
          className={`${styles.thumbnail} ${
            selectedImage === index ? styles.selected : ""
          }`}
          onClick={() => setSelectedImage(index)}
        >
          <img src={image} alt={`Generated image ${index + 1}`} />
        </div>
      ))}
    </div>
    <div className={styles.previewImage}>
      <img
        src={images[selectedGroup][selectedImage || 0]}
        alt="Selected preview"
        className={styles.preview}
      />
    </div>
    <div className={styles.controls}>
      <button className={styles.controlButton}>
        <img src="/icons/zoom.svg" alt="Zoom" />
      </button>
      <button className={styles.controlButton}>
        <img src="/icons/download.svg" alt="Download" />
      </button>
    </div>
  </div>
);
