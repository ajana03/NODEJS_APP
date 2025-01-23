import { useSelector } from "react-redux";

import Error from "../components/Error";

import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";

import GPTSearch from "./GPTSearch";
import Spinner from "../components/Spinner";
import useDataFetch from "../hooks/useDataFetch";

const Browser = () => {
  const toggle = useSelector((store) => store.gpt.toggle);
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useDataFetch();

  if (!nowPlayingMovies) return <Spinner />;

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
