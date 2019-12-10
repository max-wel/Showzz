import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { auth, db } from "../../services/config";
import { FaRegSave } from "react-icons/fa";
import cx from "classnames";
import styles from "./Show.module.css";
import Rating from "../Rating/Rating";

const Show = ({ show, history, match }) => {
  const handleMovieSelect = useCallback(showId => {
    history.push(`/movie/${showId}`);
  });

  const handleSave = useCallback(showId => {
    auth.onAuthStateChanged(async user => {
      if (!user) {
        history.push(`${match.url}/auth`);
      } else {
        // show saved movie toast and save movie
        console.log("here");
        // check if movie has been saved
        const querySnapshot = await db
          .collection("shows")
          .where("show", "==", showId)
          .get();
        if (querySnapshot.empty) {
          db.collection("shows").add({
            userId: user.uid,
            show: showId
          });
        }
      }
    });
  });

  return (
    <div
      className="card"
      style={{
        maxWidth: "40rem",
        height: "150px",
        border: "none",
        backgroundColor: "transparent"
      }}
    >
      <div className="row no-gutters">
        <div
          className="col-4 col-lg-3"
          style={{ height: "150px", overflow: "hidden" }}
          onClick={() => handleMovieSelect(show.id)}
        >
          <img className={styles.image} src={show.poster_path} alt="" />
        </div>
        <div className="col-8">
          <div className={styles.cardBody}>
            <p
              className={styles.title}
              onClick={() => handleMovieSelect(show.id)}
            >
              {show.name}
            </p>
            <Rating rating={show.vote_average} />

            <div className={cx("card-text", "text-muted", styles.genre)}>
              {/* {show.genres.map((genre, index, array) => (
                <span key={genre.id}>
                  {genre.name}
                  {index !== array.length - 1 && ", "}
                </span>
              ))} */}
              {show.genres && show.genres[0].name}
            </div>
            <FaRegSave
              size={20}
              onClick={() => handleSave(show.id)}
              className="text-muted"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Show);
