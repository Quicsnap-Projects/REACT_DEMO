import { useState, useCallback } from "react";

export const useImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = useCallback((file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer?.files[0] || e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        handleImageUpload(file);
      }
    },
    [handleImageUpload]
  );

  return {
    uploadedImage,
    handleDrop,
    setUploadedImage,
  };
};
