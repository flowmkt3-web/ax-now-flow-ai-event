import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
export default function Timetable() {
  const [openId, setOpenId] = useState<number | null>(null);
  const schedule = [{ time: "09:30 - 09:40", title: "행사 오프닝", speaker: "MC" }, { time: "09:40 - 10:10", title: "Keynote: AX 시대의 서막", speaker: "김대식 교수" }];
  return (
    <section id="timetable" className="py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20">Timetable</h2>
        <div className="space-y-4">
          {schedule.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-3xl bg-[#121212] overflow-hidden">
              <button onClick={() => setOpenId(openId === i ? null : i)} className="w-full px-8 py-8 flex items-center justify-between text-left cursor-pointer">
                <div className="flex gap-10"><span className="text-blue-400 font-mono font-medium">{item.time}</span><span className="text-xl font-bold">{item.title}</span></div>
                <div className="flex items-center gap-6"><span className="text-sm bg-white/5 px-4 py-2 rounded-full">{item.speaker}</span><ChevronDown className={openId === i ? 'rotate-180' : ''} /></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
