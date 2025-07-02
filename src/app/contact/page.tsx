'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import socialPlatforms from '@/data/socialPlatforms';
import Bubble from '@/components/Bubble';
import type { SocialBubble } from '@/types/socialBubble';

const ContactPage = () => {
  const [bubbles, setBubbles] = useState<SocialBubble[]>([]);
  const [clickedBubbles, setClickedBubbles] = useState<Set<string>>(new Set());

  // Generate random positions and animations, keeping bubbles fully in viewport and responsive
  const generateBubbles = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 375;
    const height = typeof window !== 'undefined' ? window.innerHeight : 667;
    const isMobile = width < 640;
    const scale = isMobile ? 0.6 : 1; // 60% size on mobile
    const padding = 12; // px, extra margin from edge
    const newBubbles = socialPlatforms.map((platform) => {
      const size = (platform.baseSize || 80) * scale;
      const maxX = width - size - padding;
      const maxY = height - size - padding;
      const xPx = Math.random() * maxX + padding / 2;
      const yPx = Math.random() * (maxY * 0.7) + height * 0.18;
      return {
        ...platform,
        gradientType: platform.gradientType as 'linear' | 'radial' | 'solid',
        size,
        x: (xPx / width) * 100,
        y: (yPx / height) * 100,
        animationDuration: Math.random() * 20 + 15,
        animationDelay: Math.random() * 5,
        isVisible: true
      };
    });
    setBubbles(newBubbles);
    setClickedBubbles(new Set());
  };

  useEffect(() => {
    generateBubbles();
    const handleResize = () => generateBubbles();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBubbleClick = (bubble: SocialBubble) => {
    setBubbles(prev => prev.map(b =>
      b.id === bubble.id ? { ...b, isVisible: false } : b
    ));
    setClickedBubbles(prev => new Set([...prev, bubble.id]));
    setTimeout(() => {
      window.open(bubble.url, '_blank');
    }, 300);
  };

  const handleRefresh = () => {
    generateBubbles();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Responsive Content Container */}
      <div className="relative z-10 text-center pt-20 pb-10 px-4 sm:px-8 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
          Connect With Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-2">
          Click on the floating bubbles to explore our social media platforms and get in touch
        </p>
        {/* Stats */}
        <div className="flex justify-center gap-8 mt-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{socialPlatforms.length}</div>
            <div className="text-sm text-gray-400">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{clickedBubbles.size}</div>
            <div className="text-sm text-gray-400">Explored</div>
          </div>
        </div>
      </div>

      {/* Fixed Reset Bubbles Button */}
      <button
        onClick={handleRefresh}
        className="fixed bottom-8 right-8 z-50 px-6 py-3 bg-primary/20 border border-primary/40 rounded-full text-primary hover:bg-primary/30 transition-all duration-300 backdrop-blur-sm pointer-events-auto"
      >
        Reset Bubbles
      </button>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-20">
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} bubble={bubble} onClick={handleBubbleClick} />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400 text-sm z-30">
        <p>💡 Click any bubble to explore • Refresh to reset all bubbles</p>
      </div>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(2deg);
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(-1deg);
          }
          75% {
            transform: translateY(-25px) translateX(5px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage; 