import { motion } from 'motion/react';

const steps = [
  {
    id: '01',
    title: 'Consultation',
    description: 'We understand your vision, requirements, and budget.',
  },
  {
    id: '02',
    title: 'Design & Plan',
    description: 'Detailed blueprints and 3D renderings for approval.',
  },
  {
    id: '03',
    title: 'Execution',
    description: 'Precision construction with premium materials.',
  },
  {
    id: '04',
    title: 'Handover',
    description: 'Final walkthrough ensuring 100% satisfaction.',
  }
];

export function Process() {
  return (
    <section className="py-24 bg-brand-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-display font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-6xl text-white uppercase leading-tight"
          >
            Our Proven <br/> <span className="text-text-secondary">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col p-8 border border-white/5 bg-brand-dark group hover:border-brand-orange/50 transition-colors duration-300"
            >
              <div className="text-brand-orange font-display font-bold text-5xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {step.id}
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
              
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/10 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
