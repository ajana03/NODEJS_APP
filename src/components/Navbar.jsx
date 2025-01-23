import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleGptSearchView } from "../store/gptSlice";
import { changeLang } from "../store/configSlice";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, USER_ICON } from "../utils/constants";
import { IoMdArrowDropdown } from "react-icons/io";

import PURPY_LOGO from "../assets/purpy-1.png";

import BgImg from "./BgImg";
import { SUPPORTED_LANGUAGE_OPT } from "../utils/constants";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isLoginclick, setIsLoginClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const toggle = useSelector((store) => store.gpt.toggle);

  const userName =
    user?.displayName !== null
      ? user?.displayName[0]?.toUpperCase() + user?.displayName?.substring(1)
      : "Default";

  const handleLanguageChng = (evt) => {
    dispatch(changeLang(evt.target.value));
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
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

  const handleIsOpen = () => {
    setIsOpen((op) => !op);
  };

  return (
    <header>
      {/* <BgImg /> */}
      <header className="flex justify-around sm:justify-between items-center pl-2 pr-10 py-5 w-full absolute sm:px-8 sm:py-4 ">
        <div className="">
          <a href="/" className="">
            {/* <img className="w-44" src={LOGO} alt="Logo_netflix" /> */}
            <img className="w-44" src={PURPY_LOGO} alt="Logo_purpyFlix" />
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
            <div className="flex justify-around items-center cursor-pointer font-medium">
              {toggle && (
                <select
                  className="bg-gray-900 p-2.5 rounded hover:bg-gray-950 m-2"
                  onChange={handleLanguageChng}
                >
                  {SUPPORTED_LANGUAGE_OPT.map((lang) => (
                    <option value={lang.identifier} key={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                onClick={handleGPTSearchClick}
                className="bg-purple-700 hover:bg-purple-800 text-white text-sm sm:text-md font-bold m-2 px-1 py-1 sm:px-1.5 sm:py-1.5 md:py-2 md:px-2 rounded focus:outline-none focus:shadow-outline"
              >
                {toggle ? "Home" : "GPT Search"}
              </button>
              <img
                src={USER_ICON}
                alt="user_img"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded m-2"
              />
              <button onClick={handleIsOpen}>
                <IoMdArrowDropdown size={30} />
              </button>
              {isOpen && (
                <div className="flex flex-col items-center rounded border border-white absolute right-[2%] origin-top-right top-[75%] z-20 w-40 py-4 bg-black bg-opacity-40">
                  <span className="font-bold">{userName}</span>

                  <button
                    onClick={handleLogoutClick}
                    className="bg-red-700 hover:bg-red-800 text-white font-bold m-3 py-1 px-1 cursor-pointer rounded focus:outline-none focus:shadow-outline"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </header>
  );
};

export default Navbar;
