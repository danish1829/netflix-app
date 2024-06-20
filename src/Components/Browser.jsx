import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utilities/Constants'
import { json } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addnowPlayingMovies } from '../Utilities/MovieSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    //console.log(json.results);
    dispatch(addnowPlayingMovies(json.results))

  }

  useEffect(() => {
    nowPlayingMovies();
  },[])

  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse