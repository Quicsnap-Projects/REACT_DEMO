import React, { useRef } from "react";
import styles from "../styles/ImageEditor.module.css";
import { NavItem } from "./NavItem";
import imageUrls from "../constants/images.json";
import { navItems, aspectRatios } from "../constants/navItems";

export const Sidebar = ({
  activeNav,
  setActiveNav,
  brushSize,
  setBrushSize,
  uploadedImage,
  handleDrop,
  handleRatioClick,
  handleRetouchClick,
}) => {
  const fileInputRef = useRef(null);

  const handleBrowseClick = (e) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <img src={imageUrls.logo} alt="Logo" className={styles.logo} />
        <img
          src={imageUrls.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
      </header>

      <nav className={styles.navigation}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            {...item}
            isActive={index === activeNav}
            onClick={() => setActiveNav(index)}
          />
        ))}
      </nav>

      <section className={styles.aspectRatioSection}>
        <h2 className={styles.sectionTitle}>Aspect Ratio</h2>
        <div className={styles.ratioGrid}>
          {aspectRatios.map((ratio, index) => (
            <button
              key={index}
              className={
                index === 0 ? styles.ratioButtonActive : styles.ratioButton
              }
              onClick={() => handleRatioClick(ratio)}
              aria-label={`Select aspect ratio ${ratio}`}
            >
              {ratio}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.uploadSection}>
        <div className={styles.uploadHeader}>
          <h2 className={styles.sectionTitle}>
            Image Reference{" "}
            <span className={styles.uploadOptional}>(Optional)</span>
          </h2>
        </div>

        <div
          className={styles.dropzone}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && fileInputRef.current?.click()}
          aria-label="Upload image area"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleDrop(e)}
            accept="image/*"
            style={{ display: "none" }}
            aria-label="File input"
          />
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded preview"
              style={{ maxWidth: "100%", maxHeight: "100px" }}
            />
          ) : (
            <div className={styles.dropzoneContent}>
              <img
                src={imageUrls.icons.upload}
                alt=""
                className={styles.uploadIcon}
              />
              <p className={styles.uploadText}>
                <strong>Click to upload</strong> or drag and drop
              </p>
              <p className={styles.uploadLimit}>Max. File Size: 8MB</p>
            </div>
          )}
          <button
            className={styles.browseButton}
            onClick={handleBrowseClick}
            aria-label="Browse images"
          >
            <img
              src={imageUrls.icons.browse}
              alt=""
              className={styles.browseIcon}
            />
            Browse Images
          </button>
        </div>
      </section>

      <section className={styles.brushSection}>
        <h2 className={styles.sectionTitle}>Brush Size</h2>
        <div className={styles.slider}>
          <input
            type="range"
            min="1"
            max="100"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
            className={styles.sliderInput}
            aria-label="Brush size slider"
          />
          <span className={styles.sliderValue}>{brushSize}</span>
        </div>
      </section>

      <section className={styles.promptSection}>
        <h2 className={styles.sectionTitle}>Prompt</h2>
        <textarea
          className={styles.promptInput}
          placeholder="Ex. Product image with aesthetic lighting..."
          aria-label="Prompt input"
        />
      </section>

      <button
        className={styles.retouchButton}
        onClick={handleRetouchClick}
        aria-label="Retouch image"
      >
        Retouch
      </button>
    </aside>
  );
};
