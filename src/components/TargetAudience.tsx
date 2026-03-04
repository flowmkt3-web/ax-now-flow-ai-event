import React from 'react';
import { ArrowRight } from 'lucide-react';
const painPoints = [{ asis: "데이터 파편화로 보안 통제가 어렵다.", tobe: "강력한 엔터프라이즈 보안을 제공하자." }, { asis: "AI 실무 적용이 막막하다.", tobe: "맞춤형 AI 비서를 제공하자." }];
export default function TargetAudience() {
  return (
    <section id="target-audience" className="py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-20">평소에 이런 문제들 있지 않으신가요?</h2>
        <div className="space-y-6">
          {painPoints.map((p, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 text-gray-400 text-xl">{p.asis}</div>
              <ArrowRight className="text-gray-600 rotate-90 md:rotate-0" />
              <div className="flex-1 bg-gradient-to-br from-[#121212] to-purple-900/20 p-8 rounded-3xl border border-purple-500/30 text-white text-xl">{p.tobe}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
