
import React from 'react';
import { View } from '../types';
import { NAV_ITEMS } from '../constants';

interface FooterProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ activeView, setActiveView }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
      <nav className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.view)}
            className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ease-in-out ${
              activeView === item.view ? 'text-green-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
