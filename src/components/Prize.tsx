import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Search, Zap, Check, Gift, Sparkles, Layout, Bot, Mic, X } from 'lucide-react';

const features = [
  { id: 'project', label: '프로젝트 자동 AI', icon: Layout, pos: 'md:top-[12%] md:left-[5%]' },
  { id: 'search', label: '스마트검색', icon: Search, pos: 'md:top-[15%] md:right-[5%]' },
  { id: 'summary', label: 'AI 회의 요약', icon: FileText, pos: 'md:top-[45%] md:left-[2%]' },
  { id: 'bot', label: '플로우 AI 비서 봇', icon: Bot, pos: 'md:top-[48%] md:right-[2%]' },
  { id: 'auto', label: '업무 자동화 (채팅/음성)', icon: Mic, pos: 'md:bottom-[15%] md:left-[8%]' },
  { id: 'translate', label: '업무 수행 에이전트', icon: Zap, pos: 'md:bottom-[12%] md:right-[6%]' },
];

export default function Prize() {
  const [foundFeatures, setFoundFeatures] = useState<string[]>([]);
  const [showQR, setShowQR] = useState(false);

  const handleFeatureClick = (id: string) => {
    if (!foundFeatures.includes(id)) {
      setFoundFeatures(prev => [...prev, id]);
    }
  };

  const isUnlocked = foundFeatures.length === features.length;

  return (
    <section id="prize" className="py-24 md:py-32 relative bg-[#050505] overflow-hidden min-h-[900px] flex items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 h-full flex flex-col items-center justify-center">

        {/* Center Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-none mb-12 md:mb-0 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Sparkles size={16} />
              Secret Event
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight break-keep leading-[1.4]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                플로우 AI 기능
              </span>을<br className="md:hidden" /> 클릭해보세요
            </h2>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg font-light leading-relaxed">
              주변에 떠다니는 플로우 AI의 핵심 기능들을 모두 찾아 클릭해보세요. 숨겨진 시크릿 경품이 공개됩니다!
            </p>

            {/* Progress / Success Indicator */}
            <div className="h-20 flex items-center justify-center pointer-events-auto">
              <AnimatePresence mode="wait">
                {isUnlocked ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <button
                      onClick={() => setShowQR(true)}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl shadow-[0_0_40px_rgba(139,92,246,0.6)] border border-white/20 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Gift size={24} />
                      시크릿 경품 응모권 획득!
                    </button>
                    <p className="text-sm text-purple-300 font-medium">
                      * 버튼을 클릭하여 QR 코드를 확인하세요.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="progress"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex gap-2">
                      {features.map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${i < foundFeatures.length ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'bg-white/10'}`}
                        />
                      ))}
                    </div>
                    <span className="text-blue-400 font-mono font-bold">
                      {foundFeatures.length} / {features.length}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Floating Features (Desktop Absolute, Mobile Flex) */}
        <div className="md:absolute md:inset-0 flex flex-wrap justify-center gap-4 md:block pointer-events-auto mt-8 md:mt-0">
          {features.map((feature, index) => {
            const isFound = foundFeatures.includes(feature.id);
            const Icon = feature.icon;

            return (
              <motion.button
                key={feature.id}
                onClick={() => handleFeatureClick(feature.id)}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className={`
                  md:absolute ${feature.pos}
                  flex items-center gap-3 px-6 py-4 rounded-2xl backdrop-blur-xl border transition-all duration-500 cursor-pointer
                  ${isFound
                    ? 'bg-purple-500/20 border-purple-400/50 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-105'
                    : 'bg-[#121212]/80 border-blue-500/30 text-gray-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 hover:text-white'
                  }
                `}
              >
                <div className={`p-2 rounded-full ${isFound ? 'bg-purple-500/30 text-purple-300' : 'bg-blue-500/20 text-blue-400'}`}>
                  {isFound ? <Check size={20} /> : <Icon size={20} />}
                </div>
                <span className="font-semibold tracking-wide whitespace-nowrap">{feature.label}</span>
              </motion.button>
            );
          })}
        </div>

      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-md bg-[#121212] rounded-3xl p-8 md:p-10 border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)] flex flex-col items-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                onClick={() => setShowQR(false)}
              >
                <X size={24} />
              </button>

              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mb-6">
                <Gift size={32} />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">시크릿 경품 당첨!</h3>
              <p className="text-gray-300 mb-8 font-medium break-keep">
                현장에서 부스를 찾아 QR을 보여주세요!
              </p>

              <div className="bg-white p-4 rounded-2xl mb-6">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=FLOW_AI_SECRET_PRIZE_2026"
                  alt="Secret Prize QR Code"
                  className="w-48 h-48"
                />
              </div>

              <p className="text-sm text-gray-500 font-mono">
                TICKET NO. FLOW-AI-09283
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
