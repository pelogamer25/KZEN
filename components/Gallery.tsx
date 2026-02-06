import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Artwork } from '../types';

const artworks: Artwork[] = [
  { id: 1, title: "Morning Mist", category: "Photography", year: "2025", size: "large" },
  { id: 2, title: "Raku Pottery", category: "Sculpture", year: "2024", size: "small" },
  { id: 3, title: "Shadows in Kyoto", category: "Digital", year: "2025", size: "tall" },
  { id: 4, title: "Silence", category: "Installation", year: "2026", size: "medium" },
  { id: 5, title: "Zen Garden", category: "Photography", year: "2025", size: "tall" },
  { id: 6, title: "Paper & Ink", category: "Mixed Media", year: "2024", size: "medium" },
];

const Gallery: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Title horizontal move parallax - More dramatic
  const xTitle = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 flex flex-col items-end relative"
        >
            {/* Drifting Background Title - Huge and transparent */}
            <motion.h2 
                style={{ x: xTitle }}
                className="font-serif text-[8rem] md:text-[12rem] text-sumi-black/5 absolute -right-1/4 top-[-50px] -z-10 select-none whitespace-nowrap pointer-events-none"
            >
                コレクション COLLECTION
            </motion.h2>
            <h3 className="font-serif text-3xl text-sumi-black relative z-10">Gallery</h3>
            <p className="font-sans text-sm text-gray-500 mt-2">Selected Works</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {artworks.map((art, index) => (
                <GalleryItem key={art.id} artwork={art} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem: React.FC<{ artwork: Artwork; index: number }> = ({ artwork, index }) => {
    const itemRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });

    // Inner Image Parallax (Image moves inside container)
    const yImage = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    // Determine aspect ratio class based on size
    let heightClass = "h-64";
    if (artwork.size === 'tall') heightClass = "h-[500px]";
    if (artwork.size === 'large') heightClass = "h-80 md:col-span-2";
    if (artwork.size === 'medium') heightClass = "h-80";

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
    >
      <div className={`w-full ${heightClass} bg-stone-100 relative overflow-hidden shadow-lg transition-all duration-700 ease-out hover-trigger`}>
        {/* Parallax Content Container */}
        <motion.div style={{ y: yImage, scale: scaleImage }} className="absolute inset-[-40px] bg-stone-100">
             <div className="w-full h-full flex flex-col items-center justify-center p-6 border border-stone-100 group-hover:border-stone-300 transition-colors">
                <span className="text-stone-300 text-4xl font-serif mb-2">{index + 1}</span>
                <span className="text-[10px] tracking-widest text-stone-400 uppercase text-center">
                    [UPLOAD IMAGE – {artwork.title.toUpperCase()}]
                </span>
            </div>
        </motion.div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-sumi-black/0 group-hover:bg-sumi-black/5 transition-colors duration-500 z-10" />
        
        {/* Hover Info */}
        <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 z-20">
            <div className="backdrop-blur-md bg-white/40 p-4 border-t border-white/20">
                <p className="font-serif text-sumi-black text-lg">{artwork.title}</p>
                <p className="font-sans text-xs text-sumi-black/70 mt-1">{artwork.category} — {artwork.year}</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;