import React from "react";
import styles from "../styles/ImageEditor.module.css";

const groups = Array(7)
  .fill(null)
  .map((_, i) => ({
    id: i,
    images: [
      `/groups/${i}/1.jpg`,
      `/groups/${i}/2.jpg`,
      `/groups/${i}/3.jpg`,
      `/groups/${i}/4.jpg`,
    ],
  }));

export const ImageGroups = ({ onGroupSelect, selectedGroup }) => (
  <>
    <h2 className={styles.sectionTitle}>All Images Groups</h2>
    <div className={styles.groupsGrid}>
      {groups.map((group) => (
        <div
          key={group.id}
          className={`${styles.groupThumbnail} ${
            selectedGroup === group.id ? styles.selected : ""
          }`}
          onClick={() => onGroupSelect(group.id)}
        >
          <div className={styles.groupImages}>
            {group.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Group ${group.id} image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);
