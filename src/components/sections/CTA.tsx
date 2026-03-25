import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 bg-brand-orange relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-5xl md:text-7xl text-brand-dark mb-8 uppercase leading-tight"
        >
          Ready to Start <br/> Building?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 bg-brand-dark text-white px-10 py-5 font-display font-bold text-xl uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-colors group"
          >
            Get Your Free Quote
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
