import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="min-w-[10rem] transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        src={IMAGE_CDN_URL + poster}
        alt="movie poster"
        className="w-full h-full rounded-md shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
