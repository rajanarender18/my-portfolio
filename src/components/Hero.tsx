import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fadeIn">
              <span className="inline-block">Hello !, I'm </span>
              <span className="inline-block text-red-600"> CHALLA RAJANARENDERREDDY</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 animate-fadeIn animation-delay-200">
              CSE Graduate
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl animate-fadeIn animation-delay-400">
              Building elegant, responsive, and performant web applications with modern technologies.
              Specializing in React, Node.js, and cloud technologies to create seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-600">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors flex items-center"
              >
                View My Work <ArrowDown size={18} className="ml-2" />
              </a>
              <a 
                href="/resume.pdf" 
                download="Rajanarenderreddy.pdf" 
                className="px-6 py-3 bg-white text-black-600 border border-orange-600 rounded-md hover:bg-blue-50 transition-colors flex items-center"
              >
                Download CV <FileText size={18} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center animate-fadeIn animation-delay-800">
            <div className="relative">
              <div className="absolute -inset-0.5"></div>
              <img 
                src="https://res.cloudinary.com/dfjlxm0ib/image/upload/v1745484986/bmtbvbk0ymgxx7jpnvan.jpg" 
                alt="Rajanarenderreddy" 
                className="relative w-64 h-64 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={32} className="text-orange-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;