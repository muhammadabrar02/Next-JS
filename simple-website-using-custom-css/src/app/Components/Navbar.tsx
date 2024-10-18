import React from 'react'
import "../styles/Navbar.css";
import Image from 'next/image';

export default function page() {
  return (
    <div >
      {/* logo */}
      <nav className='navbar'>
        <div className="logo">
          My Website
        </div>
        {/* navbar items */}
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        {/* button */}
        <button className="btn">
          sign In
        </button>


      </nav>


    </div>
  )
}
