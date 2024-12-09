import React from 'react'
import Link from 'next/link'

function Headingbar() {
    return (
        <div className="bg-purple-500 text-white flex flex-wrap items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            {/* <!-- Left Section --> */}
            <div className="flex items-center space-x-6">
                <a href="mailto:mhhasanul@gmail.com" className="flex items-center space-x-2">
                    <span className="material-icons">email</span>
                    <span className="hidden sm:inline">abrarsolangi2002@gmail.com</span>
                </a>
                <a href="tel:(12345)67890" className="flex items-center space-x-2">
                    <span className="material-icons">phone</span>
                    <span className="hidden sm:inline">(12345)67890</span>
                </a>
            </div>

            {/* <!-- Right Section --> */}
            <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center space-x-2">
                    <select className="bg-transparent text-white focus:outline-none">
                        <option>English</option>
                        <option>Español</option>
                    </select>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    <select className="bg-transparent text-white focus:outline-none">
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
                <Link href="/login" className="hidden lg:block">Login</Link>
                <Link href="/productdetails" className="hidden lg:block">Wishlist</Link>
                <Link href="/shop" className="block">
                    <span className="material-icons">shopping_cart</span>
                </Link>
            </div>
        </div>

    )
}

export default Headingbar
