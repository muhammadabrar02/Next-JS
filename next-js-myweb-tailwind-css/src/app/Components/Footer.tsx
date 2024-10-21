import React from 'react'

export default function footer() {
    return (
        <div>
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">

                        <div className="mb-4 md:mb-0">
                            <a href="/" className="text-2xl font-bold">My Awesome Blog</a>
                        </div>

                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <a href="/" className="hover:underline">Home</a>
                            <a href="/about" className="hover:underline">About</a>
                            <a href="/categories" className="hover:underline">Categories</a>
                            <a href="/contact" className="hover:underline">Contact</a>
                        </div>

                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-8">
                        <p>&copy; 2024 My Awesome Blog. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
