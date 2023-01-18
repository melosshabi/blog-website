import React, {useEffect, useState} from 'react'
import {auth, db} from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

export default function CreatePost({isAuth}) {
  const [title, setTitle] = useState('');
  const [blog, setblog] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();
  const createBlog = async ()=>{
    if(title != "" && blog != ""){
    const collectionRef = collection(db, 'posts');
    await addDoc(collectionRef, {title:title, blog:blog, authorDetails:{authorName:auth.currentUser.displayName, authorEmail:auth.currentUser.email, id:auth.currentUser.uid}})
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
      <h1>Create A New Post</h1>
      <div className="cp-inputs">
        <div className="input-cp"><label>Title:</label><input type="text" placeholder='Title...' value={title} onChange={e => setTitle(e.target.value)}/></div>
        <div className="input-cp"><label htmlFor="title">Blog:</label><textarea id="blog" name="title" placeholder='Blog...' value={blog} onChange={e => setblog(e.target.value)}></textarea></div>
        
      </div>
      {error && <p>{error}</p>}
      <div className="button-wrapper">
      <button className="submit-blog" onClick={createBlog}>Create Blog</button>
      </div>
    </div>
  )
}
