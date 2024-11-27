import React from "react";
import { useSelector } from "react-redux";

import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;

  const filterBgMovie = nowPlayingMovies.filter(
    (item) => item.vote_average > 6 && item.vote_count > 500
  );

  const len = filterBgMovie?.length;
  const random = (arrLen) => Math.floor(Math.random() * arrLen);
  const bgMovie = filterBgMovie[random(len)];

  const { id, title, overview } = bgMovie;

  return (
    <div className="pt-[65px] sm:pt-[11%] md:pt-0 ">
      <VideoTitle title={title} overview={overview} movieId={id} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
