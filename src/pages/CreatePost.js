import React, {useEffect, useState} from 'react'
import '../Styles/create-post.css'
import {auth, db, storage} from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';

export default function CreatePost({isAuth}) {

  const [title, setTitle] = useState('');
  const [blog, setblog] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();

  //This function creates a blog and sends the data to the databse
  const createBlog = async ()=>{
    if(title !== "" && blog !== ""){
    const collectionRef = collection(db, 'posts');
    const profilePictureRef = ref(storage, `Profile Pictures/ProfilePictureOf${auth.currentUser.uid}`)
    let profilePicture = '';
    await getDownloadURL(profilePictureRef).then(url => {
      profilePicture = url;
  }).catch(err => console.log(err))
    await addDoc(collectionRef, {title:title, blog:blog, authorDetails:{authorName:auth.currentUser.displayName, authorEmail:auth.currentUser.email, authorProfilePicture :profilePicture,id:auth.currentUser.uid}})
    .then(()=> navigate('/blog-website'))
    
  }else{
    setError('Please enter a title and a blog')
  }
}
  useEffect(()=>{if(!isAuth){
    navigate('/signIn')
  }}, [])

  return (
    <div className="createPost-container">
        <div className="post-wrapper">
          <h2>What's on your mind?</h2>
          <div className="post-title-wrapper">
            <label>Title:</label><input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="post-text-wrapper">
          <label>Blog:</label><textarea value={blog} max="500" onChange={e => setblog(e.target.value)}></textarea>
          </div>
          <div className="create-blog-wrapper">
            <Link to="/blog-website" className='return-to-home-btn'>Return to Home Page</Link>
            <button className='create-blog-btn' onClick={createBlog}>Create Blog</button>
          </div>
        </div>
      </div>
  )
}
