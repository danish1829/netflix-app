import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36 px-12 w-screen absolute aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='font-medium w-1/3 mt-10'>{overview}</p>
        <div className='mt-10'>
            <button className='bg-white text-black p-4 px-12 rounded-xl m-2 hover:bg-opacity-80'>▶ Play</button>
            <button className='bg-white text-black p-4 px-12 rounded-xl hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;