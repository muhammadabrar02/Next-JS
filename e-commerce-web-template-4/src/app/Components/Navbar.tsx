import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-white shadow-md px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-indigo-900">Hekto</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Home with Dropdown Icon */}
          <div className="flex items-center space-x-1 text-sm font-medium text-indigo-900 hover:text-pink-500">
            <Link href="/">Home</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <Link href="/page" className="text-sm font-medium text-gray-700 hover:text-pink-500">Page</Link>
          <Link href="/product" className="text-sm font-medium text-gray-700 hover:text-pink-500">Products</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-pink-500">Blog</Link>
          <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-pink-500">Shop</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-pink-500">Contact</Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 text-sm text-gray-700 focus:outline-none"
          />
          <button
            className="bg-pink-500 text-white flex items-center justify-center"
            style={{
              width: '51px',
              height: '40px',
              left: '1126px',
              gap: '0px',
              
            }}
          >
            {/* Centered Search Icon */}
            <div className="flex items-center justify-center h-full w-full">
              <Image src="/searchicon.png" alt="Search Icon" width={15} height={15} />
            </div>
          </button>

        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden flex items-center text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown (hidden by default) */}
      <div className="md:hidden">
        <nav className="space-y-2 mt-2">
          <a href="#" className="block text-sm font-medium text-indigo-900 hover:text-pink-500">Home</a>
          <a href="#" className="block text-sm font-medium text-gray-700 hover:text-pink-500">Pages</a>
          <a href="#" className="block text-sm font-medium text-gray-700 hover:text-pink-500">Products</a>
          <a href="#" className="block text-sm font-medium text-gray-700 hover:text-pink-500">Blog</a>
          <a href="#" className="block text-sm font-medium text-gray-700 hover:text-pink-500">Shop</a>
          <a href="#" className="block text-sm font-medium text-gray-700 hover:text-pink-500">Contact</a>
        </nav>
      </div>
    </div>
  );
}
