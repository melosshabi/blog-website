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

export const parseDate = dateToParse => {
    const date = dateToParse.toDate()
    const year = date.getFullYear()
    let month;
    const day = date.getDate()
    const hours = date.getHours()
    let minutes = date.getMinutes()
    if(minutes.toString().length === 1) minutes = `0${minutes}`

    switch(date.getMonth()){
      case 0:
        month = 'Jan'
        break;
      case 1:
        month = "Feb"
        break;
      case 2:
        month = "Mar"
        break;
      case 3:
        month = "Apr"
        break;
      case 4:
        month = "May"
        break;
      case 5:
        month = "June"
        break;
      case 6:
        month = "July"
        break;
      case 7:
        month = "Aug"
        break;
      case 8:
        month = "Sep"
        break;
      case 9:
        month = "Oct"
        break;
      case 10:
        month = "Nov"
        break;
      case 11:
        month = "Dec"
        break;
      default:
        month = ""
    }

    return {year, month, day, hours, minutes}
}