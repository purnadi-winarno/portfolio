import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, I'll try my best 
              to get back to you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:bg-gray-800 transition-colors"
                  >
                    <div className="p-3 bg-blue-500/10 rounded-xl mr-6">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">{info.title}</h4>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
          >
            <div className="mb-8">
              <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 text-white rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 h-32 resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl font-medium flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <span>Send Message</span>
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}