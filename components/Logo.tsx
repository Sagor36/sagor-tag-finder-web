
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-10 w-10 bg-gradient-to-br from-sky-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-6 h-6 text-white" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-sm">
          <svg 
            viewBox="0 0 24 24" 
            className="w-3 h-3 text-teal-500" 
            fill="currentColor"
          >
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-bold tracking-tight text-slate-800">Sagor<span className="text-sky-600">Tag</span></span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Finder WEB</span>
      </div>
    </div>
  );
};

export default Logo;
