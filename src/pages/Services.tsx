import { motion } from 'motion/react';
import { ChefHat, Bath, Home, Maximize, PaintBucket, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'The kitchen is the heart of your home. We design and build custom kitchens that blend functionality with stunning aesthetics. From custom cabinetry and premium countertops to modern lighting and state-of-the-art appliances, we handle every detail.',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Custom Cabinetry', 'Quartz & Granite Countertops', 'Tile Backsplashes', 'Lighting Design']
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Transform your bathroom into a luxurious spa-like retreat. Our expert team specializes in complete bathroom overhauls, including walk-in showers, freestanding tubs, custom vanities, and premium tile work.',
    icon: Bath,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Walk-in Showers', 'Freestanding Tubs', 'Custom Vanities', 'Radiant Floor Heating']
  },
  {
    title: 'Basement Finishing',
    description: 'Maximize your home\'s square footage by converting your unfinished basement into a beautiful, functional living space. Whether you want a home theater, an extra bedroom, or a playroom, we can make it happen.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Home Theaters', 'Guest Suites', 'Home Gyms', 'Wet Bars']
  },
  {
    title: 'Room Additions',
    description: 'Need more space but love your current neighborhood? A custom room addition is the perfect solution. We seamlessly integrate new spaces into your existing home\'s architecture and design.',
    icon: Maximize,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Master Suites', 'Sunrooms', 'Second Story Additions', 'Garage Conversions']
  },
  {
    title: 'Exterior Renovations',
    description: 'Enhance your home\'s curb appeal and protect it from the elements with our exterior renovation services. We offer premium siding, roofing, windows, and outdoor living space construction.',
    icon: PaintBucket,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Siding Replacement', 'Window Upgrades', 'Decks & Patios', 'Outdoor Kitchens']
  },
  {
    title: 'Custom Renovations',
    description: 'Have a unique vision for your home? Our custom renovation services are tailored to your specific needs and lifestyle. We work closely with you to bring your dream space to life.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    features: ['Open Concept Layouts', 'Custom Built-ins', 'Flooring Upgrades', 'Structural Changes']
  }
];

export function Services() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-green mb-6"
        >
          Our Premium Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-sans text-lg md:text-xl text-secondary-mediumgray max-w-3xl mx-auto"
        >
          From concept to completion, we deliver exceptional craftsmanship and innovative design for every area of your home.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(27,77,62,0.16)]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-charcoal/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-secondary-white p-4 rounded-lg shadow-lg">
                    <service.icon size={32} className="text-primary-green" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-charcoal mb-4">
                  {service.title}
                </h2>
                <div className="w-16 h-1 bg-primary-gold mb-6" />
                <p className="font-sans text-base md:text-lg text-secondary-mediumgray mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <h3 className="font-display font-semibold text-xl text-primary-green mb-4">
                  Key Features:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary-gold shrink-0 mt-0.5" size={20} />
                      <span className="font-sans text-base text-primary-charcoal font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className="inline-block self-start bg-primary-green text-secondary-white px-8 py-4 rounded-md font-sans text-sm font-semibold uppercase tracking-wide hover:bg-primary-gold transition-all duration-300 shadow-[0_4px_16px_rgba(27,77,62,0.12)]"
                >
                  Request an Estimate
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
