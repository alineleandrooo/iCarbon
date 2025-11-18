
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import Dashboard from './views/Dashboard';
import OpenFinance from './views/OpenFinance';
import Investments from './views/Investments';
import Profile from './views/Profile';
import { View } from './types';
import { NAV_ITEMS } from './constants';
import Header from './components/Header';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeView, setActiveView] = useState<View>('Dashboard');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'OpenFinance':
        return <OpenFinance />;
      case 'Investments':
        return <Investments />;
      case 'Profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  const activeNavItem = NAV_ITEMS.find(item => item.view === activeView);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <div className="flex flex-col h-full">
        <Header title={activeNavItem?.label || 'iCarbon'} />
        <main className="flex-grow pb-24 px-4 sm:px-6 lg:px-8">
          {renderView()}
        </main>
        <Footer activeView={activeView} setActiveView={setActiveView} />
      </div>
    </div>
  );
};

export default App;
