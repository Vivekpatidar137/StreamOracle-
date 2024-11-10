import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const AiSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center pt-20 sm:pt-32">
      <form className="relative w-4/5 sm:w-3/5 lg:w-1/2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={lang[selectedLanguage].oracleAiPlaceholder}
          className="w-full py-3 sm:py-4 pl-5 pr-16 text-base sm:text-lg md:text-xl text-white bg-gray-800 bg-opacity-90 rounded-full shadow-lg outline-none 
                       transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 
                       focus:ring-4 focus:ring-pink-500 placeholder-gray-400"
        />
        <button
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
