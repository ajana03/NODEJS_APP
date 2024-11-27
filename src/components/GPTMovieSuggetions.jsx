import React from "react";

import { useSelector, useDispatch } from "react-redux";

import MovieList from "./MovieList";

import { removeRecommendedMovies } from "../store/gptSlice";

const GPTMovieSuggetions = () => {
  const dispatch = useDispatch();
  const gptResultMovies = useSelector((store) => store.gpt?.gptResultMovies);

  const handleClearResult = () => {
    dispatch(removeRecommendedMovies());
  };

  return (
    gptResultMovies && (
      <div className="bg-black sm:bg-opacity-40 pl-[5%]">
        <div className="flex justify-center">
          <button
            onClick={handleClearResult}
            className="font-xl m-2 py-3 px-3 text-white border rounded-md bg-red-600"
          >
            Clear Results
          </button>
        </div>
        <MovieList
          title="Searched Movies"
          movies={gptResultMovies}
          cssClass="flex flex-wrap"
          type="movie"
        />
      </div>
    )
  );
};

export default GPTMovieSuggetions;
