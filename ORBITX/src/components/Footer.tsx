import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Cosmic Voyager
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Pioneering the future of commercial space travel with cutting-edge technology, 
              uncompromising safety, and unforgettable experiences beyond Earth.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="text-gray-400 hover:text-cyan-400 transition-colors">Luna Prime Station</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-cyan-400 transition-colors">Mars Colony Olympus</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-cyan-400 transition-colors">Europa Deep Station</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-cyan-400 transition-colors">Titan Sky City</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/flights" className="text-gray-400 hover:text-cyan-400 transition-colors">Commercial Flights</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-cyan-400 transition-colors">Private Charters</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-cyan-400 transition-colors">Research Expeditions</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-cyan-400 transition-colors">Extended Stays</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">Our Team</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">Safety Standards</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">Mission Statement</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Cosmic Voyager. All rights reserved. Licensed space travel operator.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;