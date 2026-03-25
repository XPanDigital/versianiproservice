import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const categories = ['All', 'Kitchen', 'Bathroom', 'Full Home', 'Exterior'];

const allProjects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'Kitchen',
    before: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Complete overhaul with custom cabinetry and quartz countertops.'
  },
  {
    id: 2,
    title: 'Luxury Master Bath',
    category: 'Bathroom',
    before: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Spa-like retreat featuring a freestanding tub and walk-in shower.'
  },
  {
    id: 3,
    title: 'Open Concept Living',
    category: 'Full Home',
    before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Removed walls to create a seamless flow between living and dining.'
  },
  {
    id: 4,
    title: 'Contemporary Kitchen',
    category: 'Kitchen',
    before: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Sleek design with smart appliances and a large island.'
  },
  {
    id: 5,
    title: 'Guest Bathroom Update',
    category: 'Bathroom',
    before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Modernized with new fixtures, tile, and a custom vanity.'
  },
  {
    id: 6,
    title: 'Patio & Deck Addition',
    category: 'Exterior',
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Created an outdoor oasis perfect for entertaining.'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary-lightgray min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-green mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-sans text-lg md:text-xl text-secondary-mediumgray max-w-3xl mx-auto mb-12"
          >
            Explore our gallery of recent transformations. Slide to compare the before and after of each project.
          </motion.p>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary-green text-secondary-white shadow-md' 
                    : 'bg-secondary-white text-primary-charcoal hover:bg-secondary-lightgreen hover:text-primary-green'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="bg-secondary-white rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(27,77,62,0.08)] hover:shadow-[0_8px_32px_rgba(27,77,62,0.16)] transition-shadow duration-400 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={project.before} alt={`${project.title} Before`} />}
                    itemTwo={<ReactCompareSliderImage src={project.after} alt={`${project.title} After`} />}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-semibold text-xl text-primary-charcoal">
                      {project.title}
                    </h3>
                    <span className="bg-secondary-lightgreen text-primary-green text-xs font-semibold px-2 py-1 rounded-sm uppercase tracking-wider shrink-0 ml-2">
                      {project.category}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-secondary-mediumgray">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-sans text-lg text-secondary-mediumgray">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
