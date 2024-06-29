import React from "react";
import Login from "./Login.js";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  ]);


 


  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="">
=======
    <div>
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
    <div>
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
