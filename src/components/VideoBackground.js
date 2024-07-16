import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const store = useSelector((store) => store?.movies);
    const data = useMovieTrailer(movieId);

    return (
        <div>
            <iframe
                className='w-screen aspect-video'
                src={
                    'https://www.youtube.com/embed/' +
                    store?.trailerVideo?.key +
                    '?&autoplay=1&mute=1'
                }
                title='We Had 4 Mages...So I Had To Do This | Mobile Legends'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
        </div>
    );
};

export default VideoBackground;
