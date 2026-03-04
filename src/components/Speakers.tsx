import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Linkedin } from 'lucide-react';
import { speakers } from '../data/speakers';
export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  return (
    <section id="speakers" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-20 tracking-tight">Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((s, i) => (
            <motion.div key={i} onClick={() => setSelectedSpeaker(s)} className="p-6 rounded-3xl bg-[#1a1b2e] border border-white/5 cursor-pointer hover:-translate-y-2 transition-transform">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6"><img src={s.image} className="w-full h-full object-cover" /></div>
              <h3 className="text-xl font-bold mb-2">{s.name}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{s.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
