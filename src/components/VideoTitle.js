import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='font-bold text-6xl'>{title}</h1>
            <p className='py-6 text-lg w-1/2'>{overview}</p>
            <div className=''>
                <button className=' bg-gray-500 text-white py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80'>
                    ▶️ Play
                </button>
                <button className='hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
