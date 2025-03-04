'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

const useCases = [
  {
    title: "Interactive Learning",
    description: "Create engaging educational conversations between historical figures or experts in any field. Perfect for students and lifelong learners.",
    icon: "🎓",
  },
  {
    title: "Content Creation",
    description: "Generate unique podcast content for your channel by simulating interviews with thought leaders or creating engaging storytelling formats.",
    icon: "🎙️",
  },
  {
    title: "Language Practice",
    description: "Practice language skills by generating natural conversations between native speakers. Improve pronunciation and comprehension.",
    icon: "🌍",
  },
];

export default function UseCases() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handlePlayPause = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
            Endless Possibilities
          </h2>
          <p className="mt-4 text-xl text-gray-600 text-balance">
            Discover how AI Podcast can transform your ideas into engaging conversations
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Background highlight effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: hoveredIndex === index ? 1 : 0.95,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Card content */}
              <motion.div
                className="relative bg-white p-6 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
                whileHover={{ y: -5 }}
                animate={{
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="text-4xl mb-4 transform-gpu"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {useCase.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 text-balance">{useCase.title}</h3>
                <p className="mt-2 text-gray-600 text-balance">{useCase.description}</p>
                
                <motion.button
                  onClick={() => handlePlayPause(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {playingIndex === index ? (
                    <>
                      <PauseIcon className="h-5 w-5 mr-2" />
                      Pause Demo
                    </>
                  ) : (
                    <>
                      <PlayIcon className="h-5 w-5 mr-2" />
                      Play Demo
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 