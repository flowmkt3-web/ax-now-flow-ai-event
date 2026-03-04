import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="register" className="py-40 md:py-64 relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#6C3BFF]/5 to-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          
          {/* Decorative Typography Block */}
          <div className="relative inline-block text-left font-sans font-bold text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-[1.05] text-white mb-20 select-none">
            <div className="relative z-10">NOW IS</div>
            <div className="relative z-10 flex items-center">
              <span className="text-[#00E599] font-light mr-2 md:mr-4 text-7xl md:text-9xl lg:text-[10rem] leading-none translate-y-[-5%]">{"{"}</span>
              AX NOW
              <span className="text-[#FF6B9E] font-light ml-2 md:ml-4 text-7xl md:text-9xl lg:text-[10rem] leading-none translate-y-[-5%]">{"}"}</span>
            </div>

            {/* Blue bounding box (around "IS") */}
            <div className="absolute top-[2%] left-[52%] w-[45%] h-[45%] border-[2px] border-[#3B82F6] pointer-events-none z-20 hidden md:block">
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#3B82F6]"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#3B82F6]"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#3B82F6]"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#3B82F6]"></div>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#3B82F6]"></div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#3B82F6]"></div>
            </div>

            {/* Yellow cursor */}
            <svg className="absolute top-[18%] -right-[12%] w-16 h-16 md:w-20 md:h-20 z-30 hidden md:block" viewBox="0 0 24 24" fill="#0a0a0a" stroke="#FFB020" strokeWidth="1.5" strokeLinejoin="round">
              <path d="M5.5 3.5L18.5 11.5L12.5 13.5L16.5 20.5L13.5 22.5L9.5 15.5L4.5 19.5Z"/>
            </svg>

            {/* Purple curved double arrow */}
            <svg className="absolute -top-[12%] -right-[2%] w-12 h-12 md:w-16 md:h-16 z-20 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 5C13 5 19 8 19 14"/>
              <path d="M12 5H8V9"/>
              <path d="M19 10V14H15"/>
            </svg>

            {/* Cyan dimension line */}
            <div className="absolute bottom-[-5%] left-[5%] flex items-center text-[#06B6D4] z-20 hidden md:flex">
              <div className="w-[2px] h-5 bg-current"></div>
              <div className="w-20 h-[2px] bg-current"></div>
              <div className="w-[2px] h-5 bg-current"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-blue-200/60 font-light mb-16 max-w-3xl mx-auto tracking-tight">
            AI 협업의 전환점, 지금 시작하세요.
          </p>
          
          <button className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#6C3BFF] to-[#3B82F6] text-white px-12 py-6 md:px-16 md:py-8 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_50px_rgba(108,59,255,0.4)] cursor-pointer overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              지금 사전 등록하기 <ArrowRight size={28} className="transition-transform group-hover:translate-x-2" />
            </span>
            {/* Inner subtle glow for the button itself */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
