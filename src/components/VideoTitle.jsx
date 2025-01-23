import { Link } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import { memo } from "react";

const VideoTitle = memo(({ title, overview, movieId }) => {
  const imdbId = useMovieInfo(movieId);

  return (
    <div className=" pt-0 absolute top-[10%] sm:pt-6 sm:pl-12 sm:top-24 sm:right-0 sm:bg-gradient-to-r sm:from-black sm:w-screen sm:aspect-video ">
      <div className="sm:mb-0 mb-24 md:transition lg:w-1/2 xl:w-3/12 md:delay-100 md:hover:scale-110 cursor-pointer ">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold m-4 text-white">
          {title}
        </h1>
        <p className=" md:m-4 hidden lg:inline-block ">{overview}</p>
      </div>

      <div className="p-4 ">
        <Link
          target="_blank"
          to={"https://www.vidbinge.com/browse/" + title}
          className="bg-white hover:bg-gray-400 mr-4 text-black font-bold m py-1.5 px-8 rounded focus:outline-none focus:shadow-outline"
        >
          ▶️Play
        </Link>
        <Link
          to={"https://www.imdb.com/title/" + imdbId}
          target="_blank"
          className="bg-gray-500/50 hover:bg-gray-600/50  text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          More Info
        </Link>
      </div>
    </div>
  );
});

export default VideoTitle;
