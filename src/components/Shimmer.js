export const HeroShimmer = () => {
  return (
    <div className="w-full h-[90vh] bg-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-700 to-black opacity-60" />
      <div className="absolute bottom-20 left-10 text-white space-y-4 max-w-2xl">
        <div className="h-10 w-3/4 bg-zinc-600 animate-pulse rounded" />
        <div className="h-5 w-full bg-zinc-700 animate-pulse rounded" />
        <div className="h-5 w-2/3 bg-zinc-700 animate-pulse rounded" />
      </div>
    </div>
  );
};

export const SectionShimmer = () => {
  const shimmerRows = Array(4).fill(0);
  const shimmerCards = Array(6).fill(0);

  return (
    <div className="bg-black px-4 lg:px-10 space-y-12 py-10">
      {shimmerRows.map((_, rowIdx) => (
        <div key={rowIdx} className="space-y-4">
          <div className="h-6 w-48 bg-zinc-700 rounded animate-pulse" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {shimmerCards.map((_, cardIdx) => (
              <div
                key={cardIdx}
                className="w-full aspect-[2/3] bg-zinc-800 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const AiCardShimmer = () => (
  <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl border-2 border-transparent">
    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="min-w-[8rem] sm:min-w-[10rem] md:min-w-[12rem] lg:min-w-[14rem] h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-700 rounded-md animate-pulse"
        ></div>
      ))}
    </div>
  </div>
);
