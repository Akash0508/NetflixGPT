import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
