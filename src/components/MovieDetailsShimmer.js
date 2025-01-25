const MovieDetailsShimmer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen animate-pulse">
      {/* Backdrop Shimmer */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gray-700 blur-sm scale-110"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content Shimmer */}
      <div className="container mx-auto px-6 py-12 relative -mt-24 md:-mt-40 z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Poster Shimmer */}
          <div className="md:w-1/3 shadow-lg rounded-lg overflow-hidden bg-gray-700 h-96"></div>

          {/* Movie Info Shimmer */}
          <div className="md:w-2/3 space-y-6">
            {/* Title Shimmer */}
            <div className="h-10 bg-gray-700 rounded w-3/4"></div>
            {/* Tagline Shimmer */}
            <div className="h-6 bg-gray-700 rounded w-1/2"></div>

            {/* Genres Shimmer */}
            <div className="flex flex-wrap gap-4 pt-3">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/70 text-sm font-medium px-6 py-3 rounded-full backdrop-blur-sm w-20 h-8"
                  ></div>
                ))}
            </div>

            {/* Overview Shimmer */}
            <div className="space-y-4">
              <div className="h-6 bg-gray-700 rounded w-full"></div>
              <div className="h-6 bg-gray-700 rounded w-5/6"></div>
              <div className="h-6 bg-gray-700 rounded w-2/3"></div>
            </div>

            {/* Stats Shimmer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition space-y-3"
                  >
                    <div className="h-10 w-10 bg-gray-700 rounded-full"></div>
                    <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
                    <div className="h-6 w-1/3 bg-gray-700 rounded"></div>
                  </div>
                ))}
            </div>

            {/* Production Companies Shimmer */}
            <div className="space-y-4 mt-8">
              <div className="h-6 bg-gray-700 rounded w-1/3"></div>
              <div className="flex flex-wrap gap-4">
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-20"></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsShimmer;
