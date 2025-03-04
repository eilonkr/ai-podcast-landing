'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    // For now, we'll just open the mail client
    window.location.href = `mailto:eilonkrauthammer@gmail.com?subject=AI Podcast Inquiry&body=${encodeURIComponent(message)}`;
    setStatus('success');
    setEmail('');
    setMessage('');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">About AI Podcast</h3>
            <p className="text-gray-300 mb-6">
              AI Podcast is revolutionizing content creation by leveraging cutting-edge AI technology 
              to generate natural-sounding conversations between any two people of your choice. 
              Whether you're a content creator, educator, or language learner, our platform 
              provides endless possibilities for creating engaging audio content.
            </p>
            <div className="flex space-x-4">
              {/* Add social media links here if needed */}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Send Message
              </motion.button>
            </form>
            {status === 'success' && (
              <p className="mt-4 text-green-400">Thank you for your message!</p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Podcast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 