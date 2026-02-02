import React, { useState } from 'react'
import "../Styles/Navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
  let [showMenu,setShowMenu]=useState(false)
  let navigate=useNavigate();
  return (
    <nav>
       <div id='logo'>
        <Link to={"/"}><small>Path</small><strong>Learning</strong><sup>AK</sup></Link>
       </div>
       <div id='menu'>
        <NavLink to={"/learn"} onmouseover={()=>setShowMenu(true)}>Learn</NavLink>
        <NavLink to={"/practice"}>Practice</NavLink>
        <NavLink to={"/mock_test"}>Mock Test</NavLink>
        <NavLink to={"/progress_report"}>Progress Report</NavLink>
       </div>
       <div id='profile'>
        <span>Login/Signup</span>
       </div>
    </nav>
  )
}

export default Navbar;
