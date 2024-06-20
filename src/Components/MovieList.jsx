import React from 'react'
import MoviesCart from './MoviesCart';
//import './index.css';

const MovieList = ({title , movies}) => {
    console.log(movies);
  return (
    <div className='p-6 bg-black'>
      <h1 className='text-3xl py-3 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll overflow-hidden hide-scrollbar'>        
            <div className='flex gap-4'>
            {movies?.map(movie => <MoviesCart key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList;