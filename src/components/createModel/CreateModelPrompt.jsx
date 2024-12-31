import React from "react";
import { useCreateModelStore } from "./CreateModelStore";
import styles from "./CreateModel.module.css";

export const CreateModelPrompt = () => {
  const { prompt, setPrompt } = useCreateModelStore();

  return (
    <section className={styles.promptInput}>
      <h2 className={styles.title}>Prompt</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ex. Product image with aesthetic lighting..."
        className={styles.textarea}
        aria-label="Image generation prompt"
      />
    </section>
  );
};
