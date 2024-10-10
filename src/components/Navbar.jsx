import React from "react";
import { BACKGRD_IMG } from "../utils/constants";

const Navbar = () => {
  return (
    <div>
      <div className="opacity-50 mix-blend-darken xl:bg-cover xl:absolute xl:overflow-hidden xl:block xl:h-lvh xl:min-h-lvh xl:w-full xl:-z-1 ">
        <img src={BACKGRD_IMG} alt="background-image" />
      </div>
      <header>
        <header className="xl:absolute xl:px-12 xl:py-5 ">
          <div className="flex flex-col">
            <a href="#" className="text-red-600 text-4xl font-bold">
              NETFLIX
            </a>
          </div>
        </header>
      </header>
    </div>
  );
};

export default Navbar;
