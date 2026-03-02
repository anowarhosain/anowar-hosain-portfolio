import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: "Honoured (Special Mention)",
    context: "MU Mock MUN'24 (Delegate of Bangladesh)"
  },
  {
    title: "Participated",
    context: "ICPC (Dhaka Regional) Online Preliminary Contest 2025"
  },
  {
    title: "Government Scholarship (General)",
    context: "SSC (2018), JSC (2015), PSC (2012)"
  },
  {
    title: "Private Scholarships",
    context: "Achieved four private scholarships across 2010, 2011, 2012 & 2017"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 border-t border-gray-800">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Achievements</h2>
      
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {achievementsData.map((award, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-r from-gray-800 to-transparent border-l-4 border-blue-500 rounded-r-xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
            <p className="text-gray-400">{award.context}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;