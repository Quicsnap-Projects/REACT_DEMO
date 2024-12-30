import React, { useState } from "react";
import styles from "../styles/ImageEditor.module.css";

const products = [
  { id: 1, name: "Product 1", image: "/products/1.jpg" },
  { id: 2, name: "Product 2", image: "/products/2.jpg" },
  { id: 3, name: "Product 3", image: "/products/3.jpg" },
];

export const ProductSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Product</h2>
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.dropdownContent}>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className={styles.dropdownImage}
          />
          <span>{selectedProduct.name}</span>
        </div>
        <img
          src="/icons/arrow.svg"
          alt="Toggle dropdown"
          className={styles.dropdownArrow}
          style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
        />
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.dropdownItem}
              onClick={() => {
                setSelectedProduct(product);
                setIsOpen(false);
              }}
            >
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
