import React from 'react';
import Image from 'next/image';
import { Heart, Share2, Star } from 'lucide-react';

function Page() {
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

            {/* Center Section */}
            <section className="max-w-7xl mx-auto mt-80 px-4 sm:px-8 lg:px-16 py-8">
                {/* Product Main Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white shadow-xl p-10">
                    {/* Product Gallery */}
                    <div className="flex justify-between w-full space-x-6">
                        <div className="flex flex-col items-center gap-4">
                            <div className="aspect-square bg-gray-100 p-2 max-w-40">
                                <img
                                    src="/catc1.png"
                                    alt="Product thumbnail"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="aspect-square bg-gray-100 p-2 max-w-40">
                                <img
                                    src="/catc2.png"
                                    alt="Product thumbnail"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="aspect-square bg-gray-100 p-2 max-w-40">
                                <img
                                    src="/catc3.png"
                                    alt="Product thumbnail"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="aspect-square bg-gray-100 max-w-sm overflow-hidden p-2">
                            <img
                                src="/graysofa.png"
                                alt="Product main image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">Playwood Arm Chair</h1>

                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">(22)</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold">$32.00</span>
                            <span className="text-lg text-gray-500 line-through">$35.00</span>
                        </div>

                        <div>
                            <h3 className="font-medium mb-2">Color</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Maxime tellus
                                porttitor amet, et vulputat ut.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
                                Add To Cart
                            </button>
                            <button className="p-3 border rounded-md hover:bg-gray-50">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        <div>
                            <h3 className="font-medium mb-2">Categories</h3>
                            <p className=" font-medium mb-2">Tags</p>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Share</span>
                                <Share2 className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mb-12">
                    <div className="border-b">
                        <nav className="flex gap-8">
                            {["Description", "Additional Info", "Reviews", "Video"].map((tab) => (
                                <button
                                    key={tab}
                                    className="py-4 border-b-2 border-black font-medium"
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="py-6">
                        <h3 className="font-medium mb-4">Varius tempor.</h3>
                        <p className="text-gray-600 mb-6">
                            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
                            faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est
                            bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit,
                            aliquet. Non varius proin sed urna, egestas consequat laoreet diam
                            tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus.
                            Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
                            in fringilla vulputate nunc nec.
                        </p>
                        <div className="space-y-4">
                            {[...Array(4)].map((_, i) => (
                                <p key={i} className="flex items-center gap-2 text-gray-600">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full" />
                                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
                                    arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
                                    nec.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div>
                    <h2 className="text-2xl font-bold mb-8">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Mens Fashion Wear",
                                price: "$43.00",
                                image: "/catc1.png",
                            },
                            {
                                title: "Women's Fashion",
                                price: "$35.00",
                                image: "/catc2.png",
                            },
                            {
                                title: "Wolx Dummy Fashion",
                                price: "$97.00",
                                image: "/catc3.png",
                            },
                            {
                                title: "Top Wall Digital Clock",
                                price: "$90.00",
                                image: "/catc4.png",
                            },
                        ].map((product, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="font-medium mb-2">{product.title}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">{product.price}</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logos Section */}
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
    );
}

export default Page;