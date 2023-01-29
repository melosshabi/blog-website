import React, {useEffect} from 'react'
import '../Styles/page-not-found.css';

export default function PageNotFound() {
    useEffect(() =>{
        let navbar = document.getElementsByClassName('navbar')[0];
        navbar.style.display = "none";
    }, [])
     
  return (
    <div className='page-not-found'>
        <h1>Blog Website</h1>
        <br/>
        <h2>Error 404 Page not found</h2>
        <br/>
        <h3>Return to the <a href='/blog-website'>Home Page</a></h3>
    </div>
  )
}
