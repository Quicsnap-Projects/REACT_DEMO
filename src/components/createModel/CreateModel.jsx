import React from "react";
import { CreateModelHeader } from "./CreateModelHeader";
import { CreateModelNav } from "./CreateModelNav";
import { CreateModelProduct } from "./CreateModelProduct";
import { CreateModelAngles } from "./CreateModelAngles";
import { CreateModelUpload } from "./CreateModelUpload";
import { CreateModelPrompt } from "./CreateModelPrompt";
import { CreateModelButton } from "./CreateModelButton";
import styles from "./CreateModel.module.css";

export default function CreateModel () {
  return (
    <div className={styles.editor}>
      <aside className={styles.sidebar}>
        <CreateModelHeader />
        <CreateModelNav />
        <CreateModelProduct />
        <CreateModelAngles />
        <CreateModelUpload />
        <CreateModelPrompt />
        <footer className={styles.footer}>
          <CreateModelButton />
        </footer>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.canvas}>
          <p className={styles.instruction}>
            Select the properties of the image you want to generate!
          </p>
        </div>
      </main>
    </div>
  );
};
