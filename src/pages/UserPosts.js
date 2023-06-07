import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
// Functions
import {nanoid} from 'nanoid';
import { auth, db } from '../firebase-config'
import { toggleMoreOptions, editPost, saveEdit, parseDate } from './functions/functions';
import { collection, getDocs, query, where, orderBy, deleteDoc, doc } from 'firebase/firestore';
// Images
import userIcon from './SVGs/user-solid.svg'
import trashIcon from './SVGs/trash-solid.svg'
import plusIcon from './SVGs/plus-icon.svg'
import editIcon from './SVGs/edit.svg'
// CSS
import '../Styles/user-posts.css'

export default function UserPosts({isAuth}) {
    
  const [userPosts, setUserPosts] = useState([]);

  //This function fetches all the posts created by the logged in user
  useEffect(() => {
    auth.onAuthStateChanged(()=>{
      if(auth.currentUser !== null){
      (async function fetchUserPosts(){
          const collectionRef = collection(db, "posts");
          const userPostsQuery = query(collectionRef, where("authorDetails.id", "==", auth.currentUser.uid), orderBy('createdAt'))
          const usersPosts = await getDocs(userPostsQuery);
          setUserPosts(usersPosts.docs.map(doc => ({...doc.data(), id:doc.id})))
          })();}
    })
  }, [])
 
  const deletePost = async (id)=>{
    const post = doc(db, 'posts', id);
    await deleteDoc(post);
    window.location.reload()
  }
  return (
    <div className="user-posts-container">
        <h1>My Posts</h1>
        {userPosts.map((post, index) =>{
            const date = parseDate(post.createdAt)
            return(
              <div key={nanoid()} className="post userPost">
              {/* Wrapper of user profile picture, name and the delete button */}
              <div className="author-details-wrapper userPost-author-details-wrapper">
              <div className="author-name-profile-pic-wrapper userPost-profile-pic-wrapper">
               
              {post.authorDetails.authorProfilePicture && <img className="post-pfp userPost-pfp" src={post.authorDetails.authorProfilePicture} alt="text"/>}
              {!post.authorDetails.authorProfilePicture && <img className="post-pfp userPost-pfp" src={userIcon} alt="text"/>}
                <p>@{post.authorDetails.authorName}</p>
              </div>
              
              <div className="more-options-btn-wrapper userPost-more-options">
                <button className='more-options-btn userPost-more-options-btn' onClick={() => toggleMoreOptions(index)}><p>···</p></button>
                <div className="more-options">
                  <ul className='more-options-ul'>
                    <li><button className='more-options-btns userPost-delete-btn userPost-more-options-btns' onClick={() => deletePost(post.id)}><img className="trash-icon" src={trashIcon}  alt="Trash Icon"/>Delete</button></li>
                    <li><button className='more-options-btns edit-btn userPost-edit-btn userPost-more-options-btns' onClick={() => editPost(index)}><img className="edit-icon" src={editIcon}  alt="Trash Icon"/>Edit</button></li>
                  </ul>
                </div>
              </div>              
              
              </div>
              {/* Wrapper of the post title */}
              <div className="title-wrapper">
                <h2>{post.title}</h2>
              </div>

              <div className="blog-wrapper">
                <p contentEditable="false" className='blog-content'>{post.blog}</p>
                {post.picture && <img src={post.picture} className='home-post-picture'/>}
                {post.video &&
                  <video controls className='userPost-video'>
                    <source src={post.video}/>
                  </video>
                  }
                <button className='save-edit-post-btn' onClick={() => saveEdit(post.id, index)}>Save</button>
              </div> 
              <p className="post-date userPost-date">{date.day} {date.month} {date.year} {date.hours}:{date.minutes}</p>
            </div>
            )
        })}
        {isAuth && <Link className='create-post-mobile' to="/createPost"><img src={plusIcon} alt="text"/></Link>}
    </div>
  )
}
