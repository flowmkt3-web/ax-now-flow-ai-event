import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const morningSchedule = [
  {
    time: "09:30 - 09:40",
    title: "행사 소개 및 오프닝",
    description: "행사 소개 및 오프닝",
    speaker: "MC"
  },
  {
    time: "09:40 - 10:10",
    title: "김대식 교수님 발표",
    description: "김대식 교수님 발표",
    speaker: "김대식 교수"
  },
  {
    time: "10:10 - 10:40",
    title: "플로우 AI 로드맵 발표",
    description: "플로우 AI 로드맵 발표",
    speaker: "이학준 대표"
  },
  {
    time: "10:40 - 11:00",
    title: "플로우 마케팅실 - 99개국 AX 콘텐츠 공장",
    description: "플로우 마케팅실 - 99개국 AX 콘텐츠 공장",
    speaker: "플로우 AX 마케팅실"
  },
  {
    time: "11:00 - 11:20",
    title: "대기업 AX 성공 전략",
    description: "대기업 AX 성공 전략",
    speaker: "고객사 A (대기업)"
  },
  {
    time: "11:20 - 11:40",
    title: "공공 AX 성공 전략",
    description: "공공 AX 성공 전략",
    speaker: "고객사 B (공공/ 금융)"
  },
  {
    time: "11:40 - 12:00",
    title: "플로우 AX 성공 리포트",
    description: "플로우 AX 성공 리포트",
    speaker: "플로우 AI 개발실"
  },
  {
    time: "12:00 - 12:30",
    title: "송길영 작가님 발표",
    description: "송길영 작가님 발표",
    speaker: "송길영 작가"
  }
];

const afternoonSchedule = [
  {
    time: "14:00 - 14:05",
    title: "행사 소개 및 오프닝",
    description: "행사 소개 및 오프닝",
    speaker: "MC"
  },
  {
    time: "14:05 - 14:35",
    title: "송길영 작가님 발표",
    description: "송길영 작가님 발표",
    speaker: "송길영 작가"
  },
  {
    time: "14:35 - 14:55",
    title: "플로우 AI 로드맵 발표",
    description: "플로우 AI 로드맵 발표",
    speaker: "이학준 대표"
  },
  {
    time: "14:55 - 15:15",
    title: "플로우 마케팅실 - 99개국 AX 콘텐츠 공장",
    description: "플로우 마케팅실 - 99개국 AX 콘텐츠 공장",
    speaker: "플로우 AX 마케팅실"
  },
  {
    time: "15:15 - 15:45",
    title: "AX 전문가 패널 토크 (기업 CEO - 2인)",
    description: "AX 전문가 패널 토크 (기업 CEO - 2인)",
    speaker: "더밀크 손재권 대표, 이학준 대표"
  },
  {
    time: "15:45 - 16:00",
    title: "쉬는 시간",
    description: "쉬는 시간",
    speaker: ""
  },
  {
    time: "16:00 - 16:30",
    title: "(섭외중)",
    description: "(섭외중)",
    speaker: "AX 연사"
  },
  {
    time: "16:30 - 17:00",
    title: "스타트업 AX 성공 전략",
    description: "스타트업 AX 성공 전략",
    speaker: "플로우 고객사 (인플루언서)"
  },
  {
    time: "17:00 - 17:30",
    title: "플로우 고객사 AX 성공 전략 (패널 토크, 3명)",
    description: "플로우 고객사 AX 성공 전략 (패널 토크, 3명)",
    speaker: "고객사 AX 전문가 3분 (패널토크)"
  },
  {
    time: "17:30 - 18:00",
    title: "(섭외중)",
    description: "(섭외중)",
    speaker: "AX 연사"
  }
];

export default function Timetable() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="timetable" className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/aistudio-user-content-prod/2026-02-26/1740640987114_image.png" 
          alt="Timetable Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Timetable</h2>
          <p className="text-gray-400 text-lg font-light">행사 일정을 확인하고 원하는 세션을 놓치지 마세요.</p>
        </div>

        <div className="flex flex-col gap-20">
          {/* 1부 오전 */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-10">
              <h3 className="text-3xl font-black text-blue-400 tracking-tight">1부: 플로우 AI 로드맵 & 고객사 성공 사례</h3>
              <p className="text-lg text-gray-400 font-medium">(타겟 : 대기업, 금융, 공공, 언론사 50개 - 총 400명)</p>
              <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1 hidden md:block mb-2"></div>
            </div>
            <div className="space-y-4">
              {morningSchedule.map((item, index) => {
                const id = `morning-${index}`;
                return (
                  <div 
                    key={id}
                    className="border border-white/10 rounded-3xl bg-[#121212]/80 backdrop-blur-md overflow-hidden transition-colors hover:border-blue-500/50"
                  >
                    <button
                      className="w-full px-8 py-8 flex flex-col md:flex-row md:items-center justify-between text-left gap-6 cursor-pointer"
                      onClick={() => setOpenId(openId === id ? null : id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                        <span className="text-blue-400 font-mono text-lg shrink-0 font-medium tracking-wider">{item.time}</span>
                        <span className="text-xl md:text-2xl font-bold">{item.title}</span>
                      </div>
                      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 mt-4 md:mt-0 shrink-0">
                        {item.speaker && (
                          <span className="text-sm font-medium text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5 whitespace-nowrap">{item.speaker}</span>
                        )}
                        <ChevronDown 
                          className={`transition-transform duration-300 shrink-0 ${openId === id ? 'rotate-180 text-blue-500' : 'text-gray-500'}`} 
                          size={24}
                        />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openId === id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-8 pt-2 text-gray-400 border-t border-white/5 mt-2">
                            <p className="pt-6 text-lg leading-relaxed font-light">{item.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2부 오후 */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-10">
              <h3 className="text-3xl font-black text-purple-400 tracking-tight">2부: AX Festa : AX 리더십 메가 컨퍼런스</h3>
              <p className="text-lg text-gray-400 font-medium">(타겟 : 중견, 중소, 스타트업, AX 인플루언서 100명 - 총 400명)</p>
              <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 hidden md:block mb-2"></div>
            </div>
            <div className="space-y-4">
              {afternoonSchedule.map((item, index) => {
                const id = `afternoon-${index}`;
                return (
                  <div 
                    key={id}
                    className="border border-white/10 rounded-3xl bg-[#121212]/80 backdrop-blur-md overflow-hidden transition-colors hover:border-purple-500/50"
                  >
                    <button
                      className="w-full px-8 py-8 flex flex-col md:flex-row md:items-center justify-between text-left gap-6 cursor-pointer"
                      onClick={() => setOpenId(openId === id ? null : id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                        <span className="text-purple-400 font-mono text-lg shrink-0 font-medium tracking-wider">{item.time}</span>
                        <span className="text-xl md:text-2xl font-bold">{item.title}</span>
                      </div>
                      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 mt-4 md:mt-0 shrink-0">
                        {item.speaker && (
                          <span className="text-sm font-medium text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/5 whitespace-nowrap">{item.speaker}</span>
                        )}
                        <ChevronDown 
                          className={`transition-transform duration-300 shrink-0 ${openId === id ? 'rotate-180 text-purple-500' : 'text-gray-500'}`} 
                          size={24}
                        />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openId === id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-8 pt-2 text-gray-400 border-t border-white/5 mt-2">
                            <p className="pt-6 text-lg leading-relaxed font-light">{item.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
