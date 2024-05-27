import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSingInFrom, setIsSingInFrom] = useState(true);
  const toggleSingInFrom = () => {
    setIsSingInFrom(!IsSingInFrom);
  };
  return (
    <div>
      <Header/>
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/12b8ef67-2ff8-428c-8fc7-5388868ee28d/CH-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backGroundImg"
        />
      </div>
      <from className=" w-4/12 absolute bg-black my-36 mx-auto right-0 left-0 p-5 opacity-90 rounded-lg ">
        <h1 className="font-bold text-3xl p-2 text-white">
          {IsSingInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSingInFrom && (
          <input
            className="p-4 mt-4 block w-5/6 ml-5 text-white bg-gray-900"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="p-4 mt-4 block w-5/6 ml-5 text-white bg-gray-900"
          type="text"
          placeholder="Email or mobile number  "
        />
        <input
          className="p-4 mt-4 block w-5/6 ml-5 text-white bg-gray-900"
          type="password"
          placeholder="Password"
        />

        <button className="h-12 rounded-lg   mt-4 bg-red-700  text-white w-5/6 ml-5 text-lg font-bold hover:bg-red-800">
          {IsSingInFrom ? "Sign In" : "Sign Up"}
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
        <label className=" text-white text-lg pl-2 ml-2" for="RememberMe">
          Remember me
        </label>
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
      </from>

      <div className="-z-20 bg-black w-full h-screen fixed ">
        
    </div>

   
      
    </div>
    
  );
};

export default Login;
