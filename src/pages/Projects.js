import { motion } from 'framer-motion';
import { images } from '../assets/media';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Rural Area Subdivision',
      category: 'Urban Planning',
      image: images.ruralImg,
      description:
        'Sustainable development project focusing on preserving natural landscapes while creating modern living spaces.',
      details: {
        location: 'Rural District',
        area: '500 hectares',
        status: 'Completed 2023',
      },
    },
    {
      id: 2,
      title: 'Master Planned Estate',
      category: 'Residential',
      image: images.estateImg,
      description:
        'Comprehensive community development with integrated amenities and sustainable infrastructure.',
      details: {
        location: 'Suburban Area',
        area: '200 hectares',
        status: 'In Progress',
      },
    },
    {
      id: 3,
      title: 'Commercial Complex',
      category: 'Commercial',
      image: images.commercialImg,
      description:
        'Modern mixed-use development combining retail, office, and recreational spaces.',
      details: {
        location: 'City Center',
        area: '50,000 sqm',
        status: 'Completed 2022',
      },
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Innovative solutions for modern architectural challenges
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="h-64 bg-gray-200 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {Object.entries(project.details).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-gray-500">{key}: </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Innovation in Action
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'VR Architecture',
                description:
                  'Experience designs in virtual reality before construction',
              },
              {
                title: '3D Mapping',
                description: 'Precise site analysis using drone technology',
              },
              {
                title: 'Sustainable Design',
                description: 'Eco-friendly solutions for modern challenges',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
