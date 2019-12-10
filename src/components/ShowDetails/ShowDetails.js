import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";
import Show from "../Show/Show";
import Hero from "../Hero/Hero";
import { fetchSingleShow } from "../../services/seriesService";
import styles from "./ShowDetails.module.css";
import Loader from "../Loader/Loader";

const ShowDetails = props => {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      const { id: showId } = props.match.params;
      setLoading(true);
      const show = await fetchSingleShow(showId);
      if (!show) {
        props.history.push("/");
        return;
      }
      setShow(show);
      setLoading(false);
    };
    fetchShow();
  }, [0]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero imageUrl={show.backdrop_path} />

      <Container>
        <Row>
          <Col md={7} className="p-0">
            <section className={styles.section}>
              <Show show={show} />
              <article className={styles.article}>
                <h3 className={styles.title}>Synopsis</h3>
                <p>{show.overview}</p>
              </article>
              <article className={styles.article}>
                <h3 className={styles.title}>Trailers</h3>
                <Row>
                  <Col>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src={show.trailer}
                      ></iframe>
                    </div>
                  </Col>
                </Row>
              </article>
            </section>
          </Col>

          <Col md={5} className={styles.cast}>
            <h3 className={cx("my-3", styles.title)}>Cast</h3>

            {show.credits &&
              show.credits.cast.map(item => (
                <Card className="border-0 mb-4" key={item.id}>
                  <Row noGutters={true}>
                    <Col xs={3} lg={2}>
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w154/${item.profile_path}`}
                        className="rounded-circle d-inline-block"
                        style={{ width: "5rem", height: "5rem" }}
                      ></Card.Img>
                    </Col>
                    <Col xs={9}>
                      <Card.Body className="pt-0">
                        <Card.Title className={styles.castName}>
                          {item.name}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          {item.character}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowDetails;
