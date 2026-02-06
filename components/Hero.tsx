import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Enhanced Parallax Effects
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.3]);
  const yTextMain = useTransform(scrollY, [0, 500], [0, -250]); 
  const yTextContent = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background with Scale and Parallax */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 z-0 origin-center">
        <div className="w-full h-full bg-stone-200 relative">
             <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 font-sans tracking-widest text-sm z-0">
                [UPLOAD IMAGE – HERO VISUAL / MISTY LANDSCAPE]
             </div>
             {/* Gradient Overlay for legibility */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-washi-white/10 to-washi-white/90 z-10"></div>
             
             {/* Mist Effect Overlay */}
             <motion.div 
                animate={{ x: [-50, 50, -50], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-0 bg-white/30 blur-3xl z-10 mix-blend-screen"
             />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start pt-32 md:pt-0">
        
        {/* Main Title - Vertical Layout - Moves faster upwards */}
        <motion.div 
            style={{ y: yTextMain }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="md:absolute md:right-12 md:top-1/4 writing-vertical-rl text-right hidden md:block"
        >
            <h1 className="font-serif text-6xl md:text-9xl text-sumi-black leading-tight tracking-wider opacity-90 drop-shadow-xl">
                静寂美
            </h1>
        </motion.div>

        <motion.div 
            style={{ y: yTextContent }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="mt-auto mb-24 md:mb-32 md:ml-12 max-w-lg"
        >
            {/* Continuous Breathing Motion */}
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
                <h2 className="font-serif text-4xl md:text-5xl text-sumi-black mb-6 leading-tight">
                    The beauty of <br/> imperfection.
                </h2>
                <p className="font-sans font-light text-gray-600 text-lg leading-relaxed text-justify-justify">
                    Where emptiness takes shape. A digital exploration of Wabi-Sabi and contemporary aesthetics.
                </p>
            </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Explore</span>
        <div className="w-[1px] h-12 bg-sumi-black/20 overflow-hidden relative">
            <motion.div 
                animate={{ y: [ -48, 48 ] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-sumi-black"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;