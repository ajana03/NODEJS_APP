import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

import BgImg from "./BgImg";
import Navbar from "./Navbar";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed In
        // console.log("inside onauthStateChange if condition", user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        // console.log("inside onauthStateChange else condition", user);
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log("inside layout render");
  return (
    <main className="text-white bg-black ">
      {/* <div className="w-full sm:absolute"> */}
      <Navbar />
      {/* </div> */}
      {/* <BgImg /> */}
      <div className=" ">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
