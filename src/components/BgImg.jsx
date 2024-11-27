import React from "react";
import { BACKGRD_IMG } from "../utils/constants";
import { useSelector } from "react-redux";

const BgImg = () => {
  const user = useSelector((store) => store.user);
  return (
    // <>
    <div className="w-full h-full absolute sm:bg-gradient-to-b sm:from-black sm:-z-0 bg-gradient-to-b from-gray-950 to-gray-900 -z-10 ">
      {/* <div className="bg-black h-screen sm:hidden"></div> */}
      {!user && (
        <div className="p-0 m-0 hidden sm:bg-cover sm:absolute sm:overflow-hidden sm:block sm:h-lvh sm:min-h-lvh sm:w-full sm:-z-10 ">
          <img
            src={BACKGRD_IMG}
            alt="background-image"
            className="sm:h-screen sm:object-cover md:min-h-full md:min-w-full "
          />
        </div>
      )}
    </div>
    // </>
  );
};

export default BgImg;
