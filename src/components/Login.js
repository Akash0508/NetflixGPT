import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateForm } from '../utils/validation';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { AUTH } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { AVATAR } from '../utils/constant';

const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm, setSignIn] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const email = useRef();
    const password = useRef();
    const name = useRef();
    const handleSubmitForm = () => {
        let error = validateForm(
            email?.current?.value,
            password?.current?.value,
            name?.current?.value
        );
        setErrMessage(error);
        if (error) return;

        if (!isSignInForm) {
            //Sign up
            createUserWithEmailAndPassword(
                AUTH,
                email?.current?.value,
                password?.current?.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: AVATAR,
                    }).then(() => {
                        const { uid, email, displayName, photoURL } =
                            AUTH.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                            })
                        );
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + '-' + errorMessage);
                });
        } else {
            //Sign in
            signInWithEmailAndPassword(
                AUTH,
                email?.current?.value,
                password?.current?.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + '-' + errorMessage);
                });
        }
    };

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
            <form
                onSubmit={(e) => e.preventDefault()}
                className='w-3/12 absolute p-6 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
            >
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </h1>

                {!isSignInForm && (
                    <input
                        ref={name}
                        type='text'
                        placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700'
                    />
                )}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <div className='relative'>
                    <input
                        ref={password}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        className='p-4 my-4 w-full bg-gray-700'
                    />
                    <button
                        type='button'
                        onClick={() => {
                            setShowPassword(!showPassword);
                        }}
                        className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <p className='text-red-500 text-lg py-3'>{errMessage}</p>
                <button
                    className='p-4 my-6 bg-red-700 w-full rounded-lg'
                    onClick={handleSubmitForm}
                >
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p
                    className='py-4 cursor-pointer hover:underline'
                    onClick={() => {
                        setSignIn(!isSignInForm);
                    }}
                >
                    {isSignInForm
                        ? 'New to Netflix? Sign Up Now'
                        : 'Already registered? Sign In Now.'}
                </p>
            </form>
        </div>
    );
};

export default Login;
