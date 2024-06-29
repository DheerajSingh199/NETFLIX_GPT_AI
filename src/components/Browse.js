import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
 const showGptSearch = useSelector((sta) => sta.gpt.gptValue )
  useNowPlaying();
  usePopular()
  useTopRated()
  useUpcoming()

  return (
<<<<<<< HEAD
    <div className="w-full h-full bg-black md:bg-transparent">
      <Header/>
      {showGptSearch?<GptSearch/> :<><MainContainer/>
        
        <SecondaryContainer/>
        
        </>}
=======
    <div>
      <Header />
      {showGptSearch?<GptSearch/> :<><MainContainer/>
        <SecondaryContainer/></>}
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
      
    </div>
  );
};

export default Browse;
 