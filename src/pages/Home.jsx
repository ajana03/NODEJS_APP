import React from "react";

const Home = () => {
  return (
    <div className="sm:p-4 my-16 absolute right-0 left-0 top-20 mx-auto text-white sm:w-1/2">
      <div className="flex flex-col justify-center items-center my-10 ">
        <h1 className="p-2 md:text-6xl block sm:text-4xl text-2xl font-extrabold sm:p-2 mb-4 leading-[125%]">
          Unlimited movies, TV shows and more
        </h1>
        <p className="sm:p-2 text-xl sm:text-2xl md:4xl mb-4 font-medium">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="sm:p-2 p-2 text-lg sm:text-xl md:3xl mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Home;
