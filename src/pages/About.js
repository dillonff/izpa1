import { motion } from 'framer-motion';
import { images } from '../assets/media';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // 预加载图片
    const img = new Image();
    img.src = images.materials.metal;
    img.onload = () => {
      console.log('Metal image loaded successfully');
      setImageLoaded(true);
    };
    img.onerror = (error) => {
      console.error('Error loading metal image:', error);
      setImageError(true);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      number: '1',
      title: 'Town Planning',
      description:
        'Expert urban planning solutions for sustainable community development',
    },
    {
      number: '2',
      title: 'Architecture',
      description:
        'Creative architectural design that balances form and function',
    },
    {
      number: '3',
      title: 'Interior Design',
      description:
        'Thoughtful interior spaces that enhance living and working experiences',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-[50vh] bg-black text-white overflow-hidden flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0">
          {imageError && (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <p className="text-red-500">Failed to load background image</p>
            </div>
          )}
          <img
            src={images.materials.metal}
            alt="Architectural Detail"
            className={`w-full h-full object-cover scale-110 ${
              imageLoaded ? 'opacity-70' : 'opacity-0'
            } transition-opacity duration-700`}
            style={{ filter: 'contrast(120%) brightness(90%)' }}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              console.error('Error loading image:', e);
              setImageError(true);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl drop-shadow-lg"
            {...fadeIn}
          >
            Innovative Solutions for Modern Communities
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl font-light drop-shadow-lg"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Seamlessly integrating expert town planning and architectural design
            to address modern community challenges.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto space-y-8" {...fadeIn}>
            <p className="text-lg text-gray-700 leading-relaxed">
              IZ Planning and Architecture Pty Ltd (IZPA) is an innovative firm
              based in Sydney, Australia, specialising in the seamless
              integration of expert town planning and architectural design to
              deliver tailored solutions that meet all regulatory requirements
              while achieving outstanding design outcomes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer a comprehensive approach that combines urban planning,
              architecture, and interior design, ensuring every project is not
              only functional but also creative, sustainable, and in line with
              community needs. At IZ Planning and Architecture, we believe in
              delivering solutions that include urban planning, architecture and
              interior design, ensuring each project reflects both
              functionality, locality and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Process Section with Image */}
      <section className="relative py-32 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.materials.metal}
            alt="Architectural Detail"
            className="w-full h-full object-cover opacity-60"
            style={{ filter: 'contrast(120%) brightness(90%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-20"
            {...fadeIn}
          >
            Our Integrated Approach
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex flex-col items-start">
                  <span className="text-6xl font-bold text-red-500 mb-4">
                    {service.number}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Collaborative Network
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              We work with architects, designers, developers, builders,
              engineers, environmental specialists and state and local
              governments to identify and implement development strategies,
              provide due diligence and feasibility and to obtain development
              approvals.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link
                to="/team"
                className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors group"
              >
                Meet Our Team
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
