import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo, changeMovieTrailerError } from "../store/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  const getVideoBg = async () => {
    try {
      const data = await fetch(URL, API_OPTIONS);
      const json = await data.json();

      const filterTrailer = json?.results?.filter(
        (item) => item.type === "Trailer" || item.name === "Official Trailer"
      );
      const trailer = filterTrailer?.length
        ? filterTrailer[0]
        : json.results[0];

      dispatch(addTrailerVideo(trailer));
      // setTrailerId(key);
    } catch (err) {
      dispatch(changeMovieTrailerError("Trailer can't be fetched"));
    }
  };

  useEffect(() => {
    getVideoBg();
  }, []);
};

export default useMovieTrailer;
