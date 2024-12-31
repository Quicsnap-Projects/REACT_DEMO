import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./DropZone.module.css";

const DropZone = ({ onDrop, accept, file, className }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length) {
        onDrop(acceptedFiles[0]);
      }
    },
    [onDrop]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop: handleDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`${styles.dropZone} ${
        isDragActive ? styles.active : ""
      } ${className}`}
    >
      <input {...getInputProps()} />
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className={styles.preview}
        />
      ) : (
        <>
          <img src="/icons/upload.svg" alt="" className={styles.uploadIcon} />
          <p className={styles.dropText}>
            <strong>Click to upload</strong> or drag and drop
          </p>
          <p className={styles.fileLimit}>Max. File Size: 30MB</p>
          <button type="button" className={styles.browseButton}>
            <img src="/icons/browse.svg" alt="" className={styles.buttonIcon} />
            Browse File
          </button>
        </>
      )}
    </div>
  );
};

export default DropZone;
