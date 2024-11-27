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

        const { uid, email, displayName } = user;
        // localStorage.setItem("userData", JSON.stringify({ userId: uid }));
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out

        dispatch(removeUser());
        // localStorage.removeItem("userData");
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <main className="text-white ">
      <BgImg />
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
