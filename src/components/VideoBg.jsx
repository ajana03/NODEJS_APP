import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  // console.log("trailervideod", trailerVideo);

  const youtubeUrl = `https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`;
  // console.log(youtubeUrl);
  return (
    <div className="overflow-x-hidden">
      <iframe
        className="w-screen aspect-video"
        src={youtubeUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBg;
