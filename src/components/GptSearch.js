import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUND } from '../utils/constant';

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img
                    src={BACKGROUND}
                    alt=''
                    className='w-full h-full object-cover'
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    );
};

export default GptSearch;
