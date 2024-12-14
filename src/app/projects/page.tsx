import React from 'react';

const projects = [
  {
    title: 'Project 1: ',
    image: '/images/website.webp',
    description: 'using Next.JS and Tailwind css',
    link: 'https://milestone2-rho.vercel.app/',
  },
  {
    title: 'Project 2: Resume Builder',
    image: '/images/resume.jpeg',
    description: 'Dynamic resume builder with customizable sections.',
    link: 'https://milestone-6jrh.vercel.app/',
  },
  {
    title: 'Project 3: Figma e-commerce',
    image: '/images/hero-sec.png',
    description: 'It is Figma e-commerce website',
    link: 'https://website-ecommerce-figma.vercel.app/',
  },
  {
    title: 'Project 4: Summer New Collection E-commerce',
    image: '/images/family.PNG',
    description: 'It is another Figma base e-commerce website',
    link: 'https://jams-hackathon.vercel.app/',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-pink-300 flex flex-col items-center py-6 md:py-10 lg:py-14">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 md:mb-8">My Projects</h1>

      {/* Grid Container for Responsive Layout */}
      <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-300 rounded-lg shadow-lg overflow-hidden hover:bg-yellow-200 transition-all duration-300 border-2"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/3 h-48 object-cover hover:opacity-75 transition-opacity duration-300"
                />
                <div className="p-4 md:p-6 w-full md:w-2/3">
                  <h2 className="text-lg md:text-2xl font-bold text-black mb-2">{project.title}</h2>
                  <p className="text-black text-sm md:text-base leading-snug">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-red-300 text-black border-2 p-3 md:p-5 rounded hover:bg-yellow-200 hover:scale-105 transition-transform duration-200">
            <a href="https://github.com/SyedaNabila559" target="_blank" className="block">
              More Projects
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

