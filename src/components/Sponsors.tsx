import React from 'react';
import { motion } from 'motion/react';

const clients = [
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg' },
  { name: 'SK', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/SK_Group_logo.svg' },
  { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg' },
  { name: 'Kakao', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg' },
  { name: 'Naver', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Naver_Logotype.svg' },
  { name: 'POSCO', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/POSCO_logo.svg' },
  { name: 'Hanwha', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Hanwha_logo.svg' }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium text-white/80 max-w-3xl mx-auto break-keep"
          >
            이미 대한민국을 대표하는 <strong className="text-white font-bold">50만 기업</strong>들이 플로우와 함께 혁신하고 있습니다.
          </motion.p>
        </div>

        {/* First Row: Moving Left */}
        <div className="relative flex overflow-hidden mask-edges mb-12">
          <div className="flex animate-marquee-left whitespace-nowrap">
            {[...clients, ...clients].map((client, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center justify-center min-w-[200px] md:min-w-[280px] h-32 mx-4 px-8 rounded-3xl bg-white/5 border border-white/10 grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-500 group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-8 md:h-12 w-auto opacity-40 group-hover:opacity-100 transition-opacity invert" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Moving Right */}
        <div className="relative flex overflow-hidden mask-edges">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {[...clients, ...clients].reverse().map((client, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center justify-center min-w-[200px] md:min-w-[280px] h-32 mx-4 px-8 rounded-3xl bg-white/5 border border-white/10 grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-500 group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-8 md:h-12 w-auto opacity-40 group-hover:opacity-100 transition-opacity invert" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {[
            { label: '누적 도입 기업', value: '500,000+' },
            { label: '비즈니스 섹터', value: '20+' },
            { label: '글로벌 서비스 국가', value: '99+' },
            { label: '고객 만족도', value: '98%' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-gray-500 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
