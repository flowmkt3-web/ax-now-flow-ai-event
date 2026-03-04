import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "AX NOW는 어떤 행사인가요?",
    answer: "AX NOW는 차세대 협업툴 '플로우 AI'의 공식 출시를 기념하여, AI가 변화시킬 업무의 미래와 실제 적용 사례를 공유하는 국내 최대 규모의 업무 혁신 컨퍼런스입니다."
  },
  {
    question: "참가 대상은 누구인가요?",
    answer: "AI를 활용한 업무 생산성 향상에 관심 있는 기업의 대표, 임원, HR/조직문화 담당자 등 일하는 방식의 혁신을 고민하는 누구나 참여하실 수 있습니다."
  },
  {
    question: "온·오프라인 참여가 모두 가능한가요?",
    answer: "네, 본 행사는 오프라인 현장(미정) 진행과 동시에 온라인 라이브 스트리밍이 제공되는 하이브리드 행사입니다. 등록 시 원하시는 참여 방식을 선택하실 수 있습니다."
  },
  {
    question: "참가비는 얼마인가요?",
    answer: "현재 진행 중인 '얼리버드 사전 등록' 기간 내에 신청하시면 전 세션 무료로 참가하실 수 있습니다. (정규 등록 시 참가비 미정)"
  },
  {
    question: "다시보기 영상이 제공되나요?",
    answer: "행사 종료 후, 플로우 공식 유튜브 채널에 업로드 될 예정입니다."
  },
  {
    question: "등록 후 일정 변경이 가능한가요?",
    answer: "사전 등록 정보 수정 및 취소는 행사 3일 전까지 가능합니다. 등록 시 발송된 확인 이메일 내의 '등록 수정하기' 링크를 통해 직접 변경하실 수 있습니다."
  },
  {
    question: "기업 단체 참가가 가능한가요?",
    answer: "네, 5인 이상 단체 참가의 경우 별도의 혜택이 제공됩니다. 단체 등록은 고객센터 이메일()로 문의해 주시면 상세히 안내해 드리겠습니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-[#050505] relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">자주 묻는 질문</h2>
          <p className="text-gray-400 text-lg font-light">
            AX NOW 행사 참여에 대해 궁금하신 점을 확인해보세요.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                  ? 'bg-[#121212] border-purple-500/50 shadow-[0_0_30px_rgba(139,92,246,0.1)]'
                  : 'bg-[#0a0a0a] border-white/5 hover:bg-[#121212] hover:border-white/10'
                  }`}
              >
                {/* Active Purple Accent Line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className={`text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-gray-500'}`}>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <p className="text-gray-400 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
