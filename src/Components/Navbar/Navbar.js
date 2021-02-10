import React from 'react';
import "./Navbar.scss";
import logo from '../../logo.png';

export default function Navbar() {
	return (


   <nav className = "navbar">
	

	<ul className="nav-links">
  <img src={logo} alt="tour log" />
    

     <li>
       <a href="/" className="nav-link" >
          Home
       </a>
       </li>

         <li>
       <a href="/" className="nav-link" >
          About
       </a>
       </li>
          <li>
       <a href="/" className="nav-link active ">
          Hotels
       </a>
       </li>
         <li>

       <a href="/" className="nav-link active" >
          Tours
       </a>
       </li>
  



	 </ul>
	</nav>

	);
}