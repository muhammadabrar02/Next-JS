import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Muhammad Abrar</h1>
        <p className="text-lg md:text-xl text-center max-w-lg">
          I'm a frontend developer passionate about building web applications with React, Next.js, and Tailwind CSS.
        </p>
        <Link href="#projects" className="mt-6 px-6 py-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
          View My Work
        </Link>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-4 py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I'm a dedicated web developer with experience in modern web technologies. My expertise is in creating
          responsive, efficient, and visually engaging user interfaces. I enjoy learning and improving my skills with every project.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Example Project Card */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Image src="/project1.png" alt="Project 1" width={400} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600 mb-4">
              Brief description of the project showcasing the main technologies and objectives.
            </p>
            <Link href="https://project-link.com" className="text-blue-500 hover:underline">
              View Project
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <Image src="/project2.png" alt="Project 1" width={400} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600 mb-4">
              Brief description of the project showcasing the main technologies and objectives.
            </p>
            <Link href="https://project-link.com" className="text-blue-500 hover:underline">
              View Project
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <Image src="/project3.png" alt="Project 1" width={400} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-gray-600 mb-4">
              Brief description of the project showcasing the main technologies and objectives.
            </p>
            <Link href="https://project-link.com" className="text-blue-500 hover:underline">
              View Project
            </Link>
          </div>

          {/* Repeat similar cards for more projects */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
        <p className="text-gray-700 mb-6">Feel free to reach out if you're interested in collaborating!</p>
        <Link href="mailto:your-email@example.com" className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Get In Touch
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Muhammad Abrar. All rights reserved.</p>
      </footer>
    </main>
  )
}
