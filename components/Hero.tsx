
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-bold mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          AI-POWERED SEO ENGINE
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Sagor Tag Finder WEB: <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-500">
            Boost Your YouTube Views
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Generate 100 high-ranking, real-time YouTube search tags for any topic. 
          Optimize your videos and reach a wider audience with the power of advanced AI.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <a 
            href="#finder"
            className="w-full sm:w-auto h-16 px-10 bg-sky-600 hover:bg-sky-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-sky-200 transition-all flex items-center justify-center hover:-translate-y-1"
          >
            Get Started Now
          </a>
          <a 
            href="#how-it-works"
            className="w-full sm:w-auto h-16 px-10 bg-white border-2 border-slate-100 hover:border-slate-200 text-slate-700 text-lg font-bold rounded-2xl transition-all flex items-center justify-center"
          >
            How it works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
