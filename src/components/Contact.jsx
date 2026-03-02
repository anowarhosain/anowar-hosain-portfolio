import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-center text-slate-100 mb-16">Get In Touch</h2>
        
        {/* Two-column layout container */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">Let's Connect</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-slate-800 flex items-center justify-center rounded-2xl text-blue-400 text-xl border border-slate-700 hover:border-blue-500 transition-colors shadow-lg">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold text-slate-100 mb-1">Email</p>
                <a href="mailto:anowar9701@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">anowar9701@gmail.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-slate-800 flex items-center justify-center rounded-2xl text-blue-400 text-xl border border-slate-700 hover:border-blue-500 transition-colors shadow-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-semibold text-slate-100 mb-1">Phone / WhatsApp</p>
                <a href="tel:+8801618431824" className="text-slate-400 hover:text-blue-400 transition-colors">+880 1618431824</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-slate-800 flex items-center justify-center rounded-2xl text-blue-400 text-xl border border-slate-700 hover:border-blue-500 transition-colors shadow-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold text-slate-100 mb-1">Location</p>
                <p className="text-slate-400">Sylhet City, 3100, Bangladesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/anowarhosain" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-full text-xl text-slate-300 hover:text-white hover:bg-blue-600 transition-all border border-slate-700 hover:border-blue-500 shadow-lg hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anowar-hosain/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-full text-xl text-slate-300 hover:text-white hover:bg-blue-600 transition-all border border-slate-700 hover:border-blue-500 shadow-lg hover:-translate-y-1">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Mr./ Ms. Professional" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="hello@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Great to see you. How can we work together?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-900/20">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Footer / Copyright Section */}
      <div className="border-t border-slate-800 py-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} 'Anowar' All rights reserved</p>
          <p className="flex items-center gap-2">
            Built with <FaHeart className="text-blue-500" /> Using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;