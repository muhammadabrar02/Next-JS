import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Build responsive and interactive websites using modern technologies like React, Next.js, and Tailwind CSS.',
      icon: '🌐',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your website’s visibility and ranking on search engines with advanced SEO strategies.',
      icon: '🚀',
    },
    {
      title: 'Content Creation',
      description: 'We offer high-quality content creation services, from blog posts to technical documentation.',
      icon: '✍️',
    },
    {
      title: 'UI/UX Design',
      description: 'Craft intuitive and beautiful user interfaces that provide a seamless user experience.',
      icon: '🎨',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Develop full-fledged e-commerce platforms with secure payment gateways and product management systems.',
      icon: '🛒',
    },
    {
      title: 'Consultation & Training',
      description: 'We provide expert consultations and personalized training to help you improve your web projects.',
      icon: '📈',
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg">Explore the range of services we offer to help you grow and succeed online!</p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            {/* Icon */}
            <div className="text-5xl mb-4">{service.icon}</div>
            {/* Service Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition">
              {service.title}
            </h2>
            {/* Service Description */}
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
