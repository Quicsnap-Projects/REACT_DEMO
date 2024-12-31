import React, { useState } from "react";
import styles from "./AccountSettings.module.css";
import PersonalInfoForm from "./PersonalInfoForm";
import PasswordChangeForm from "./PasswordChangeForm";
import ProfileImage from "./ProfileImage";

const AccountSettings = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Devesh",
    lastName: "Dhote",
    email: "DeveshDhote@example.com",
    phone: "+91 9876543211",
  });

  const [profileImage, setProfileImage] = useState(
    "https://cdn.builder.io/api/v1/image/assets/0987cc05f2b54e22a01f04a1e711a223/e8837f521da41f7eb8f19a2c4e374463ad6b85a7b1c843c2f5f05366ed1df99e?apiKey=0987cc05f2b54e22a01f04a1e711a223&"
  );

  const handleInfoUpdate = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  };

  const handleImageUpdate = (newImage) => {
    setProfileImage(newImage);
  };

  return (
    <main className={styles.accountSection}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>My Account</h1>
        <hr className={styles.divider} />

        <section className={styles.personalInfo}>
          <h2 className={styles.sectionTitle}>Personal Information</h2>
          <div className={styles.infoContainer}>
            <PersonalInfoForm
              personalInfo={personalInfo}
              onUpdate={handleInfoUpdate}
            />
            <ProfileImage
              image={profileImage}
              onImageUpdate={handleImageUpdate}
            />
          </div>
        </section>

        <hr className={styles.divider} />

        <section className={styles.passwordSection}>
          <h2 className={styles.sectionTitle}>Change Password</h2>
          <PasswordChangeForm />
        </section>
      </div>
    </main>
  );
};

export default AccountSettings;
