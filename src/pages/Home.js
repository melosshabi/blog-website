import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/home.css'
import { useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc, query, orderBy} from 'firebase/firestore';
import {auth, db} from '../firebase-config';
import trashIcon from './SVGs/trash-solid.svg';
import plusIcon from './SVGs/plus-icon.svg';
import userIcon from './SVGs/user-solid.svg';
import {nanoid} from 'nanoid'

export default function Home({isAuth}) {

  const [postsList, setPostsList] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const collectionRef = collection(db, 'posts')
      const queryPosts = query(collectionRef, orderBy('createdAt'))
      const fetchedQueryPosts = await getDocs(queryPosts)
      setPostsList(fetchedQueryPosts.docs.map(doc=> ({...doc.data(), id:doc.id})))
      let loader = document.getElementsByClassName('loader-wrapper')[0];
      loader.style.display = "none";
    }
    fetchPosts();
  },[])
  const deletePost = async (id)=>{
    const post = doc(db, 'posts', id);
    await deleteDoc(post);
    window.location.reload()
  }
  return (
    <div className="home-page-container">
       <div className="loader-wrapper">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <h1>Home Page</h1>
        {postsList && postsList.map(post =>{
        
          return (
            <div key={nanoid()} className="post">
              {/* Wrapper of user profile picture, name and the delete button */}
              <div className="author-details-wrapper">
              <div className="author-name-profile-pic-wrapper">
               
              {post.authorDetails.authorProfilePicture && <img className="post-pfp" src={post.authorDetails.authorProfilePicture} alt="text"/>}
              {!post.authorDetails.authorProfilePicture && <img className="post-pfp" src={userIcon} alt="text"/>}
                <p>@{post.authorDetails.authorName}</p>
              </div>
              {isAuth && post.authorDetails.id === auth.currentUser.uid && <div className="delete-btn-wrapper"><img className="delete-btn" src={trashIcon} onClick={() => deletePost(post.id)} alt="Trash Icon"/></div>}
              </div>
              {/* Wrapper of the post title */}
              <div className="title-wrapper">
                <h2>{post.title}</h2>
              </div>

              <div className="blog-wrapper">
                <p>{post.blog}</p>
              </div> 
              
            </div>
          )
        })}
       
        {isAuth && <Link className='create-post-mobile' to="/createPost"><img src={plusIcon} alt="text"/></Link>}
    </div>
  )
}
