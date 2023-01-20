import React from 'react'
import { useState } from 'react';
import '../Styles/user-profile.css'
import { updateEmail, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import {auth, db, storage} from '../firebase-config'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {collection, getDocs, updateDoc, doc} from 'firebase/firestore'
import userIcon from './SVGs/user-solid.svg';

export default function UserProfile({isAuth, setIsAuth}) {

  if(!isAuth){
    window.location.pathname = "/signIn"
  }
  
  const [fullName, setFullName] = useState(localStorage.getItem('name'))
  const [newEmail, setNewEmail] = useState(localStorage.getItem('email'))
  const [newPassword, setNewPassword] = useState('******')
  //Current Profile Picture URL
  const [currentProfilePicture, setCurrentProfilePicture] = useState('');

  //Fetches the User Profile Picture after Auth State Changes
  auth.onAuthStateChanged(()=>{
    (async function fetchProfilePicture(){
      const profilePictureRef = ref(storage, `Profile Pictures/${'ProfilePictureOf' + auth.currentUser.uid}`)
      await getDownloadURL(profilePictureRef).then(url => {
        setCurrentProfilePicture(url)
        const loader = document.getElementsByClassName("loader-wrapper")[0]
        loader.style.display = "none";
      }).catch(() => {
        const loader = document.getElementsByClassName("loader-wrapper")[0]
        loader.style.display = "none"
        setCurrentProfilePicture(userIcon)
      })
  })();
  })
  
    //Function to Let users edit their data
   function editData(button){
    button.parentNode.childNodes[0].disabled = false;
    button.parentNode.childNodes[2].style.display = "block";
    if(button.innerText === "Change Password"){
      button.parentNode.childNodes[0].value = "";
    }
  }
  //This function changes the style of the button and enables it before proceeding with the upload function
  function preUpload(file){
    let uploadButton = document.getElementsByClassName('uploadBtndisabled')[0]
    uploadButton.disabled = false;
    uploadButton.className = "uploadBtn"
    uploadButton.addEventListener('click', ()=>{uploadProfilePicture(file)})
  }
  //This function uploads the selected picture to the database
  async function uploadProfilePicture(file) {
    let storageRef = ref(storage, `Profile Pictures/${'ProfilePictureOf' + auth.currentUser.uid}`)
    await uploadBytes(storageRef, file)
    await updateDocs()
  }
    //This function sends the updated data to the database
   async function saveChanges(button){
      const loader = document.getElementsByClassName("loader-wrapper")[0]
      loader.style.display = "flex";
      button.parentNode.childNodes[0].disabled = true;
      button.style.display = "none";
      await updateProfile(auth.currentUser, {displayName:fullName})
      await updateEmail(auth.currentUser, newEmail)
      .then(() => {
        localStorage.setItem('name', fullName)
        localStorage.setItem('email', newEmail)
      })
      await updateDocs();
  }

  //This function updates the Author Name of every document that was created before changing the name
  async function updateDocs(){
    const colRef = collection(db, "posts");
    const docsSnap = await getDocs(colRef)
    for(let i = 0; i < docsSnap.docs.length; i++){
      if(docsSnap.docs[i].data().authorDetails.id === auth.currentUser.uid){
        const docRef = doc(db, 'posts', docsSnap.docs[i].id);
        const profilePictureRef = ref(storage, `Profile Pictures/${'ProfilePictureOf' + auth.currentUser.uid}`)
        const profilePictureURL = await getDownloadURL(profilePictureRef);
        updateDoc(docRef, {authorDetails:{authorEmail:newEmail, authorName:fullName, authorProfilePicture:profilePictureURL, id:auth.currentUser.uid}})
        .then(()=>window.location.reload())
      }
    }}

  //This function lets the user to reset their password through an Email link
  async function resetPassword(){
    const email = auth.currentUser.email;
    await sendPasswordResetEmail(auth, email).then(res => console.log(res));
    alert("A password reset email has been sent to you.")
    setIsAuth(false);
    localStorage.clear();
  }
  return (
    <div className="user-profile-page">
      <div className="loader-wrapper">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <div className="user-profile-sidebar">
        <h1 className='my-profile-h2'>My Profile</h1>
        <div className="user-icon-wrapper"><img className="user-icon" src={userIcon} alt="" /><label>Profile</label></div>
        </div>

      <div className="user-profile-data">
        <h1>Personal Information</h1>
          <div className="user-info">
            <div className="full-name-wrapper">
              <input className="input" type="text" value={fullName} onChange={e => setFullName(e.target.value)} disabled/>
               <button className="edit-btn" onClick={e => editData(e.target)}>Edit Name</button>
               <button className="save-btn" onClick={e => saveChanges(e.target)}>Save New Name</button>
            </div>
            <div className="email-wrapper">
              <input type="text" value={newEmail} onChange={e=> setNewEmail(e.target.value)} disabled/>
              <button className="edit-btn" onClick={e => editData(e.target)} >Change Email</button>
              <button className="save-btn" onClick={e => saveChanges(e.target)}>Save New Email</button>
              </div>
            <div className="password-wrapper">
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} disabled/>
              <button className="edit-btn" onClick={e => resetPassword()}>Reset Password</button>
              <button className="save-btn" onClick={e => saveChanges(e.target)}>Save New Password</button>
            </div>
            </div>
            <div className="profile-picture-wrapper">
            <img className="profile-picture" src={currentProfilePicture} alt="Current Profile File"/>
            <div className="profile-picture-inputs">
              <p>Profile Picture</p>
            <input className="profile-picture-input" type="file" onChange={e => preUpload(e.target.files[0])}/> <button className="uploadBtndisabled" disabled>Upload Image</button>
            </div>
            </div>
          </div>
        </div>
  )
}