import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images, videos } from '../assets/media';
import { HiLightBulb } from 'react-icons/hi';
import { BsBuilding, BsPeople } from 'react-icons/bs';
import { IoMdPeople } from 'react-icons/io';
import { MdArchitecture, MdDesignServices } from 'react-icons/md';
import { FaChartLine, FaRegFileAlt, FaPaintBrush } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {
  const [marbleLoaded, setMarbleLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = images.materials.marble;
    img.onload = () => setMarbleLoaded(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const values = [
    {
      icon: HiLightBulb,
      title: 'Integrated Approach to Development',
      description:
        'Blends strategic planning with innovative design to deliver solutions',
    },
    {
      icon: BsBuilding,
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
      icon: FaChartLine,
      title: 'Planning Consulting',
    },
    {
      icon: BsBuilding,
      title: 'Land Development Planning Advisory',
    },
    {
      icon: FaRegFileAlt,
      title: 'Statement of Environmental Effects (SEE)',
    },
    {
      icon: FaPaintBrush,
      title: 'Interior Design',
    },
    {
      icon: MdArchitecture,
      title: 'Architecture Design',
    },
    {
      icon: BsPeople,
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
        >
          <source src={videos.heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            {...fadeIn}
          >
            IZ Planning and Architecture
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
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
              className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
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
            className="text-3xl md:text-4xl font-bold text-center mb-16"
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
                  <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center mb-2">
                    <value.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="w-12 h-0.5 bg-red-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
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
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </h3>
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
