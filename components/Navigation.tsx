import React from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-washi-white"
    >
      <div className="font-serif text-2xl font-bold tracking-widest hover-trigger cursor-pointer">
        間 KZEN
      </div>
      
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            className="font-sans text-sm tracking-widest uppercase hover:opacity-50 transition-opacity duration-300 relative group hover-trigger"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="md:hidden">
        {/* Simple hamburger for mobile would go here - simplified for this demo */}
        <div className="w-6 h-[1px] bg-current mb-1"></div>
        <div className="w-4 h-[1px] bg-current ml-auto"></div>
      </div>
    </motion.nav>
  );
};

export default Navigation;