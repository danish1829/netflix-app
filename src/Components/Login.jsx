import React from 'react'
import Header from './Header'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState , useRef } from 'react'
import { checkValidData } from '../Utilities/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Utilities/Firebase'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); // Corrected useState syntax
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //console.log(email);
    //console.log(password);
    const msg = checkValidData(email, password)
    setErrorMessage(msg);
    if(msg) return;

    if(!isSignInForm){
      // sign up 
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    //console.log(user);
    navigate("/browser")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    // ..
  });

    }else{
      // sign in
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user);
    navigate("/browser")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });
    }

  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <>
      <img 
       className='absolute blur-sm bg-black/50' src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"
       alt="backgroung" />
      </>

       <form onSubmit={(e) => e.preventDefault()}
       className='absolute p-12 bg-black w-3/12 my-40 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>

        <h1 
        className='text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input className='p-2.5 my-4 w-full bg-gray-500' type="text" placeholder='Full Name' required/>
        )}

        <input ref={emailRef} 
        className='p-2.5 my-4 w-full bg-gray-500' type="text" placeholder='E-mail Address'required/>
        { !isSignInForm && (
        <input className='p-2.5 my-4 w-full bg-gray-500' type="number" placeholder='Phone Number'required/>
        )}

        <input ref={passwordRef} 
        className='p-2.5 my-2 w-full bg-gray-500' type="password" placeholder='Password' required/>

        <p className='text-red-500'>{errorMessage}</p>

        <button className='p-2.5 my-7 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
        {isSignInForm ? "sign In" : "sign Up"}</button>
        
        <p className='p-3 cursor-pointer scale-0.9' 
        onClick={toggleSignInForm}>
        {isSignInForm ? "new to netflix? sign up" : "Already registered sign in"}</p>
        
       </form>
    </div>
  )
}

export default Login