import React, {useEffect} from 'react'

export default function PageNotFound() {
    useEffect(() =>{
        let navbar = document.getElementsByClassName('navbar')[0];
        console.log(navbar)
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
