import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={navigateTo} />;
      case 'services':
        return <Services />;
      case 'process':
        return <Process />;
      case 'work':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-500/30 selection:text-brand-200 flex flex-col font-sans">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;