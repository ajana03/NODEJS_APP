import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlatingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  return (
    nowPlatingMovies && (
      <div className="bg-black pl-10">
        <div className="-mt-64 relative z-30 overflow-hidden">
          <MovieList title={"Now Playing"} movies={nowPlatingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
        </div>

        {/* <p>ERROOOORRR</p> */}
      </div>
    )
  );
};

export default SecondaryContainer;
