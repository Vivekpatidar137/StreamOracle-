import { signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../myAssets/StreamOracle.png";
import userIcon from "../myAssets/man.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        setIsLoggedIn(true);
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        setIsLoggedIn(false);
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [navigate, dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="absolute w-full top-0 z-20">
      <div className="relative flex justify-between items-center px-4 sm:px-8 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75 z-0"></div>

        <div className="flex items-center justify-between w-full relative z-10 px-4 sm:px-8 md:px-16 my-4 sm:my-5">
          <img
            className="w-36 sm:w-48 md:w-60"
            src={logo}
            alt="StreamOracle Logo"
          />

          {isLoggedIn && (
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img
                className="w-8 sm:w-10 h-8 sm:h-10"
                src={userIcon}
                alt="user-icon"
              />
              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition duration-300"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
