'use client';
import React from 'react';
import { Calendar, Search, Facebook, Twitter, Instagram } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            {/* First Section */}
            <div className="w-full h-[300px] absolute bg-[#F6F5FF]">
                <div className="relative">
                    {/* Content div */}
                    <div
                        className="absolute w-[90%] sm:w-[314px] h-[64px] top-[120px] sm:top-[120px] left-10 sm:left-10 lg:left-10 xl:left-10 gap-0 flex flex-col justify-center items-center sm:items-start sm:ml-10"
                    >
                        <h1 className="text-xl sm:text-2xl font-bold text-[#101750]">Blog Page</h1>
                        <p className="text-sm sm:text-base text-pink-500">Home.Pages. Blog Page</p>
                    </div>
                </div>
            </div>

            {/* main section */}
            <section className="max-w-7xl mx-auto px-4 py-8 mt-80">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Blog Post 1 */}
                        <article className="mb-12">
                            <Image
                                src="/blog1.png"
                                alt="Blog post image"
                                width={600}
                                height={200}
                                className="w-full rounded-lg mb-4 max-h-96"
                            />
                            <div className="flex items-center gap-4 text-sm text-pink-500 mb-2">
                                <span>Self Access</span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Aug 09 2020
                                </span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-3">Mauris at orci non vulputate diam tincidunt nec.</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                            </p>
                            <Link href="#" className="text-pink-500 hover:text-pink-500">
                                Read More →
                            </Link>
                        </article>

                        {/* Blog Post 2 */}
                        <article className="mb-12">
                            <Image
                                src="/blog2.png"
                                alt="Blog post image"
                                width={600}
                                height={300}
                                className="w-full rounded-lg mb-4 max-h-96"
                            />
                            <div className="flex items-center gap-4 text-sm text-pink-500 mb-2">
                                <span>Self Access</span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Aug 09 2020
                                </span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-3">Aenean vitae in aliquam ultrices lectus. Etiam.</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.
                            </p>
                            <Link href="#" className="text-pink-500 hover:text-pink-500">
                                Read More →
                            </Link>
                        </article>

                        {/* Blog Post 3 */}
                        <article className="mb-12">
                            <Image
                                src="/blog3.png"
                                alt="Blog post image"
                                width={600}
                                height={300}
                                className="w-full rounded-lg mb-4 max-h-96"
                            />
                            <div className="flex items-center gap-4 text-sm text-pink-500 mb-2">
                                <span>Self Access</span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Aug 09 2020
                                </span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-3">Aenean vitae in aliquam ultrices lectus. Etiam.</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.
                            </p>
                            <Link href="#" className="text-pink-500 hover:text-pink-500">
                                Read More →
                            </Link>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        {/* Search */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Search</h3>
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-full p-2 border rounded-lg"
                                />
                                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <div className="space-y-2 grid sm:grid-cols-3 grid-cols-2 gap-5 justify-between items-center ">
                                <div className="flex justify-between items-center hover:bg-pink-500 transition-all duration-300 rounded-xl px-4 py-2">
                                    <span>Women</span>
                                    <span className="bg-purple-100 text-pink-500 px-2 rounded-full text-sm">21</span>
                                </div>
                                <div className="flex justify-between items-center hover:bg-pink-500 transition-all duration-300 rounded-xl px-4 py-2">
                                    <span>Men</span>
                                    <span className="bg-purple-100 text-pink-500 px-2 rounded-full text-sm">15</span>
                                </div>
                                <div className="flex justify-between items-center hover:bg-pink-500 transition-all duration-300 rounded-xl px-4 py-2">
                                    <span>Kids</span>
                                    <span className="bg-purple-100 text-pink-500 px-2 rounded-full text-sm">35</span>
                                </div>
                                <div className="flex justify-between items-center hover:bg-pink-500 transition-all duration-300 rounded-xl px-4 py-2">
                                    <span>Women</span>
                                    <span className="bg-purple-100 text-pink-500 px-2 rounded-full text-sm">21</span>
                                </div>
                                <div className="flex justify-between items-center hover:bg-pink-500 transition-all duration-300 rounded-xl px-4 py-2">
                                    <span>Men</span>
                                    <span className="bg-purple-100 text-pink-500 px-2 rounded-full text-sm">15</span>
                                </div>
                                <div className="flex justify-between items-center hover:bg-pink-500 transition-all duration-300 rounded-xl px-4 py-2">
                                    <span>Kids</span>
                                    <span className="bg-purple-100 text-pink-500 px-2 rounded-full text-sm">35</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex gap-4">
                                        <Image
                                            src="/blog1.png"
                                            alt="Recent post thumbnail"
                                            width={60}
                                            height={60}
                                            className="rounded-lg"
                                        />
                                        <div>
                                            <h4 className="font-medium">It is a long established fact</h4>
                                            <p className="text-sm text-gray-500">Aug 09 2020</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sale Product */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Sale Product</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex gap-4">
                                        <Image
                                            src="/blog2.png"
                                            alt="Product thumbnail"
                                            width={80}
                                            height={80}
                                            className="rounded-lg"
                                        />
                                        <div>
                                            <h4 className="font-medium">Basic Crew Neck Tee</h4>
                                            <p className="text-pink-500">$44.00</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Follow */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Follow</h3>
                            <div className="flex gap-4">
                                <Link href="#" className="text-pink-500 hover:text-pink-500">
                                    <Facebook className="w-6 h-6" />
                                </Link>
                                <Link href="#" className="text-pink-500 hover:text-pink-500">
                                    <Twitter className="w-6 h-6" />
                                </Link>
                                <Link href="#" className="text-pink-500 hover:text-pink-500">
                                    <Instagram className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>

                        {/* Tags */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {['General', 'Atsushi', 'Inputs', 'Disease', 'Niche'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-purple-100 hover:text-pink-500 cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-lg mx-1">1</button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mx-1">2</button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mx-1">3</button>
                </div>
            </section>


            <section className="relative w-full h-[100px] flex items-center justify-center py-10">
                {/* Container to hold the image */}
                <div className="relative mt-3 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-1/3 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
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