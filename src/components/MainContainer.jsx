import React from "react";
import { useSelector } from "react-redux";

import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;

  // const filterBgMovie = nowPlayingMovies.filter(
  //   (item) => item.vote_average > 6 && item.vote_count > 900
  // );
  // console.log("bgMovie filterred", filterBgMovie);

  const len = nowPlayingMovies?.length;
  const random = (arrLen) => Math.floor(Math.random() * arrLen);
  const bgMovie = nowPlayingMovies[random(len)];
  const { id, title, overview } = bgMovie;

  return (
    <div className="">
      <VideoTitle title={title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
