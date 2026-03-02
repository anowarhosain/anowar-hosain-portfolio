import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Placeholder data - replace with your actual projects!
const projectsData = [
  {
    title: "Face Recognition",
    description: "Tracking Face Recognition using OpenCV and Python. This project demonstrates the implementation of face recognition algorithms to identify and track faces in real-time video streams.",
    tech: ["Python"],
    role: "Machine Learning",
    github: "https://github.com/anowarhosain/Python-Programming-and-basic-Data-Science-Project",
    live: "https://anowarhosain.github.io/Python-Programming-and-basic-Data-Science-Project/"
  },
  {
    title: "Real Estate Management-System",
    description: "A comprehensive web application for managing real estate properties, built with PHP and MySQL. The system allows users to list, search, and manage properties efficiently.",
    tech: ["Php", "MySQL"],
    role: "Full Stack Developer",
    github: "https://github.com/anowarhosain/Real-estate-management-System",
    live: "https://anowarhosain.github.io/Real-estate-management-System/"
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive and interactive portfolio website showcasing my projects, skills, and experience. Built with modern web technologies for optimal performance and user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Solo Developer",
    github: "https://github.com/anowarhosain/my-portfolio",
    live: "https://anowarhosain.github.io/my-portfolio/" 
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
      
      <div className="bg-purple-900 p-10 rounded-3xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors flex flex-col h-full group"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-blue-500 text-sm font-semibold mb-4">Role: {project.role}</p>
              <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-900 border-t border-gray-700 flex justify-between items-center mt-auto">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <FaGithub className="mr-2" /> Code
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;