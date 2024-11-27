import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

import TrailerPopUp from "./TrailerPopUp";

const MovieCard = ({ title, poster, movieId, type }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const handleIsTrailerOpen = () => {
    setIsTrailerOpen((tr) => !tr);
  };
  return (
    <>
      <div
        onClick={handleIsTrailerOpen}
        className="m-2 w-48 cursor-pointer sm:transition sm:delay-100 sm:hover:scale-95 hover:border border-white rounded"
      >
        <img
          src={IMG_CDN_URL + poster}
          alt={title + " IMG"}
          className="rounded"
        />
        <h4 className="text-center text-lg">{title}</h4>
      </div>
      {isTrailerOpen && (
        <TrailerPopUp
          id={movieId}
          setIsTrailerOpen={setIsTrailerOpen}
          type={type}
          title={title}
        />
      )}
    </>
  );
};

export default MovieCard;
