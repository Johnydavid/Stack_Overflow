import React from 'react'
import{Link, Routes, Route} from 'react-router-dom'
import "./leftBar.css";
import Questions from './Questions';
import index from '../home';
import Navbar from '../home/Navbar';


const Leftbar = () => {
  return (
    <div className={"leftBar"}>

<ul className={"nav flex-column m-5"}>
  <li className={"nav-item m-3"}>
  <Link to="/">Home</Link>
  </li>
  
    <li className={"nav-item m-3"}>
        
    <Link to="/questions">Questions</Link>
  </li>
  <li className={"nav-item m-3"}>
    <Link to="/tags">Tags</Link>
  </li>
  <li className={"nav-item m-3"}>
    <Link to="/users">Users</Link>
  </li>

</ul>
<Routes>
<Route path = "/" exact element = {<Navbar />}></Route>
<Route path = "/questions" exact element = {<Questions/>}></Route>
{/* <Route path = "/signup" exact element = {<Signup />}></Route>
<Route path = "/leftbar" exact element = {<Leftbar />}></Route> */}

</Routes> 

      
      </div>


  )
}

export default Leftbar

