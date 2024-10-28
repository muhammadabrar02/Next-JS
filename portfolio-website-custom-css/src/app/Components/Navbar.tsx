import React from 'react';
import Link from 'next/link';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Portfolio</h1> 
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
