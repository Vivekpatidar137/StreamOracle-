import { useSelector } from "react-redux";
import playButton from "../myAssets/play-button-arrowhead.png";
import moreInfo from "../myAssets/info.png";

const VideoTitle = ({ title, overview }) => {
  const currentTrailer = useSelector((store) => store.movies?.movieTrailer);
  const movieKey = currentTrailer?.key;

  const handlePlayClick = () => {
    if (movieKey) {
      window.open(`https://www.youtube.com/watch?v=${movieKey}`, "_blank");
    }
  };

  return (
    <div className="absolute top-1/2 sm:top-1/3 md:top-1/4 lg:top-1/3 left-4 sm:left-6 md:left-8 lg:left-10 text-white z-30">
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-3xl lg:text-5xl leading-tight">
        {title}
      </h1>
      <p className="hidden sm:block text-sm sm:text-base md:text-sm lg:text-lg max-w-xs sm:max-w-md md:max-w-sm lg:max-w-lg text-gray-300">
        {overview}
      </p>
      <div className="flex gap-2 sm:gap-1 md:gap-3 lg:gap-4 mt-2 sm:mt-3 md:mt-3 lg:mt-4">
        <button
          onClick={handlePlayClick}
          className="bg-white text-black font-semibold px-4 py-1 sm:px-5 sm:py-2 md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-md hover:bg-gray-200 transition duration-200 flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg"
        >
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4"
            src={playButton}
            alt="Play Button"
          />
          <span className="text-sm sm:text-base md:text-sm lg:text-base">
            Play
          </span>
        </button>
        <button className="bg-gray-700 text-white font-semibold px-4 py-1 sm:px-5 sm:py-2 md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-md hover:bg-gray-600 transition duration-200 flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-2 shadow-md hover:shadow-lg bg-opacity-90">
          <img
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 filter invert"
            src={moreInfo}
            alt="More Info"
          />
          <span className="text-sm sm:text-base md:text-sm lg:text-base">
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
