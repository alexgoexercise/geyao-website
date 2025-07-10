'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import socialPlatforms from '@/data/socialPlatforms';
import Bubble from '@/components/Bubble';
import { getCustomPulseStyles } from '@/lib/bubbleStyles';
import type { SocialBubble } from '@/types/socialBubble';

const ContactClient: React.FC = () => {
  const [bubbles, setBubbles] = useState<SocialBubble[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  // Check if two bubbles overlap considering their actual sizes and a safety margin
  const checkOverlap = (x1: number, y1: number, size1: number, x2: number, y2: number, size2: number, safetyMargin = 20) => {
    const radius1 = size1 / 2;
    const radius2 = size2 / 2;
    const minDistance = radius1 + radius2 + safetyMargin;
    const actualDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return actualDistance < minDistance;
  };

  // Generate random positions and animations, keeping bubbles fully in viewport and responsive (client only)
  const generateBubbles = useCallback(() => {
    const width = window.innerWidth;
    // Use visual viewport if available for better mobile experience
    const visualViewport = window.visualViewport;
    let height = window.innerHeight;

    // For mobile, use visual viewport height if available and smaller than window height
    if (visualViewport && width < 640) {
      height = Math.min(height, visualViewport.height);
    }

    // Limit bubbles to top 2/3 of the screen
    const bubbleAreaHeight = height * (2 / 3);

    const isMobile = width < 640;
    const isSmallMobile = width < 400; // Extra small phones

    // Adaptive scaling based on screen size
    let scale = 1;
    if (isSmallMobile) {
      scale = 0.45; // Very small on tiny screens
    } else if (isMobile) {
      scale = 0.55; // Small on regular mobile
    }

    // Mobile-specific parameters with extra bottom padding for browser UI
    const topPadding = isMobile ? (isSmallMobile ? 30 : 40) : 80;
    const bottomPadding = isMobile ? (isSmallMobile ? 30 : 40) : 80;
    const sidePadding = isMobile ? (isSmallMobile ? 30 : 40) : 80;
    const minSpacing = isMobile ? (isSmallMobile ? 90 : 110) : 150; // Increase spacing to avoid overlap
    const randomOffset = isMobile ? (isSmallMobile ? 40 : 50) : 80; // Reduce random offset

    const newBubbles: SocialBubble[] = [];

    // Grid-based approach to avoid overlaps (only in top 2/3 area)
    const cols = Math.max(1, Math.floor((width - sidePadding * 2) / minSpacing));
    const rows = Math.max(1, Math.floor((bubbleAreaHeight - topPadding - bottomPadding) / minSpacing));
    const gridCapacity = cols * rows;
    const bubbleCount = socialPlatforms.length;

    const positions: { x: number; y: number }[] = [];

    if (gridCapacity < bubbleCount) {
      // Fallback layout logic (same as before)... kept unchanged
      const fallbackCols = isMobile ? 3 : cols;
      const fallbackRows = Math.ceil(bubbleCount / fallbackCols);
      const availableWidth = width - sidePadding * 2;
      const availableHeight = bubbleAreaHeight - topPadding - bottomPadding;
      const cellWidth = availableWidth / fallbackCols;
      const cellHeight = availableHeight / fallbackRows;

      for (let i = 0; i < bubbleCount; i++) {
        const col = i % fallbackCols;
        const row = Math.floor(i / fallbackCols);
        const x = sidePadding + col * cellWidth + cellWidth / 2;
        const y = topPadding + row * cellHeight + cellHeight / 2;
        positions.push({ x, y });
      }
    } else {
      // Normal grid generation
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = cols === 1 ? width / 2 : sidePadding + (i * (width - sidePadding * 2)) / (cols - 1);
          const y = rows === 1 ? bubbleAreaHeight / 2 : topPadding + (j * (bubbleAreaHeight - topPadding - bottomPadding)) / (rows - 1);
          positions.push({ x, y });
        }
      }
      // Shuffle positions
      for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
      }
    }

    // Generate bubble props
    socialPlatforms.forEach((platform, index) => {
      const size = (platform.baseSize || 80) * scale;
      const position = positions[index % positions.length];
      const offsetX = (Math.random() - 0.5) * randomOffset;
      const offsetY = (Math.random() - 0.5) * randomOffset;

      const finalX = Math.max(sidePadding + size / 2, Math.min(width - sidePadding - size / 2, position.x + offsetX));
      const finalY = Math.max(topPadding + size / 2, Math.min(bubbleAreaHeight - bottomPadding - size / 2, position.y + offsetY));

      newBubbles.push({
        ...platform,
        gradientType: platform.gradientType as 'linear' | 'radial' | 'solid',
        size,
        x: (finalX / width) * 100,
        y: (finalY / bubbleAreaHeight) * 100,
        animationDuration: Math.random() * 20 + 15,
        animationDelay: Math.random() * 0.1,
        isVisible: true,
      });
    });

    setBubbles(newBubbles);
    setAnimationKey((prev) => prev + 1); // Trigger animations
  }, []);

  useEffect(() => {
    generateBubbles();

    document.body.style.overflow = 'hidden';
    const handleResize = () => setTimeout(generateBubbles, 100);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, [generateBubbles]);

  const handleBubbleClick = (bubble: SocialBubble) => {
    window.open(bubble.url, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" style={{ height: '100dvh', minHeight: '100vh' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Top 2/3: Floating Bubbles */}
      <div className="absolute inset-0 z-20" style={{ height: '66.67%' }}>
        {bubbles.map((bubble) => (
          <Bubble key={`${bubble.id}-${animationKey}`} bubble={bubble} onClick={handleBubbleClick} />
        ))}
      </div>

      {/* Bottom 1/3: Contact Us Title with Meme */}
      <div className="absolute bottom-8 md:bottom-0 left-0 right-0 flex items-start justify-center z-10 pointer-events-none pt-8" style={{ height: '33.33%' }}>
        <div className="flex items-center gap-4 md:gap-8">
          <motion.h1
            key={animationKey}
            className="text-4xl md:text-6xl lg:text-7xl font-postmodern-display text-center tracking-tight"
            initial={{ opacity: 0, y: -30, scale: 0.95, color: 'rgba(255, 255, 255, 0.25)' }}
            animate={{
              opacity: 1,
              y: [0, 50, 0],
              scale: [1, 1.02, 1],
              color: ['rgba(255, 255, 255, 0.25)', 'rgba(75, 85, 99, 0.8)', 'rgba(255, 255, 255, 1)'],
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              y: { times: [0, 0.6, 1], duration: 0.6 },
              scale: { times: [0, 0.3, 1], duration: 0.6 },
              color: { times: [0, 0.667, 1], duration: 0.6, ease: [0.7, 0, 0.3, 1] },
            }}
          >
            Contact Us
          </motion.h1>

          {/* Alumni Aunty Meme */}
          <motion.div
            key={`meme-${animationKey}`}
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              src="/alumni-aunty-meme.png"
              alt="Alumni aunty meme"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
              width={112}
              height={112}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-700/50 rounded-lg border-2 border-dashed border-gray-500 flex items-center justify-center">
              <span className="text-xs text-gray-400 text-center px-2">MEME<br />HERE</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-25px) translateX(20px) rotate(3deg);
          }
          50% {
            transform: translateY(-15px) translateX(-25px) rotate(-2deg);
          }
          75% {
            transform: translateY(-35px) translateX(15px) rotate(3deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }

        @keyframes floatMobile {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(10px) rotate(2deg);
          }
          50% {
            transform: translateY(-10px) translateX(-12px) rotate(-1deg);
          }
          75% {
            transform: translateY(-20px) translateX(8px) rotate(2deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }

        @media (max-width: 640px) {
          .float-animation {
            animation-name: floatMobile !important;
          }
        }

        @keyframes iconVibrate {
          0%,
          100% {
            transform: translateX(0px) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateX(2px) translateY(-1px) rotate(1deg);
          }
          50% {
            transform: translateX(-2px) translateY(1px) rotate(-1deg);
          }
          75% {
            transform: translateX(1px) translateY(-2px) rotate(0.5deg);
          }
        }
        .group:hover .icon-vibrate {
          animation: iconVibrate 0.3s ease-in-out infinite;
        }

        /* Custom pulse animations for each bubble */
        ${getCustomPulseStyles(bubbles)}
      `}</style>
    </div>
  );
};

export default ContactClient; 