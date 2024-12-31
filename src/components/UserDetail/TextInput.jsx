import React from "react";
import styles from "./AccountSettings.module.css";

const TextInput = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className={styles.infoField}>
      <label className={styles.fieldLabel}>{label}</label>
      <input
        type={type}
        className={styles.fieldValue}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
    </div>
  );
};

export default TextInput;
