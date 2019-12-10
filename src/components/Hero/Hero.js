import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ imageUrl }) => {
  return (
    <div className={styles.hero}>
      <img src={imageUrl} alt="" className={styles.image} />
    </div>
  );
};

export default Hero;
