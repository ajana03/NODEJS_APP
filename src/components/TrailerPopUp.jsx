import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
import useMovieInfo from "../hooks/useMovieInfo";
import { Link } from "react-router-dom";

import { CiCircleInfo } from "react-icons/ci";

const TrailerPopUp = ({ id, setIsTrailerOpen, type, title }) => {
  useTrailer(id, type);
  const { imdbId, infoError } = useMovieInfo(id);

  const trailer = useSelector((store) => store.tvSeries?.trailer);

  const youtubeUrl = `https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`;

  const handleClose = () => {
    setIsTrailerOpen();
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 z-[100] bg-black bg-opacity-40">
      <span
        className="absolute left-[90%] top-[10%] sm:left-[90%] sm:top-[10%] lg:top-[20px] lg:left-[75%] text-[50px] font-bold cursor-pointer text-white"
        onClick={handleClose}
      >
        &times;
      </span>

      <iframe
        className="w-[450px] h-[300px] sm:w-[600px] sm:h-[450px] lg:w-[750px] lg:h-[500px] object-cover absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 border rounded-md"
        src={youtubeUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      {!trailer && (
        <span className="absolute top-[55%] md:top-[400px] xl:top-[50%] left-[40%] text-[10px] sm:text-[20px] md:text-[30px] xl:text-[50px] font-bold cursor-pointer text-white">
          No Video to show
        </span>
      )}
      <div className="flex justify-centerp-4 absolute top-[73%] left-[20%] sm:top-[85%] md:top-[87%] sm:left-[30%] md:left-[40%] bg-gray-800 p-4 rounded-md  ">
        <Link
          target="_blank"
          to={"https://www.vidbinge.com/browse/" + title}
          className="bg-white hover:bg-gray-400 mr-4 text-black font-bold m py-1.5 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          ▶️Play
        </Link>
        {type === "movie" && (
          <Link
            to={"https://www.imdb.com/title/" + imdbId}
            target="_blank"
            className="flex justify-center bg-gray-500/50 hover:bg-gray-600/50  text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <span className="mt-0.5">
              <CiCircleInfo color="white" size={20} />
            </span>
            <span className="ml-2">{!infoError ? "Info" : infoError}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TrailerPopUp;
