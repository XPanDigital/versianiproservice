import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Boynton Beach',
    text: 'Versiani Pro Service completely transformed our kitchen. The team was professional, on-time, and the quality is outstanding!',
  },
  {
    name: 'Michael Chen',
    location: 'Delray Beach',
    text: 'Best decision we made. They handled our bathroom remodel perfectly. Highly recommend their services to anyone looking for premium quality.',
  },
  {
    name: 'Emily Rodriguez',
    location: 'Boca Raton',
    text: 'Professional, reliable, and they delivered exactly what they promised. 5 stars! The attention to detail was incredible.',
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-display font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Client Success
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-6xl text-white uppercase leading-tight"
          >
            What They <br/> <span className="text-text-secondary">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-surface border border-white/5 p-8 relative group hover:border-brand-orange/50 transition-colors duration-300"
            >
              <Quote size={40} className="text-brand-orange/20 mb-6 group-hover:text-brand-orange/40 transition-colors" />
              
              <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 min-h-[100px]">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-white/5">
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">{testimonial.name}</h3>
                <p className="font-sans text-xs text-brand-orange uppercase tracking-widest mt-1">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
