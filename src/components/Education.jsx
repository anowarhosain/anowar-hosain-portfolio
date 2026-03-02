import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "B.Sc (Hon's) in Computer Science and Engineering",
    institution: "Metropolitan University, Sylhet",
    year: "Jan 2023 - Expected Dec 2026",
    details: "EQF Level 6",
    coursework: "Software Engineering, Design Patterns, Algorithms, Object-Oriented Programming"
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Sylhet Government College",
    year: "July 2018 - Jan 2021",
    details: "GPA: 5.00 / 5.00 | EQF Level 4"
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Katakhali Public High School",
    year: "Jan 2016 - May 2018",
    details: "GPA: 5.00 / 5.00 | EQF Level 3"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 border-t border-gray-800">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
      
      <div className="grid gap-8 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:shadow-lg hover:shadow-blue-900/20 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              <span className="text-blue-400 font-medium bg-blue-900/30 px-4 py-1 rounded-full mt-2 md:mt-0 w-fit">
                {edu.year}
              </span>
            </div>
            <h4 className="text-xl text-gray-300 mb-2">{edu.institution}</h4>
            <p className="text-gray-400 font-semibold mb-2">{edu.details}</p>
            {edu.coursework && (
              <p className="text-gray-400 mt-4 pt-4 border-t border-gray-700">
                <span className="text-gray-300 font-medium">Relevant Coursework:</span> {edu.coursework}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;