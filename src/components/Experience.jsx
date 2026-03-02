import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Student Focal",
    company: "Futurenation, UNDP Program",
    duration: "July 2025 - Present",
    description: "Serving as the campus representative at Metropolitan University. Coordinating with campus authorities, student clubs, and career services to promote Futurenation's programs. Also acted as a Data Enumerator for youth entrepreneurship surveys."
  },
  {
    title: "Campus Ambassador",
    company: "Soft Skills Development Center (SSDC)",
    duration: "April 2025 - July 2025",
    description: "Fostered communication, leadership, and collaboration skills by engaging with diverse student communities and organizing developmental initiatives."
  },
  {
    title: "Campus Correspondent",
    company: "Publician Today",
    duration: "June 2024 - Present",
    description: "Reporting and writing news articles, features, and event coverage highlighting student activities and important campus updates."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-100 mb-16"
        >
          Work Experience
        </motion.h2>
        
        {/* The Timeline Container */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-700">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              /* The delay makes them slide in one after another! */
              transition={{ duration: 0.5, delay: index * 0.15 }} 
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              
              {/* The Timeline Dot */}
              <div className="absolute left-0 w-10 h-10 flex items-center justify-center rounded-full border-4 border-slate-900 bg-blue-600 z-10 shadow-lg shadow-blue-900/50">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </div>
              
              {/* The Experience Card */}
              <div className="ml-16 w-full p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all shadow-xl">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="font-bold text-2xl text-slate-100 mb-1">{exp.title}</h3>
                    <h4 className="text-blue-400 font-semibold text-lg">{exp.company}</h4>
                  </div>
                  
                  {/* The Date Badge */}
                  <span className="inline-flex items-center justify-center px-4 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-inner shrink-0">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-justify md:text-left">
                  {exp.description}
                </p>
                
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;