'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useCallback } from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Optimized spring config with lower stiffness for better performance
  const springConfig = { damping: 25, stiffness: 80 };
  const orb1X = useSpring(mouseX, springConfig);
  const orb1Y = useSpring(mouseY, springConfig);
  const orb2X = useSpring(mouseX, { ...springConfig, damping: 15 });
  const orb2Y = useSpring(mouseY, { ...springConfig, damping: 15 });
  const orb3X = useSpring(mouseX, { ...springConfig, damping: 35 });
  const orb3Y = useSpring(mouseY, { ...springConfig, damping: 35 });

  // Throttle mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Request animation frame for smoother updates
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x * 50); // Reduced movement range for better performance
      mouseY.set(y * 50);
    });
  }, [mouseX, mouseY]);

  useEffect(() => {
    let timeoutId: number;
    
    const throttledMouseMove = (e: MouseEvent) => {
      if (!timeoutId) {
        timeoutId = window.setTimeout(() => {
          handleMouseMove(e);
          timeoutId = 0;
        }, 16); // Approximately 60fps
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100" />
      
      {/* Interactive gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: orb1X,
            y: orb1Y,
            willChange: 'transform',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-70 bg-purple-300/70 blur-lg"
        />
        <motion.div
          style={{
            x: orb2X,
            y: orb2Y,
            willChange: 'transform',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-70 bg-blue-300/70 blur-lg"
        />
        <motion.div
          style={{
            x: orb3X,
            y: orb3Y,
            willChange: 'transform',
          }}
          className="absolute top-40 left-40 w-80 h-80 rounded-full opacity-70 bg-pink-300/70 blur-lg"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 text-balance"
        >
          Transform Ideas into
          <span className="block heading-gradient">
            AI-Powered Podcasts
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 text-balance"
        >
          Create engaging conversations between any two people using the power of AI. 
          Perfect for learning, entertainment, and content creation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="#download"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 md:text-lg md:px-10"
          >
            Start Creating Now
          </a>
        </motion.div>
      </div>
    </div>
  );
} 