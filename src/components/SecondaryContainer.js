import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { SectionShimmer } from "./Shimmer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const isLoading =
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.topRatedMovies ||
    !movies.upcomingMovies;

  if (isLoading) return <SectionShimmer />;

  return (
    <div className="bg-black">
      <div className="relative z-10 lg:-mt-48 space-y-8 px-4 lg:px-10 text-white">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
