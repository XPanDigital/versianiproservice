import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Years Experience', value: '15+', icon: Clock },
  { label: 'Projects Completed', value: '500+', icon: Award },
  { label: 'Happy Clients', value: '100%', icon: Users },
  { label: 'Licensed & Insured', value: 'Yes', icon: ShieldCheck },
];

export function About() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-green mb-6">
              About Versiani Pro Service
            </h1>
            <h2 className="font-display font-semibold text-xl md:text-2xl text-primary-gold mb-6">
              Craftsmanship Meets Innovation
            </h2>
            <p className="font-sans text-base md:text-lg text-secondary-mediumgray mb-6 leading-relaxed">
              Founded on the principles of integrity, quality, and exceptional customer service, Versiani Pro Service has grown to become Florida's premier home remodeling and renovation company. We believe that your home should be a reflection of your lifestyle and a sanctuary for your family.
            </p>
            <p className="font-sans text-base md:text-lg text-secondary-mediumgray mb-8 leading-relaxed">
              Our team of skilled craftsmen, designers, and project managers work collaboratively to ensure every project is executed flawlessly, on time, and within budget. We don't just build spaces; we build lasting relationships with our clients.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block self-start bg-primary-gold text-secondary-white px-8 py-4 rounded-md font-sans text-sm font-semibold uppercase tracking-wide hover:bg-primary-green transition-all duration-300 shadow-[0_4px_16px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_32px_rgba(27,77,62,0.2)]"
            >
              Work With Us
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(27,77,62,0.16)] aspect-[4/5] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Team at Work" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-charcoal/40 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-secondary-lightgreen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary-white flex items-center justify-center mb-4 shadow-md">
                  <stat.icon size={28} className="text-primary-green" />
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-primary-charcoal mb-2">
                  {stat.value}
                </h3>
                <p className="font-sans text-sm md:text-base text-secondary-mediumgray uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-green mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-sans text-lg text-secondary-mediumgray max-w-2xl mx-auto"
          >
            The principles that guide every project we undertake.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Quality First', desc: 'We never compromise on materials or craftsmanship. Excellence is our standard.' },
            { title: 'Transparency', desc: 'Clear communication, honest pricing, and no hidden surprises throughout the process.' },
            { title: 'Reliability', desc: 'We show up on time, respect your property, and deliver what we promise.' }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="bg-secondary-white border border-secondary-lightgray rounded-xl p-8 hover:shadow-[0_8px_32px_rgba(27,77,62,0.12)] transition-shadow duration-300"
            >
              <h3 className="font-display font-semibold text-2xl text-primary-gold mb-4">{value.title}</h3>
              <p className="font-sans text-base text-secondary-mediumgray leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
