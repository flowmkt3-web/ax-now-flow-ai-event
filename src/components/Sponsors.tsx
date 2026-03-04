import React from 'react';
const clients = [{ category: "IT / Tech", companies: ["webcash", "bizplay", "zeropay", "coocon", "posco dx"] }, { category: "제조", companies: ["Hyundai Motors", "Hansol", "S-OIL"] }, { category: "금융", companies: ["IBK자산운용", "하나벤쳐스", "미래에셋증권"] }];
export default function Sponsors() {
  return (
    <section id="clients" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-20">Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {clients.map((g, i) => (
            <div key={i} className="bg-[#121212] p-8 rounded-3xl border border-white/5">
              <h3 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">{g.category}</h3>
              <div className="flex flex-wrap gap-2">{g.companies.map((c, ci) => <span key={ci} className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-400">{c}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
