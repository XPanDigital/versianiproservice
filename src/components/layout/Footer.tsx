import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute w-1.5 h-8 bg-brand-tan rotate-[25deg] -translate-x-1.5 translate-y-0.5 rounded-sm" />
                <div className="absolute w-1.5 h-8 bg-brand-orange -rotate-[25deg] translate-x-1.5 translate-y-0.5 rounded-sm" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none text-white tracking-widest uppercase">Versiani</span>
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-orange font-bold mt-1">Pro Service</span>
              </div>
            </Link>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Engineered excellence in home remodeling. We transform spaces with precision and premium craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/versianipro.service" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-orange hover:border-brand-orange transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-widest">Navigation</h3>
            <nav className="flex flex-col gap-4">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="font-sans text-sm text-text-secondary hover:text-brand-orange transition-colors uppercase tracking-wider"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-widest">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="font-sans text-sm text-text-secondary">
                <strong className="text-white block mb-1">Phone</strong>
                (561) 555-0123
              </div>
              <div className="font-sans text-sm text-text-secondary">
                <strong className="text-white block mb-1">Email</strong>
                info@versianipro.com
              </div>
              <div className="font-sans text-sm text-text-secondary">
                <strong className="text-white block mb-1">Location</strong>
                Boynton Beach, FL
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-widest">Newsletter</h3>
            <p className="font-sans text-sm text-text-secondary">
              Subscribe for remodeling tips and updates.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-brand-surface border border-white/10 px-4 py-3 font-sans text-xs uppercase tracking-widest text-white focus:outline-none focus:border-brand-orange transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-brand-orange text-white px-4 py-3 font-display text-sm font-bold uppercase tracking-widest hover:bg-brand-tan hover:text-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-text-secondary uppercase tracking-widest">
            © {new Date().getFullYear()} Versiani Pro Service. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-sans text-xs text-text-secondary hover:text-brand-orange transition-colors uppercase tracking-widest">
              Privacy
            </Link>
            <Link to="/terms" className="font-sans text-xs text-text-secondary hover:text-brand-orange transition-colors uppercase tracking-widest">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
