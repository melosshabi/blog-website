import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
// Functions
import {auth, db, storage} from '../firebase-config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {nanoid} from 'nanoid'
// Images
import imageIcon from './SVGs/image-icon.svg'
import videoIcon from './SVGs/video.svg'
// CSS
import '../Styles/create-post.css'

export default function CreatePost({isAuth}) {

  useEffect(()=>{if(!isAuth){
    navigate('/signIn')
  }}, [])

  const [title, setTitle] = useState('');
  const [blog, setblog] = useState('');
  const [error, setError] = useState('');
  // Picture to upload
  const [picture, setPicture] = useState('')
  // Video
  const [video, setVideo] = useState('')

  let navigate = useNavigate();

  //This function creates a blog and sends the data to the databse
  const createBlog = async ()=>{
    if(title !== "" && blog !== ""){
    const createBlogBtn = document.querySelector('.create-blog-btn')
    const returnToHomeBtn = document.querySelector('.return-to-home-btn')
    createBlogBtn.disabled = true;
    returnToHomeBtn.style.display = "none";

    const collectionRef = collection(db, 'posts');
    const profilePictureRef = ref(storage, `Profile Pictures/ProfilePictureOf${auth.currentUser.uid}`)
    let profilePicture = '';
    let postPicture = ''
    let postVideo = ''
    let pictureName = ''
    let videoName = ''
    await getDownloadURL(profilePictureRef).then(url => profilePicture = url)
     
    if(picture){
      pictureName = `PostPictures/${nanoid()}`
      const pictureRef = ref(storage, pictureName)
      await uploadBytes(pictureRef, picture)
      await getDownloadURL(pictureRef).then(url => postPicture = url)
    }
    if(video){
      videoName = `PostVideos/${nanoid()}`
      const videoRef = ref(storage, videoName)
      await uploadBytes(videoRef, video)
      await getDownloadURL(videoRef).then(url => postVideo = url)
    }
    await addDoc(collectionRef, {title:title, blog:blog, picture:postPicture, pictureName, video:postVideo, videoName, createdAt:serverTimestamp(), lastUpdatedAt:serverTimestamp(), authorDetails:{authorName:auth.currentUser.displayName, authorEmail:auth.currentUser.email, authorProfilePicture: profilePicture, id:auth.currentUser.uid}})
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

  function addVideo(){
    document.querySelector('.post-video-input').click()
  }

  function handleVideoChange(e){
    const file = e.target.files[0]
    setVideo(file)

    const previewVideo = document.querySelector('.preview-post-video')
    previewVideo.style.display = "inline"

    const blobURL = URL.createObjectURL(file)
    previewVideo.src = blobURL
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
            {/* Picture upload */}
            <div><abbr title="Add image" style={{marginRight:'30px', textDecoration:'none'}}><img className="image-icon" src={imageIcon} onClick={() => addPicture()}/> <input type="file" accept="image/png, image/jpeg" className='post-image-input' onChange={e => handlePictureChange(e)}/></abbr> 
                <img src="" style={{display:'none'}} className='preview-post-img'/>
                {/* Video Upload */}
                <abbr title="Add video" style={{marginRight:"30px", textDecoration:'none'}}><img className='image-icon video-icon' src={videoIcon} onClick={() => addVideo()} /> <input type="file" accept="video/mp4" className='post-image-input post-video-input' onChange={e => handleVideoChange(e)}/></abbr>
                <video className='preview-post-video' style={{display:'none'}} onClick={() => {
                  const video = document.querySelector('.preview-post-video')
                  if(video.paused) video.play()
                  else video.pause()
                }}>
                  <source src=""/>
                </video>
            </div>

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