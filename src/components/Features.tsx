import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ArrowRight } from 'lucide-react';
export default function Features() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <section id="features" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight">Flow AI를 60초 안에 경험해보세요</h2>
        <div className="relative max-w-4xl mx-auto cursor-pointer group" onClick={() => setIsVideoModalOpen(true)}>
          <div className="rounded-2xl border border-white/10 bg-[#121212] overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] transition-all">
            <div className="relative aspect-video bg-[#0a0a0a] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-purple-600/90 flex items-center justify-center text-white"><Play size={32} className="ml-2" /></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>{isVideoModalOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setIsVideoModalOpen(false)}>
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
          <video src="/videos/flow_demo.mp4" className="w-full h-full object-contain" controls autoPlay loop muted />
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsVideoModalOpen(false)}><X size={32} /></button>
        </motion.div>
      </motion.div>}</AnimatePresence>
    </section>
  );
}
