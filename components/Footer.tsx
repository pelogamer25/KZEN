import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-transparent text-sumi-black py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative large separator line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sumi-black/20 to-transparent"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-0"
        >
            <h2 className="font-serif text-5xl md:text-8xl mb-6 opacity-90">Contact</h2>
            <a href="mailto:hello@kzen.jp" className="text-xl font-light hover-trigger border-b border-sumi-black/10 hover:border-sumi-black transition-all pb-1">
                hello@kzen.jp
            </a>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 text-sm font-light text-gray-500 text-right"
        >
            <a href="#" className="hover:text-sumi-black transition-colors hover-trigger">Instagram</a>
            <a href="#" className="hover:text-sumi-black transition-colors hover-trigger">Twitter</a>
            <a href="#" className="hover:text-sumi-black transition-colors hover-trigger">Awwwards</a>
            <span className="mt-8 opacity-40">© 2026 KZEN. Japanese Aesthetics.</span>
        </motion.div>
      </div>

      {/* Decorative Kanji background - Subtle End/Path */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute bottom-[-10%] right-[-5%] text-[20rem] font-serif pointer-events-none select-none text-sumi-black z-0"
      >
        道
      </motion.div>
    </footer>
  );
};

export default Footer;