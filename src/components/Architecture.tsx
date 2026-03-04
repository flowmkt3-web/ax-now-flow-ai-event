import React from 'react';
import { motion } from 'motion/react';

export default function Architecture() {
  return (
    <section id="architecture" className="py-32 bg-gradient-to-b from-[#050505] via-[#1a0b2e] to-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Flow AI Architecture</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            기업의 데이터를 안전하게 보호하며 최고의 AI 성능을 제공하는 <strong className="text-white font-semibold">엔터프라이즈 전용 구조</strong>입니다.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full md:w-[300px] flex justify-center md:justify-end">
            <svg width="240" height="400" viewBox="0 0 240 400" className="drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <defs>
                <linearGradient id="glassTopHighlight" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" /><stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" /></linearGradient>
                <linearGradient id="glassTop" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="rgba(168, 85, 247, 0.25)" /><stop offset="100%" stopColor="rgba(59, 130, 246, 0.25)" /></linearGradient>
                <linearGradient id="glassLeft" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="rgba(147, 51, 234, 0.4)" /><stop offset="100%" stopColor="rgba(37, 99, 235, 0.4)" /></linearGradient>
                <linearGradient id="glassRight" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="rgba(126, 34, 206, 0.5)" /><stop offset="100%" stopColor="rgba(30, 64, 175, 0.5)" /></linearGradient>
                <linearGradient id="lightRay" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" /><stop offset="100%" stopColor="rgba(168, 85, 247, 0)" /></linearGradient>
              </defs>
              <polygon points="60,0 180,0 220,130 20,130" fill="url(#lightRay)" />
              {[5, 4, 3, 2, 1, 0].map((layer) => {
                const y = 100 + layer * 42;
                return (
                  <g key={layer}>
                    <polygon points={`120,${y} 220,${y+30} 120,${y+60} 20,${y+30}`} fill={layer === 0 ? "url(#glassTopHighlight)" : "url(#glassTop)"} stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                    <polygon points={`20,${y+30} 120,${y+60} 120,${y+80} 20,${y+50}`} fill="url(#glassLeft)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                    <polygon points={`120,${y+60} 220,${y+30} 220,${y+50} 120,${y+80}`} fill="url(#glassRight)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                    <circle cx="40" cy={y+45} r="1.5" fill={layer % 2 === 0 ? "#a855f7" : "#60a5fa"} />
                    <circle cx="50" cy={y+48} r="1.5" fill="#a855f7" />
                    <circle cx="60" cy={y+51} r="1.5" fill="#60a5fa" />
                  </g>
                );
              })}
            </svg>
          </motion.div>
          <div className="hidden md:block w-[100px] h-[380px] relative">
            <svg width="100" height="380" className="absolute inset-0">
              <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} d="M 0 180 C 50 180, 50 86, 100 86" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
              <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} d="M 0 265 C 50 265, 50 190, 100 190" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6" />
              <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} d="M 0 350 C 50 350, 50 294, 100 294" fill="none" stroke="#6366f1" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>
          <div className="w-full md:w-[400px] h-auto md:h-[380px] flex flex-col justify-center relative">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="md:absolute -top-4 right-0 text-center md:text-right mb-6 md:mb-0 w-full">
              <span className="text-xl md:text-2xl font-bold text-white tracking-wide">Architecture <span className="text-gray-400 font-light">for Flow AI</span></span>
            </motion.div>
            <div className="flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="h-[80px] rounded-2xl border border-purple-500/50 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-shadow cursor-default"><h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 tracking-tight">Flow AI Model</h3></motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="h-[80px] rounded-2xl border border-emerald-500/50 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-shadow cursor-default"><h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Enterprise Vector DB</h3></motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="h-[80px] rounded-2xl border border-indigo-500/50 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-shadow cursor-default"><h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Private Cloud Infra</h3></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
