import React from 'react';
import { motion } from 'motion/react';
export default function About() {
  const textBlock = "국내 NO.1 협업툴 플로우 · AX NOW · 국내 NO.1 협업툴 플로우 · AX NOW · ";
  return (
    <section id="about" className="py-32 relative bg-[#0B0F1A] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 relative z-10">
        <motion.h2 
          className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          AI가 모든 경계를 허무는 시대,<br />
          협업의 새로운 기준을 제시합니다.
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-blue-200/60 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          단순한 도구의 발전을 넘어, 일하는 방식의 근본적인 혁신을 경험하세요.<br />
          AI가 알아서 프로젝트를 세팅하고, 수많은 업무 히스토리를 요약하며,<br />
          팀의 생산성을 극대화하는 새로운 차원의 협업을 지금 바로 만나보실 수 있습니다.
        </motion.p>
      </div>
      <div className="relative w-full flex flex-col gap-3 mask-edges">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#6C3BFF] to-[#8B5CF6] opacity-20 blur-[100px] pointer-events-none"></div>
        <div className="relative flex w-max animate-marquee-left bg-gradient-to-r from-[#3B82F6] via-[#6C3BFF] to-[#8B5CF6] py-3 md:py-4 shadow-[0_0_30px_rgba(108,59,255,0.15)]">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0B0F1A] whitespace-nowrap tracking-tighter px-4">
              {textBlock}{textBlock}
            </span>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0B0F1A] whitespace-nowrap tracking-tighter px-4">
              {textBlock}{textBlock}
            </span>
          </div>
        </div>
        <div className="relative flex w-max animate-marquee-right bg-gradient-to-r from-[#8B5CF6] via-[#6C3BFF] to-[#3B82F6] py-3 md:py-4 shadow-[0_0_30px_rgba(108,59,255,0.15)]">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0B0F1A] whitespace-nowrap tracking-tighter px-4">
              {textBlock}{textBlock}
            </span>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0B0F1A] whitespace-nowrap tracking-tighter px-4">
              {textBlock}{textBlock}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
