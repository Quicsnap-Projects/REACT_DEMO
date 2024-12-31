import React from "react";
import { CAMERA_ANGLES } from "./CreateModelTypes";
import { useCreateModelStore } from "./CreateModelStore";
import styles from "./CreateModel.module.css";

export const CreateModelAngles = () => {
  const { selectedAngle, setSelectedAngle } = useCreateModelStore();

  return (
    <section className={styles.cameraAngles}>
      <h2 className={styles.title}>Most Common Camera Angles</h2>
      <div className={styles.grid} role="listbox">
        {CAMERA_ANGLES.map((angle) => (
          <button
            key={angle.id}
            className={`${styles.angleButton} ${
              selectedAngle?.id === angle.id ? styles.selected : ""
            }`}
            onClick={() => setSelectedAngle(angle)}
            role="option"
            aria-selected={selectedAngle?.id === angle.id}
          >
            <img
              src={angle.src}
              alt={angle.alt}
              className={styles.angleImage}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
