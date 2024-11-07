import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  const getVideoBg = async () => {
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);

    const filterTrailer = json?.results?.filter(
      (item) => item.type === "Trailer" || item.name === "Official Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // setTrailerId(key);
  };

  useEffect(() => {
    getVideoBg();
  }, []);
};

export default useMovieTrailer;
