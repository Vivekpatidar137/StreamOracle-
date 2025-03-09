import { signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../myAssets/StreamOracle.png";
import aiLogo from "../myAssets/intelligence.png";
import homeIcon from "../myAssets/home.png";
import userIcon from "../myAssets/man.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleAiSearchView } from "../utils/aiSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const showAiSearch = useSelector((store) => store.oracleAi.showAiSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        setIsLoggedIn(true);
        navigate("/browse");
      } else {
        dispatch(removeUser());
        setIsLoggedIn(false);
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate, dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleRecommendedByAIClick = () => {
    dispatch(toggleAiSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute w-full top-0 z-20">
      <div className="relative flex justify-between items-center px-2 sm:px-8 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75 z-0"></div>

        <div className="flex items-center justify-between w-full relative z-10 px-2 sm:px-8 md:px-16 my-2 sm:my-5">
          <img
            className="w-24 sm:w-36 md:w-48"
            src={logo}
            alt="StreamOracle Logo"
          />

          {isLoggedIn && (
            <div className="flex items-center space-x-1 sm:space-x-4">
              {showAiSearch && (
                <select
                  onChange={handleLanguageChange}
                  className="bg-red-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition duration-300 text-xs sm:text-sm"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option
                      key={lang.identifier}
                      value={lang.identifier}
                      className="text-gray-900 bg-white"
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              {showAiSearch ? (
                <button
                  className="relative flex items-center space-x-1 sm:space-x-2 group px-2 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-md"
                  onClick={handleRecommendedByAIClick}
                >
                  <img
                    src={homeIcon}
                    alt="Home Icon"
                    className="w-4 sm:w-5 h-4 sm:h-5 filter invert group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-red-500 transition duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-red-500/50">
                    Home
                  </p>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ) : (
                <>
                  <button
                    className="relative flex items-center space-x-1 sm:space-x-2 group px-2 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md"
                    onClick={handleRecommendedByAIClick}
                  >
                    <img
                      src={aiLogo}
                      alt="AI Logo"
                      className="w-4 sm:w-5 h-4 sm:h-5 filter invert group-hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 transition duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-pink-500/50">
                      Oracle AI
                    </p>
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>

                  <img
                    className="w-6 sm:w-8 h-6 sm:h-8"
                    src={userIcon}
                    alt="user-icon"
                  />
                  <button
                    onClick={handleSignOut}
                    className="bg-red-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition duration-300 text-xs sm:text-sm"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
