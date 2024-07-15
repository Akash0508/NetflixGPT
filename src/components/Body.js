import React, { useEffect } from 'react';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login';
import { AUTH } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/browse',
            element: <Browse />,
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(AUTH, (user) => {
            if (user) {
                //Sign in logic
                const { uid, email, displayName } = user.uid;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
            } else {
                //Sign out logic
                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
};

export default Body;
