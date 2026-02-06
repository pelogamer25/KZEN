import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Create distinct movement speeds for depth perception
  const yFlow = useTransform(scrollY, [0, 4000], [0, -1000]);
  const yVoid = useTransform(scrollY, [0, 4000], [0, -400]);
  const yHarmony = useTransform(scrollY, [0, 4000], [0, -1500]);
  const rotateVoid = useTransform(scrollY, [0, 4000], [0, 45]);
  const yInk = useTransform(scrollY, [0, 4000], [0, 600]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Giant Kanji: Flow (流) - Fast moving, deep layer */}
        <motion.div 
            style={{ y: yFlow }}
            className="absolute top-[10%] left-[-5%] text-[30rem] md:text-[50rem] text-sumi-black opacity-[0.03] font-serif leading-none select-none blur-sm"
        >
            流
        </motion.div>

        {/* Giant Kanji: Void (空) - Slow moving, rotating, middle layer */}
        <motion.div 
            style={{ y: yVoid, rotate: rotateVoid }}
            className="absolute top-[40%] right-[-15%] text-[25rem] md:text-[60rem] text-indigo-deep opacity-[0.02] font-serif leading-none select-none blur-[2px]"
        >
            空
        </motion.div>

         {/* Giant Kanji: Beauty (美) - Very fast, foreground layer */}
        <motion.div 
            style={{ y: yHarmony }}
            className="absolute top-[90%] left-[20%] text-[20rem] md:text-[40rem] text-sumi-black opacity-[0.02] font-serif leading-none select-none"
        >
            美
        </motion.div>
        
        {/* Ink Wash Blob - Moves downwards against the scroll */}
         <motion.div 
            style={{ y: yInk }}
            className="absolute top-[20%] right-[30%] w-[500px] h-[500px] rounded-full bg-stone-300 opacity-[0.1] blur-[100px]"
        />
        
        {/* Second Ink Wash */}
         <motion.div 
            style={{ y: yFlow }}
            className="absolute top-[60%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-deep opacity-[0.05] blur-[120px]"
        />
    </div>
  );
};

export default ParallaxBackground;