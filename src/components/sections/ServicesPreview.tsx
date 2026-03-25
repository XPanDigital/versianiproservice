import { motion } from 'motion/react';
import { ChefHat, Bath, Home, Maximize, PaintBucket, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'Kitchen Remodeling',
    description: 'High-end culinary spaces designed for modern living and entertaining.',
    icon: ChefHat,
  },
  {
    id: '02',
    title: 'Bathroom Remodeling',
    description: 'Luxury spa-like retreats with premium fixtures and flawless finishes.',
    icon: Bath,
  },
  {
    id: '03',
    title: 'Basement Finishing',
    description: 'Transform unused square footage into premium entertainment areas.',
    icon: Home,
  },
  {
    id: '04',
    title: 'Room Additions',
    description: 'Seamless architectural expansions that grow with your lifestyle.',
    icon: Maximize,
  },
  {
    id: '05',
    title: 'Exterior Renovations',
    description: 'Striking curb appeal upgrades with durable, premium materials.',
    icon: PaintBucket,
  },
  {
    id: '06',
    title: 'Custom Renovations',
    description: 'Bespoke structural changes tailored to your unique vision.',
    icon: Wrench,
  }
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange font-display font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl text-white uppercase leading-tight"
            >
              Precision <br/> <span className="text-text-secondary">Craftsmanship</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-white font-display font-bold uppercase tracking-widest hover:text-brand-orange transition-colors group"
            >
              View All Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-surface border border-white/5 p-8 hover:border-brand-orange/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 font-display font-bold text-6xl text-white group-hover:text-brand-orange transition-colors pointer-events-none">
                {service.id}
              </div>
              <div className="mb-8">
                <service.icon 
                  size={40} 
                  strokeWidth={1.5}
                  className="text-brand-tan group-hover:text-brand-orange transition-colors" 
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
