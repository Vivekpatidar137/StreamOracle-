import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { fetchFromTMDB } from "../utils/api";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const json = await fetchFromTMDB("movie/popular?language=en-US&page=1");
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [popularMovies, dispatch]);
};

export default usePopularMovies;
