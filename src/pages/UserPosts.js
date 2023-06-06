import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { auth, db } from '../firebase-config'
import '../Styles/user-posts.css'
import {nanoid} from 'nanoid';
import { toggleMoreOptions, editPost, saveEdit } from './functions/functions';
import userIcon from './SVGs/user-solid.svg'
import trashIcon from './SVGs/trash-solid.svg'
import plusIcon from './SVGs/plus-icon.svg'
import editIcon from './SVGs/edit.svg'
export default function UserPosts({isAuth}) {
    
  const [userPosts, setUserPosts] = useState([]);

  //This function fetches all the posts created by the logged in user
  useEffect(() => {
    auth.onAuthStateChanged(()=>{
      (async function fetchUserPosts(){
          const collectionRef = collection(db, "posts");
          const userPostsQuery = query(collectionRef, where("authorDetails.id", "==", auth.currentUser.uid))
          const usersPosts = await getDocs(userPostsQuery);
          setUserPosts(usersPosts.docs.map(doc => ({...doc.data(), id:doc.id})))
          })();
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
            return(
              <div key={nanoid()} className="post userPost">
              {/* Wrapper of user profile picture, name and the delete button */}
              <div className="author-details-wrapper userPost-author-details-wrapper">
              <div className="author-name-profile-pic-wrapper user-post-profile-pic-wrapper">
               
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
                <button className='save-edit-post-btn' onClick={() => saveEdit(post.id, index)}>Save</button>
              </div> 
              
            </div>
            )
        })}
        {isAuth && <Link className='create-post-mobile' to="/blog-website/createPost"><img src={plusIcon} alt="text"/></Link>}
    </div>
  )
}
