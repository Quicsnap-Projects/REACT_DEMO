import React from "react";
import styles from "./ProductNameInput.module.css";

const ProductNameInput = ({ value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.stepIndicator}>1</div>
      <div className={styles.inputWrapper}>
        <label htmlFor="productName" className={styles.label}>
          Name your product
        </label>
        <input
          id="productName"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Ex. Rose Fragrance"
          className={styles.input}
          aria-label="Product name"
        />
      </div>
    </div>
  );
};

export default ProductNameInput;
