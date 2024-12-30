import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './ImageUploader.module.css';

const ImageUploader = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [labelImage, setLabelImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const newImages = [...uploadedImages];
    acceptedFiles.forEach((file, index) => {
      if (newImages.length < 12) {
        newImages.push({
          file,
          preview: URL.createObjectURL(file)
        });
      }
    });
    setUploadedImages(newImages);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: true,
    maxFiles: 12
  });

  const onLabelDrop = (acceptedFiles) => {
    if (acceptedFiles?.[0]) {
      setLabelImage({
        file: acceptedFiles[0],
        preview: URL.createObjectURL(acceptedFiles[0])
      });
    }
  };

  const { getRootProps: getLabelRootProps, getInputProps: getLabelInputProps } = useDropzone({
    onDrop: onLabelDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: false
  });

  return (
    <div className={styles.uploaderContainer}>
      <div className={styles.productImages}>
        <h3 className={styles.sectionTitle}>Product Images</h3>
        <p className={styles.sectionDescription}>
          Product in focus, from different angles in different lighting conditions.
        </p>
        <div className={styles.imageGrid}>
          <div
            {...getRootProps()}
            className={`${styles.dropZone} ${isDragActive ? styles.active : ''}`}
          >
            <input {...getInputProps()} />
            <div className={styles.uploadIcon}>+</div>
            <p className={styles.dropText}>
              <strong>Click to upload</strong> or drag and drop
            </p>
            <p className={styles.fileLimit}>Max. File Size: 30MB</p>
          </div>
          {Array(11).fill(null).map((_, index) => (
            <div
              key={`empty-${index}`}
              className={`${styles.imageBox} ${uploadedImages[index + 1] ? styles.filled : ''}`}
            >
              {uploadedImages[index + 1] && (
                <img
                  src={uploadedImages[index + 1].preview}
                  alt={`Product ${index + 2}`}
                  className={styles.uploadedImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.labelImage}>
        <h3 className={styles.sectionTitle}>Product Label</h3>
        <p className={styles.sectionDescription}>Product Label of this SKU</p>
        <div
          {...getLabelRootProps()}
          className={styles.labelDropZone}
        >
          <input {...getLabelInputProps()} />
          {labelImage ? (
            <img
              src={labelImage.preview}
              alt="Product Label"
              className={styles.labelPreview}
            />
          ) : (
            <>
              <div className={styles.uploadIcon}>+</div>
              <p className={styles.dropText}>
                <strong>Click to upload</strong> or drag and drop
              </p>
              <p className={styles.fileLimit}>Max. File Size: 30MB</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;