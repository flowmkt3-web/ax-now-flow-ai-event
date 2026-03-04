import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-3xl font-black tracking-tighter">
          AX <span className="text-purple-500">NOW</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">고객센터</a>
        </div>
        
        <div className="text-sm font-medium text-gray-600">
          © 2026 Flow AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
