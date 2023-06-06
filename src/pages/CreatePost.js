import React, {useEffect, useState} from 'react'
import '../Styles/create-post.css'
import {auth, db, storage} from '../firebase-config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {nanoid} from 'nanoid'
import imageIcon from './SVGs/image-icon.svg'

export default function CreatePost({isAuth}) {

  useEffect(()=>{if(!isAuth){
    navigate('/signIn')
  }}, [])

  const [title, setTitle] = useState('');
  const [blog, setblog] = useState('');
  const [error, setError] = useState('');
  // Picture to upload
  const [picture, setPicture] = useState('')
  // Picture to preview
  const [previewPicture, setPreviewPicture] = useState('')

  let navigate = useNavigate();

  //This function creates a blog and sends the data to the databse
  const createBlog = async ()=>{
    if(title !== "" && blog !== ""){
    const collectionRef = collection(db, 'posts');
    const profilePictureRef = ref(storage, `Profile Pictures/ProfilePictureOf${auth.currentUser.uid}`)
    let profilePicture = '';
    let postPicture = ''
    await getDownloadURL(profilePictureRef).then(url => profilePicture = url)
     
    if(picture){
      const pictureRef = ref(storage, `PostPictures/${nanoid()}`)
      await uploadBytes(pictureRef, picture)
      await getDownloadURL(pictureRef).then(url => postPicture = url)
    }
    await addDoc(collectionRef, {title:title, blog:blog, picture:postPicture, createdAt:serverTimestamp(), lastUpdatedAt:serverTimestamp(), authorDetails:{authorName:auth.currentUser.displayName, authorEmail:auth.currentUser.email, authorProfilePicture: profilePicture, id:auth.currentUser.uid}})
    .then(()=> navigate('/'))    
  }else{
    setError('Please enter a title and a blog')
  }}

  function addPicture(){
    document.querySelector('.post-image-input').click()
  }
  function handlePictureChange(e) {
    setPicture(e.target.files[0])

    const previewImg = document.querySelector('.preview-post-img')
    previewImg.style.display = "inline"
    const reader = new FileReader()
    reader.onload = e => previewImg.src = e.target.result
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div className="createPost-container">
        <div className="post-wrapper">
          <h2>What's on your mind?</h2>

          <div className="post-title-wrapper">
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>

          <div className="post-text-wrapper">
            <textarea placeholder='Blog' value={blog} max="500" onChange={e => setblog(e.target.value)}></textarea>
            <div><abbr title="Add image" style={{marginRight:'30px', textDecoration:'none'}}><img className="image-icon" src={imageIcon} onClick={() => addPicture()}/> <input type="file" accept="image/png, image/jpeg" className='post-image-input' onChange={e => handlePictureChange(e)}/></abbr> 
                <img src={previewPicture} style={{display:'none'}} className='preview-post-img'/></div>
          </div>
          {error && <label>{error}</label>}
          <div className="create-blog-wrapper">
            <Link to="/" className='return-to-home-btn'>Return to Home Page</Link>
            <button className='create-blog-btn' onClick={createBlog}>Create Blog</button>
          </div>
        </div>
      </div>
  )
}