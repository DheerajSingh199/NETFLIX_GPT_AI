import React, { useRef } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import openai from "../components/OpenAi";
import { useDispatch } from "react-redux";
import { gptMovieResult } from "../utils/gptHandler";

const GptSearchBar = () => {
    
  const searchValue = useRef(null);
 
  const dispatch = useDispatch();


  const ApiCall = async (movies) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movies + "&include_adult=false&language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    return json.results
  }




  const handleClick = async () => {
    console.log(searchValue.current.value);
    const quert =
      "Act as a movie Recommendation system suggest some movies for the query : " +
      searchValue.current.value +
      " only give me name of 5 movies, comma seperated like the the example given ahead. Example Result: Gadar, Sholady, Don, Golmaal, Pad Man";
    console.log(quert);

    
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: quert }],
      model: "gpt-3.5-turbo",
    });
    if (!chatCompletion.choices[0]) {
      return "loading"
    }
    const gptResult = chatCompletion.choices[0]?.message?.content.split(",")

    console.log(gptResult);

   const promiseArray = gptResult.map((movies) => ApiCall(movies) )

    const tmbdResult = await Promise.all(promiseArray)
    dispatch(gptMovieResult({movieName:gptResult,movieResult:tmbdResult}))
    console.log(tmbdResult);

  };

   

  return (
    <>
            <div className="flex items-center justify-center pt-[10%] py-16">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchValue}
            className="px-8 py-4 text-black font-semibold rounded-lg"
            type="text"
            placeholder="Look Up Your Favorite Film"
          ></input>
          <button
            className="bg-red-800 px-2 py-3 md:px-8 md:py-4 text-lg md:text-base font-semibold text-white ml-2 hover:bg-red-600 rounded-lg"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
