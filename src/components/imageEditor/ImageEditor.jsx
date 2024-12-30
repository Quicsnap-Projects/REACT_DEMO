import React, { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { ProductSection } from "./components/ProductSection";
import { ImageUploader } from "./components/ImageUploader";
import { PromptSection } from "./components/PromptSection";
import { GenerateButton } from "./components/GenerateButton";
import { SelectedGroup } from "./components/SelectedGroup";
import { ImageGroups } from "./components/ImageGroups";
import styles from "./styles/ImageEditor.module.css";

export default function ImageEditor() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(0);

  return (
    <div className={styles.editorContainer}>
      <div className={styles.sidebar}>
        <Header />
        <Navigation />
        <ProductSection />
        <ImageUploader />
        <PromptSection />
        <GenerateButton />
      </div>
      <div className={styles.mainContent}>
        <SelectedGroup
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedGroup={selectedGroup}
        />
        <ImageGroups
          onGroupSelect={setSelectedGroup}
          selectedGroup={selectedGroup}
        />
      </div>
    </div>
  );
};
