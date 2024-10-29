import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
