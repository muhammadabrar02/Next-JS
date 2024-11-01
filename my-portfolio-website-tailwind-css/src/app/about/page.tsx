// src/app/about/page.js
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-green-500 to-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          I’m a frontend developer with a passion for creating beautiful and functional web applications.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="px-4 py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Who I Am</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          My name is Muhammad Abrar, and I specialize in building responsive, high-performance web applications. I have experience with a range of technologies like React, Next.js, and Tailwind CSS, and I’m always eager to learn more and grow as a developer.
        </p>
        <Image
          src="/myimg.png" 
          alt="Profile picture"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            'JavaScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'TypeScript',
            'HTML & CSS',
            'Git & GitHub',
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-lg hover:bg-blue-600 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="px-4 py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Fun Facts</h2>
        <ul className="text-gray-700 max-w-2xl mx-auto space-y-4 list-disc list-inside">
          <li>I'm a lifelong learner and always excited about trying new technologies.</li>
          <li>I love working on open-source projects and contributing to the developer community.</li>
          <li>When I'm not coding, I enjoy hiking and exploring nature.</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-500 to-green-500 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Let’s Connect!</h2>
        <p className="text-lg mb-8">
          If you’d like to work together or just want to say hello, feel free to reach out!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
