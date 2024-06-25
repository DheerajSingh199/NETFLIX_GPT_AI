import React from 'react'
import { IMG_CDN } from '../utils/Constants'

const MovieCards = ({posterPath}) => {
    
   
  return (
    <div>
         <div className="w-48 h-full py-5  cursor-pointer duration-700 ease-in-out hover:scale-110 ">
          <div className="">
            <img className=" " alt='trail' src={`${IMG_CDN}${posterPath}`}></img>
          </div>
         
        </div>
    </div>
  )
}

export default MovieCards