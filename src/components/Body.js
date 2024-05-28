import React, { useEffect } from "react";
import Login from "./Login.js";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, displayName, email } = user;
          dispatch(
            addUser({ uid: uid, displayName: displayName, email: email })
          );
        } else {
          dispatch(removeUser());
        }
      },
      []
    );
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
