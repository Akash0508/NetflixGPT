import React, { useEffect } from 'react';
import { AUTH } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { toggleGptSearchView } from '../redux/gptSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { AVATAR, LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLang } from '../redux/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGpt = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(AUTH).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    };

    const toggleGpt = () => {
        dispatch(toggleGptSearchView());
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(AUTH, (user) => {
            if (user) {
                //Sign in logic
                const { uid, email, displayName, photoURL } = user.uid;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate('/browse');
            } else {
                //Sign out logic
                dispatch(removeUser());
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, []);

    const changeLangConfig = (e) => {
        dispatch(changeLang(e.target.value));
    };

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src={LOGO} alt='' />
            {user && (
                <div className='flex p-2 items-center'>
                    {showGpt && (
                        <select
                            className='bg-gray-700 p-2 rounded-lg'
                            onChange={(e) => changeLangConfig(e)}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => {
                                return (
                                    <option
                                        key={lang.identifier}
                                        value={lang.identifier}
                                    >
                                        {lang.name}
                                    </option>
                                );
                            })}
                        </select>
                    )}
                    <button
                        className='py-2 px-2 my-2 mx-4 bg-purple-800 text-white rounded-lg'
                        onClick={toggleGpt}
                    >
                        {!showGpt ? 'GPT Search' : 'Home Page'}
                    </button>
                    <img
                        className='w-10 h-10 rounded-lg'
                        src={AVATAR}
                        alt='usericon'
                    />
                    <button
                        className='font-medium text-white'
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
