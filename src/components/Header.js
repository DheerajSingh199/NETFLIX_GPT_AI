import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  console.log(user);

  const logOutOnClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10">
      <img
        className="w-48 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && <div>
        <img className="w-28" src={user?.photoURL} alt="userIcon" />

        <button className="bg-slate-400" onClick={logOutOnClick}>
          LogOut
        </button>
        <h1>
          Hey You login To this page We Will Making this page More Beautiful
          Give me Some Time{" "}
        </h1>
      </div>}
    </div>
  );
};

export default Header;
