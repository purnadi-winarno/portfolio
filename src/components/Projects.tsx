import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code2, Users, Zap, Lock } from 'lucide-react';
import { clsx } from 'clsx';

const categories = ['All', 'React', 'TypeScript', 'Node.js'];

const projects = [
  {
    title: 'Enterprise E-Commerce Platform',
    description: 'Microservices-based e-commerce platform handling 100k+ daily transactions. Implemented advanced caching strategies and optimized performance.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    category: 'React',
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      { icon: Zap, text: '99.9% Uptime' },
      { icon: Users, text: '100k+ Users' },
      { icon: Lock, text: 'PCI Compliant' }
    ]
  },
  {
    title: 'Real-time Collaboration Suite',
    description: 'WebSocket-powered task management platform with real-time updates and conflict resolution. Built with TypeScript and React.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop',
    category: 'TypeScript',
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      { icon: Code2, text: '50k+ LOC' },
      { icon: Users, text: '10k+ Teams' },
      { icon: Zap, text: '<100ms Latency' }
    ]
  },
  {
    title: 'Cloud-native API Gateway',
    description: 'High-performance API gateway with automatic scaling and advanced security features. Processes 5M+ requests daily.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    category: 'Node.js',
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      { icon: Zap, text: '5M+ Daily Requests' },
      { icon: Lock, text: 'OAuth 2.0' },
      { icon: Users, text: '99.99% Uptime' }
    ]
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="py-32 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                'px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium',
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-6">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </motion.a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <Icon size={16} className="text-blue-400" />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}