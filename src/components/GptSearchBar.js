import React from 'react';
import { useSelector } from 'react-redux';
import { LANG } from '../utils/langConstants';

const GptSearchBar = () => {
    const lang = useSelector((store) => store.config.lang);

    return (
        <div className='pt-[10%] flex justify-center rounded-lg'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input
                    tpye='text'
                    className='p-4 m-4 col-span-9'
                    placeholder={LANG[lang].placeHolder}
                />
                <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'>
                    {LANG[lang].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
