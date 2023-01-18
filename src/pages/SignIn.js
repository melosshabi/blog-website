import React, {useEffect, useState} from 'react'
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import {auth, provider} from '../firebase-config'
import { useNavigate } from 'react-router-dom';

export default function SignIn({isAuth, setIsAuth}) {
   let navigate = useNavigate();
  useEffect(()=>{
    if(isAuth){
      navigate('/blog-website')
    }
  }, [])
  const [signInEmail, setSignInEmail] =  useState('');
  const [signInPassword, setSignInPassword] =  useState('');
  const [error, setError] = useState('');

  const logIn = async () =>{
  
    try {
    await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((res ) => { 
        localStorage.setItem('name', res.user.displayName)
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('isAuth', true); 
        navigate('/blog-website')
        setIsAuth(true);
      });
    }catch(err){
      if(err.message === "Firebase: Error (auth/wrong-password)."){
        setError("Incorrect Password")
      }else if(err.message === "Firebase: Error (auth/user-not-found)."){
        setError('Email not found')
      }else if(err.message === "Firebase: Error (auth/invalid-email)."){
        setError('Invalid Email')
      }
    }
  }
  const logInWithGoogle = async () =>{
    await signInWithPopup(auth, provider)
    .then(res =>{
      localStorage.setItem('email', res.user.email)
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/blog-website')
    })
  }
  return (
    <div className="signInPage-div">
    <div className="gradient-div"></div>
    <div className='sign-in-div'>
      <h2>Welcome Back!</h2>
      <p>Enter the information you entered while registering.</p>
      <br/>
      <div className="sign-in-inputs">
        <div className="input-fields">
        <input type="text" placeholder='Email' value={signInEmail} onChange={e => setSignInEmail(e.target.value)}/> 
        <input type="password" placeholder='Password' value={signInPassword} onChange={e => setSignInPassword(e.target.value)}/> 
        </div>
        {error && <p>{error}</p>}
        <button className='sign-in-btn' onClick={logIn}>Sign In</button>
      </div>
      <p className='dont-have-acc'>Don't have an account? <a href="/signUp">Sign Up</a></p>
      <div className="border-div"></div>
      <div className="google-btn" onClick={logInWithGoogle}>
        <div className="google-icon-wrapper">
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""/>
        </div>
        
        <p className="btn-text"><b>Sign in with Google</b></p>
      </div>
    </div>
    </div>
  )
}
