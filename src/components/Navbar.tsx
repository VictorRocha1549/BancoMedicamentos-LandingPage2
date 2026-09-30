import { useState, useEffect } from 'react';
import { Menu, X, Cross } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#mision', label: 'Misión y Visión' },
  { href: '#catalogo', label: 'Medicamentos' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#campanas', label: 'Campañas' },
  { href: '#permiso', label: 'Permiso Sanitario' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-3">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${scrolled ? 'bg-navy-900' : 'bg-white/10 backdrop-blur-sm border border-gold-400/50'}`}>
              <Cross className="w-6 h-6 text-gold-400" />
            </div>
            <div className="hidden sm:block">
              <p className={`font-playfair text-lg font-bold leading-tight ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                Santa María de Guadalupe
              </p>
              <p className={`text-xs tracking-wider uppercase ${scrolled ? 'text-gold-600' : 'text-gold-300'}`}>
                Banco de Medicamentos
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? 'text-navy-700 hover:text-gold-600 hover:bg-navy-50'
                    : 'text-white/90 hover:text-gold-300 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-navy-900' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gold-200 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-navy-700 hover:text-gold-600 hover:bg-navy-50 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
