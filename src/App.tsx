import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
