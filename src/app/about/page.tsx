'use client';
import Image from "next/image";
export default function AboutMe() {
    return (
      <div className="bg-pink-300 flex items-center justify-center min-h-screen p-6 relative">
        
        <div className="flex items-center gap-8 max-w-3xl">
          {/* Skills Section */}
          <div className="flex flex-col items-start space-y-6 absolute left-[150px] border-2 p-10">
            <h2 className="text-black text-xl font-semibold">Skills</h2>

            {/* TypeScript */}
            <div className="w-32">
              <div className="text-black">TypeScript</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-blue-500" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* HTML / CSS */}
            <div className="w-32">
              <div className="text-black">HTML / CSS</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-yellow-500" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Next.js */}
            <div className="w-32">
              <div className="text-black">Next.js</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-green-500" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="h-32 w-[2px] bg-black animate-grow-y"></div>

          {/* Profile Image */}
          <Image
            src="/images/me.png"  
            alt="My profile" 
            width={240} 
            height={280} 
            className="rounded object-cover"
            
          />

          {/* About Me Text */}
          <div>
            <h1 className="text-black text-3xl font-bold tracking-wide animate-fade-in mb-4 font-sans">
              About Me
            </h1>
            <p className="text-black text-base leading-relaxed font-sans">
            I am a coder who recently started my learning journey with the Governor Sindh Initiative for GenAI, Web3, and the Metaverse. As a beginner, I faced challenges while working on various projects, but I persevered and successfully completed them. This experience has not only enhanced my skills but also fueled my passion for exploring new technologies and creating innovative solutions in the digital space.
            </p>
          </div>

          {/* Bubbles Animation */}
          <div className="absolute ml-[900px] mt-[100px]">
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