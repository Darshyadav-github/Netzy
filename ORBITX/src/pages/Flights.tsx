import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Rocket, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Flights = () => {
  const [sortBy, setSortBy] = useState('date');
  const [filterBy, setFilterBy] = useState('all');

  const flights = [
    {
      id: 1,
      flightNumber: 'CV-2024-001',
      destination: 'Luna Prime Station',
      operator: 'Cosmic Voyager',
      spacecraft: 'Stellar Phoenix',
      departureDate: '2024-03-15',
      returnDate: '2024-03-18',
      duration: '3 days',
      availableSeats: 8,
      totalSeats: 24,
      price: 485000,
      status: 'Available',
      features: ['Luxury cabin', 'Gourmet meals', 'Space walks', 'Earth observation']
    },
    {
      id: 2,
      flightNumber: 'CV-2024-002',
      destination: 'Mars Colony Olympus',
      operator: 'Cosmic Voyager',
      spacecraft: 'Red Pioneer',
      departureDate: '2024-04-22',
      returnDate: '2024-05-06',
      duration: '14 days',
      availableSeats: 3,
      totalSeats: 12,
      price: 2750000,
      status: 'Filling Fast',
      features: ['Private suites', 'Scientific tours', 'Martian exploration', 'Research participation']
    },
    {
      id: 3,
      flightNumber: 'CV-2024-003',
      destination: 'Europa Deep Station',
      operator: 'Cosmic Voyager',
      spacecraft: 'Ice Explorer',
      departureDate: '2024-05-10',
      returnDate: '2024-05-31',
      duration: '21 days',
      availableSeats: 2,
      totalSeats: 8,
      price: 5800000,
      status: 'Limited',
      features: ['Premium accommodations', 'Ice diving', 'Astrobiology labs', 'Jupiter viewing']
    },
    {
      id: 4,
      flightNumber: 'CV-2024-004',
      destination: 'Ceres Mining Base',
      operator: 'Cosmic Voyager',
      spacecraft: 'Asteroid Miner',
      departureDate: '2024-06-18',
      returnDate: '2024-06-28',
      duration: '10 days',
      availableSeats: 12,
      totalSeats: 20,
      price: 1850000,
      status: 'Available',
      features: ['Mining tours', 'Zero-gravity training', 'Asteroid exploration', 'Industrial workshops']
    },
    {
      id: 5,
      flightNumber: 'CV-2024-005',
      destination: 'Titan Sky City',
      operator: 'Cosmic Voyager',
      spacecraft: 'Atmospheric Glider',
      departureDate: '2024-07-25',
      returnDate: '2024-08-22',
      duration: '28 days',
      availableSeats: 6,
      totalSeats: 16,
      price: 7200000,
      status: 'Available',
      features: ['Atmospheric flights', 'Luxury floating suites', 'Saturn viewing', 'Weather research']
    },
    {
      id: 6,
      flightNumber: 'CV-2024-006',
      destination: 'Ganymede Gateway',
      operator: 'Cosmic Voyager',
      spacecraft: 'Jovian Explorer',
      departureDate: '2024-08-12',
      returnDate: '2024-08-30',
      duration: '18 days',
      availableSeats: 9,
      totalSeats: 18,
      price: 4200000,
      status: 'Available',
      features: ['Magnetic field studies', 'Ice exploration', 'Jupiter moon tours', 'Scientific research']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'text-green-400 bg-green-400/20';
      case 'Filling Fast': return 'text-yellow-400 bg-yellow-400/20';
      case 'Limited': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const sortedFlights = [...flights].sort((a, b) => {
    switch (sortBy) {
      case 'price': return a.price - b.price;
      case 'duration': return parseInt(a.duration) - parseInt(b.duration);
      case 'destination': return a.destination.localeCompare(b.destination);
      default: return new Date(a.departureDate) - new Date(b.departureDate);
    }
  });

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
                Available Flights
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our premium selection of space flights. 
              Each journey is carefully planned for maximum safety and unforgettable experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-cyan-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="duration">Sort by Duration</option>
                <option value="destination">Sort by Destination</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
              >
                <option value="all">All Flights</option>
                <option value="available">Available Only</option>
                <option value="premium">Premium Flights</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {sortedFlights.map((flight, index) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Rocket className="h-6 w-6 text-cyan-400" />
                        <span className="text-lg font-semibold">{flight.flightNumber}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(flight.status)}`}>
                        {flight.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{flight.destination}</h3>
                    <p className="text-gray-400 mb-4">Spacecraft: {flight.spacecraft}</p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 text-cyan-400 mr-2" />
                        <div>
                          <div className="text-white">{flight.departureDate}</div>
                          <div className="text-gray-400">Departure</div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-cyan-400 mr-2" />
                        <div>
                          <div className="text-white">{flight.duration}</div>
                          <div className="text-gray-400">Duration</div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 text-cyan-400 mr-2" />
                        <div>
                          <div className="text-white">{flight.availableSeats}/{flight.totalSeats}</div>
                          <div className="text-gray-400">Available</div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-cyan-400 mr-2" />
                        <div>
                          <div className="text-white">{flight.returnDate}</div>
                          <div className="text-gray-400">Return</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-cyan-400">Flight Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {flight.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-right">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      ${flight.price.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm mb-4">per person</div>
                    
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Book Now
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                      <button className="w-full lg:w-auto bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-slate-700/50 rounded-lg p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Availability</span>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-600 rounded-full h-2 w-32">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
                          style={{ width: `${((flight.totalSeats - flight.availableSeats) / flight.totalSeats) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white">{Math.round(((flight.totalSeats - flight.availableSeats) / flight.totalSeats) * 100)}% booked</span>
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
            <h2 className="text-4xl font-bold mb-6">Need a Custom Flight?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Looking for a private charter or specific dates? Our team can arrange 
              customized space travel experiences tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="group bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Standard Flight
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105">
                Request Custom Charter
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Flights;