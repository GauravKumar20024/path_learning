import React from 'react'
import "../Styles/Navbar.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
       <div id='logo'><small>Path</small><strong>Learning</strong></div>
       <div id='menu'>
        <NavLink to={"/learn"}>Learn</NavLink>
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
