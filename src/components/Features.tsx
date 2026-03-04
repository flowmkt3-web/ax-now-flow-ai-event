import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ArrowRight } from 'lucide-react';

export default function Features() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="features" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Flow AI를 60초 안에 경험해보세요
          </h2>
          <p className="text-gray-400 text-lg font-light">
            복잡한 설정 없이, AI가 알아서 프로젝트를 세팅하고 업무를 정리합니다.
          </p>
        </motion.div>

        {/* Video Preview Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto cursor-pointer group"
          onClick={() => setIsVideoModalOpen(true)}
        >
          {/* UI Mockup Frame */}
          <div className="rounded-2xl border border-white/10 bg-[#121212] overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(139,92,246,0.3)] group-hover:border-purple-500/30">
            {/* Mockup Header */}
            <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            {/* Video Placeholder / Preview */}
            <div className="relative aspect-video bg-[#0a0a0a] overflow-hidden">
              {/* Using a placeholder image since we don't have a real video */}
              <img
                src="/images/features/thumbnail.jpg"
                alt="Flow AI Preview"
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-purple-600/90 flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-transform duration-300 group-hover:scale-110">
                  <Play size={32} className="ml-2" />
                </div>
              </div>

              {/* Simulated Video Content Text */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <p className="text-sm font-medium text-purple-300">AI 프로젝트 자동 생성 중...</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sub Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <p className="text-gray-300 font-medium">별도 학습 없이 바로 사용하는 AI 협업</p>
          <a
            href="#features-detail"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors group"
          >
            전체 기능 보기
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/videos/flow_demo.mp4"
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                브라우저가 비디오 태그를 지원하지 않거나 파일(`/videos/flow_demo.mp4`)을 찾을 수 없습니다.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
