import React, {useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import {auth, provider} from '../firebase-config'
import { useNavigate } from 'react-router-dom';

export default function SignUp({isAuth, setIsAuth}) {
  let navigate = useNavigate();

  useEffect(()=>{
    if(isAuth){
      navigate('/blog-website')
    }
  },[])

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState('');

  const signUp = async() =>{
    if(registerName === '' || registerEmail === '' || registerPassword === ''){
        alert("Please fill out the requested fields")
        
    }else{
      try{
        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then(res => {console.log("res", res.user, "email", res.user.email)        
             res.user.displayName = registerName
             localStorage.setItem('name', res.user.displayName)
             localStorage.setItem('email', res.user.email)
             localStorage.setItem('isAuth', true);  
           })
   
         await updateProfile(auth.currentUser, {displayName:registerName})
   
        setIsAuth(true)
        navigate('/blog-website')
       }catch(err){
         if(err.message === "Firebase: Error (auth/invalid-email)."){
           setError('Invalid Email!')
         }else if(err.message === "Firebase: Error (auth/email-already-in-use)."){
           setError('Email already in use!')
         }else if(err.message === "Firebase: Error (auth/missing-email)."){
           setError('Please enter an email')
         }else if(err.message === "Firebase: Error (auth/internal-error)."){
           setError('Please type in a password')
         }
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
      <h2>Welcome!</h2>
      <p>Enter the information requested below to sign up.</p>
      <br/>
      <br/>
      <div className="sign-in-inputs">
        <div className="input-fields">
        <input type="text" placeholder='Name' value={registerName} onChange={e=>setRegisterName(e.target.value)}/>
        <input type="text" placeholder='Email' value={registerEmail} onChange={e => setRegisterEmail(e.target.value)}/> 
        <input type="password" placeholder='Password' value={registerPassword} onChange={e => setRegisterPassword(e.target.value)}/> 
        
        </div>
        {error && <p>{error}</p>}
        <button className='sign-in-btn' onClick={signUp}>Sign Up</button>
      </div>
      <p className="dont-have-acc">Already have an account? <a href="/signIn">Sign in</a></p>
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