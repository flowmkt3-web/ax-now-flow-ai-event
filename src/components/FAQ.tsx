import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
const faqs = [{ question: "AX NOW는 어떤 행사인가요?", answer: "AX NOW는 차세대 협업툴 '플로우 AI'의 공식 출시를 기념하여, AI가 변화시킬 업무의 미래와 실제 적용 사례를 공유하는 국내 최대 규모의 업무 혁신 컨퍼런스입니다." }, { question: "참가 대상은 누구인가요?", answer: "AI를 활용한 업무 생산성 향상에 관심 있는 기업의 대표, 임원, HR/조직문화 담당자 등 일하는 방식의 혁신을 고민하는 누구나 참여하실 수 있습니다." }, { question: "온·오프라인 참여가 모두 가능한가요?", answer: "네, 본 행사는 오프라인 현장 진행과 동시에 온라인 라이브 스트리밍이 제공되는 하이브리드 행사입니다." }, { question: "참가비는 얼마인가요?", answer: "현재 진행 중인 '얼리버드 사전 등록' 기간 내에 신청하시면 전 세션 무료로 참가하실 수 있습니다." }];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-32 bg-[#050505] relative">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tight">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer">
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown size={20} className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>{openIndex === index && <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-8 pb-8 text-gray-400 font-light leading-relaxed">{faq.answer}</motion.div>}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
