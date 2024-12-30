import React, { useState } from "react";
import styles from "../styles/ImageEditor.module.css";

export const PromptSection = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className={styles.promptSection}>
      <h2 className={styles.sectionTitle}>Prompt</h2>
      <textarea
        className={styles.promptInput}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ex. Product image with aesthetic lighting..."
      />
    </div>
  );
};
