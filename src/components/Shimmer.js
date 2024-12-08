const Shimmer = () => {
  return (
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
};

export default Shimmer;
