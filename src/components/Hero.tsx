import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Server, Layout, Terminal } from 'lucide-react';

const technologies = [
  { name: 'Frontend', icon: Layout, skills: ['React', 'Vue', 'Next.js'] },
  { name: 'Backend', icon: Server, skills: ['Node.js', 'GraphQL', 'REST'] },
  { name: 'Languages', icon: Code2, skills: ['TypeScript', 'JavaScript', 'Python'] },
  { name: 'Tools', icon: Terminal, skills: ['Git', 'Docker', 'AWS'] }
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(33,114,229,0.15),rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50" />
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=faces"
              alt="John Doe"
              className="w-48 h-48 rounded-full object-cover border-4 border-white/10 relative z-10 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              John Doe
            </h1>
            <h2 className="text-3xl font-medium text-blue-400 mb-8">
              Senior Front-End Developer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Crafting exceptional digital experiences with over 8 years of expertise in modern web technologies. 
              Specialized in building scalable, performant, and beautiful user interfaces that drive business growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 border border-gray-700/50"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.name}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}