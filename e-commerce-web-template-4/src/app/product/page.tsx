'use client';
import React from 'react'
import { Heart, ShoppingCart, Share2, Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function page() {
    const Router =useRouter()
    
    const handleClick =()=>{
        Router.push("./productdetails")
    }
    const products = [
        {
            id: 1,
            name: "Accumsan tincidunt",
            image: "/pro1.png",
            originalPrice: 250.00,
            salePrice: 199.00,
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        },
        {
            id: 2,
            name: "In nulla",
            image: "/pro2.png",
            originalPrice: 80.00,
            salePrice: 65.00,
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        },
        {
            id: 3,
            name: "Vel sem",
            image: "/pro3.png",
            originalPrice: 80.00,
            salePrice: 65.00,
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        },
        {
            id: 4,
            name: "Portitor cum",
            image: "/pro4.png",
            originalPrice: 80.00,
            salePrice: 65.00,
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        },
        {
            id: 5,
            name: "Vitae facilisis",
            image: "/pro5.png",
            originalPrice: 80.00,
            salePrice: 65.00,
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        },
        {
            id: 6,
            name: "Curabetor lectus",
            image: "/pro6.png",
            originalPrice: 80.00,
            salePrice: 65.00,
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        },
        {
            id: 7,
            name: "In nulla",
            image: "/pro7.png",
            originalPrice: 80.00,
            salePrice: 65.00,
            rating: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        },
        // Add more products as needed
    ]
    return (
        <>
            {/* first section  */}
            <div className="w-full h-[300px] absolute bg-[#F6F5FF]">
                <div className="relative">
                    {/* content div */}
                    <div
                        className="absolute w-[90%] sm:w-[314px] h-[64px] top-[120px] sm:top-[120px] left-10 sm:left-10 lg:left-10 xl:left-10 gap-0 flex flex-col justify-center items-center sm:items-start sm:ml-10"
                    >
                        <h1 className="text-xl sm:text-2xl font-bold text-[#101750]">Shop List</h1>
                        <p className="text-sm sm:text-base text-pink-500">Home.Pages.Shop List</p>
                    </div>
                </div>
            </div>

            {/* Second Section (Visible below the first section) */}
            <section className="w-full h-[400px] mt-[300px] flex items-center justify-center">
                {/* Inner div centered inside the section */}
                <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
                    {/* Left side: Heading and Text */}
                    <div className="flex flex-col items-start space-y-2 mb-4 lg:mb-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#151875]">Ecommerce Accessories & Fashion item</h1>
                        <p className="text-gray-500 text-sm sm:text-base">About 9,620 results (0.62 seconds)</p>
                    </div>

                    {/* Right side: Form fields */}
                    <div className="flex flex-col sm:flex-row sm:space-x-8 items-center sm:space-y-0 space-y-4">
                        {/* Per Page */}
                        <div className="flex flex-col w-full sm:w-auto">
                            <label htmlFor="perPage" className="text-sm text-gray-700">Per Page:</label>
                            <input
                                id="perPage"
                                type="number"
                                className="mt-1 p-2 border border-light-gray rounded-md"
                                placeholder="10"
                            />
                        </div>

                        {/* Sort By */}
                        <div className="flex flex-col w-full sm:w-auto">
                            <label htmlFor="sortBy" className="text-sm text-gray-700">Sort By:</label>
                            <select
                                id="sortBy"
                                className="mt-1 p-2 border border-light-gray rounded-md"
                                defaultValue="Best Match"
                            >
                                <option>Best Match</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                        {/* View */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-700">View:</span>

                            {/* First Icon */}
                            <button className="p-1 hover:text-[#151875]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            {/* Second Icon */}
                            <button className="p-1 hover:text-[#151875]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            {/* Text Field */}
                            <input
                                id="viewField"
                                type="text"
                                className="mt-1 p-2 border border-light-gray rounded-md"
                                placeholder="Enter text"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* products listing section  */}
            <section className="w-full max-w-[1536px] mx-auto px-4 py-8">
                <div className="grid gap-8 sm:gap-6">
                    {products.map((product) => (
                        <article
                        onClick={handleClick}
                            key={product.id}
                            className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="sm:w-1/3 lg:w-1/4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-start justify-between gap-4">
                                        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 rounded-full bg-pink-500" />
                                            <span className="w-2 h-2 rounded-full bg-purple-500" />
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-gray-900">${product.salePrice.toFixed(2)}</span>
                                        <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(product.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-4">
                                    <button className="p-2 rounded-full hover:bg-gray-100">
                                        <ShoppingCart className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100">
                                        <Heart className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100">
                                        <Share2 className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Logos Section*/}
            <section className="relative w-full h-[100px]  flex items-center justify-center py-10">
                {/* Container to hold the image */}
                <div className="relative mt-3 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-1/3 
                  h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
                    {/* Background Image */}
                    <Image
                        src="/logos.png" // Replace with your image URL
                        alt="Subscribe"
                        layout="intrinsic" // Use intrinsic to maintain original size
                        width={904}  // Set the image width to the given width (904px)
                        height={93}  // Set the image height to the given height (93px)
                        objectFit="contain" // This ensures the image is fully contained within its parent
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Center image within container
                    />
                </div>
            </section>

        </>
    )
}

export default page
