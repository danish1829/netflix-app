import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utilities/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../Utilities/MovieSlice';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/653346/videos?language=en-US',
      API_OPTIONS
    )
    const json = await data.json()
    //console.log(json);

    const filterData = json.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);

    dispatch(addTrailerVideo(trailer));

  }

  useEffect(() => {
    getMovieVideos();
  },[])
  return (
    <div className='w-screen'>
      <iframe
      className='w-screen aspect-video' 
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&"} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground;