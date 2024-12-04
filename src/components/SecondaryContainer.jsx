import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlatingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const popularTVSeries = useSelector(
    (store) => store.tvSeries?.popularTVSeries
  );

  return (
    nowPlatingMovies && (
      <div className=" bg-black md:pl-8">
        <div className="ml-3 mt-0 md:-mt-52 xl:-mt-64 relative z-20 overflow-hidden text-white">
          <MovieList
            title={"Now Playing"}
            movies={nowPlatingMovies}
            cssClass="flex"
            type="movie"
          />
          <MovieList
            title={"Popular Movies"}
            movies={popularMovies}
            cssClass="flex"
            type="movie"
          />
          <MovieList
            title={"Popular TV Series"}
            movies={popularTVSeries}
            cssClass="flex"
            type="tv series"
          />
        </div>

        {/* <p>ERROOOORRR</p> */}
      </div>
    )
  );
};

export default SecondaryContainer;
