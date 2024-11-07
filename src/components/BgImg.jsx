import React from "react";
import { BACKGRD_IMG } from "../utils/constants";
import { useSelector } from "react-redux";

const BgImg = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="p-0 m-0 invisible sm:visible sm:bg-cover sm:absolute sm:overflow-hidden sm:block sm:h-lvh sm:min-h-lvh sm:w-full sm:-z-1 ">
      {!user && (
        <img
          src={BACKGRD_IMG}
          alt="background-image"
          className="sm:min-h-full sm:min-w-full sm:bg-black sm:bg-blend-darken"
        />
      )}
    </div>
  );
};

export default BgImg;
