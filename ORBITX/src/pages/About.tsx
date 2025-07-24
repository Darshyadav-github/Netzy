import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Award, Globe, Shield, Star, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Rocket, label: 'Years Operating', value: '8' },
    { icon: Users, label: 'Team Members', value: '350+' },
    { icon: Award, label: 'Safety Awards', value: '12' },
    { icon: Globe, label: 'Countries Served', value: '45' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every decision we make prioritizes the safety and well-being of our passengers. Our 100% safety record speaks to our unwavering commitment.'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in space travel, investing in cutting-edge technology and sustainable practices.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making space travel accessible to everyone is our mission. We believe the cosmos should be within reach for all humanity.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Protecting both Earth and space environments is crucial. We pioneer eco-friendly space travel technologies and practices.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg',
      bio: 'Former NASA astronaut with 15 years of space experience. Led the development of next-generation spacecraft propulsion systems.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg',
      bio: 'Aerospace engineer who revolutionized spacecraft safety systems. Previously worked at SpaceX and Blue Origin.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. Amara Okafor',
      role: 'Head of Safety Operations',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      bio: 'International space law expert and former ESA mission commander. Ensures all operations meet highest safety standards.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Jin Watanabe',
      role: 'Director of Customer Experience',
      image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg',
      bio: 'Hospitality industry veteran who brings luxury service standards to space travel. Creates unforgettable customer journeys.',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const milestones = [
    { year: '2016', event: 'Cosmic Voyager founded with vision of accessible space travel' },
    { year: '2018', event: 'First successful unmanned test flight to lunar orbit' },
    { year: '2019', event: 'Received commercial space travel certification' },
    { year: '2020', event: 'Launched first crewed mission to Luna Prime Station' },
    { year: '2021', event: 'Opened Mars Colony Olympus to commercial travelers' },
    { year: '2022', event: 'Achieved carbon-neutral space operations milestone' },
    { year: '2023', event: 'Completed 1000th successful mission' },
    { year: '2024', event: 'Expanded to outer planetary destinations' }
  ];

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
                About Cosmic Voyager
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in commercial space travel, dedicated to making the cosmos 
              accessible to everyone while maintaining the highest standards of safety and luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Founded in 2016 by former NASA astronaut Dr. Sarah Chen, Cosmic Voyager began 
                  with a simple yet ambitious vision: to make space travel accessible to everyone, 
                  not just professional astronauts.
                </p>
                <p>
                  After witnessing the transformative power of seeing Earth from space during her 
                  own missions, Dr. Chen realized that this perspective-changing experience should 
                  be available to all humanity. She assembled a team of the world's leading aerospace 
                  engineers, safety experts, and hospitality professionals.
                </p>
                <p>
                  Today, we operate the largest fleet of commercial spacecraft in the industry, 
                  serving destinations from lunar stations to the outer planets. Our commitment to 
                  safety, sustainability, and exceptional service has made us the trusted leader 
                  in space tourism.
                </p>
              </div>
            </div>
            <div 
              className="h-96 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg)' }}
            ></div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide every decision we make and every journey we facilitate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4"
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in aerospace, 
              hospitality, and space exploration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-800 rounded-2xl overflow-hidden"
              >
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex space-x-3">
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From our founding to becoming the industry leader in commercial space travel
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-cyan-400">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-slate-700/50 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for passionate individuals who share our vision of 
              making space accessible to all. Whether you're an engineer, pilot, or 
              hospitality professional, there's a place for you at Cosmic Voyager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;