import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
// Import your photo here! (Make sure the filename matches exactly)
import profilePic from '../assets/photo.jpeg'; 

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Animated Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Subtle glowing background effect behind the photo */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            {/* The actual photo */}
            <img 
              src={profilePic} 
              alt="Md Anowar Hosain" 
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Animated Title with Premium Text Gradient */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          <span className="text-slate-100">Md Anowar </span>
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hosain
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6"
        >
          Computer Science Undergraduate <span className="text-blue-500 hidden md:inline">|</span><span className="block md:hidden"></span> Full Stack Developer
        </motion.h2>

        {/* Animated Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed"
        >
          Orchestrating the convergence of computational logic and strategic leadership 
          to engineer robust, scalable web architectures.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-1">
            View Projects
          </a>
          <a href="#contact" className="bg-slate-800 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1">
            Contact Me
          </a>
        </motion.div>

        {/* Social Links inside modern circular buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex justify-center gap-5"
        >
          <a href="https://github.com/anowarhosain" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-xl hover:-translate-y-1 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anowar-hosain/" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-xl hover:-translate-y-1 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/anowarhosainn" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-xl hover:-translate-y-1 text-2xl">
            <FaFacebook />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;