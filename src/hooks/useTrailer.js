import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../store/tvSlice";

const useTrailer = (id, type) => {
  const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState();
  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const URL =
    type === "movie"
      ? `https://api.themoviedb.org/3/movie/${id}/videos`
      : `https://api.themoviedb.org/3/tv/${id}/videos`;

  const getTrailerVideo = async () => {
    try {
      const data = await fetch(URL, API_OPTIONS);
      const json = await data.json();

      const filterTrailer = json?.results?.filter(
        (item) => item.type === "Trailer" || item.name === "Official Trailer"
      );
      const trailervid = filterTrailer?.length
        ? filterTrailer[0]
        : json.results[0];

      dispatch(addtrailer(trailervid));
      // setTrailerId(key);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useTrailer;
