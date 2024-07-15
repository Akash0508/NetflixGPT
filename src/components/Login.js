import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [signIn, setSignIn] = useState(true);

    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg'
                    alt=''
                    className='w-full h-full object-cover'
                />
            </div>
            <form className='absolute inset-0 flex items-center justify-center'>
                <form className='w-3/12 bg-black bg-opacity-80 p-8 rounded-lg text-white'>
                    <h1 className='font-bold text-3xl my-2 mb-8'>{signIn ? 'Sign In' : 'Sign Up'}</h1>
                    {!signIn && <input
                        type='text'
                        placeholder='Email'
                        className='p-4 my-2 w-full bg-gray-700'
                    />}
                    <input
                        type='text'
                        placeholder='Email'
                        className='p-4 my-2 w-full bg-gray-700'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='p-4 my-2 w-full bg-gray-700'
                    />
                    <button
                        type='submit'
                        className='p-4 my-2 mt-8 w-full bg-red-600 text-white rounded'
                    >
                        {signIn ? 'Sign In' : 'Sign Up'}
                    </button>
                    <p className='py-4 cursor-pointer hover:underline' onClick={() => {setSignIn(!signIn)}}>{signIn ? 'New to Netflix? Sign up now.' : 'Already a User? Sign in now.'}</p>
                </form>
            </form>
        </div>
    );
};

export default Login;
