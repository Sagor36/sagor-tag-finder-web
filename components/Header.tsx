
import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-3 shadow-sm border-b border-slate-200/50' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" onClick={scrollToTop} className="hover:opacity-90 transition-opacity">
            <Logo />
          </a>
          <span className="hidden lg:block text-[10px] font-bold text-slate-400 border-l border-slate-200 pl-4 uppercase tracking-widest">
            Developed by Sagor
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" onClick={scrollToTop} className="text-slate-600 hover:text-sky-600 font-medium transition-colors">Home</a>
          <a href="#how-it-works" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">How it works</a>
          <a href="#about" className="text-slate-600 hover:text-sky-600 font-medium transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#finder"
            className="hidden sm:flex px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-slate-200 active:scale-95"
          >
            Find Tags
          </a>
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
