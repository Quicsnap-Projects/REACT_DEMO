import React, { useState } from "react";
import styles from "./AccountSettings.module.css";

const PasswordInput = ({ label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.passwordField}>
      <label className={styles.fieldLabel}>{label}</label>
      <div className={styles.passwordInputWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.passwordInput}
          aria-label={label}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.togglePassword}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
