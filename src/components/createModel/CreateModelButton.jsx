import React from "react";
import { useCreateModelStore } from "./CreateModelStore";
import styles from "./CreateModel.module.css";

export const CreateModelButton = () => {
  const { selectedAngle, prompt } = useCreateModelStore();

  const handleCreate = () => {
    if (!selectedAngle || !prompt) {
      alert("Please select a camera angle and enter a prompt");
      return;
    }
    alert("Creating image with selected options...");
  };

  return (
    <button
      className={styles.createButton}
      onClick={handleCreate}
      aria-label="Create image"
    >
      Create
    </button>
  );
};
