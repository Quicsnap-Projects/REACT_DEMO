import React, { useState } from "react";
import styles from "./AccountSettings.module.css";
import TextInput from "./TextInput";

const PersonalInfoForm = ({ personalInfo, onUpdate }) => {
  const [formData, setFormData] = useState(personalInfo);

  const handleChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  function savePersonalInfo() {
    alert("TODO: savePersonalInfo():  small validation & Update in DB........................\n"+JSON.stringify(formData));

  }

  return (
    <form className={styles.formSection} onSubmit={handleSubmit}>
      <div className={styles.fieldGrid}>
        <TextInput
          label="First Name"
          value={formData.firstName}
          style={{  width: '80%', marginLeft: '1%' }}
          onChange={(value) => handleChange("firstName", value)}
        />
        <TextInput
          label="Last Name"
          value={formData.lastName}
          onChange={(value) => handleChange("lastName", value)}
        />
      </div>
      <div className={styles.fieldGrid}>
        <TextInput
          label="Email Address"
          type="email"
          style={{  width: '80%', marginLeft: '1%' }}
          value={formData.email}
          onChange={(value) => handleChange("email", value)}
        />
        <TextInput
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(value) => handleChange("phone", value)}
        />
      </div>
      <button type="submit" className={styles.actionButton} onClick={savePersonalInfo}>
        Save Changes
      </button>
    </form>
  );
};

export default PersonalInfoForm;
