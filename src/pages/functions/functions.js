import {useRef} from 'react'
import {doc, updateDoc} from 'firebase/firestore'
import {db} from '../../firebase-config'

export const toggleMoreOptions = (index) => {
    document.querySelectorAll('.post')[index].querySelector('.more-options').classList.toggle("active-more-options")
  }

  // This variable will be used to store the content of the blog before it was edited
  let beforeEditText = ''
export const editPost = (index) => {
    const blogToEdit = document.querySelectorAll('.post')[index].querySelector('.blog-content')
    document.querySelectorAll('.post')[index].querySelector('.more-options').classList.remove('active-more-options')
    document.querySelectorAll('.post')[index].querySelector('.save-edit-post-btn').classList.toggle('active-save-edit-post-btn')
    blogToEdit.contentEditable = true
    blogToEdit.focus()
    beforeEditText = blogToEdit.innerText
  }

export const saveEdit = async (postId, index) => {
    const saveBtn = document.querySelectorAll('.post')[index].querySelector('.save-edit-post-btn')
    const blogContent = document.querySelectorAll('.post')[index].querySelector('.blog-content')
    blogContent.contentEditable = false
    saveBtn.classList.remove('active-save-edit-post-btn')

    if(blogContent.innerText === beforeEditText){
      return
    }
    const postRef = doc(db, 'posts', postId)
    await updateDoc(postRef, {
      blog:blogContent.innerText
    })
  }