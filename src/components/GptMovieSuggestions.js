import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
 const { movieName ,movieResult} =   useSelector((store) => store.gpt)
 if (!movieName) return null
  return (
    <div className='bg-black rounded-lg text-white bg-opacity-80 md:p-5 md:m-5'>
    <div>
        {
            movieName.map((moviess,index) => <MovieList key={index} movieData={movieResult[index]} tilte={moviess}/>)
        }
        
    </div>
    </div>
  )
}

export default GptMovieSuggestions