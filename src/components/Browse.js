
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import Header from "./Header";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {
useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
