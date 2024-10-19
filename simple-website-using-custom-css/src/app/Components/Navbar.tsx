import React from 'react'
import "../styles/Navbar.css";
import Link from 'next/link';


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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* button */}
        <Link href="/contact">
          <button className="btn" >
            Get in Touch
          </button>
        </Link>


      </nav>


    </div>
  )
}
