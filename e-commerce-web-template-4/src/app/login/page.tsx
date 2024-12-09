import React from 'react';
import Image from 'next/image';

function Page() {
    return (
        <>
            {/* First Section */}
            <header className="w-full h-[300px] bg-[#F6F5FF] relative">
                <div className="absolute w-[90%] sm:w-[314px] h-[64px] top-[120px] left-10 flex flex-col justify-center items-center sm:items-start">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#101750]">My Account</h1>
                    <p className="text-sm sm:text-base text-pink-500">Home. Pages. My Account</p>
                </div>
            </header>

            {/* Login Form Section */}
            <main className="flex items-center justify-center min-h-screen bg-white">
                <section className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
                    <p className="text-gray-600 text-center mb-6">Please login using your account details below.</p>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div className="text-right mb-4">
                            <a href="#" className="text-pink-500 text-sm hover:underline">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account?{' '}
                        <a href="#" className="text-pink-500 font-semibold hover:underline">Create Account</a>
                    </p>
                </section>
            </main>

            {/* Logos Section */}
            <section className="w-full py-10 flex items-center justify-center bg-white">
                <div className="relative w-[904px] h-[93px]">
                    <Image
                        src="/logos.png" // Replace with your image URL
                        alt="Subscribe"
                        layout="responsive"
                        width={904}
                        height={93}
                        objectFit="contain"
                    />
                </div>
            </section>
        </>
    );
}

export default Page;
