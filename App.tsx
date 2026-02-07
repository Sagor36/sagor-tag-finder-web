
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TagFinder from './components/TagFinder';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="relative">
          {/* Section Divider with "Waves" feel */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-white -z-10"></div>
          
          <TagFinder />
          
          <div id="about" className="max-w-7xl mx-auto px-4 py-24 border-t border-slate-100">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
      <img 
  src="https://i.ibb.co.com/zHG8bhvQ/image.png" 
  alt="YouTube Growth" 
  className="w-full h-auto rounded-3xl shadow-2xl relative z-10 border-8 border-white" 
/>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">About Sagor Tag Finder</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  The name "Sagor" means Ocean in Bengali, representing the vast possibilities and deep reach your content can have. Just as waves reach every shore, your videos should reach every potential viewer.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  In the competitive landscape of YouTube, SEO is your most powerful tool. Our finder doesn't just guess keywords; it uses Gemini's advanced semantic understanding to identify search patterns, intent, and long-tail phrases that human researchers might miss.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100">
                    <div className="text-sky-600 font-bold text-2xl mb-1">100%</div>
                    <div className="text-slate-500 text-sm">AI Generated</div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
                    <div className="text-teal-600 font-bold text-2xl mb-1">Real-time</div>
                    <div className="text-slate-500 text-sm">SEO Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HowItWorks />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
