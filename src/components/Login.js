import React, { useState, useRef } from "react";
import Header from "./Header.js";
import { Validate } from "../utils/Validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const [IsSingInFrom, setIsSingInFrom] = useState(true);
  const [ErrMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const Ispassword = useRef(null);

  const handleButtonClick = () => {
    const message = Validate(email.current.value, Ispassword.current.value);
    setErrMessage(message);

    if (message) return;

    if (!IsSingInFrom) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        Ispassword.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/157529918?s=400&u=72599d4ab3e63644e5e1039f56622da5bcd73972&v=4",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
            addUser({
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL,
            })
          );

              navigate("/browse");
            })
            .catch((error) => {
              setErrMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        Ispassword.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSingInFrom = () => {
    setIsSingInFrom(!IsSingInFrom);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className=" hidden sm:absolute sm:inline "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/12b8ef67-2ff8-428c-8fc7-5388868ee28d/CH-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backGroundImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" my-16 sm:my-36 sm:w-4/12 absolute bg-black  mx-auto right-0 left-0 p-5 opacity-90 rounded-lg "
      >
        <h1 className="font-bold text-3xl p-2 text-white">
          {IsSingInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSingInFrom && (
          <input
            ref={name}
            className="p-4 mt-4 block w-5/6 ml-5 text-white bg-gray-900"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="p-4 mt-4 block w-5/6 ml-5 text-white bg-gray-900"
          type="text"
          placeholder="Email or mobile number  "
        />

        <input
          ref={Ispassword}
          className="p-4 mt-4 block w-5/6 ml-5 text-white bg-gray-900"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 mt-1 text-lg text-center hover:underline">
          {ErrMessage}
        </p>

        <button
          onClick={handleButtonClick}
          className="h-12 rounded-lg   mt-4 bg-red-700  text-white w-5/6 ml-5 text-lg font-bold hover:bg-red-800"
        >
          {IsSingInFrom ? "Sign Ins" : "Sign Up"}
        </button>
        <p className="mt-4 text-white text-lg text-center">OR</p>
        <button className="h-12 rounded-lg text-lg  mt-4 bg-gray-600  text-white w-5/6 ml-5 font-bold hover:bg-gray-700">
          Use a sign-in code
        </button>
        <p className="mt-4 text-white text-lg text-center hover:underline cursor-pointer">
          Forgot password?
        </p>

        <input
          type="checkbox"
          name="RememberMe"
          className="scale-150 ml-6 mt-5"
        />
        <label className=" text-white text-lg pl-2 ml-2">Remember me</label>
        <br></br>
        <div className="flex justify-center items-center">
          {!IsSingInFrom && (
            <p className="mt-4 text-gray-400 text-lg text-center inline-block">
              New to Netflix?{" "}
            </p>
          )}
          <p
            className=" mt-4 text-xl text-center text-white hover:underline cursor-pointer inline-block ml-2 "
            onClick={toggleSingInFrom}
          >
            {IsSingInFrom ? "Sign In" : "Sign up now"}
          </p>
        </div>

        <p className="mt-4 text-gray-400 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">
            Learn more.
          </span>
        </p>
      </form>

      <div className="-z-20 bg-black w-full h-screen fixed "></div>
    </div>
  );
};

export default Login;
