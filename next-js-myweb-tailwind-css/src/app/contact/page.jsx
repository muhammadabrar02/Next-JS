import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-5 py-10">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you! Please fill out the form below to get in touch.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="mt-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-2">You can also reach us through:</p>
        <p className="text-gray-600">Email: contact@mywebsite.com</p>
        <p className="text-gray-600">Phone: +1 (234) 567-890</p>
        <p className="text-gray-600">Address: 1234 Street Name, City, Country</p>
      </section>
    </div>
  );
}
