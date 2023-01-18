import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreatePost from './pages/CreatePost'
import PageNotFound from './pages/PageNotFound'
import { signOut } from 'firebase/auth';
import {ref, uploadBytes} from 'firebase/storage'
import { auth, storage } from './firebase-config';
import UserProfile from './pages/UserProfile';
import caret from './pages/SVGs/caret-down.svg'
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const logOut = async () =>{
    await signOut(auth).then(()=>{localStorage.clear(); setIsAuth(false)})
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    if(isAuth){
      let navSignInOut = document.getElementsByClassName('navbar-sign-in-out')[0];
      if(window.screen.width >= 1920){
        console.log(true)
        navSignInOut.style.width = "5%";
        navSignInOut.style.background = "red";
      }
      if(window.screen.width > 1024){
        navSignInOut.style.width = "20%";
      }
      if(window.screen.width == 1024){
        navSignInOut.style.width = "30%";
      }
  }})
    
  function toggleSidebar(){
    let sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.classList.toggle('active');
  }
  function expandViewProifleDiv(){
    let viewProfileDiv = document.getElementsByClassName('view-profile-div')[0];
    viewProfileDiv.classList.toggle('profile-div-active')
  }
  function shrinkProfileDiv(){
    let viewProfileDiv = document.getElementsByClassName('view-profile-div')[0];
    viewProfileDiv.classList.toggle('profile-div-active');
  }
  function test() {
    let storageRef = ref(storage, 'images')
    uploadBytes(storageRef, './SVGs/user-solid.svg')
  }
  test()
  return (
    <Router>
    <nav className="navbar">
      <div className="navbar-btns">
        <Link to="/blog-website">Home</Link>
        {isAuth && <Link to="/createPost">Create Post</Link>}
        
      </div>
      <div className="navbar-sign-in-out">
      {!isAuth && <Link to="/signUp">Sign Up</Link>}
      {!isAuth && <Link to="/signIn">Sign in</Link>}
      {isAuth && <div className='username-profilebtn-wrapper'>
        <button className="view-profile-btn" onClick={expandViewProifleDiv}>{localStorage.getItem('name')}<img className="caret" src={caret}/></button>
          <div className="view-profile-div"><Link to="/userProfile" onClick={shrinkProfileDiv}>View Profile</Link></div>
        </div>}
      {isAuth && <Link to="/signIn" onClick={logOut}>Sign Out</Link>}
      </div>
      <button className="sidebar-btn" onClick={toggleSidebar}>
        <div className="hamburger-menu">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </button>
    </nav>
    <div className="sidebar" >
      <div className="sidebar-btns">
        <Link to="/blog-website">Home</Link>
        {isAuth && <Link>Create post</Link>}
      </div>
      <div className="sidebar-sign-in-out">
      {!isAuth && <Link to="/signUp">Sign Up</Link>}
      {!isAuth && <Link to="/signIn">Sign in</Link>}
      {isAuth && <Link to="/signIn" onClick={logOut}>Sign Out</Link>}
      {isAuth && <p>{localStorage.getItem('email')}</p>}
      </div>
    </div>
    <Routes>
      <Route path="/blog-website" element={<Home isAuth={isAuth}/>}/>
      <Route path="/signIn" element={<SignIn isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
      <Route path="/signUp" element={<SignUp isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
      <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}/>
      <Route path="/userProfile" element={<UserProfile/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </Router>
  );
}

export default App;
