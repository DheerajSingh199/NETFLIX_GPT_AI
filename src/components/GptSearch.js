import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUNDIMG } from '../utils/Constants'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="h-full w-full -z-10 fixed"
          src={BACKGROUNDIMG}
          alt="backGroundImg"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch