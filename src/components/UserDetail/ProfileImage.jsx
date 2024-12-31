import React, { useRef } from "react";
import styles from "./AccountSettings.module.css";

const ProfileImage = ({ image, onImageUpdate }) => {
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpdate(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.profileImageContainer}>
      <img
        src={image}
        alt="Profile"
        className={styles.profileImage}
        onClick={() => fileInputRef.current?.click()}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.imageInput}
        aria-label="Upload profile picture"
      />
      {/* <button
        type="button"
        className={styles.uploadButton}
        onClick={() => fileInputRef.current?.click()}
      >
        Change Photo
      </button> */}
    </div>
  );
};

export default ProfileImage;
