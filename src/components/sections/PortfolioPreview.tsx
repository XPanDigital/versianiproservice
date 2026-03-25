import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Modern Kitchen Renovation',
    category: 'Kitchen',
    before: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Complete overhaul with custom cabinetry and quartz countertops.'
  },
  {
    title: 'Luxury Master Bath',
    category: 'Bathroom',
    before: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Spa-like retreat featuring a freestanding tub and walk-in shower.'
  },
  {
    title: 'Open Concept Living',
    category: 'Full Home',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Removed walls to create a seamless flow between living and dining.'
  }
];

export function PortfolioPreview() {
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
              Our Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl text-white uppercase leading-tight"
            >
              Featured <br/> <span className="text-text-secondary">Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 text-white font-display font-bold uppercase tracking-widest hover:text-brand-orange transition-colors group"
            >
              View Full Portfolio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-brand-surface border border-white/5 overflow-hidden hover:border-brand-orange/50 transition-colors duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/5">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={project.before} alt={`${project.title} Before`} />}
                  itemTwo={<ReactCompareSliderImage src={project.after} alt={`${project.title} After`} />}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
                    {project.title}
                  </h3>
                </div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 block">
                  {project.category}
                </span>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
