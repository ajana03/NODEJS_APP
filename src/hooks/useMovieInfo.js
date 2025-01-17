import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieInfo = (movieId) => {
  const [imdbId, setImdbId] = useState(null);
  const URL = "https://api.themoviedb.org/3/movie/" + movieId;

  const getMovieInfo = async () => {
    try {
      const data = await fetch(URL, API_OPTIONS);
      const json = await data.json();
      const { imdb_id } = json;
      setImdbId(imdb_id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return imdbId;
};

export default useMovieInfo;
