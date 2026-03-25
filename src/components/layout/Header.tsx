import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5',
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-brand-dark/80 backdrop-blur-sm py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-1.5 h-8 bg-brand-tan rotate-[25deg] -translate-x-1.5 translate-y-0.5 rounded-sm group-hover:bg-brand-orange transition-colors" />
              <div className="absolute w-1.5 h-8 bg-brand-orange -rotate-[25deg] translate-x-1.5 translate-y-0.5 rounded-sm group-hover:bg-brand-tan transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl leading-none text-white tracking-widest uppercase">Versiani</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-orange font-bold mt-1">Pro Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-sans text-sm font-medium transition-colors duration-300 hover:text-brand-orange uppercase tracking-wider',
                  location.pathname === link.path ? 'text-brand-orange' : 'text-text-secondary'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-orange text-white px-6 py-2.5 rounded-none font-display text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-brand-dark"
            >
              Get Estimate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-brand-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-brand-surface z-50 shadow-2xl md:hidden border-l border-white/10"
            >
              <div className="p-6 flex justify-end border-b border-white/10">
                <button
                  className="p-2 text-text-secondary hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'font-display text-2xl font-bold uppercase tracking-wider transition-colors',
                      location.pathname === link.path ? 'text-brand-orange' : 'text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-8 bg-brand-orange text-white text-center px-6 py-4 rounded-none font-display text-lg font-bold uppercase tracking-widest"
                >
                  Get Estimate
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
