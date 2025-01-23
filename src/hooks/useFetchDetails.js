import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useFetchDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchDetails = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDetails(id); // Fetch details only if `id` is provided
    }
  }, [id]);

  return movieDetails;
};

export default useFetchDetails;
