import { useEffect, useState } from "react";
import { fetchFromTMDB } from "../utils/api";

const useFetchDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchDetails = async (movieId) => {
    try {
      const data = await fetchFromTMDB(`movie/${movieId}?language=en-US`);
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
