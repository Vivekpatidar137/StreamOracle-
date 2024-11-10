import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useEffect, useRef } from "react";
import { AI_STUDIO_URL, apiKey } from "../utils/constant";

const AiSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleAiSearch = async () => {
    console.log(searchText.current.value);
    const aiQuery =
      "Act as Movie Recommendation system and suggest Movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, The Godfather Part II, 12 Angry Men";

    const aiResult = await fetch(AI_STUDIO_URL + apiKey, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: aiQuery }] }],
      }),
    });

    const result = await aiResult.json();
    console.log(result);
  };

  useEffect(() => {
    handleAiSearch();
  }, []);

  return (
    <div className="flex justify-center pt-20 sm:pt-32">
      <form
        className="relative w-4/5 sm:w-3/5 lg:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[selectedLanguage].oracleAiPlaceholder}
          className="w-full py-3 sm:py-4 pl-5 pr-16 text-base sm:text-lg md:text-xl text-white bg-gray-800 bg-opacity-90 rounded-full shadow-lg outline-none 
                       transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 
                       focus:ring-4 focus:ring-pink-500 placeholder-gray-400"
        />
        <button
          onClick={handleAiSearch}
          type="submit"
          className="absolute top-1/2 right-5 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 
                       text-white font-semibold rounded-full shadow-md hover:scale-110 transition-all duration-300"
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
