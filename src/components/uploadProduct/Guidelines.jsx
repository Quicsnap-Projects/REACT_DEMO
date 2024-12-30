import React from "react";
import styles from "./Guidelines.module.css";

const Guidelines = () => {
  const guidelines = [
    {
      icon: "/icons/check.svg",
      text: "Show photos demonstrating natural product usage in context.",
    },
    {
      icon: "/icons/check.svg",
      text: "You can also take photos from your phone.",
    },
    {
      icon: "/icons/check.svg",
      text: "Most images should show the whole product.",
    },
    {
      icon: "/icons/cross.svg",
      text: "Do not upload images for multiple products.",
    },
  ];

  return (
    <section className={styles.guidelines}>
      <h2 className={styles.title}>Guidelines</h2>
      <ul className={styles.list}>
        {guidelines.map((guideline, index) => (
          <li key={index} className={styles.item}>
            <img src={guideline.icon} alt="" className={styles.icon} />
            <p className={styles.text}>{guideline.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Guidelines;
