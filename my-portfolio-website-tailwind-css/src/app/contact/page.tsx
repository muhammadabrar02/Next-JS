"use client"
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission (e.g., send to email or server)
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-purple-500 to-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          I’d love to hear from you! Whether you have a project in mind or just want to say hello, feel free to get in touch.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="px-4 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Other Ways to Reach Me</h2>
        <div className="flex flex-col space-y-4 text-gray-700">
          <p>Email: <a href="abrarsolangi2002@gmail.com" className="text-blue-500 hover:underline">abrarsolangi2002@gmail.com</a></p>
          <p>Phone: <a href="tel: 123456789" className="text-blue-500 hover:underline">+123 456 7890</a></p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/yourusername" className="text-gray-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="...github icon path..." />
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="...linkedin icon path..." />
            </svg>
          </a>
          <a href="https://twitter.com/yourusername" className="text-gray-700 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="...twitter icon path..." />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Muhammad Abrar. All rights reserved.</p>
      </footer>
    </main>
  );
}
