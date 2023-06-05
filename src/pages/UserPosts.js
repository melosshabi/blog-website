import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { auth, db } from '../firebase-config'
import '../Styles/user-posts.css'
import {nanoid} from 'nanoid';
import userIcon from './SVGs/user-solid.svg'
import trashIcon from './SVGs/trash-solid.svg'
import plusIcon from './SVGs/plus-icon.svg'
export default function UserPosts({isAuth}) {
    
  const [userPosts, setUserPosts] = useState([]);

  //This function fetches all the posts created by the logged in user
  auth.onAuthStateChanged(()=>{
    (async function fetchUserPosts(){
        const collectionRef = collection(db, "posts");
        const userPostsQuery = query(collectionRef, where("authorDetails.id", "==", auth.currentUser.uid))
        const usersPosts = await getDocs(userPostsQuery);
        setUserPosts(usersPosts.docs.map(doc => ({...doc.data(), id:doc.id})))
        })();
  })
  const deletePost = async (id)=>{
    const post = doc(db, 'posts', id);
    await deleteDoc(post);
    window.location.reload()
  }
  return (
    <div className="user-posts-container">
        <h1>My Posts</h1>
        {userPosts.map(post =>{
            return(
                <div key={nanoid()} className="post userPost">
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
        {isAuth && <Link className='create-post-mobile' to="/blog-website/createPost"><img src={plusIcon} alt="text"/></Link>}
    </div>
  )
}
