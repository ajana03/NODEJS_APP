import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../store/movieSlice";
import { addPopularTVSeries } from "../store/tvSlice";
import { changeError } from "../store/configSlice";

const useDataFetch = () => {
  const dispatch = useDispatch();
  const popularTVSeries = useSelector(
    (store) => store.tvSeries.popularTVSeries
  );
  const urls = [
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    "https://api.themoviedb.org/3/movie/popular",
    "https://api.themoviedb.org/3/tv/popular?page=1",
  ];

  const getData = async () => {
    try {
      const data = urls.map((u) =>
        fetch(u, API_OPTIONS).then((res) => res.json())
      );

      const result = await Promise.allSettled(data);
      const filterRes = result.map(
        (res) => res.status === "fulfilled" && res.value.results
      );

      dispatch(addNowPlayingMovies(filterRes[0]));
      dispatch(addPopularMovies(filterRes[1]));
      dispatch(addPopularTVSeries(filterRes[2]));
    } catch (err) {
      dispatch(changeError(err));
    }
  };
  useEffect(() => {
    !popularTVSeries && getData();
  }, []);
};

export default useDataFetch;
