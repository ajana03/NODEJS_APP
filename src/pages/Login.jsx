import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSigInForm, setIsSignInForm] = useState(true);

  const handleToggleForm = () => {
    setIsSignInForm((sf) => !sf);
  };
  return (
    <div
      className=" p-4 box-border  bg-opacity-80 rounded bg-gray-950 flex flex-col m-0 sm:w-fulls
     sm:px-[68px] sm:py-[48px] sm:min-h-[707]"
    >
      <header className="m-4">
        <h1 className="text-3xl font-bold text-center">
          {isSigInForm ? "Sign In" : "Sign Up"}
        </h1>
      </header>
      <form className="">
        {!isSigInForm && (
          <div className="my-4">
            <label htmlFor="username" />
            <input
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
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            className="border rounded w-full py-3 px-3 mb-2 bg-gray-900 "
          />
        </div>

        <div className="mb-4">
          <button
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-3 rounded w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isSigInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>

      <div className="m-4">
        <Link href="/" onClick={() => console.log("Clickked")}>
          Forgot password?
        </Link>
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
  );
};

export default Login;
