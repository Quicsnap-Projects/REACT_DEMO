import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../styles/ImageEditor.module.css";

export const ImageUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Files dropped:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxSize: 30 * 1024 * 1024, // 30MB
  });

  return (
    <div className={styles.fileUpload} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={styles.dropFilesToUpload}>
        <img src="/icons/upload.svg" alt="Upload" />
        <p>
          <strong>Click to upload</strong> or drag and drop
        </p>
        <span>Max. File Size: 30MB</span>
        <button className={styles.uploadButton}>
          <img src="/icons/upload-button.svg" alt="" />
          Upload Image
        </button>
      </div>
    </div>
  );
};
