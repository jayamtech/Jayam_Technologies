import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from './logo.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact & About' }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <img src={logo} alt="JT logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">JAYAM TECHNOLOGIES</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Your Trusted Tech Partner</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } pb-1`}
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+919442823927" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Phone size={18} />
              <span className="hidden lg:inline">Call Now</span>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left py-3 px-4 font-semibold ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-3 space-y-2">
              <a href="tel:+919442823927" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg justify-center font-semibold">
                <Phone size={18} />
                Call Now
              </a>
              <a href="mailto:jayamtech.kulasekharam@gmail.com" className="flex items-center gap-2 bg-gray-600 text-white px-4 py-3 rounded-lg justify-center font-semibold">
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
