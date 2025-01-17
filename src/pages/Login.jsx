import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { checkValidation } from "../utils/checkValidation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [isSigInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = checkValidation(email.current.value, password.current.value);
    setError(msg);
    if (msg) return;

    if (!isSigInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then((newUser) => {
              // Profile updated!
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
          // setError("Invalid Credential");
        });
    }
  };

  const handleToggleForm = () => {
    setIsSignInForm((sf) => !sf);
  };
  return (
    <div className="absolute right-0 left-0 my-36 mx-auto p-4 sm:max-w-[450px] sm:mb-[50px] ">
      <div
        className=" p-4 bg-opacity-80 rounded bg-gray-950 flex flex-col m-0 sm:w-full
     sm:px-[68px] sm:py-[48px] sm:min-h-[707]"
      >
        <header className="m-4">
          <h1 className="text-3xl font-bold text-center">
            {isSigInForm ? "Sign In" : "Sign Up"}
          </h1>
        </header>
        <form onSubmit={handleSubmit}>
          {!isSigInForm && (
            <div className="my-4">
              <label htmlFor="username" />
              <input
                ref={name}
                name="username"
                type="text"
                id="username"
                placeholder="UserName"
                className="border rounded w-full py-3 px-4 mb-2 bg-gray-900"
              />
            </div>
          )}
          <div className="my-4">
            <label htmlFor="email" />
            <input
              ref={email}
              name="email"
              type="email"
              id="email"
              placeholder="Email or Phone number"
              className="border rounded w-full py-3 px-4 mb-2 bg-gray-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" />
            <input
              ref={password}
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              className="border rounded w-full py-3 px-3 mb-2 bg-gray-900 "
            />
          </div>

          <div className="mb-4">
            <button
              // onClick={handleClick}
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-3 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isSigInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>

          {error && (
            <div className="text-center text-red-600 font-bold text-md">
              {error}
            </div>
          )}
        </form>

        <div className="m-4">
          <Link href="/">Forgot password?</Link>
        </div>
        <div className="m-4">
          <p className="text-gray-300">
            {isSigInForm ? "New to Netflix? " : "Already Registered User? "}
            <span
              className="font-bold cursor-pointer text-white hover:underline decoration-solid"
              onClick={handleToggleForm}
            >
              {isSigInForm ? "Sign up Now" : "Sign In Now"}
              {/* <a
                href="/SignUp"
                className="font-bold text-white hover:underline decoration-solid"
              >
                Sign up Now
              </a> */}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
