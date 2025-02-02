import { motion } from 'framer-motion';
import { images } from '../assets/media';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const stonesImg = new Image();
    stonesImg.src = images.materials.stones;
    stonesImg.onload = () => setImageLoaded(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const planningServices = [
    {
      title: 'Preliminary Town Planning Consulting',
      description:
        'Expert guidance and consultation on town planning matters at the early stages of development',
    },
    {
      title: 'Land Development Planning Advisory',
      description:
        'Strategic advice on land development opportunities and constraints assessment',
    },
    {
      title: 'Statement of Environmental Effects (SEE)',
      description:
        'Comprehensive environmental impact assessment and documentation for development applications',
    },
    {
      title: 'Lodgement of Development Applications',
      description:
        'Professional preparation and submission of development applications to relevant authorities',
    },
    {
      title: 'Preparation of Planning Proposals',
      description:
        'Detailed planning proposals for rezoning and land use changes',
    },
    {
      title: 'Project Management',
      description:
        'End-to-end project coordination and management of planning processes',
    },
  ];

  const architectureServices = [
    {
      title: 'Luxurious Detached Houses',
      description:
        'Bespoke architectural designs for premium single-family homes, combining elegance with functionality',
    },
    {
      title: 'High-End Townhouses',
      description:
        'Sophisticated multi-dwelling designs that maximize space while maintaining privacy and luxury',
    },
    {
      title: 'Duplex Designs',
      description:
        'Innovative dual-occupancy solutions that blend seamlessly into their surroundings',
    },
    {
      title: 'Mid-Rise Apartments',
      description:
        'Contemporary apartment complexes that create vibrant living communities',
    },
    {
      title: 'Granny Flats',
      description:
        'Thoughtfully designed secondary dwellings that provide comfortable and independent living spaces',
    },
  ];

  const interiorServices = [
    {
      title: 'Residential',
      description:
        'Crafting personalized living spaces that reflect your lifestyle and aesthetic preferences',
    },
    {
      title: 'Commercial',
      description:
        'Creating engaging and functional interior environments for businesses and public spaces',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-[50vh] bg-black text-white overflow-hidden flex items-center mt-24 md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src={images.materials.stones}
            alt="Stones Texture"
            className={`w-full h-full object-cover scale-110 ${
              imageLoaded ? 'opacity-40' : 'opacity-0'
            } transition-opacity duration-700`}
            style={{ filter: 'contrast(110%) brightness(85%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center max-w-3xl mx-auto font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprehensive solutions in planning and architecture, tailored to
            meet your unique needs and aspirations.
          </motion.p>
        </div>
      </motion.section>

      {/* Planning Services */}
      <section className="relative py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-16 text-white"
              {...fadeIn}
            >
              <span className="text-red-500">01.</span> Planning Services
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-16">
              {planningServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex flex-col md:flex-row items-start gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-red-500"></div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Services */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-16 text-gray-900"
              {...fadeIn}
            >
              <span className="text-red-500">02.</span> Architecture Services
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-16">
              {architectureServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="absolute left-0 top-0 w-1 h-12 bg-red-500"></div>
                  <div className="pl-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interior Design Services */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-16 text-white"
              {...fadeIn}
            >
              <span className="text-red-500">03.</span> Interior Design
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-16">
              {interiorServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex flex-col md:flex-row items-start gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-red-500"></div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              {...fadeIn}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-12 leading-relaxed"
              {...fadeIn}
            >
              Let's discuss how we can help bring your vision to life.
            </motion.p>
            <motion.div {...fadeIn}>
              <Link
                to="/contact"
                className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
