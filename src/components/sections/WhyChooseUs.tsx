import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const highlights = [
  "15+ Years of Industry Experience",
  "Licensed & Fully Insured Contractors",
  "Premium Materials & Craftsmanship",
  "On-Time & On-Budget Projects",
  "Dedicated Customer Support"
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-brand-orange translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
              alt="Premium Home Remodeling Team" 
              className="relative z-10 object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-brand-orange font-display font-bold tracking-widest uppercase text-sm mb-4 block">
              The Versiani Standard
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-white mb-6 uppercase">
              Uncompromising <br/> <span className="text-text-secondary">Quality & Trust</span>
            </h2>
            <p className="font-sans text-lg text-text-secondary mb-10 leading-relaxed">
              We don't just build spaces; we engineer environments that elevate your lifestyle. Our rigorous standards and transparent approach make us Florida's most trusted remodeling partner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-brand-orange" size={14} strokeWidth={3} />
                  </div>
                  <span className="font-sans text-sm text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 p-6 bg-brand-dark border border-white/10">
              <div className="text-brand-orange font-display font-bold text-4xl">100%</div>
              <div className="font-sans text-sm text-text-secondary uppercase tracking-wider">
                Satisfaction<br/>Guarantee
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
