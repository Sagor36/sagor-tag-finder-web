
import React, { useState, useRef } from 'react';
import { generateYouTubeTags } from '../services/geminiService';
import { TagResult, AppState } from '../types';

const TagFinder: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [state, setState] = useState<AppState>({
    loading: false,
    error: null,
    result: null,
  });
  const [copySuccess, setCopySuccess] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setState({ ...state, loading: true, error: null });
    try {
      const result = await generateYouTubeTags(topic);
      setState({ loading: false, error: null, result });
      
      // Smooth scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      setState({ loading: false, error: err.message || "An error occurred", result: null });
    }
  };

  const handleClear = () => {
    setTopic('');
    setState({ loading: false, error: null, result: null });
  };

  const handleCopyAll = () => {
    if (!state.result) return;
    const allTags = state.result.tags.join(', ');
    navigator.clipboard.writeText(allTags);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleCopySingle = (tag: string) => {
    navigator.clipboard.writeText(tag);
  };

  return (
    <div id="finder" className="max-w-5xl mx-auto px-4 py-12 scroll-mt-24">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Find Your Winning Tags</h2>
        
        <form onSubmit={handleGenerate} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Best Photography Tips for Beginners 2025"
                className="w-full h-14 px-6 rounded-2xl border-2 border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-50 outline-none transition-all text-lg text-slate-700 bg-slate-50/50"
                disabled={state.loading}
              />
            </div>
            <button
              type="submit"
              disabled={state.loading || !topic.trim()}
              className="h-14 px-10 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 text-white font-bold rounded-2xl shadow-lg shadow-sky-100 transition-all flex items-center justify-center gap-3 shrink-0 min-w-[200px]"
            >
              {state.loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm">Please wait, Sagor Tag Finder Web Working...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Generate Tags</span>
                </>
              )}
            </button>
          </div>
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Developed by Sagor</span>
          </div>
        </form>

        {state.error && (
          <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 border border-red-100">
            <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-medium">{state.error}</p>
          </div>
        )}
      </div>

      {state.result && (
        <div ref={resultsRef} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">Results for "{state.result.topic}"</h3>
              <p className="text-slate-500">{state.result.tags.length} high-ranking tags generated.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleClear}
                className="px-6 h-12 text-slate-500 font-medium hover:text-slate-800 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={handleCopyAll}
                className={`px-8 h-12 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 ${
                  copySuccess ? 'bg-green-500 text-white' : 'bg-slate-800 text-white hover:bg-slate-900'
                }`}
              >
                {copySuccess ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy All Tags</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {state.result.tags.map((tag, idx) => (
              <button
                key={`tag-${idx}`}
                onClick={() => handleCopySingle(tag)}
                title="Click to copy"
                className="px-4 py-3 bg-white text-slate-600 hover:text-sky-600 border border-slate-200 rounded-xl text-sm font-medium transition-all hover:border-sky-200 hover:shadow-sm active:bg-sky-50 active:scale-95 text-left overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TagFinder;
