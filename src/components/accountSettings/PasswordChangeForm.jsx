import React, { useState } from "react";
import styles from "./AccountSettings.module.css";
import PasswordInput from "./PasswordInput";

const PasswordChangeForm = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setPasswords((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword === passwords.confirmPassword) {
      console.log("Password update logic here");
    }
  };

  function savePasswordInfo() {
    alert("TODO: savePasswordInfo(): password validation & Update in DB........................\n"+JSON.stringify(passwords));

  }

  return (
    <form className={styles.passwordContainer} onSubmit={handleSubmit}>
      <PasswordInput
        label="Old Password"
        value={passwords.oldPassword}
        onChange={(value) => handleChange("oldPassword", value)}
      />
      <PasswordInput
        label="New Password"
        value={passwords.newPassword}
        onChange={(value) => handleChange("newPassword", value)}
      />
      <PasswordInput
        label="Confirm New Password"
        value={passwords.confirmPassword}
        onChange={(value) => handleChange("confirmPassword", value)}
      />
      <button type="submit" className={styles.actionButton}  onClick={savePasswordInfo}>
        Reset Password
      </button>
    </form>
  );
};

export default PasswordChangeForm;
