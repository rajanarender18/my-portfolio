import React from 'react';
import { Server, Layers, Database, Globe, Code, LayoutGrid } from 'lucide-react';

const Skills: React.FC = () => {
  // Skill categories with respective skills
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <LayoutGrid size={24} />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
      ]
    },
  ];

  // Additional technologies
  const technologies = [
    "Redux", "Next.js", "Webpack", "Bootstrap", "Figma"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in full stack development with a focus on modern web technologies.
            Here's a comprehensive overview of my technical skillset.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Other Technologies</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;