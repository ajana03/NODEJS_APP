import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, poster }) => {
  return (
    <div className="text-white m-2 w-48 cursor-pointer transition delay-100 hover:scale-95 hover:border border-white rounded">
      <img
        src={IMG_CDN_URL + poster}
        alt={title + " IMG"}
        className="rounded"
      />
      <h4 className="text-center">{title}</h4>
    </div>
  );
};

export default MovieCard;
