import React, { useState } from "react";
import { PRODUCT_OPTIONS } from "./CreateModelTypes";
import { useCreateModelStore } from "./CreateModelStore";
import styles from "./CreateModel.module.css";

export const CreateModelProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(["Select Options", "https://cdn.builder.io/api/v1/image/assets/0987cc05f2b54e22a01f04a1e711a223/b7bd24117c8e3b78d93644b232054504ec41f91b31ca279dd1a7db8b90f6b48b?apiKey=0987cc05f2b54e22a01f04a1e711a223&"]); // Track the selected item
  const setSelectedProduct = useCreateModelStore(
    (state) => state.setSelectedProduct
  );

  const handleSelect = (category, value, label) => {
    setSelectedItem([label, selectedItem[1]]); // Update visible selection
    setSelectedProduct({ [category]: value });
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className={styles.productSelector}>
      <h2 className={styles.title}>Product</h2>
      {/* Display selected item */}
      <button
        className={styles.dropdown}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={styles.selectedDisplay}>
        <img
                  src={ selectedItem[1]}
                  alt={"selectedItem"}
                  className={styles.itemIcon}
                />
          <span>{selectedItem[0]}</span>
        </div>
      </button>

      {isOpen && (
        <div className={styles.dropdownContent} role="listbox">
          {PRODUCT_OPTIONS.map((category) =>
            category.options.map((option) => (
              
              <div
                key={option.value}
                className={styles.dropdownItem}
                role="option"
                aria-selected={selectedItem === option.label}
                onClick={() =>
                  handleSelect(category.value, option.value, option.label)
                }
              >
                <img
                  src={
                    option.icon ||
                    "https://cdn.builder.io/api/v1/image/assets/0987cc05f2b54e22a01f04a1e711a223/b7bd24117c8e3b78d93644b232054504ec41f91b31ca279dd1a7db8b90f6b48b?apiKey=0987cc05f2b54e22a01f04a1e711a223&"
                  }
                  alt={option.label}
                  className={styles.itemIcon}
                />
                <span className={styles.itemLabel}>{option.label}</span>
                <span className={styles.itemArrow}>&#8250;</span> {/* Arrow */}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
