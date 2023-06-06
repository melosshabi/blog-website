import './App.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreatePost from './pages/CreatePost'
import UserProfile from './pages/UserProfile';
import PageNotFound from './pages/PageNotFound'
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import caret from './pages/SVGs/caret-down.svg';
import UserPosts from './pages/UserPosts';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const logOut = async () =>{
    await signOut(auth).then(()=>{localStorage.clear(); setIsAuth(false); })
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    if(isAuth){
      let navSignInOut = document.getElementsByClassName('navbar-sign-in-out')[0];
      if(window.screen.width > 1024){
        navSignInOut.style.width = "21%";
      }
      if(window.screen.width === 1024){
        navSignInOut.style.width = "27%";
      }
  }})
    
  function toggleSidebar(){
    document.getElementsByClassName('sidebar')[0].classList.toggle('active');
    document.querySelector('html').classList.toggle('disableScroll')
  }
  function expandViewProifleDiv(){
    let viewProfileDiv = document.getElementsByClassName('view-profile-div')[0];
    viewProfileDiv.classList.toggle('profile-div-active')
  }
  function shrinkProfileDiv(){
    let viewProfileDiv = document.getElementsByClassName('view-profile-div')[0];
    viewProfileDiv.classList.toggle('profile-div-active');
  }
 
  return (
    <Router>
    <nav className="navbar">
      <div className="navbar-btns">
        <Link to="/">Home</Link>
        {isAuth && <Link to="/createPost" isAuth={isAuth}>Create Post</Link>}
      </div>
      <div className={!isAuth ? 'navbar-sign-in-out' : 'navbar-sign-in-out username-wrapper'}>
      {!isAuth && <Link to="/signUp">Sign Up</Link>}
      {!isAuth && <Link to="/signIn">Sign in</Link>}
      {isAuth && <div className='username-profilebtn-wrapper'>
        <button className="view-profile-btn" onClick={expandViewProifleDiv}>{localStorage.getItem('name')}<img className="caret" src={caret} alt="text"/></button>
          <div className="view-profile-div"><Link to="/userProfile" onClick={shrinkProfileDiv}>View Profile</Link></div>
        </div>}
      {isAuth && <Link to="/" onClick={logOut}>Sign Out</Link>}
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
    <div className="sidebar">
      <div className="sidebar-btns">
        <Link onClick={toggleSidebar} to="/">Home</Link>
        {isAuth && <Link onClick={toggleSidebar} to="/createPost">Create post</Link>}
        {isAuth && <Link onClick={toggleSidebar} to="/userProfile">View Profile</Link>}
        {isAuth && <Link onClick={toggleSidebar} to="/userPosts">My Posts</Link>}
      </div>
      <div className="sidebar-sign-in-out">
      {!isAuth && <Link to="/signUp" onClick={toggleSidebar}>Sign Up</Link>}
      {!isAuth && <Link to="/signIn" onClick={toggleSidebar}>Sign in</Link>}
      {isAuth && <Link to="/" onClick={logOut}>Sign Out</Link>}
      {isAuth && <p>{localStorage.getItem('email')}</p>}
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/signIn" element={<SignIn isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
      <Route path="/signUp" element={<SignUp isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
      <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}/>
      <Route path="/userProfile" element={<UserProfile isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
      <Route path="/userPosts" element={<UserPosts isAuth={isAuth}/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </Router>
  );
}

export default App;