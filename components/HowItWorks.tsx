
import React from 'react';

const steps = [
  {
    title: "Enter Topic",
    description: "Simply type your video's main topic or title into the search bar. Be as specific or broad as you like.",
    icon: (
      <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Generate Tags",
    description: "Click 'Generate Tags' and our professional AI SEO engine will analyze trending search data to find 100 perfect matches.",
    icon: (
      <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Copy & Grow",
    description: "Copy the best tags individually or all at once, paste them into your video settings, and watch your reach expand!",
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 013 0m-6 3V11m0 5.5v-1a1.5 1.5 0 013 0v1" />
      </svg>
    ),
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Simple steps to optimize your content for maximum discoverability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group p-8 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-all">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
              {idx < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 translate-y-[-50%] z-10">
                  <svg className="w-12 h-12 text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
