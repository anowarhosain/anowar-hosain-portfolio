import React from 'react';
import { motion } from 'framer-motion';

const certsData = [
  {
    name: "Python Programming and Basic Data Science",
    issuer: "IICT, SUST",
    status: "Completed"
  },
  {
    name: "Business & Social English",
    issuer: "British Council",
    status: "Completed"
  },
  {
    name: "Digital Literacy",
    issuer: "Futurenation",
    status: "Completed"
  },
  {
    name: "Spoken English (Level-Intermediate)",
    issuer: "HEXA'S",
    status: "Completed"
  },
  {
    name: "Advanced Specializations (Coursera Plus)",
    issuer: "Coursera",
    status: "Ongoing"
  },
  {
    name: "IELTS Academic Preparation",
    issuer: "Language Proficiency",
    status: "Ongoing"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-800 border-t border-slate-700">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-100 mb-16"
        >
          Certifications & Courses
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certsData.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-center p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-blue-500 hover:-translate-y-1 transition-all shadow-xl group"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 flex-shrink-0 bg-slate-800 text-blue-400 rounded-full flex items-center justify-center font-bold text-2xl mr-5 border border-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {cert.name.charAt(0)}
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-100 mb-1 leading-tight">{cert.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-slate-400 text-sm font-medium">{cert.issuer}</p>
                  
                  {/* Status Badge */}
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    cert.status === 'Ongoing' 
                      ? 'bg-blue-900/50 text-blue-400 border border-blue-800' 
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certifications;