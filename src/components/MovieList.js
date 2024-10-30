import MovieCard from "./MovieCard";
import { useRef } from "react";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  if (!movies || movies.length === 0) {
    return <p className="text-white">{title} movies are currently unavailable</p>;
  }

  return (
    <div className="relative space-y-4">
      <h2 className="text-xl lg:text-2xl font-semibold mb-2 text-white px-4">
        {title}
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 text-white"
        aria-label="Scroll Left"
      >
        <span className="text-4xl">‹</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 text-white"
        aria-label="Scroll Right"
      >
        <span className="text-4xl">›</span>
      </button>

      {/* Movie List */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide p-2 px-4"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
