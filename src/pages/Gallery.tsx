// src/pages/Gallery.tsx
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, Download, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define a TypeScript interface for a media item
interface MediaItem {
  id: number;
  type: string;
  category: string;
  title: string;
  description: string;
  url: string;
}

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState('all');

  const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    category: 'events',
    title: '',
    description: '',
    url: '/images/collector-night.jpg',
  },
  {
    id: 2,
    type: 'image',
    category: 'events',
    title: '',
    description: '',
    url: '/images/police-discussion.jpg',
  },
  {
    id: 3,
    type: 'image',
    category: 'events',
    title: '',
    description: '',
    url: '/images/police-group.jpg',
  },
  {
    id: 4,
    type: 'image',
    category: 'events',
    title: '',
    description: '',
    url: '/images/police-demo.jpg',
  },
  {
    id: 5,
    type: 'image',
    category: 'events',
    title: '',
    description: '',
    url: '/images/news-drone.jpg',
  },
  {
    id: 6,
    type: 'image',
    category: 'events',
    title: '',
    description: '',
    url: '/images/news-techtrix.jpg',
  },

  {
    id: 7,
    type: 'image',
    category: 'projects',
    title: '',
    description: '',
    url: '/images/aeroguard-x1.jpg',
  },
  {
    id: 8,
    type: 'image',
    category: 'projects',
    title: '',
    description: '',
    url: '/images/urban-surveillance.jpg',
  },
  {
    id: 9,
    type: 'image',
    category: 'testing',
    title: '',
    description: '',
    url: '/images/weather-testing.jpg',
  },
];

  const categories = [
    { id: 'all', name: 'All Media', count: mediaItems.length },
    { id: 'projects', name: 'Projects', count: mediaItems.filter(i => i.category === 'projects').length },
    { id: 'testing', name: 'Testing', count: mediaItems.filter(i => i.category === 'testing').length },
    { id: 'events', name: 'Events', count: mediaItems.filter(i => i.category === 'events').length },
  ];

  const filteredMedia =
    filter === 'all' ? mediaItems : mediaItems.filter(item => item.category === filter);

  const openLightbox = (media: MediaItem) => setSelectedMedia(media);
  const closeLightbox = () => setSelectedMedia(null);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1.0, ease: [0.17, 0.55, 0.55, 1] } },
    enterFromLeft: { opacity: 0, x: -200, y: 0, transition: { duration: 1.0, ease: [0.17, 0.55, 0.55, 1] } },
    enterFromRight: { opacity: 0, x: 200, y: 0, transition: { duration: 1.0, ease: [0.17, 0.55, 0.55, 1] } },
  };

  const lightboxVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <>
      <Helmet>
        <title>Gallery - AEROVHYN Technologies</title>
        <meta
          name="description"
          content="Explore our gallery showcasing UAV projects, testing phases, and company events at AEROVHYN Technologies."
        />
      </Helmet>

      {/* Hero Section with Background Video */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/aerovhyn-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6 drop-shadow-lg"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 drop-shadow-md"
          >
            Explore our journey through projects, innovations, and achievements in aerospace technology
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-900 sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  filter === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat.name} ({cat.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredMedia.map((media, idx) => (
              <motion.div
                key={media.id}
                className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                variants={itemVariants}
                initial={idx % 2 === 0 ? "enterFromLeft" : "enterFromRight"}
                animate="visible"
                style={{ perspective: 600 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: (event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    const y = event.clientY - rect.top;
                    const midY = rect.height / 2;
                    const tilt = (y - midY) / midY * 5;
                    return tilt;
                  },
                  rotateY: (event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const midX = rect.width / 2;
                    const tilt = (midX - x) / midX * 5;
                    return tilt;
                  },
                  boxShadow: "0 10px 20px rgba(79, 70, 229, 0.4)", // Added a glowing shadow
                  transition: { duration: 0.2 },
                }}
                onMouseLeave={{ rotateX: 0, rotateY: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="relative h-72 bg-gray-900 overflow-hidden flex items-center justify-center">
                  <img
                    src={media.url}
                    alt={media.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="hover-spotlight" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-heading font-semibold mb-1 line-clamp-2">
                        {media.title}
                      </h3>
                      <p className="text-gray-200 text-sm line-clamp-2">{media.description}</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100"
                  >
                    <motion.button
                      onClick={() => openLightbox(media)}
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }} // Button scale-up on hover
                      className="w-8 h-8 bg-gray-700/90 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
                    >
                      <Eye className="h-4 w-4" />
                    </motion.button>
                    <motion.a
                      href={media.url}
                      download
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }} // Button scale-up on hover
                      className="w-8 h-8 bg-gray-700/90 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
                    >
                      <Download className="h-4 w-4" />
                    </motion.a>
                  </motion.div>
                </div>
                <div className="p-4">
                  <span className="px-2 py-1 bg-highlight/10 text-highlight text-xs rounded-full capitalize">
                    {media.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={lightboxVariants}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative max-w-6xl bg-gray-800 rounded-xl overflow-hidden text-white shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </button>
              {selectedMedia!.type === 'image' ? (
                <img
                  src={selectedMedia!.url}
                  alt={selectedMedia!.title}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <div className="w-full h-96 md:h-[500px]">
                  <iframe
                    src={selectedMedia!.url}
                    title={selectedMedia!.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-highlight mb-2">
                  {selectedMedia!.title}
                </h3>
                <p className="text-gray-400">{selectedMedia!.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}