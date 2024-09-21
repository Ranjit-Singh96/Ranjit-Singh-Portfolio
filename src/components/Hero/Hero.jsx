import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.titles}>Hi, I'm Ranjit Singh</h1>
        <p className={styles.description}>
          I'm a full stack developer with 3 years of experience using ReactJS,
          NodeJs and MongoDB. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:singhkvns1@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/ranjit.png")}
        className={styles.heroImg}
        alt="hero image of me"
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
