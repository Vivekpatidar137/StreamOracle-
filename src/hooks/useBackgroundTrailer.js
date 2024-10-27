import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useBackgroundTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useBackgroundTrailer;
