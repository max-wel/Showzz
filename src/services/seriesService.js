import { instance as http } from "./httpService";
import genres from "./genres";
import { auth, db } from "./config";
import { async } from "q";

const apiKey = process.env.REACT_APP_API_KEY;

const getGenre = genreIDs => {
  const filteredGenres = genres.filter(genre => genreIDs.includes(genre.id));
  return filteredGenres.slice(0, 2);
};

export const fetchShows = async category => {
  const { data } = await http.get(`tv/${category}`, {
    params: {
      api_key: apiKey
    }
  });
  const shows = data.results.map(show => {
    show.poster_path = `https://image.tmdb.org/t/p/w154/${show.poster_path}`;
    show.backdrop_path = `https://image.tmdb.org/t/p/w154/${show.backdrop_path}`;
    show.genres = getGenre(show.genre_ids);
    return show;
  });
  console.log(shows);
  return shows;
};

export const fetchSingleShow = async showId => {
  try {
    const { data: show } = await http.get(`/tv/${showId}`, {
      params: {
        api_key: apiKey,
        append_to_response: "credits,videos"
      }
    });
    if (!show) {
      return false;
    }
    show.poster_path = `https://image.tmdb.org/t/p/w154/${show.poster_path}`;
    show.backdrop_path = `https://image.tmdb.org/t/p/w154/${show.backdrop_path}`;
    show.trailer = `https://www.youtube.com/embed/${show.videos.results[0].key}`;
    return show;
  } catch (error) {
    return false;
  }
};

export const fetchSavedShows = async userId => {
  const savedShows = [];
  const querySnapshot = await db
    .collection("shows")
    .where("userId", "==", userId)
    .get();

  for (const doc of querySnapshot.docs) {
    const show = await fetchSingleShow(doc.data().show);
    savedShows.push(show);
  }

  return savedShows;
};
