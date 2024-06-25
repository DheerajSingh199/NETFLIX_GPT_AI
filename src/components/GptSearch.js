import React from 'react'
import { BACKGROUNDIMG } from '../utils/Constants'

const GptSearch = () => {
  return (
    <>
      <div>
        <img
          className="hidden h-full w-full -z-50 sm:absolute sm:inline "
          src={BACKGROUNDIMG}
          alt="backGroundImg"
        />
      </div>
    
    <div className='flex items-center justify-center pt-[10%] '>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input className='px-8 py-4 text-black font-semibold rounded-lg'  type='text' placeholder='Look Up Your Favorite Film'></input>
        <button className='bg-red-800 px-8 py-4 text-white ml-2 hover:bg-red-600 rounded-lg'>Search</button>
      </form>
    </div>
    </>
  )
}

export default GptSearch