import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax: Text moves down, Image moves up
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="philosophy" ref={containerRef} className="relative py-32 md:py-48 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
            {/* Text Side with Floating Motion */}
            <motion.div
                style={{ y: yText }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                <span className="text-akaneiro-red text-sm font-sans tracking-widest uppercase mb-4 block">Concept</span>
                <h3 className="font-serif text-3xl md:text-4xl text-sumi-black mb-8 leading-relaxed">
                    Ma (間) is not just emptiness.<br/>
                    It is the pause that shapes<br/>
                    the whole.
                </h3>
                <p className="font-sans text-gray-600 leading-8 font-light mb-8">
                    In our design, every pixel of negative space is intentional. 
                    We reject digital noise in favor of clarity, allowing content 
                    to breathe and the mind to rest. An asymmetrical harmony 
                    that reflects nature itself.
                </p>
            </motion.div>

            {/* Visual Side - Abstract Parallax Image */}
            <motion.div
                style={{ y: yImage }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[3/4] md:aspect-square bg-gray-100/50 backdrop-blur-sm shadow-xl"
            >
                 <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
                    className="w-full h-full relative overflow-hidden"
                 >
                    {/* Image Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400 p-8 text-center text-xs tracking-widest border border-stone-200">
                        [UPLOAD IMAGE – TEXTURE / DETAIL SHOT / STONE OR INK]
                    </div>
                 </motion.div>
                
                {/* Decorative Element - Reactive to scroll */}
                <motion.div 
                    style={{ scaleX: lineScale }}
                    className="absolute bottom-12 right-0 w-32 h-[1px] bg-akaneiro-red origin-left"
                />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;