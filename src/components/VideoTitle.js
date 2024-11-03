import playButton from "../myAssets/play-button-arrowhead.png";
import moreInfo from "../myAssets/info.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-24 left-5 sm:left-8 md:left-10 lg:left-16 xl:left-20 text-white z-10 space-y-3 sm:space-y-4 max-w-xl sm:max-w-2xl">
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
        {title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-lg max-w-xs sm:max-w-md md:max-w-lg text-gray-300">
        {overview}
      </p>
      <div className="flex gap-2 sm:gap-1 md:gap-4 mt-2 sm:mt-3 md:mt-4">
        <button className="bg-white text-black font-semibold px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-md hover:bg-gray-200 transition duration-200 flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg">
          <img className="w-4 h-4 sm:w-5 sm:h-5" src={playButton} alt="Play Button" />
          <span className="text-sm sm:text-base">Play</span>
        </button>
        <button className="bg-gray-700 text-white font-semibold px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-md hover:bg-gray-600 transition duration-200 flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg bg-opacity-90">
          <img className="w-4 h-4 sm:w-5 sm:h-5 filter invert" src={moreInfo} alt="More Info" />
          <span className="text-sm sm:text-base">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
