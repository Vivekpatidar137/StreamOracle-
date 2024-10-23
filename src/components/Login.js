import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameValue = !isSignInForm ? name.current?.value : null; // Use optional chaining to avoid errors if name is not rendered

    const message = checkValidData(
      nameValue,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <div className="h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-65 p-12 rounded-md w-full max-w-md"
        >
          <h2 className="text-white text-3xl font-semibold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-5 rounded-md bg-gray-800 border border-gray-600 text-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-3 mb-5 rounded-md bg-gray-800 border border-gray-600 text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-7 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
          <p
            className={`text-red-600 text-sm italic rounded-md shadow-md mb-4 ${
              !errorMessage ? "hidden" : ""
            }`}
          >
            {errorMessage}
          </p>

          <button
            onClick={handleButtonClick}
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="mt-4 text-gray-400 flex text-lg p-2">
            <span>
              {isSignInForm ? "New to StreamOracle?" : "Existing User?"}
            </span>
            <p
              onClick={toggleSignInForm}
              className="text-white hover:underline pl-1 cursor-pointer"
            >
              {isSignInForm ? "Sign up now" : "Sign In now"}
            </p>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
