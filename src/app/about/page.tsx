"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="bg-pink-300 flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 relative">
      <div className="flex flex-col lg:flex-row items-center lg:gap-8 max-w-6xl w-full">
        {/* Skills Section */}
        <div className="flex flex-col items-start gap-4 lg:w-1/3 border-2 p-4 md:p-6 lg:p-8 rounded-lg">
          <h2 className="text-black text-lg md:text-xl font-semibold mb-4">Skills</h2>

          {/* TypeScript */}
          <div className="w-full">
            <div className="text-black text-sm md:text-base">TypeScript</div>
            <div className="w-full h-2 bg-gray-600 mt-1">
              <div className="h-2 bg-blue-500" style={{ width: '80%' }}></div>
            </div>
          </div>

          {/* HTML / CSS */}
          <div className="w-full">
            <div className="text-black text-sm md:text-base">HTML / CSS</div>
            <div className="w-full h-2 bg-gray-600 mt-1">
              <div className="h-2 bg-yellow-500" style={{ width: '90%' }}></div>
            </div>
          </div>

          {/* Next.js */}
          <div className="w-full">
            <div className="text-black text-sm md:text-base">Next.js</div>
            <div className="w-full h-2 bg-gray-600 mt-1">
              <div className="h-2 bg-green-500" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block h-32 w-[2px] bg-black animate-grow-y mx-4"></div>

        {/* Profile Image */}
        <div className="relative mb-6 lg:mb-0">
          <Image
            src="/images/me.png"
            alt="My profile"
            width={240}
            height={280}
            className="rounded object-cover"
          />
        </div>

        {/* About Me Text */}
        <div className="text-black text-center lg:text-left max-w-md lg:max-w-lg px-2 md:px-4 lg:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide animate-fade-in mb-4 font-sans">
            About Me
          </h1>
          <p className="text-sm md:text-base leading-relaxed font-sans">
            I am a coder who recently started my learning journey with the Governor Sindh Initiative for GenAI, Web3, and the Metaverse. As a beginner, I faced challenges while working on various projects, but I persevered and successfully completed them. This experience has not only enhanced my skills but also fueled my passion for exploring new technologies and creating innovative solutions in the digital space.
          </p>
        </div>

        {/* Bubbles Animation */}
        <div className="absolute right-0 top-0 hidden md:block ml-[100px] mt-[50px]">
          <div className="bg-white h-[100px] w-[100px] rounded-full absolute animate-pop"></div>
          <div className="bg-blue-400 h-[30px] w-[30px] rounded-full absolute top-[-50px] left-[-40px] animate-bubble-small"></div>
          <div className="bg-purple-400 h-[50px] w-[50px] rounded-full absolute top-[-70px] right-[-50px] animate-bubble-medium"></div>
          <div className="bg-pink-400 h-[40px] w-[40px] rounded-full absolute bottom-[-60px] left-[-60px] animate-bubble-small"></div>
          <div className="bg-green-400 h-[20px] w-[20px] rounded-full absolute bottom-[-80px] right-[-70px] animate-bubble-small"></div>
          <div className="bg-yellow-300 h-[60px] w-[60px] rounded-full absolute top-[-90px] left-[20px] animate-bubble-large"></div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes bubble-small {
          0% { transform: translateY(0) scale(0.9); }
          50% { transform: translateY(-15px) scale(1.1); }
          100% { transform: translateY(0) scale(0.9); }
        }
        @keyframes bubble-medium {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.2); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes bubble-large {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-23px) scale(1.2); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-slide-left { animation: slide-left 1s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pop { animation: pop 2s ease-in-out infinite; }
        .animate-bubble-small { animation: bubble-small 3s ease-in-out infinite; }
        .animate-bubble-medium { animation: bubble-medium 4s ease-in-out infinite; }
        .animate-bubble-large { animation: bubble-large 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
