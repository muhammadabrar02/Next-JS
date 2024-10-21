import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Ultimate Guide to JavaScript',
      description: 'Learn all about JavaScript and how to use it to build dynamic websites.',
      imageUrl: 'https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg',
      date: 'October 20, 2024',
      author: 'Muhammad Abrar',
    },
    {
      title: 'Why Next.js is the Future of Web Development',
      description: 'Next.js offers server-side rendering, static site generation, and more.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2KQkUn5uLxeZSY8uRQF5OkODSLONhfB2AA&s',
      date: 'October 15, 2024',
      author: 'John Doe',
    },
    {
      title: 'Exploring CSS Grid for Modern Web Layouts',
      description: 'CSS Grid allows developers to create flexible, responsive layouts.',
      imageUrl: 'https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg',
      date: 'October 10, 2024',
      author: 'Jane Smith',
    },
    {
      title: 'Introduction to Tailwind CSS',
      description: 'A utility-first CSS framework that makes styling easier and more efficient.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JQKNgdqLrHY5F2AujLjgSvLUCEkaV4PxFQ&s',
      date: 'October 5, 2024',
      author: 'Sara Lee',
    },
    {
      title: 'Understanding React Hooks',
      description: 'An in-depth guide to React hooks and how they simplify state management in functional components.',
      imageUrl: 'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/09/blog-image.jpg',
      date: 'October 3, 2024',
      author: 'Emily Johnson',
    },
    {
      title: 'Mastering Git for Version Control',
      description: 'Learn the fundamentals of Git, from branching to merge conflicts, and improve your version control workflow.',
      imageUrl: 'https://www.outrightsystems.org/wp-content/uploads/2024/05/git-image-01-1.jpg',
      date: 'September 30, 2024',
      author: 'Michael Smith',
    },
    {
      title: 'Building APIs with Node.js and Express',
      description: 'Explore how to create scalable APIs using Node.js and Express, with examples and best practices.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNbBIKeLDnkj0yeV1gmvb8nydjb6OumWeOA&s',
      date: 'September 28, 2024',
      author: 'Jessica Brown',
    },
    {
      title: 'Getting Started with TypeScript',
      description: 'A beginner-friendly introduction to TypeScript, its benefits, and how to use it with JavaScript projects.',
      imageUrl: 'data:image/png;base64,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',
      date: 'September 25, 2024',
      author: 'Daniel White',
    },
    {
      title: 'Demystifying CSS Flexbox',
      description: 'Learn how to use Flexbox to create flexible and responsive web layouts with ease.',
      imageUrl: 'https://meisteritsystems.com/wp-content/uploads/2024/05/css-flex-1-03.png',
      date: 'September 22, 2024',
      author: 'Sophia Green',
    },
    {
      title: 'How to Build a Portfolio Website with HTML, CSS, and JavaScript',
      description: 'Step-by-step instructions to create a professional portfolio website from scratch.',
      imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxWJPkgzVnXRrxFy6aadrY93gZQrt0Rcy-AA3LdM4hgAlW7cFDZtFtOHOtLIDPZZ44HRP1H51WN9AV2OQBo7QkN1L0pu70CWEzGT7KOcTabDexM_xVvDyqNIPEbYosjciex8uet1d5GDUR/s1280/Create+a+Responsive+Personal+Portfolio+Website+using+HTML+CSS.jpg',
      date: 'September 18, 2024',
      author: 'Lucas Walker',
    },
    {
      title: 'A Complete Guide to Responsive Web Design',
      description: 'Learn how to make your website responsive using media queries, flexible grids, and responsive images.',
      imageUrl: 'https://cdn.prod.website-files.com/666aa4fbe0e580742d2d8407/66f2c138321cacef6a46e4ab_convert-website-to-responsive-design-720x411.png',
      date: 'September 14, 2024',
      author: 'Emma Harris',
    },
    {
      title: 'Deploying Your Web App with Vercel and Netlify',
      description: 'A guide to deploying web applications on modern cloud platforms like Vercel and Netlify.',
      imageUrl: 'https://a.storyblok.com/f/233541/768x512/31e6560ac1/vercel-vs-netlify-mobile.png/m/1536x1024',
      date: 'September 10, 2024',
      author: 'Oliver Martinez',
    }
    

  ];

  return (
    <div className="container mx-auto px-5 py-10">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Latest Blog Posts</h1>
        <p className="text-gray-600 text-lg">Explore the most recent posts on web development, JavaScript, CSS, and more!</p>
      </header>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Blog Image */}
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              {/* Blog Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition">
                {post.title}
              </h2>
              {/* Blog Description */}
              <p className="text-gray-600 mb-3">{post.description}</p>
              {/* Blog Metadata */}
              <div className="text-sm text-gray-500">
                <span>{post.date}</span> &bull; <span>{post.author}</span>
              </div>
              {/* Read More Button */}
              <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
