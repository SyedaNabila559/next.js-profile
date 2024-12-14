// pages/projects.tsx
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
    title: 'Project 3: Figma e-commerce ',
    image: '/images/hero-sec.png',
    description: 'It is Figma e-commerce website',
    link: 'https://website-ecommerce-figma.vercel.app/',
  },
  {
    title: 'Project 4: Summer New Collection E-commerce',
    image: '/images/family.PNG',
    description: 'It is another Figma base e-commerce wesite',
    link: 'https://jams-hackathon.vercel.app/',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-pink-300 flex flex-col items-center py-10 ">
      <h1 className="text-7xl font-bold text-black mb-10 ml-10px">My Projects</h1>
      
      <div className="w-full max-w-4xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-red-300 rounded-lg shadow-lg overflow-hidden mb-6 hover:bg-yellow-200 transition-all duration-300 border-2"
          >
            <div className="flex items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-1/3 h-48 object-cover hover:opacity-75 transition-opacity duration-300"
              />
              <div className="p-6 w-2/3">
                <h2 className="text-2xl font-bold text-black mb-2">{project.title}</h2>
                <p className="text-black">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
       <button className='bg-red-300 text-black border-2 p-5 rounded ml-[400px] hover:bg-yellow-200 hover:scale-105 transition-transform duration-200'>
         <a href="https://github.com/SyedaNabila559" target='_blank'>More Projects</a>
      </button>
         </div>
    </div>
  );
}