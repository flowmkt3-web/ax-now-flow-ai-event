import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const painPoints = [
  {
    asis: "부서마다 제각각인 협업툴,\n데이터 파편화로 **보안 통제가 어렵다.**",
    tobe: "모든 업무 데이터를 하나로 통합하고\n강력한 **엔터프라이즈 보안**을 제공하자."
  },
  {
    asis: "AI 도입이 필수라지만,\n실무에 어떻게 적용할지 **막막하다.**",
    tobe: "별도의 학습 없이 즉시 투입 가능한\n**맞춤형 AI 비서**를 제공하자."
  },
  {
    asis: "수많은 프로젝트와 쏟아지는 보고서,\n진행 상황을 한눈에 파악하기 **벅차다.**",
    tobe: "AI가 핵심을 요약하고 리스크를 예측해\n경영진의 **빠른 의사결정**을 돕자."
  }
];

const renderText = (text: string, isToBe: boolean) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <span key={i} className={`font-bold ${isToBe ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400' : 'text-white'}`}>
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export default function TargetAudience() {
  return (
    <section id="target-audience" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">평소에 이런 문제들 있지 않으신가요?</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            기업의 성장을 고민하는 <strong className="text-white font-semibold">CEO, CTO 및 임원진</strong>을 위해 준비했습니다.
          </p>
        </div>

        <div className="space-y-6 md:space-y-12">
          {/* Header */}
          <div className="hidden md:flex items-center justify-between px-10 mb-2">
            <div className="w-[45%] text-xl font-bold text-gray-500 tracking-wider">As is</div>
            <div className="w-[10%] flex justify-center"></div>
            <div className="w-[45%] text-xl font-bold text-white tracking-wider">To be</div>
          </div>

          {/* List */}
          {painPoints.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0 relative"
            >
              {/* As-is Box */}
              <div className="w-full md:w-[45%] bg-[#0a0a0a] rounded-3xl p-8 md:p-10 border border-white/5 flex items-center">
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed font-light whitespace-pre-line break-keep">
                  {renderText(point.asis, false)}
                </p>
              </div>

              {/* Arrow */}
              <div className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-gray-500 z-10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 rotate-90 md:rotate-0 self-center shrink-0 my-2 md:my-0">
                <ArrowRight size={20} />
              </div>

              {/* To-be Box */}
              <div className="w-full md:w-[45%] bg-gradient-to-br from-[#121212] to-purple-900/20 rounded-3xl p-8 md:p-10 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)] flex items-center">
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed font-light whitespace-pre-line break-keep">
                  {renderText(point.tobe, true)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
