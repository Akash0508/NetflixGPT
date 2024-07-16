import React, { useEffect } from 'react';
import { AUTH } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constant';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(AUTH).catch((error) => {
            // An error happened.
            navigate('/error');
        });
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

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src={LOGO} alt='' />
            {user && (
                <div className='flex p-2'>
                    <img
                        className='w-10 h-10 rounded-lg'
                        src={user?.photoURL}
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
