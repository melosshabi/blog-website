import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
// Functions
import { getDocs, collection, deleteDoc, doc, query, orderBy} from 'firebase/firestore';
import {deleteObject, ref} from 'firebase/storage'
import {auth, db, storage} from '../firebase-config';
import {nanoid} from 'nanoid'
import { toggleMoreOptions, editPost, saveEdit, parseDate } from './functions/functions';
// Images
import trashIcon from './SVGs/trash-solid.svg';
import editIcon from './SVGs/edit.svg'
import plusIcon from './SVGs/plus-icon.svg';
import userIcon from './SVGs/user-solid.svg';
// CSS
import '../Styles/home.css'

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

  const deletePost = async (id, pictureName, videoName) => {
    let picRef;
    let videoRef;
    if(pictureName){
      picRef = ref(storage, pictureName)
      await deleteObject(picRef)
    } 
    if(videoName){
      videoRef = ref(storage, videoName)
      await deleteObject(videoRef)
    } 
    const post = doc(db, 'posts', id)
    await deleteDoc(post)
    .then(() => window.location.reload())
  }

  return (
    <div className="home-page-container">
       <div className="loader-wrapper">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <h1>Home Page</h1>
        {postsList && postsList.map((post, index) =>{
          const date = parseDate(post.createdAt)
          return (
            <div key={nanoid()} className="post">
              {/* Wrapper of user profile picture, name and the delete button */}
              <div className="author-details-wrapper">
              <div className="author-name-profile-pic-wrapper">
               
              {post.authorDetails.authorProfilePicture && <img className="post-pfp" src={post.authorDetails.authorProfilePicture} alt="text"/>}
              {!post.authorDetails.authorProfilePicture && <img className="post-pfp" src={userIcon} alt="text"/>}
                <p>@{post.authorDetails.authorName}</p>
              </div>
              {isAuth && post.authorDetails.id === auth.currentUser.uid && 
              <div className="more-options-btn-wrapper">
                <button className='more-options-btn' onClick={() => toggleMoreOptions(index)}><p>···</p></button>
                <div className="more-options">
                  <ul className='more-options-ul'>
                    <li><button className='more-options-btns delete-btn' onClick={() => deletePost(post.id, post.pictureName, post.videoName)}><img className="trash-icon" src={trashIcon}  alt="Trash Icon"/>Delete</button></li>
                    <li><button className='more-options-btns edit-btn' onClick={() => editPost(index)}><img className="edit-icon" src={editIcon}  alt="Trash Icon"/>Edit</button></li>
                  </ul>
                </div>
              </div>
              }
              </div>
              {/* Wrapper of the post title */}
              <div className="title-wrapper">
                <h2>{post.title}</h2>
              </div>

              <div className="blog-wrapper">
                <p contentEditable="false" className='blog-content'>{post.blog}</p>
                {post.picture && <img src={post.picture} className='home-post-picture'/>}
                {post.video && 
                <video controls className='home-post-video'>
                  <source src={post.video}/>
                </video>}
                <button className='save-edit-post-btn' onClick={() => saveEdit(post.id, index)}>Save</button>
              </div> 
              <p className='post-date'>{date.day} {date.month} {date.year} {date.hours}:{date.minutes}</p>
            </div>
          )
        })}
       
        {isAuth && <Link className='create-post-mobile' to="/createPost"><img src={plusIcon} alt="plus icon"/></Link>}
    </div>
  )
}
