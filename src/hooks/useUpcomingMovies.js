import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { fetchFromTMDB } from "../utils/api";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    try {
      const json = await fetchFromTMDB("movie/upcoming?language=en-US&page=1");
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, [upcomingMovies, dispatch]);
};

export default useUpcomingMovies;
