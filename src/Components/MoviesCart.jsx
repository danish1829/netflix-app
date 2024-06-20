 import React from 'react'
 import { IMG_CDN_URL } from '../Utilities/Constants';
import { useNavigate } from 'react-router-dom';
 
 const MoviesCart = ({posterPath}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/movieTrailor')
    }
   return (
     <div>
        <div onClick={handleClick} className='w-52 pr-6 hover:scale-105 transition-all cursor-pointer'>
             <img src = {IMG_CDN_URL + posterPath} 
          alt = "movie Cart" />
        </div>
    </div>
   )
 }
 
 export default MoviesCart;