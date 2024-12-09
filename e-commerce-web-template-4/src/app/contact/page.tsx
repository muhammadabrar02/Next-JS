'use client';
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react'
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
                        <h1 className="text-xl sm:text-2xl font-bold text-[#101750]">Shop List</h1>
                        <p className="text-sm sm:text-base text-pink-500">Home.Pages.Product Details</p>
                    </div>
                </div>
            </div>

            {/* main section */}
            <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-80">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-12">
                        {/* Information About Us */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Information About us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                            </p>
                            <div className="flex gap-3 mt-6">
                                <div className="w-3 h-3 rounded-full bg-[#5c6bc0]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ec407a]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#29b6f6]"></div>
                            </div>
                        </div>

                        {/* Get In Touch Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a237e] mb-6">Get In Touch</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                            </p>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5c6bc0]"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your E-mail"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5c6bc0]"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Subject*"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5c6bc0]"
                                />
                                <textarea
                                    placeholder="Type Your Message*"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5c6bc0]"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-[#ec407a] text-white rounded-lg hover:bg-[#d81b60] transition-colors"
                                >
                                    Send Mail
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:pl-8">
                        <h2 className="text-3xl font-bold text-[#1a237e] mb-8">Contact Way</h2>
                        <div className="space-y-6">
                            {/* Contact Items */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#5c6bc0] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-600">Tel: 877-67-88-99</p>
                                    <p className="text-gray-600">E-Mail: shop@store.com</p>
                                    <p className="text-[#ec407a]">Support Forum</p>
                                    <p className="text-gray-500">For over 24hr</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#ffa726] rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-600">20 Margaret st, London</p>
                                    <p className="text-gray-600">Great Britain, 3NM98-LK</p>
                                    <p className="text-[#4caf50]">Free standard shipping</p>
                                    <p className="text-gray-500">on all orders.</p>
                                </div>
                            </div>

                            {/* Illustration */}
                            <div className="mt-12 relative">
                                <img
                                    src="/contact.png"
                                    alt="Contact illustration"
                                    className="w-full max-w-md mx-auto"
                                />
                                {/* Decorative circles */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* last section */}
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