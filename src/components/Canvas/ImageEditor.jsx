import React, { useState } from "react";
import styles from "./styles/ImageEditor.module.css";
import { Sidebar } from "./components/Sidebar";
import { ImageGroup } from "./components/ImageGroup";
import { SelectedGroup } from "./components/SelectedGroup";
import { useImageUpload } from "./hooks/useImageUpload";
import imageUrls from "./constants/images.json";

export default function ImageEditor(){
  const [activeNav, setActiveNav] = useState(2);
  const [brushSize, setBrushSize] = useState(54);
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const { uploadedImage, handleDrop, setUploadedImage } = useImageUpload();

  const handleRatioClick = (ratio) => {
    alert(`Selected aspect ratio: ${ratio}`);
  };

  const handleRetouchClick = () => {
    alert("Retouching image...");
  };

  return (
    <div className={styles.editor}>
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        uploadedImage={uploadedImage}
        handleDrop={handleDrop}
        handleRatioClick={handleRatioClick}
        handleRetouchClick={handleRetouchClick}
      />

      <main className={styles.mainContent}>
        <h1 className={styles.sectionHeader}>Selected Group</h1>
        <SelectedGroup
          images={imageUrls.groups[selectedGroup].images}
          selectedImageIndex={selectedImage}
          onImageSelect={setSelectedImage}
        />

        <h2 className={styles.sectionHeader}>All Image Groups</h2>
        <div className={styles.imageGroupsSlider}>
          {imageUrls.groups.map((group, index) => (
            <ImageGroup
              key={group.id}
              images={group.images}
              isActive={index === selectedGroup}
              onClick={() => setSelectedGroup(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
