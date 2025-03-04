import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { fetchFromTMDB } from "../utils/api";

const useBackgroundTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const getMoviesVideo = async () => {
    try {
      const json = await fetchFromTMDB(
        `movie/${movieId}/videos?language=en-US`
      );
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailer(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    !movieTrailer && getMoviesVideo();
  }, [movieId, movieTrailer]);

  return null;
};

export default useBackgroundTrailer;
