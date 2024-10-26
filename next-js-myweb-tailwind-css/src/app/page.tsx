import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to My Awesome Blog</h1>
          <p className="text-md md:text-lg mb-8">Explore articles, tutorials, and insights on various topics.</p>
          <a href="#latest-posts" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-200 transition">
            Explore Latest Posts
          </a>
        </div>
      </section>

      {/* latest post section  */}
      <section id="latest-posts" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Post Title 1</h3>
              <p className="text-gray-700 mb-4">A short description of the post...</p>
              <a href="/post/1" className="text-blue-500 font-medium">Read more &rarr;</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Post Title 2</h3>
              <p className="text-gray-700 mb-4">A short description of the post...</p>
              <a href="/post/2" className="text-blue-500 font-medium">Read more &rarr;</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Post Title 3</h3>
              <p className="text-gray-700 mb-4">A short description of the post...</p>
              <a href="/post/3" className="text-blue-500 font-medium">Read more &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* featured categories  */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-700 mb-4">Articles on the latest web development technologies.</p>
              <a href="/category/web-development" className="text-blue-500 font-medium">Explore &rarr;</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Design Inspiration</h3>
              <p className="text-gray-700 mb-4">Tips and tricks for creating stunning designs.</p>
              <a href="/category/design" className="text-blue-500 font-medium">Explore &rarr;</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Programming Tutorials</h3>
              <p className="text-gray-700 mb-4">Step-by-step guides for different programming languages.</p>
              <a href="/category/tutorials" className="text-blue-500 font-medium">Explore &rarr;</a>
            </div>
          </div>
        </div>
      </section>
      {/* featured post section  */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Posts</h2>
          <p className="mt-2 text-gray-600">Explore our latest insights and stories.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Post Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">How to Learn JavaScript</h3>
              <p className="mt-2 text-gray-600">Discover effective strategies to master JavaScript and enhance your programming skills.</p>
              <Link href="/blog/how-to-learn-javascript" className="mt-4 inline-block text-blue-600 hover:underline">Read More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">10 Tips for Effective Blogging</h3>
              <p className="mt-2 text-gray-600">Learn how to make your blog stand out and engage your audience.</p>
              <Link href="/blog/10-tips-for-effective-blogging" className="mt-4 inline-block text-blue-600 hover:underline">Read More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Understanding React Hooks</h3>
              <p className="mt-2 text-gray-600">Get to grips with React Hooks and improve your React applications.</p>
              <Link href="/blog/understanding-react-hooks" className="mt-4 inline-block text-blue-600 hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe to Newsletter section  */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">Stay Updated!</h2>
          <p className="mt-2">Subscribe to our newsletter for the latest blog posts and exclusive content.</p>
          <form className="mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 py-2 px-4 rounded-r-lg hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>



      {/* About section  */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About This Blog</h2>
          <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            This blog shares insights, tips, and stories on various topics, from web development to lifestyle.
            Join us on a journey of learning and inspiration!
          </p>
          <a href="/about" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition">
            Learn More About Us
          </a>
        </div>
      </section>




    </div>




  );
}
