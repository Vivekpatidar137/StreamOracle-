import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { addAiResult, setLoading } from "../utils/aiSlice";
import { fetchFromGemini, fetchFromTMDB } from "../utils/api";

const AiSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchTMDBMovies = async (movie) => {
    try {
      const json = await fetchFromTMDB(
        `search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`
      );
      return json;
    } catch (error) {
      console.error("Error fetching TMDB movies:", error);
      return { results: [] };
    }
  };

  const handleAiSearch = async () => {
    try {
      dispatch(setLoading(true));
      const aiQuery =
        "Act as Movie Recommendation system and suggest Movies for the query: " +
        searchText.current.value +
        ". only give me names of 10 movies just movies not series make sure, comma separated like the example result given ahead. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, The Godfather Part II, 12 Angry Men, The Lord of the Rings: The Return of the King, Inception, Pulp Fiction, Schindler's List, Fight Club";

      const aiJson = await fetchFromGemini([{ parts: [{ text: aiQuery }] }]);

      const aiMovieList =
        aiJson?.candidates?.[0]?.content?.parts?.[0]?.text
          ?.split(",")
          .map((movie) => movie.trim()) || [];

      if (!aiMovieList.length) {
        console.error("AI movie list is empty or not formatted correctly.");
        return;
      }

      const promiseArray = aiMovieList.map((movie) =>
        searchTMDBMovies(movie.trim())
      );

      const searchedMoviesResults = await Promise.all(promiseArray);

      const filteredMovies = searchedMoviesResults
        .map((movieResult, index) => {
          const aiMovieName = aiMovieList[index];

          const exactMatches = movieResult.results.filter(
            (movie) => movie.title.toLowerCase() === aiMovieName.toLowerCase()
          );

          return exactMatches.length > 0 ? exactMatches[0] : null;
        })
        .filter(Boolean);

      dispatch(
        addAiResult({
          movieNames: aiMovieList,
          moviesData: filteredMovies,
        })
      );
    } catch (error) {
      console.error("Error in AI search process:", error);
    } finally {
      // Stop loading
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex justify-center pt-20 sm:pt-32">
      <form
        className="flex items-center w-4/5 sm:w-3/5 lg:w-1/2 bg-gray-800 bg-opacity-90 rounded-full shadow-lg overflow-hidden"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[selectedLanguage].oracleAiPlaceholder}
          className="flex-grow py-3 sm:py-4 pl-5 text-base sm:text-lg md:text-xl text-white bg-transparent outline-none 
                       placeholder-gray-400"
        />
        <button
          onClick={handleAiSearch}
          type="submit"
          className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold 
                       shadow-md transition-all duration-300 hover:scale-105"
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
