import { updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import {auth} from '../firebase-config'
import React from 'react'
import { useState } from 'react';
import userIcon from './SVGs/user-solid.svg';
export default function UserProfile() {
  const [fullName, setFullName] = useState(localStorage.getItem('name'));
  const [newEmail, setNewEmail] = useState(localStorage.getItem('email'))
  const [newPassword, setNewPassword] = useState('******')

   function editData(button){
    button.parentNode.childNodes[0].disabled = false;
    button.parentNode.childNodes[2].style.display = "block";
    if(button.innerText === "Change Password"){
      button.parentNode.childNodes[0].value = "";
    }
  }
   async function saveChanges(button){
 
      console.log(newPassword)
      button.parentNode.childNodes[0].disabled = true;
      button.style.display = "none";
      await updateProfile(auth.currentUser, {displayName:fullName})
      await updateEmail(auth.currentUser, newEmail)
      await updatePassword(auth.currentUser, newPassword)
      .then(() => {
        console.log("password updated")
        localStorage.setItem('name', fullName)
        localStorage.setItem('email', newEmail)
        window.location.reload()
      })
    
  }
  return (
    <div className="user-profile-page">
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
               <button className="save-btn" onClick={e => saveChanges(e.target)}>Save Changes</button>
            </div>
            <div className="email-wrapper">
              <input type="text" value={newEmail} onChange={e=> setNewEmail(e.target.value)} disabled/>
              <button className="edit-btn" onClick={e => editData(e.target)} >Change Email</button>
              <button className="save-btn" onClick={e => saveChanges(e.target)}>Save Changes</button>
              </div>
            <div className="password-wrapper">
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} disabled/>
              <button className="edit-btn" onClick={e => editData(e.target)}>Change Password</button>
              <button className="save-btn" onClick={e => saveChanges(e.target)}>Save Changes</button>
            </div>
          </div>
        </div>
    </div>
  )
}
