import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";
import { gptSearch } from "../utils/gptHandler";
const Header = () => {
  const [gptSerch, SetGptSearch] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const logOutOnClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const gptSearchHandel = () => {
    dispatch(gptSearch());
    SetGptSearch(!gptSerch);
  };

  return (
    <div className="z-10 flex w-full py-4 px-10 flex-col justify-between items-center  text-white bg-gradient-to-b bg-black md:bg-transparent md:from-zinc-900 md:absolute md:flex-row ">
      
      <img className="w-40 h-20 md:w-24 md:h-12 " src={LOGO} alt="logo" />

      {user && (
        <>
          <div className="flex gap-4 w-full justify-center md:w-auto md:justify-normal ">
            <button
              className="bg-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
              onClick={gptSearchHandel}
            >
              {gptSerch ? "GPT Search" : "Home"}
            </button>
            <img
              className="w-10 h-10 rounded "
              src={user?.photoURL}
              alt="userIcon"
            />

            <div className="group relative text-white">
              <div className="text-black text-4xl cursor-pointer">
                <i className=" text-white ri-arrow-down-s-fill"></i>
              </div>

              <div className="absolute bg-zinc-200 rounded-md px-4 py-2 right-0 text-white hidden group-hover:block">
                <h1 className="text-black py-2 text-center font-semibold whitespace-nowrap ">
                  {user?.displayName}
                </h1>
                <button
                  className="whitespace-nowrap rounded bg bg-red-500 px-4 py-2 text-center text-white font-semibold text-sm hover:bg-red-600 	"
                  onClick={logOutOnClick}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      </div>
  );
};

export default Header;
