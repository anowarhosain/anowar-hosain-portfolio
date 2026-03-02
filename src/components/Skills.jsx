import React from 'react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'JavaScript', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'C++', level: 70 },
  { name: 'React', level: 80 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'MySQL', level: 75 },
];

const softSkills = [
  'Communication', 'Leadership', 'Problem-solving', 'Teamwork', 'Collaboration'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-gray-800">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Skills - Progress Bars */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-blue-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Tags */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-gray-700 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;