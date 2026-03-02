import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-100 mb-12"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-700 shadow-xl"
        >
          <p className="text-slate-400 text-lg leading-relaxed mb-6 text-justify md:text-left">
            Orchestrating the convergence of computational logic and strategic leadership, I am a Computer Science undergraduate at Metropolitan University, committed to engineering robust Full Stack solutions. My technical acumen in Python, Java, and JavaScript is underpinned by a history of unblemished academic excellence. Beyond the terminal, I operate as a Student Focal for the UNDP's Futurenation, actively bridging the academic-industrial divide through high-impact initiatives. From commanding the floor as an award-winning MUN delegate to developing scalable web architectures, I am relentless in driving transformative innovation within the tech ecosystem.
          </p>

          {/* Download CV Button */}
          <div className="flex justify-center md:justify-start">
            <motion.a 
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/Anowar-Hosain-CV.pdf" 
              download="Anowar-Hosain-CV.pdf"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20"
            >
              <FaDownload className="text-xl" /> Download Resume (PDF)
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;