import React from 'react'
import Image from 'next/image'

function page() {
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
