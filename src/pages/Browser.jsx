import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div className="">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
