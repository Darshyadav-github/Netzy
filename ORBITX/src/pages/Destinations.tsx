import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'lunar', label: 'Lunar' },
    { id: 'planetary', label: 'Planetary' },
    { id: 'stations', label: 'Space Stations' },
  ];

  const destinations = [
    {
      id: 1,
      name: 'Luna Prime Station',
      category: 'lunar',
      distance: '384,400 km',
      duration: '3 days',
      price: 485000,
      capacity: 24,
      image: 'https://images.pexels.com/photos/87611/earth-blue-planet-globe-planet-87611.jpeg',
      description: 'Experience Earth\'s natural satellite from our state-of-the-art lunar facility. Witness breathtaking Earth-rise views while exploring the mysteries of our celestial neighbor.',
      highlights: ['Low gravity recreation', 'Earth observation deck', 'Lunar surface excursions', 'Research laboratories']
    },
    {
      id: 2,
      name: 'Mars Colony Olympus',
      category: 'planetary',
      distance: '225 million km',
      duration: '14 days',
      price: 2750000,
      capacity: 12,
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-robot-73873.jpeg',
      description: 'Pioneer the red frontier at humanity\'s most advanced Martian outpost. Explore ancient riverbeds, towering volcanoes, and participate in terraforming initiatives.',
      highlights: ['Martian geology tours', 'Olympus Mons expedition', 'Terraforming workshops', 'Underground habitats']
    },
    {
      id: 3,
      name: 'Europa Deep Station',
      category: 'stations',
      distance: '628 million km',
      duration: '21 days',
      price: 5800000,
      capacity: 8,
      image: 'https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg',
      description: 'Dive into the mysteries of Jupiter\'s ice-covered moon. Explore subsurface oceans that may harbor extraterrestrial life in our most remote research station.',
      highlights: ['Subsurface ocean exploration', 'Astrobiology research', 'Ice diving expeditions', 'Jupiter observation']
    },
    {
      id: 4,
      name: 'Titan Sky City',
      category: 'stations',
      distance: '1.4 billion km',
      duration: '28 days',
      price: 7200000,
      capacity: 16,
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      description: 'Float through the thick atmosphere of Saturn\'s largest moon in our atmospheric research station. Experience unique weather patterns and hydrocarbon lakes.',
      highlights: ['Atmospheric flight tours', 'Methane lake expeditions', 'Saturn ring viewing', 'Atmospheric research']
    },
    {
      id: 5,
      name: 'Ceres Mining Base',
      category: 'stations',
      distance: '413 million km',
      duration: '10 days',
      price: 1850000,
      capacity: 20,
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      description: 'Visit the largest object in the asteroid belt at our mining and research facility. Learn about asteroid mining while enjoying spectacular views of the solar system.',
      highlights: ['Asteroid mining tours', 'Zero-gravity workshops', 'Mineral processing labs', 'Deep space observation']
    },
    {
      id: 6,
      name: 'Ganymede Gateway',
      category: 'lunar',
      distance: '628 million km',
      duration: '18 days',
      price: 4200000,
      capacity: 18,
      image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg',
      description: 'Explore Jupiter\'s largest moon and the solar system\'s largest satellite. Experience the unique magnetic field and subsurface ocean of this fascinating world.',
      highlights: ['Magnetic field studies', 'Ice crust exploration', 'Jupiter system tours', 'Orbital mechanics labs']
    }
  ];

  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Cosmic Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Embark on extraordinary journeys to worlds beyond imagination. 
              Each destination offers unique experiences and scientific discoveries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-slate-700 text-gray-400 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl"
              >
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{destination.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{destination.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-cyan-400 mr-2" />
                      <span className="text-gray-400">{destination.distance}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-cyan-400 mr-2" />
                      <span className="text-gray-400">{destination.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-cyan-400 mr-2" />
                      <span className="text-gray-400">{destination.capacity} travelers</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 text-cyan-400 mr-2" />
                      <span className="text-gray-400">${destination.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-cyan-400">Experience Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${destination.price.toLocaleString()}
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
                        Learn More
                      </button>
                      <Link
                        to="/booking"
                        className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                      >
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Rocket className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your destination and begin the journey of a lifetime. 
              Our expert team will guide you through every step of your cosmic adventure.
            </p>
            <Link
              to="/flights"
              className="group bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View Available Flights
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;