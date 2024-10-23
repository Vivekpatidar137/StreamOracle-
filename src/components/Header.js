import { signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../myAssets/StreamOracle.png";
import userIcon from "../myAssets/man.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <header className="absolute w-full top-0 z-20">
      <div className="relative flex justify-between items-center px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75 z-0"></div>

        <div className="flex items-center justify-between w-full relative z-10 px-16 my-5">
          <img className="w-60 md:w-60" src={logo} alt="StreamOracle Logo" />

          {isLoggedIn && ( // Show only when user is logged in
            <div className="flex items-center space-x-4">
              <img className="w-10 h-10" src={userIcon} alt="user-icon" />
              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition duration-300"
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
