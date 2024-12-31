import React, { useRef } from "react";
import { useCreateModelStore } from "./CreateModelStore";
import styles from "./CreateModel.module.css";

export const CreateModelUpload = () => {
  const fileInputRef = useRef(null);
  const setUploadedImage = useCreateModelStore(
    (state) => state.setUploadedImage
  );

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 8 * 1024 * 1024) {
      setUploadedImage(file);
    } else {
      alert("File size must be less than 8MB");
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.size <= 8 * 1024 * 1024) {
      setUploadedImage(file);
    } else {
      alert("File size must be less than 8MB");
    }
  };

  return (
    <section className={styles.imageUpload}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Image Reference <span className={styles.optional}>(Optional)</span>
        </h2>
      </div>

      <div
        className={styles.dropzone}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        role="button"
        tabIndex={0}
        onClick={() => fileInputRef.current?.click()}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0987cc05f2b54e22a01f04a1e711a223/3756ba337e61034f74a07d338583fd53f9b8e93c18f6179b797ace46693ca03a?apiKey=0987cc05f2b54e22a01f04a1e711a223&"
          alt=""
          className={styles.uploadIcon}
        />
        <p className={styles.uploadText}>
          <strong>Click to upload</strong> or drag and drop
        </p>
        <p className={styles.sizeLimit}>Max. File Size: 8MB</p>

        <button className={styles.browseButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0987cc05f2b54e22a01f04a1e711a223/239f7c75b6217de605ca57c8fc37d37ea4dc379f2782e87fa284a3d404739aa3?apiKey=0987cc05f2b54e22a01f04a1e711a223&"
            alt=""
            className={styles.browseIcon}
          />
          Browse Images
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.hiddenInput}
          aria-label="Upload image"
        />
      </div>
    </section>
  );
};
