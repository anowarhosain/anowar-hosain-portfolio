import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; 

const certsData = [
  {
    name: "Python Programming and Basic Data Science",
    issuer: "IICT, SUST & EDGE",
    status: "Completed",
    verifyLink: "https://training.edge.gov.bd/certificate-validation"
  },
  {
    name: "Business & Social English",
    issuer: "British Council",
    status: "Completed",
    verifyLink: "https://credentials.englishonline.britishcouncil.org/profile/md-anowar-hosain/wallet"
  },
  {
    name: "Advanced MySQL Topics",
    issuer: "Meta",
    status: "Completed",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/8DD63BUE252D"
  },
  {
    name: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM",
    status: "Completed",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/2TM8A1363Z9F"
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
              className="flex items-start p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-blue-500 hover:-translate-y-1 transition-all shadow-xl group flex-col"
            >
              <div className="flex w-full items-center mb-4">
                {/* Icon Circle */}
                <div className="w-14 h-14 flex-shrink-0 bg-slate-800 text-blue-400 rounded-full flex items-center justify-center font-bold text-2xl mr-5 border border-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {cert.name.charAt(0)}
                </div>
                
                {/* Text Content - Title and Issuer */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-100 mb-1 leading-tight">{cert.name}</h3>
                  <p className="text-slate-400 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Bottom Row - Status and Verify Link */}
              <div className="flex items-center justify-between w-full mt-auto pt-2 border-t border-slate-800/50">
                {/* Verify Link (conditionally rendered) */}
                {cert.verifyLink ? (
                  <a 
                    href={cert.verifyLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors"
                  >
                    Verify <FaExternalLinkAlt className="ml-1.5 w-3 h-3" />
                  </a>
                ) : (
                  <div></div> /* Empty div to push status badge to the right if no link */
                )}

                {/* Status Badge */}
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  cert.status === 'Ongoing' 
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-800' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certifications;