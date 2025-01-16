import { motion } from 'framer-motion';

const About = () => {
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 bg-gray-900 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
            {...fadeIn}
          >
            Innovative Solutions for Modern Communities
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Seamlessly integrating expert town planning and architectural design
            to address modern community challenges.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" {...fadeIn}>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              IZ Planning and Architecture Pty Ltd (IZPA) is an innovative
              start-up firm based in Sydney, NSW, specializing in the seamless
              integration of expert town planning and architectural design to
              address some of the most pressing challenges facing modern
              communities. Our young, highly motivated team is united by a
              shared commitment to solving the housing crisis, promoting
              creativity and sustainability, and preserving cultural heritage
              through integrated, thoughtful development solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We offer a comprehensive approach that combines urban planning,
              architecture, and interior design, ensuring every project is not
              only functional but also creative, sustainable, and in line with
              community needs. At IZ Planning and Architecture, we believe in
              delivering tailored solutions that meet all regulatory
              requirements while achieving outstanding design outcomes that
              include urban planning, architecture and interior design, ensuring
              each project reflects both functionality, locality and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            {...fadeIn}
          >
            Our Integrated Approach
          </motion.h2>
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-0.5 bg-gray-300"></div>

            {/* Service Steps */}
            <div className="grid md:grid-cols-3 gap-12 relative">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-white rounded-lg p-8 shadow-lg text-center relative z-10">
                    <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      {service.number}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Collaborative Network
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We work with architects, designers, developers, builders,
              engineers, environmental specialists and state and local
              governments to identify and implement development strategies,
              provide due diligence and feasibility and to obtain development
              approvals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            {...fadeIn}
          >
            Let's Create Something Amazing Together
          </motion.h2>
          <motion.p
            className="text-xl mb-12 max-w-2xl mx-auto"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Let us bring your vision to life with precision, creativity, and
            efficiency.
          </motion.p>
          <motion.button
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default About;
