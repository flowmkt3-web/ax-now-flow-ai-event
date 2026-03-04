import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
export default function CTA() {
  return (
    <section id="register" className="py-40 md:py-64 relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#6C3BFF]/5 to-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center justify-center">
          <div className="relative inline-block text-left font-sans font-bold text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-[1.05] text-white mb-20 select-none">
            <div className="relative z-10">NOW IS</div>
            <div className="relative z-10 flex items-center"><span className="text-[#00E599] font-light mr-2 md:mr-4 text-7xl md:text-9xl lg:text-[10rem] leading-none translate-y-[-5%]">{"{"}</span>AX NOW<span className="text-[#FF6B9E] font-light ml-2 md:ml-4 text-7xl md:text-9xl lg:text-[10rem] leading-none translate-y-[-5%]">{"}"}</span></div>
          </div>
          <p className="text-xl md:text-3xl text-blue-200/60 font-light mb-16 max-w-3xl mx-auto tracking-tight">AI 협업의 전환점, 지금 시작하세요.</p>
          <button className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#6C3BFF] to-[#3B82F6] text-white px-12 py-6 md:px-16 md:py-8 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_50px_rgba(108,59,255,0.4)] cursor-pointer"><span className="relative z-10 flex items-center gap-3">지금 사전 등록하기 <ArrowRight size={28} className="transition-transform group-hover:translate-x-2" /></span></button>
        </motion.div>
      </div>
    </section>
  );
}
