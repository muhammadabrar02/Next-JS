import React from 'react';
import AbrarImage from "../abrar.png"
import AsadImage from "../asad.jpeg"
import AsimImage from "../asim.jpeg"
import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto px-5 py-10">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Learn more about our journey, mission, and the amazing team that makes it all happen!
        </p>
      </header>

      {/* Introduction Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          We are a passionate team of developers, designers, and content creators dedicated to bringing high-quality web development and digital solutions to businesses around the globe. From creating engaging content to building responsive websites, we strive to deliver excellence in everything we do.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12 bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Our mission is to empower individuals and businesses by providing them with cutting-edge web solutions that drive growth and innovation. We believe in harnessing the power of technology to transform ideas into impactful digital experiences.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              className="w-24 h-24 rounded-full mx-auto mb-4" 
              src={AbrarImage.src} 
              alt="Team Member 1" 
            />
            <h3 className="text-xl font-bold text-gray-800">Muhammad Abrar</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              className="w-24 h-24 rounded-full mx-auto mb-4" 
              src={AsadImage.src}
              alt="Team Member 2" 
            />
            <h3 className="text-xl font-bold text-gray-800">Asad Ali</h3>
            <p className="text-gray-600">Full Stack Developer/Content Creator</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              className="w-24 h-24 rounded-full mx-auto mb-4" 
              src={AsimImage.src} 
              alt="Team Member 3" 
            />
            <h3 className="text-xl font-bold text-gray-800">Asim Hayat</h3>
            <p className="text-gray-600">Flutter Developer</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600">We embrace innovation and strive to deliver cutting-edge solutions that keep us ahead in the digital space.</p>
          </div>
          {/* Value 2 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Quality</h3>
            <p className="text-gray-600">Quality is at the core of everything we do. We are committed to providing top-notch services and products to our clients.</p>
          </div>
          {/* Value 3 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Collaboration</h3>
            <p className="text-gray-600">We believe in the power of collaboration, working together with our clients and each other to achieve the best results.</p>
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Let’s Work Together!</h2>
        <p className="text-gray-600 mb-6">
          Have a project in mind? We’d love to hear from you. Get in touch with us today to see how we can help you bring your ideas to life!
        </p>
        <Link href="/contact">
        <button className="inline-flex items-center bg-blue-400 text-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact Us
        </button>
        </Link>
      </section>
    </div>
  );
}
