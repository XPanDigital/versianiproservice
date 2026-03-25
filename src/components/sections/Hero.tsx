import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
          alt="Background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-orange font-display font-bold tracking-widest uppercase text-sm mb-4 block">
                Premium Florida Remodeling
              </span>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-text-primary mb-6 uppercase">
                Build Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-tan">Dream Space</span>
              </h1>
              <p className="font-sans text-lg md:text-xl text-text-secondary max-w-xl mb-10">
                We deliver high-end, innovative home remodeling solutions. Experience craftsmanship that stands out from the rest.
              </p>
              
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="font-display text-4xl font-bold text-text-primary">15+</span>
                  <span className="font-sans text-xs text-text-secondary uppercase tracking-wider mt-1">Years Exp.</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-display text-4xl font-bold text-text-primary">500+</span>
                  <span className="font-sans text-xs text-text-secondary uppercase tracking-wider mt-1">Projects</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-surface border border-white/10 p-8 rounded-none relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-tan" />
              <h3 className="font-display text-2xl font-bold text-text-primary mb-2 uppercase tracking-wide">Get a Free Estimate</h3>
              <p className="font-sans text-sm text-text-secondary mb-8">Fill out the form below and our experts will contact you shortly.</p>
              
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" required className="bg-brand-dark border border-white/10 rounded-none px-4 py-3 text-sm text-text-primary focus:border-brand-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Last Name" required className="bg-brand-dark border border-white/10 rounded-none px-4 py-3 text-sm text-text-primary focus:border-brand-orange focus:outline-none transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" required className="bg-brand-dark border border-white/10 rounded-none px-4 py-3 text-sm text-text-primary focus:border-brand-orange focus:outline-none transition-colors" />
                <input type="tel" placeholder="Phone Number" required className="bg-brand-dark border border-white/10 rounded-none px-4 py-3 text-sm text-text-primary focus:border-brand-orange focus:outline-none transition-colors" />
                <select required className="bg-brand-dark border border-white/10 rounded-none px-4 py-3 text-sm text-text-secondary focus:border-brand-orange focus:outline-none transition-colors appearance-none">
                  <option value="">Select Project Type</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="full">Full Home Renovation</option>
                  <option value="other">Other</option>
                </select>
                <button className="mt-4 w-full bg-brand-orange text-white font-display font-bold text-lg py-4 rounded-none hover:bg-brand-tan hover:text-brand-dark transition-colors flex items-center justify-center gap-2 uppercase tracking-widest">
                  Request Estimate <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
