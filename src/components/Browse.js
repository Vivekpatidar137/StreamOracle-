
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import Header from "./Header";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
