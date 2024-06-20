import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-42 relative z-20 p-8'>
      <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Treanding Movies"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Up Coming Movies"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Web Series"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Drama"} movies = {movies.nowPlayingMovies}/>
      </div>
    </div>
    )
  );
};

export default SecondaryContainer;