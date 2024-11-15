import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import Header from "./Header";
import MainContainer from "./MainContainer.js";
import RecommendedByAI from "./RecommendedByAI.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {
  const showAiSearchView = useSelector(
    (store) => store.oracleAi.showAiSearch
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="overflow-x-hidden">
      <Header />
      {showAiSearchView ? (
        <RecommendedByAI />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
