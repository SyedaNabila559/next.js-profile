'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-pink-300 bg-cover bg-center">
      <main className="flex flex-col lg:flex-row items-center justify-between text-center w-full px-4 md:px-8 lg:px-16 py-6 md:py-10 lg:py-14">

        {/* Intro Section */}
        <div className="text-center lg:text-left lg:ml-16 md:mb-6">
          <p className="text-black text-2xl sm:text-3xl lg:text-4xl">Hi, I am Nabila Bannay Khan</p>
          <h1 className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 animate-slide-left">Welcome to My Portfolio</h1>
          <p className="text-blue-600 text-lg sm:text-xl md:text-2xl mt-2">A Front-end Developer</p>

          {/* Resume Button */}
          <div className="mt-4 md:mt-6 lg:mt-8">
            <Link href="https://milestone-psi.vercel.app/" target="_blank">
              <a className="bg-blue-400 rounded border-2 border-white text-white py-3 px-6 md:py-4 md:px-8 hover:bg-gray-200 transition duration-200">
                My Resume
              </a>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-4 md:space-x-6">
            <Link href="https://www.linkedin.com/in/nabila-bannay-khan-a38b57313" target="_blank">
              <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 md:w-12 md:h-12 hover:bg-blue-500 transition duration-200">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-800 text-sm md:text-lg" />
              </div>
            </Link>
            <Link href="https://github.com/SyedaNabila559" target="_blank">
              <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 md:w-12 md:h-12 hover:bg-orange-300 transition duration-200">
                <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-sm md:text-lg" />
              </div>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative mt-8 lg:mt-0 lg:ml-8">
          <img
            src="/images/me.png"
            alt="Profile"
            className="rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover border-4 border-gray-700 animate-float transition-all duration-300"
          />
        </div>

        {/* Floating Bubbles */}
        <div className="absolute hidden lg:block lg:ml-[600px] lg:mt-[-100px]">
          <div className="bg-white h-[100px] w-[100px] rounded-full animate-pop"></div>
          <div className="bg-blue-400 h-[30px] w-[30px] rounded-full animate-bubble-small"></div>
          <div className="bg-purple-400 h-[50px] w-[50px] rounded-full animate-bubble-medium"></div>
        </div>
      </main>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(-50%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes pop {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes bubble-small {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        @keyframes bubble-medium {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-40px);
          }
        }

        .animate-slide-left {
          animation: slide-left 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pop {
          animation: pop 2s ease-in-out infinite;
        }

        .animate-bubble-small {
          animation: bubble-small 3s ease-in-out infinite;
        }

        .animate-bubble-medium {
          animation: bubble-medium 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
