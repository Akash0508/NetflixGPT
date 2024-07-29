import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();

    const showGpt = useSelector((store) => store.gpt.showGptSearch);

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <Header />
            {showGpt ? (
                <GptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;
