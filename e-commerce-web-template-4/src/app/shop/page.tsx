'use client';
import React from 'react';
import { Minus, Plus, X, ShoppingCart } from 'lucide-react'
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
            <section className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-80">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:flex-grow">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[
                                        { name: 'Ut diam consequat', color: 'Brown', size: 'XL', price: 32.00, quantity: 1, total: 219.00 },
                                        { name: 'Vel faucibus posuere', color: 'Brown', size: 'XL', price: 32.00, quantity: 1, total: 219.00 },
                                        { name: 'Ac vitae vestibulum', color: 'Brown', size: 'XL', price: 32.00, quantity: 1, total: 219.00 },
                                        { name: 'Elit massa diam', color: 'Brown', size: 'XL', price: 32.00, quantity: 1, total: 219.00 },
                                        { name: 'Proin pharetra elementum', color: 'Brown', size: 'XL', price: 32.00, quantity: 1, total: 219.00 },
                                    ].map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 relative">
                                                        <Image
                                                            src="/catc1.png"
                                                            alt={item.name}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="rounded-md"
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                        <div className="text-sm text-gray-500">Color: {item.color}</div>
                                                        <div className="text-sm text-gray-500">Size: {item.size}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">£{item.price.toFixed(2)}</div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <div className="flex items-center border rounded-md">
                                                    <button className="p-1 hover:bg-gray-100">
                                                        <Minus size={16} />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className="w-8 text-center border-x"
                                                        value={item.quantity}
                                                        readOnly
                                                    />
                                                    <button className="p-1 hover:bg-gray-100">
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                                £{item.total.toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                                Update Cart
                            </button>
                            <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                                Clear Cart
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-80 mt-8 lg:mt-0">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotals:</span>
                                    <span>£219.00</span>
                                </div>
                                <div className="flex justify-between font-semibold">
                                    <span>Totals:</span>
                                    <span>£325.00</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Shipping & taxes calculated at checkout
                                </p>
                                <button className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 bg-gray-50 p-6">
                            <h2 className="text-lg font-semibold mb-4">Calculate Shopping</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Bangladesh"
                                    className="w-full p-2 border rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Mirpur Dhaka - 1200"
                                    className="w-full p-2 border rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Postal Code"
                                    className="w-full p-2 border rounded"
                                />
                                <button className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                                    Calculate Shiping
                                </button>
                            </div>
                        </div>
                    </div>
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