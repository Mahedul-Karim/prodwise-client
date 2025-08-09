import React from "react";
import styles from "./Toggle.module.css";
import { useProvider } from "@/store/Provider";

const Toggle = () => {
  const { theme, setTheme } = useProvider();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <label className={styles.switch}>
      <input
        id={styles.input}
        type="checkbox"
        onChange={handleTheme}
        checked={theme === "dark"}
      />
      <div className={`${styles.slider} ${styles.round}`}>
        <div className={styles["sun-moon"]}>
          <svg
            id={styles["moon-dot-1"]}
            className={styles["moon-dot"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["moon-dot-2"]}
            className={styles["moon-dot"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["moon-dot-3"]}
            className={styles["moon-dot"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["light-ray-1"]}
            className={styles["light-ray"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["light-ray-2"]}
            className={styles["light-ray"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["light-ray-3"]}
            className={styles["light-ray"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>

          <svg
            id={styles["cloud-1"]}
            className={styles["cloud-dark"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["cloud-2"]}
            className={styles["cloud-dark"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["cloud-3"]}
            className={styles["cloud-dark"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["cloud-4"]}
            className={styles["cloud-light"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["cloud-5"]}
            className={styles["cloud-light"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg
            id={styles["cloud-6"]}
            className={styles["cloud-light"]}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
        </div>
        <div className={styles.stars}>
          <svg
            id={styles["star-1"]}
            className={styles.star}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg
            id={styles["star-2"]}
            className={styles.star}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg
            id={styles["star-3"]}
            className={styles.star}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
          <svg
            id={styles["star-4"]}
            className={styles.star}
            viewBox="0 0 20 20"
          >
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
        </div>
      </div>
    </label>
  );
};

export default Toggle;
