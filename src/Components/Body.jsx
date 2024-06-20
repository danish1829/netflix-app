import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider,BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browser from './Browser';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utilities/Firebase';
import { useDispatch} from "react-redux";
import { addUser, removeUser } from '../Utilities/UserSlice';
import AllMoviesTrailor from './AllMoviesTrailor';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browser',
      element: <Browser />,
    },
    {
      path: '/movieTrailor',
      element: <AllMoviesTrailor />
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
      } else {
        dispatch(removeUser());
      }
    });
    
  },[])
  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
