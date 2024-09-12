import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/about.webp")}
          alt="about me"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Front Developer</h3>
              <p>
                I am a full stack developer with experience in building and
                optimizing websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am backend developer with experience in handling backend
                development, including creating REST APIs and managing data
                using databases.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
