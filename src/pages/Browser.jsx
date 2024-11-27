import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

import Error from "../components/Error";

import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import GPTSearch from "./GPTSearch";

const Browser = () => {
  const toggle = useSelector((store) => store.gpt.toggle);

  useNowPlayingMovies();
  usePopularMovies();
  usePopularTVSeries();

  return (
    <div className="z-10">
      {toggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
