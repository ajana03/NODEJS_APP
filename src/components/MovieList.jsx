import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, cssClass, type }) => {
  return (
    <div className="py-2">
      {movies && <h1 className="font-bold text-3xl mb-4">{title}</h1>}
      <div className="flex hover:overflow-x-auto">
        <div className={cssClass}>
          {movies?.map((mv) => (
            <MovieCard
              key={mv.id}
              movieId={mv.id}
              title={mv.title || mv.name}
              poster={mv.poster_path}
              type={type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
