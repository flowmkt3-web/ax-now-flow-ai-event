import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mic2, Briefcase, Info } from 'lucide-react';
import { speakers } from '../data/speakers';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null);

  return (
    <section id="speakers" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Speakers</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            AI와 비즈니스 혁신을 이끄는 <strong className="text-white font-semibold">최고의 전문가들</strong>을 모셨습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
                {/* Speaker Image */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Info on Hover/Card */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={speaker.companyLogo} alt={speaker.company} className="h-6 object-contain" />
                    <span className="text-sm font-bold text-white/60 tracking-wider uppercase">{speaker.company}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">{speaker.name} <span className="text-lg font-medium text-gray-400">{speaker.role}</span></h3>
                  <p className="text-purple-400 font-medium text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 italic">
                    "{speaker.topic}"
                  </p>
                </div>

                {/* Speaker Theme Border Accent */}
                <div className={`absolute inset-0 border-2 rounded-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none ${speaker.theme === 'blue' ? 'border-blue-500/50' : 'border-purple-500/50'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Speaker Detail Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-2 rounded-full hover:bg-white/10"
                onClick={() => setSelectedSpeaker(null)}
              >
                <X size={24} />
              </button>

              {/* Modal Left: Image */}
              <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Right: Content */}
              <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <img src={selectedSpeaker.companyLogo} alt={selectedSpeaker.company} className="h-8 object-contain" />
                  <div className="h-4 w-px bg-white/20"></div>
                  <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">{selectedSpeaker.company}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black mb-2 text-white">
                  {selectedSpeaker.name}
                  <span className="text-xl font-medium text-gray-500 ml-4">{selectedSpeaker.role}</span>
                </h3>

                <div className="mt-10 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 text-purple-400 mb-3 font-bold uppercase tracking-widest text-xs">
                      <Mic2 size={16} />
                      Presentation Topic
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-white leading-tight break-keep">
                      "{selectedSpeaker.topic}"
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-blue-400 mb-3 font-bold uppercase tracking-widest text-xs">
                      <Info size={16} />
                      About Speaker
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed font-light break-keep">
                      {selectedSpeaker.bio}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 text-gray-500 mb-3 font-bold uppercase tracking-widest text-xs">
                      <Briefcase size={16} />
                      Key Takeaways
                    </div>
                    <p className="text-gray-300 text-lg font-medium leading-relaxed break-keep">
                      {selectedSpeaker.presentation}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <button 
                    onClick={() => setSelectedSpeaker(null)}
                    className="w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors"
                  >
                    확인
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
