import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/home.css'
import { useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc, query, orderBy, updateDoc} from 'firebase/firestore';
import {auth, db} from '../firebase-config';
import trashIcon from './SVGs/trash-solid.svg';
import editIcon from './SVGs/edit.svg'
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

  const toggleMoreOptions = (index) => {
    document.querySelectorAll('.post')[index].querySelector('.more-options').classList.toggle("active-more-options")
  }

  const deletePost = async (id) => {
    const post = doc(db, 'posts', id);
    await deleteDoc(post)
    .then(() => window.location.reload())
    .catch(err => console.log)
    
  }

  // This variable will be used to store the content of the blog before it was edited
  const beforeEditText = useRef()

  const editPost = (index) => {
    const blogToEdit = document.querySelectorAll('.post')[index].querySelector('.blog-content')
    document.querySelectorAll('.post')[index].querySelector('.more-options').classList.remove('active-more-options')
    document.querySelectorAll('.post')[index].querySelector('.save-edit-post-btn').classList.toggle('active-save-edit-post-btn')
    blogToEdit.contentEditable = true
    blogToEdit.focus()
    beforeEditText.current = blogToEdit.innerText
  }

  const saveEdit = async (postId, index) => {
    const saveBtn = document.querySelectorAll('.post')[index].querySelector('.save-edit-post-btn')
    const blogContent = document.querySelectorAll('.post')[index].querySelector('.blog-content')
    blogContent.contentEditable = false
    saveBtn.classList.remove('active-save-edit-post-btn')

    if(blogContent.innerText === beforeEditText.current){
      return
    }
    const postRef = doc(db, 'posts', postId)
    await updateDoc(postRef, {
      blog:blogContent.innerText
    })
  }

  return (
    <div className="home-page-container">
       <div className="loader-wrapper">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <h1>Home Page</h1>
        {postsList && postsList.map((post, index) =>{
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
                    <li><button className='more-options-btns delete-btn' onClick={() => deletePost(post.id)}><img className="trash-icon" src={trashIcon}  alt="Trash Icon"/>Delete</button></li>
                    <li><button className='more-options-btns edit-btn' onClick={() => editPost(index)}><img className="edit-icon" src={editIcon}  alt="Trash Icon"/>Edit</button></li>
                  </ul>
                </div>
              </div>
              // <div className="delete-btn-wrapper"><img className="delete-btn" src={trashIcon} onClick={() => deletePost(post.id)} alt="Trash Icon"/></div>
              }
              </div>
              {/* Wrapper of the post title */}
              <div className="title-wrapper">
                <h2>{post.title}</h2>
              </div>

              <div className="blog-wrapper">
                <p contentEditable="false" className='blog-content'>{post.blog}</p>
                <button className='save-edit-post-btn' onClick={() => saveEdit(post.id, index)}>Save</button>
              </div> 
              
            </div>
          )
        })}
       
        {isAuth && <Link className='create-post-mobile' to="/createPost"><img src={plusIcon} alt="text"/></Link>}
    </div>
  )
}
