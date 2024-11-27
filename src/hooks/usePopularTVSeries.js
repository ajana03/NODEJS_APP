import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularTVSeries } from "../store/tvSlice";

const usePopularTVSeries = () => {
  const dispatch = useDispatch();

  const popularTVSeries = useSelector(
    (store) => store.tvSeries.popularTVSeries
  );
  const getPopularTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularTVSeries(json.results));
  };

  useEffect(() => {
    !popularTVSeries && getPopularTVSeries();
  }, []);
};

export default usePopularTVSeries;
