import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Gift, Sparkles, Layout, Bot, Mic, X, Search, FileText, Zap } from 'lucide-react';
const features = [{ id: 'project', label: '프로젝트 자동 AI', icon: Layout }, { id: 'search', label: '스마트검색', icon: Search }, { id: 'summary', label: 'AI 회의 요약', icon: FileText }, { id: 'bot', label: '플로우 AI 비서 봇', icon: Bot }, { id: 'auto', label: '업무 자동화', icon: Mic }, { id: 'translate', label: '업무 수행 에이전트', icon: Zap }];
export default function Prize() {
  const [foundFeatures, setFoundFeatures] = useState<string[]>([]);
  const isUnlocked = foundFeatures.length === features.length;
  return (
    <section id="prize" className="py-24 md:py-32 relative bg-[#050505] overflow-hidden min-h-[600px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-12">플로우 AI 기능을 클릭해보세요</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {features.map((f) => (
            <button key={f.id} onClick={() => !foundFeatures.includes(f.id) && setFoundFeatures([...foundFeatures, f.id])} className={`px-6 py-4 rounded-2xl border transition-all cursor-pointer ${foundFeatures.includes(f.id) ? 'bg-purple-500/20 border-purple-400/50 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-blue-500'}`}>{f.label}</button>
          ))}
        </div>
        {isUnlocked && <motion.button initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-xl shadow-[0_0_40px_rgba(139,92,246,0.6)]">시크릿 경품 응모권 획득!</motion.button>}
      </div>
    </section>
  );
}
