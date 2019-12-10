import React, { useState, useEffect } from "react";
import { fetchSavedShows } from "../../services/seriesService";
import { auth } from "../../services/config";
import Shows from "../Shows/Shows";

const SavedShows = () => {
  const [savedShows, setSavedShows] = useState([]);

  useEffect(() => {
    const getSavedShows = async () => {
      auth.onAuthStateChanged(async user => {
        const savedShows = await fetchSavedShows(user.uid);
        setSavedShows([...savedShows]);
      });
    };
    getSavedShows();
  }, []);

  return (
    <>
      <h4 className="mt-2 text-center">SAVED SHOWS</h4>
      <Shows shows={savedShows} />
    </>
  );
};

export default SavedShows;
