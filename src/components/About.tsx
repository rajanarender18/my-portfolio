import React from 'react';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <img 
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="About John Doe" 
              className="rounded-lg shadow-xl w-full h-auto object-cover transform transition-transform hover:scale-105"
            />
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Full Stack Developer & Problem Solver</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
            I'm a passionate full stack developer with a strong focus on creating clean, efficient, and user-friendly web applications. With a background in computer science and a deep interest in both design and functionality, I strive to build seamless digital experiences that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
            My journey in web development began during my university years, where I discovered my love for coding and problem-solving. Since then, I've taken on a variety of academic and personal projects—from simple websites to more dynamic applications—allowing me to explore and grow my skills across the full development stack.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-orange-600 mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                  <p className="text-gray-600">Fresher</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-orange-600 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                  <p className="text-gray-600">Bachelors in Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-orange-600 mr-4">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Interests</h4>
                  <p className="text-gray-600">UI/UX, New technologies</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              download="Rajanarederreddy.pdf" 
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;