import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];

  return (
    // Pushes the floating bar slightly down from the top edge
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      
      {/* Ultra-modern frosted glass pill shape */}
      <nav className="w-full max-w-5xl bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-full shadow-2xl shadow-slate-900/50 px-6 py-3 md:px-8 md:py-4 flex justify-between items-center transition-all">
        
        {/* Modern minimalistic logo text */}
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="text-xl md:text-2xl font-extrabold text-slate-100 cursor-pointer hover:scale-105 transition-transform tracking-tight"
        >
          Anowar<span className="text-blue-500">Portfolio</span>
        </Link>
        
        {/* Navigation Links with modern hover pill shapes */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Link 
              key={item} 
              to={item.toLowerCase()} 
              smooth={true} 
              duration={500} 
              offset={-100}
              className="px-5 py-2 rounded-full text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-800 hover:shadow-inner border border-transparent hover:border-slate-700 cursor-pointer transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;