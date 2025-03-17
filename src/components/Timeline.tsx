import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect, useCallback } from 'react';

const timelineData = [
  {
    year: '2023',
    company: 'Tech Solutions Inc.',
    title: 'Senior Front-End Developer',
    description: 'Led a team of 5 developers in building enterprise-scale React applications. Implemented micro-frontend architecture, reducing deployment time by 60%. Established coding standards and CI/CD pipelines.',
    skills: ['React', 'TypeScript', 'Micro-frontends', 'CI/CD', 'Team Leadership']
  },
  {
    year: '2020',
    company: 'Digital Innovations',
    title: 'Front-End Developer',
    description: 'Architected and developed high-performance web applications using React and GraphQL. Reduced bundle size by 45% through code splitting and lazy loading strategies.',
    skills: ['React', 'GraphQL', 'Performance Optimization', 'Webpack']
  },
  {
    year: '2018',
    company: 'StartUp Co',
    title: 'Junior Developer',
    description: 'Developed responsive web applications and implemented modern CSS architectures. Improved site performance scores from 65 to 95 on Lighthouse.',
    skills: ['JavaScript', 'CSS3', 'Performance', 'Responsive Design']
  },
  {
    year: '2016',
    company: 'University of Technology',
    title: 'BSc Computer Science',
    description: 'First Class Honours. Specialized in Web Technologies and Software Architecture. Led the development of a university-wide event management system.',
    skills: ['Algorithms', 'Software Architecture', 'Web Development']
  }
];

export function Timeline() {
  const [linePosition, setLinePosition] = useState({ top: 0, bottom: 0 });
  const firstCardRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLinePosition = () => {
      if (firstCardRef.current && lastCardRef.current) {
        const firstCard = firstCardRef.current.getBoundingClientRect();
        const lastCard = lastCardRef.current.getBoundingClientRect();
        const containerTop = firstCardRef.current.parentElement?.getBoundingClientRect().top || 0;

        setLinePosition({
          top: (firstCard.top + firstCard.height / 2) - containerTop,
          bottom: lastCard.bottom - lastCard.height / 2 - containerTop
        });
      }
    };

    updateLinePosition();
    window.addEventListener('resize', updateLinePosition);
    return () => window.removeEventListener('resize', updateLinePosition);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          Experience & Education
        </motion.h2>

        <div className="relative max-w-7xl mx-auto">
          {/* Timeline vertical line container */}
          <div 
            className="absolute left-[50%]"
            style={{ 
              transform: 'translateX(-50%)',
              top: `${linePosition.top}px`,
              height: `${linePosition.bottom - linePosition.top}px`
            }}
          >
            {/* Blur effect line */}
            <div className="absolute inset-0 w-px bg-gradient-to-b from-blue-500/80 to-purple-500/80 blur-[0.5px]" />
            {/* Solid line */}
            <div className="absolute inset-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500" />
          </div>
          
          {timelineData.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2
            });

            // Combine refs for first and last cards
            const cardRef = useCallback((node: HTMLDivElement) => {
              if (node) {
                ref(node);
                if (index === 0) firstCardRef.current = node;
                if (index === timelineData.length - 1) lastCardRef.current = node;
              }
            }, [ref, index]);

            return (
              <div
                key={index}
                ref={cardRef}
                className={`flex items-center mb-24 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Card Section */}
                <motion.div 
                  className={`w-[calc(50%-3rem)] relative ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Horizontal dotted line */}
                  <div 
                    className={`absolute top-1/2 ${
                      index % 2 === 0 ? 'right-[-40px] left-[calc(80%)]' : 'left-[-50px] right-[80%]'
                    } h-[2px]`}
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgb(59 130 246 / 0.5) 50%, rgb(168 85 247 / 0.5) 50%)',
                      backgroundSize: '8px 1px'
                    }}
                  />

                  <motion.div 
                    className="p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.company}</h3>
                    <h4 className="text-xl text-blue-400 mb-4">{item.title}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Timeline dot with pulse effect - Centered */}
                <div className="relative w-24 flex items-center justify-center">
                  <div className="absolute w-6 h-6">
                    <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
                  </div>
                  <motion.div 
                    className="relative z-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ 
                      delay: index * 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                  />
                </div>

                {/* Empty space for opposite side */}
                <div className="w-[calc(50%-3rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}