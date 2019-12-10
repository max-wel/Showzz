import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import cx from "classnames";
import { range } from "lodash";
import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
  const rate = rating / 2;
  const rateInteger = Math.floor(rate);
  const rateDecimal = rate % 1;

  return (
    <div className={styles.rating}>
      {range(rateInteger).map(num => (
        <FaStar key={num} className={styles.ratingStar} />
      ))}
      {rateDecimal >= 0.5 && <FaStarHalf className={styles.ratingStar} />}
      <span className={cx("text-muted", styles.ratingText)}>
        {rate.toFixed(1)}
      </span>
    </div>
  );
};

export default Rating;
