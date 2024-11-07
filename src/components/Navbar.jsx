import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, USER_ICON } from "../utils/constants";

import BgImg from "./BgImg";

const Navbar = () => {
  const [isLoginclick, setIsLoginClick] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const userName =
    user?.displayName !== null
      ? user?.displayName[0]?.toUpperCase() + user?.displayName?.substring(1)
      : "Default";

  const handleLoginClick = () => {
    setIsLoginClick(true);
    navigate("/login");
  };

  const handleLogoutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoginClick(false);
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <header>
      <BgImg />
      <header className="flex justify-between p-2 items-center w-full sm:absolute sm:px-14 sm:py-6 bg-gradient-to-b from-black">
        <div className="">
          <a href="/" className="">
            <img className="w-44" src={LOGO} alt="Logo_netflix" />
          </a>
        </div>
        <div className="">
          {!isLoginclick && !user && (
            <button
              // to="/login"
              onClick={handleLoginClick}
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          )}
          {user && (
            <div className="flex justify-around items-center cursor-pointer">
              <img
                src={USER_ICON}
                alt="user_img"
                className="w-11 h-11 rounded m-2"
              />
              <span>{userName}</span>

              <button
                onClick={handleLogoutClick}
                className="bg-red-700 hover:bg-red-800 text-white font-bold m-2 py-2 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </header>
    </header>
  );
};

export default Navbar;
