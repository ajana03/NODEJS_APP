import { useState } from "react";
// import { Link } from "react-router-dom";
import { BACKGRD_IMG } from "../utils/constants";

const Navbar = () => {
  const [isLoginclick, setIsLoginClick] = useState(false);

  console.log(isLoginclick);
  const handleLoginClick = () => {
    setIsLoginClick((cl) => true);
  };

  return (
    <div>
      <div className="invisible sm:visible sm:bg-cover sm:bg-gradient-to-b from-black sm:absolute sm:overflow-hidden sm:block sm:h-lvh sm:min-h-lvh sm:w-full sm:-z-1 ">
        <img
          src={BACKGRD_IMG}
          alt="background-image"
          className="sm:min-h-full sm:min-w-full "
        />
      </div>
      <header>
        <header className="flex justify-between w-full absolute sm:px-14 sm:py-6 bg-gradient-to-b from-black">
          <div className=" ml-10 ">
            <a href="/" className="">
              <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Logo_netflix"
              />
            </a>
          </div>
          <div>
            {!isLoginclick && (
              <a
                href="/login"
                onClick={handleLoginClick}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </a>
            )}
          </div>
        </header>
      </header>
    </div>
  );
};

export default Navbar;
