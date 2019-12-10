import React, { useEffect, useState } from "react";
import { ModalRoute } from "react-router-modal";
import MovieCarousel from "../../components/Carousel/Carousel";
import Shows from "../../components/Shows/Shows";
import { fetchShows } from "../../services/seriesService";
import Loader from "../../components/Loader/Loader";
import ModalWrapper from "../../components/Modal/Modal";

const Home = props => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = props.match.params;

  useEffect(() => {
    const getShows = async () => {
      setLoading(true);
      const shows = await fetchShows(category);
      setShows(shows);
      setLoading(false);
    };
    getShows();
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MovieCarousel shows={shows} />
      <Shows shows={shows} />
      <ModalRoute
        path={props.match.path + "/auth"}
        parentPath={props.match.url}
        component={ModalWrapper}
      ></ModalRoute>
    </>
  );
};

export default Home;
