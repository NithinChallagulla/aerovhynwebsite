import { Helmet } from 'react-helmet-async';
import { Cpu, Wifi, Battery, Shield, Zap, Settings, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

import swarmImg from '../assets/swarm.jpg';
import edgeAiImg from '../assets/edge-ai.jpg';
import adaptiveImg from '../assets/adaptive.jpg';

export default function Technology() {
  const technologies = [
    {
      icon: Cpu,
      title: 'Advanced Flight Controllers',
      description: 'Custom-designed flight control systems with real-time processing capabilities and autonomous navigation features.',
      features: ['Real-time Processing', 'Autonomous Navigation', 'Sensor Fusion', 'Fail-safe Systems'],
    },
    {
      icon: Wifi,
      title: 'Communication Systems',
      description: 'Long-range, secure communication protocols enabling reliable data transmission and remote control.',
      features: ['Long-range Connectivity', 'Encrypted Communication', 'Multi-frequency Support', 'Mesh Networking'],
    },
    {
      icon: Battery,
      title: 'Power Management',
      description: 'Intelligent battery management systems optimizing flight time and performance while ensuring safety.',
      features: ['Smart Battery Technology', 'Power Optimization', 'Hot-swap Capability', 'Health Monitoring'],
    },
    {
      icon: Shield,
      title: 'Security Protocols',
      description: 'Military-grade security measures protecting data integrity and preventing unauthorized access.',
      features: ['End-to-end Encryption', 'Secure Boot', 'Access Control', 'Tamper Detection'],
    },
  ];

  const techStack = [
    {
      category: 'Hardware',
      icon: Settings,
      items: [
        'ARM Cortex-M7 Microcontrollers',
        'FPGA for Real-time Processing',
        'High-precision IMU Sensors',
        'Multi-band GPS/GNSS Receivers',
        'Advanced Camera Systems',
        'LiDAR and ToF Sensors',
      ],
    },
    {
      category: 'Software',
      icon: Code,
      items: [
        'Real-time Operating Systems (RTOS)',
        'Machine Learning Algorithms',
        'Computer Vision Libraries',
        'Flight Planning Software',
        'Ground Control Station',
        'Mobile Applications',
      ],
    },
    {
      category: 'Communication',
      icon: Wifi,
      items: [
        '5G/LTE Connectivity',
        'Wi-Fi 6/6E Standards',
        'LoRaWAN for IoT',
        'Satellite Communication',
        'Mesh Networking',
        'Software Defined Radio',
      ],
    },
    {
      category: 'Data Management',
      icon: Database,
      items: [
        'Edge Computing',
        'Cloud Integration',
        'Real-time Analytics',
        'Data Compression',
        'Blockchain Security',
        'AI/ML Processing',
      ],
    },
  ];

  const innovations = [
    {
      title: 'Swarm Intelligence',
      description: 'Coordinated multi-drone operations using advanced algorithms for complex mission execution.',
      image: swarmImg,
    },
    {
      title: 'Edge AI Processing',
      description: 'On-board artificial intelligence for real-time decision making without cloud dependency.',
      image: edgeAiImg,
    },
    {
      title: 'Adaptive Systems',
      description: 'Self-learning systems that adapt to environmental conditions and mission requirements.',
      image: adaptiveImg,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Technology - AEROVHYN Technologies</title>
        <meta
          name="description"
          content="Discover the cutting-edge technologies powering AEROVHYN's UAV solutions including AI, embedded systems, and advanced communication protocols."
        />
      </Helmet>

      {/* Hero Section with Video */}
      <section className="relative pt-24 pb-16 bg-black text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/videos/aerovhyn-bg.mp4"
          autoPlay
          muted
          loop
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            Our Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Cutting-edge innovations driving the future of aerospace and UAV technology
          </motion.p>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-highlight mb-4">Core Technologies</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental technologies that power our advanced UAV solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  className="bg-gray-800 p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-white mb-3">{tech.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{tech.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tech.features.map((feature) => (
                          <span key={feature} className="px-3 py-1 bg-highlight/10 text-highlight text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-highlight mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive overview of the technologies we use to build our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <motion.div
                  key={stack.category}
                  className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-highlight mr-3" />
                    <h3 className="text-lg font-heading font-semibold text-white">{stack.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="text-gray-400 text-sm flex items-center">
                        <Zap className="h-3 w-3 text-highlight mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-highlight mb-4">Latest Innovations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Breakthrough technologies we're developing for the next generation of UAV systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">{innovation.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{innovation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">System Architecture</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              How our integrated systems work together to deliver exceptional performance
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Cpu, title: 'Processing Layer', text: 'High-performance computing with real-time data processing and AI inference' },
                { icon: Wifi, title: 'Communication Layer', text: 'Secure, multi-protocol communication ensuring reliable connectivity' },
                { icon: Shield, title: 'Security Layer', text: 'End-to-end encryption and security protocols protecting all operations' },
              ].map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="space-y-4"
                  >
                    <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">{layer.title}</h3>
                    <p className="text-gray-200 text-sm">{layer.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}