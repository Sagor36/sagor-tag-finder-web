
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Logo className="mb-6 invert grayscale contrast-200" />
            <p className="text-slate-400 max-w-md leading-relaxed">
              Sagor Tag Finder WEB is dedicated to helping creators unlock their full potential on YouTube. 
              Our AI-driven technology provides the most relevant, high-traffic tags to ensure your 
              content reaches the right audience.
            </p>
            <div className="mt-8">
              <span className="text-sky-400 font-bold text-sm uppercase tracking-widest">
                Developed by Sagor
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#finder" className="text-slate-400 hover:text-white transition-colors">Generate Tags</a></li>
              <li><a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {currentYear} Sagor Tag Finder WEB. All rights reserved.</p>
          <p className="mt-2 text-slate-400 font-medium">Developed by Sagor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
