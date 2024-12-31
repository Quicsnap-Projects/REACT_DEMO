import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductCategories.module.css";

const ProductCategories = ({ onCategoryClick }) => {
  const location = useLocation();
  const categories = ["Controller", "Chair", "Shampoo", "Hair Dryer"];

  return (
    <section className={styles.categories}>
      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              location.pathname.includes(category.toLowerCase())
                ? styles.active
                : ""
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.categoryExamples}>
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <img
              key={index}
              src={`/examples/${location.pathname.split("/").pop()}/${
                index + 1
              }.jpg`}
              alt=""
              className={styles.exampleImage}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductCategories;
