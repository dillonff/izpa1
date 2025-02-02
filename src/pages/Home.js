import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images, videos } from '../assets/media';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BsBuildings } from 'react-icons/bs';
import { IoMdPeople } from 'react-icons/io';
import { MdOutlineArchitecture } from 'react-icons/md';
import {
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { RiPaintLine, RiBuildingLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Home = () => {
  const [marbleLoaded, setMarbleLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = images.materials.marble;
    img.onload = () => setMarbleLoaded(true);
  }, []);

  const values = [
    {
      icon: HiOutlineLightBulb,
      title: 'Integrated Approach to Development',
      description:
        'Blends strategic planning with innovative design to deliver solutions',
    },
    {
      icon: BsBuildings,
      title: 'Making an Impact',
      description:
        'Directly address the most pressing issues in the built environment today',
    },
    {
      icon: IoMdPeople,
      title: 'Collaboration & Creativity',
      description:
        'Exchange ideas and working together to produce solutions that go beyond conventional approaches',
    },
  ];

  const services = [
    {
      icon: HiOutlineChartBar,
      title: 'Planning Consulting',
    },
    {
      icon: RiBuildingLine,
      title: 'Land Development Planning Advisory',
    },
    {
      icon: HiOutlineDocumentText,
      title: 'Statement of Environmental Effects (SEE)',
    },
    {
      icon: RiPaintLine,
      title: 'Interior Design',
    },
    {
      icon: MdOutlineArchitecture,
      title: 'Architecture Design',
    },
    {
      icon: HiOutlineUserGroup,
      title: 'Government Liaison',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
        >
          <source src={videos.heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center">
          <motion.h1
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-fluid-gradient bg-clip-text text-transparent leading-normal md:leading-normal py-1 drop-shadow-sm"
            {...fadeIn}
          >
            IZ Planning and Architecture
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Creating sustainable and innovative spaces for tomorrow
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-medium tracking-wide hover:bg-gray-200 transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16"
            {...fadeIn}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="mb-6">
                  <value.icon className="w-12 h-12 text-red-500 mb-4" />
                  <div className="w-12 h-0.5 bg-red-500 mx-auto" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed tracking-wide">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src={images.materials.marble}
            alt="Marble Texture"
            className={`w-full h-full object-cover ${
              marbleLoaded ? 'opacity-30' : 'opacity-0'
            } transition-opacity duration-700`}
            style={{ filter: 'contrast(120%) brightness(90%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            {...fadeIn}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-black/30 backdrop-blur-md rounded-xl p-8 text-center hover:bg-black/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex flex-col items-center">
                  <service.icon className="w-12 h-12 text-white mb-6 group-hover:text-red-500 transition-colors duration-300" />
                  <h3 className="font-playfair text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16 text-black"
            {...fadeIn}
          >
            Innovation in Action
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'VR Architecture',
                description:
                  'Experience designs in virtual reality before construction',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: '3D Mapping',
                description: 'Precise site analysis using drone technology',
                icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
              },
              {
                title: 'Sustainable Design',
                description: 'Eco-friendly solutions for modern challenges',
                icon: 'M12 3v19M3 12h18M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gray-50 rounded-xl p-8 text-center hover:bg-gray-100 transition-all duration-300 group shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-6">
                    <svg
                      className="w-full h-full text-black group-hover:text-red-500 transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={item.icon}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-black group-hover:text-red-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
