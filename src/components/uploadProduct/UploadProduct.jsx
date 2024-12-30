import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UploadProduct.module.css";
import ProductHeader from "./ProductHeader";
import ProductNavigation from "./ProductNavigation";
import Guidelines from "./Guidelines";
import ProductCategories from "./ProductCategories";
import ImageUploader from "./ImageUploader";
import ProductNameInput from "./ProductNameInput";

const UploadProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productImages, setProductImages] = useState(Array(12).fill(null));
  const [labelImage, setLabelImage] = useState(null);

  const handleCategoryClick = (category) => {
    navigate(`/upload/${category.toLowerCase()}`);
  };

  const handleStartTraining = () => {
    if (!productName || productImages.every((img) => !img) || !labelImage) {
      return;
    }
    navigate("/training");
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <ProductHeader />
        <ProductNavigation />
        <Guidelines />
        <ProductCategories onCategoryClick={handleCategoryClick} />
      </div>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Upload Images for One Product</h1>
        <ProductNameInput
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div className={styles.uploadSection}>
          <ImageUploader
            images={productImages}
            setImages={setProductImages}
            labelImage={labelImage}
            setLabelImage={setLabelImage}
          />
        </div>
        <div className={styles.trainingSection}>
          <div className={styles.trainingInfo}>
            <h2>Train Your Product</h2>
            <p>We'll notify you by email once it's finished.</p>
          </div>
          <button
            className={styles.startTrainingButton}
            onClick={handleStartTraining}
            disabled={
              !productName || productImages.every((img) => !img) || !labelImage
            }
          >
            <img src="/icons/training.svg" alt="" />
            Start Training
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
