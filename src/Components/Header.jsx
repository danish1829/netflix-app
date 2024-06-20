import React, { useState } from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import { auth } from '../Utilities/Firebase';
import { signOut } from "firebase/auth";

const Header = () => {
  const [signOutButton , setSignOutButton] = useState(false);
  const location = useLocation();

  const showSignOutButton = location.pathname === '/browser' || location.pathname === '/movieTrailor';

  const navigate = useNavigate();
  const handleSignOut = () => {
    setSignOutButton(!signOutButton);
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="logo" />
       {showSignOutButton && (
       <div className='flex p-3'>
        <button onClick={handleSignOut} className='font-bold text-white bg-red-500 rounded-xl p-2'>Sign Out</button>
       </div>
    )}
    </div>
  )
} 

export default Header