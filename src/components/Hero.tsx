import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src='https://my.spline.design/interactivecubes-6ugSKWKzY40dsBjUrKqZwF6T/'
          frameBorder='0'
          width='100%'
          height='100%'
          title="Spline 3D Background"
        ></iframe>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/20 via-[#050505]/50 to-[#050505] pointer-events-none"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pointer-events-none mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-purple-400 font-bold tracking-[0.4em] uppercase text-sm mb-6"
        >
          flow AI launch
        </motion.div>
        <motion.h1
          className="text-[clamp(3.5rem,18vw,12rem)] font-black tracking-tighter mb-12 leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-500 drop-shadow-[0_0_50px_rgba(168,85,247,0.8)]">
            AX NOW
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pointer-events-auto"
        >
          <a
            href="#register"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            지금 등록하기 <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
