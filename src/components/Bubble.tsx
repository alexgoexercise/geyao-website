import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { getBubbleClass } from '../lib/bubbleStyles';
import type { SocialBubble } from '../types/socialBubble';

interface BubbleProps {
  bubble: SocialBubble;
  onClick: (bubble: SocialBubble) => void;
}

const Bubble: React.FC<BubbleProps> = ({ bubble, onClick }) => {
  // Icon size is 45% of bubble size, min 20, max 48
  const iconSize = Math.max(20, Math.min(48, Math.round((bubble.size || 80) * 0.45)));

  return (
    <motion.div
      className={`absolute cursor-pointer transition-all duration-500 ${bubble.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}
      style={{
        left: `${bubble.x}%`,
        top: `${bubble.y}%`,
        width: bubble.size,
        height: bubble.size,
        animation: bubble.isVisible ? `float ${bubble.animationDuration}s ease-in-out ${bubble.animationDelay}s infinite alternate` : 'none',
      }}
      onClick={() => onClick(bubble)}
    >
      <div
        className={`relative flex items-center justify-center hover:scale-110 transition-all duration-300 group ${getBubbleClass(bubble)}`}
        style={{ width: bubble.size, height: bubble.size, opacity: 0.85 }}
      >
        {/* Bubble shine/highlight */}
        <div
          className="absolute left-[10%] top-[10%] w-[80%] h-[45%] rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 100%)',
            filter: 'blur(12px)',
            opacity: 0.5,
          }}
        />
        {/* Bubble glow/illuminance */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 80%, transparent 100%)',
            opacity: 0.7,
            filter: 'blur(2px)',
          }}
        />
        {/* Bubble Content */}
        {bubble.id === 'bilibili' ? (
          <img
            src="/icons/bilibili.svg"
            alt="Bilibili"
            style={{ width: iconSize, height: iconSize }}
            className="group-hover:scale-125 transition-transform duration-300"
          />
        ) : bubble.id === 'xiaohongshu' ? (
          <img
            src="/icons/xiaohongshu.svg"
            alt="Xiaohongshu"
            style={{ width: iconSize, height: iconSize }}
            className="group-hover:scale-125 transition-transform duration-300"
          />
        ) : (
          <FontAwesomeIcon icon={bubble.icon} style={{ width: iconSize, height: iconSize }} className="text-white group-hover:scale-125 transition-transform duration-300" />
        )}
        {/* Platform Name */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {bubble.platform}
        </div>
      </div>
    </motion.div>
  );
};

export default Bubble; 