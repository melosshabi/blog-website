import React, { useState } from 'react'
import { useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import {auth, db} from '../firebase-config';
import trashIcon from './SVGs/trash-solid.svg'
import plusIcon from './SVGs/plus-icon.svg';
import sampleProfilePic from './SVGs/user-solid.svg'
import {nanoid} from 'nanoid'
export default function Home({isAuth}) {
  const [postsList, setPostsList] = useState([]);
  
  useEffect(()=>{
    const getPosts = async () =>{
      const collectionRef = collection(db, 'posts')
      const data = await getDocs(collectionRef);
      setPostsList(data.docs.map(doc=> ({...doc.data(), id:doc.id})))
    }
    getPosts();
  },[])
  const deletePost = async (id)=>{
    const post = doc(db, 'posts', id);
    await deleteDoc(post);
    window.location.reload()
  }
  return (
    <div className="home-page-container">
      <h1>Home Page</h1>
        {postsList.map(post =>{
          return (
            <div key={nanoid()} className="post">
              <img style={{width:"25px"}} className="post-pfp" src={sampleProfilePic}/>
              <p id="author">@{post.authorDetails.authorName}</p>
              <hr/>
              <h2 className='post-title'>{post.title}</h2>
              {isAuth && post.authorDetails.id === auth.currentUser.uid && <button className="delete-btn" onClick={() => deletePost(post.id)}><img src={trashIcon}/></button>}
              <br/>
              <p id="blog">{post.blog}</p>
            </div>
          )
        })}
        <button className='create-post-mobile' onClick={()=> {window.location.pathname = "/createPost"}}><img src={plusIcon} /></button>
    </div>
  )
}
