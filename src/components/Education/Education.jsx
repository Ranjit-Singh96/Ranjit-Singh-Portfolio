import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>
                2016 – 2019 | Chhatrapati Shahu Ji Maharaj University, Kanpur
                Uttar Pradesh{" "}
              </h3>
              <p>Bachelor Of Technology (Information Technology)</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>
                2013 – 2016 | Govt. Polytechnic College, Bareilly Uttar Pradesh
              </h3>
              <p>Diploma In Civil Engineering</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>2011 | BoardofHigherSecondaryEducation, UttarPradesh</h3>
              <p>Intermediate</p>
            </div>
          </li>
        </ul>
        <img
          className={styles.aboutImage}
          src={getImageUrl("history/education.webp")}
          alt="about me"
        />
      </div>
    </section>
  );
};

export default Education;
