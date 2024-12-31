import React from "react";
import styles from "../styles/ImageEditor.module.css";

export const SelectedGroup = ({
  images,
  selectedImageIndex,
  onImageSelect,
}) => {
  return (
    <div className={styles.selectedGroupContainer}>
      <div className={styles.thumbnailStrip}>
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={
              index === selectedImageIndex
                ? styles.thumbnailActive
                : styles.thumbnail
            }
            onClick={() => onImageSelect(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && onImageSelect(index)}
            aria-label={`Select image ${index + 1}`}
          >
            <img
              src={image}
              alt=""
              className={styles.thumbnailImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className={styles.mainImage}>
        <img
          src={images[selectedImageIndex]}
          alt=""
          className={styles.mainImageContent}
        />
      </div>
    </div>
  );
};
