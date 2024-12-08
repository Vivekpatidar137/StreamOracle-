import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const AiMovieSuggestions = () => {
  const { moviesData, loading } = useSelector((store) => store.oracleAi);

  if (loading) {
    return <Shimmer />;
  }

  if (!moviesData) return null;

  return (
    <div
      className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl 
                   border-2 border-transparent"
    >
      <MovieList movies={moviesData} />
    </div>
  );
};

export default AiMovieSuggestions;
