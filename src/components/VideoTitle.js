const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-24 left-10 lg:left-16 xl:left-20 text-white z-10 space-y-4 max-w-2xl">
      <h1 className="font-extrabold text-4xl lg:text-6xl leading-tight">
        {title}
      </h1>
      <p className="text-base lg:text-lg max-w-lg text-gray-300">
        {overview}
      </p>
      <div className="flex gap-4 mt-4">
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition duration-200">
          Play
        </button>
        <button className="bg-gray-600 bg-opacity-80 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-500 transition duration-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
