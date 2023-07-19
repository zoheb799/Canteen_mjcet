import React from 'react';
import { useState } from 'react'
import { NavLink , Link} from 'react-router-dom'
import  Hamburger  from "../images/humberger.jpeg";
import  Brand  from "../images/logo.jpg";
import '../App.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <figure className="logo">
        <Link to ='/'>
        <img src= {Brand} alt="brand pic" 
              
              /></Link></figure>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <figure className="humbe_rger"><img src= {Hamburger} alt="menu pic" /></figure>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/Registration">Registration</NavLink>
            </li>
           
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar