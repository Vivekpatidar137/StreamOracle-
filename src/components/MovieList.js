import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-white">{title} movies are currently unavailable</p>;
  }
  return (
    <div className="space-y-3">
      <h2 className="text-xl lg:text-2xl font-semibold mb-2 p-2 rounded">
        {title}
      </h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
