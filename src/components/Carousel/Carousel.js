import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Carousel.module.css";

const MovieCarousel = ({ shows }) => {
  return (
    <div className={styles.wrapper}>
      <Carousel controls={false} indicators={false}>
        {shows.map(show => (
          <Carousel.Item key={show.id}>
            <div>
              <img className="d-block w-100" src={show.backdrop_path} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
