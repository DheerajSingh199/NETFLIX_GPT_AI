import React from 'react'
<<<<<<< HEAD
import GptSearchBar from './GptSearchBar'
import { BACKGROUNDIMG } from '../utils/Constants'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="h-full w-full -z-10 fixed"
=======
import { BACKGROUNDIMG } from '../utils/Constants'

const GptSearch = () => {
  return (
    <>
      <div>
        <img
          className="hidden h-full w-full -z-50 sm:absolute sm:inline "
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
          src={BACKGROUNDIMG}
          alt="backGroundImg"
        />
      </div>
<<<<<<< HEAD
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
=======
    
    <div className='flex items-center justify-center pt-[10%] '>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input className='px-8 py-4 text-black font-semibold rounded-lg'  type='text' placeholder='Look Up Your Favorite Film'></input>
        <button className='bg-red-800 px-8 py-4 text-white ml-2 hover:bg-red-600 rounded-lg'>Search</button>
      </form>
    </div>
    </>
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  )
}

export default GptSearch