'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from "lucide-react";
import socialPlatforms from '@/data/socialPlatforms';
import Bubble from '@/components/Bubble';
import { getCustomPulseStyles } from '@/lib/bubbleStyles';
import type { SocialBubble } from '@/types/socialBubble';
import { GENERAL_RECRUITMENT_NEEDS } from '@/data/recruitmentNeeds';

const ContactPage = () => {
  const [bubbles, setBubbles] = useState<SocialBubble[]>([]);
  const [animationKey, setAnimationKey] = useState(0);
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  // Check if two bubbles overlap considering their actual sizes and a safety margin
  const checkOverlap = (x1: number, y1: number, size1: number, x2: number, y2: number, size2: number, safetyMargin = 20) => {
    const radius1 = size1 / 2;
    const radius2 = size2 / 2;
    const minDistance = radius1 + radius2 + safetyMargin;
    const actualDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return actualDistance < minDistance;
  };

  // Generate random positions and animations, keeping bubbles fully in viewport and responsive
  const generateBubbles = useCallback(() => {
    // 确保只在客户端执行
    if (typeof window === 'undefined') {
      return;
    }
    
    const width = window.innerWidth || 1200;
    // Use visual viewport if available for better mobile experience
    const visualViewport = window.visualViewport;
    let height = window.innerHeight || 800;
    
    // For mobile, use visual viewport height if available and smaller than window height
    if (visualViewport && width < 640) {
      height = Math.min(height, visualViewport.height);
    }
    
    // Limit bubbles to top 2/3 of the screen
    const bubbleAreaHeight = height * (2/3);
    
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
    const minSpacing = isMobile ? (isSmallMobile ? 90 : 110) : 150; // 增大间距避免重叠
    const randomOffset = isMobile ? (isSmallMobile ? 5 : 10) : 80; // 减少随机偏移
    
    const newBubbles: SocialBubble[] = [];
    
    // Create a grid-based approach to avoid overlaps (only in top 2/3 area)
    const cols = Math.max(1, Math.floor((width - sidePadding * 2) / minSpacing));
    const rows = Math.max(1, Math.floor((bubbleAreaHeight - topPadding - bottomPadding) / minSpacing));
    const gridCapacity = cols * rows;
    const bubbleCount = socialPlatforms.length;
    
    const positions: { x: number; y: number }[] = [];
    
    // If grid can't fit all bubbles, use fallback strategy
    if (gridCapacity < bubbleCount) {
      // For mobile: adaptive columns based on screen size
      if (isMobile) {
        const fallbackCols = isSmallMobile ? 3 : 3; // 3 columns for mobile
        const fallbackRows = Math.ceil(bubbleCount / fallbackCols);
        const availableWidth = width - sidePadding * 2;
        const availableHeight = bubbleAreaHeight - topPadding - bottomPadding;
        
        // Ensure cells are large enough for bubbles
        const maxBubbleSize = Math.max(...socialPlatforms.map(p => (p.baseSize || 80) * scale));
        const minCellWidth = maxBubbleSize + 20; // 20px margin
        const minCellHeight = maxBubbleSize + 20;
        
        const cellWidth = Math.max(minCellWidth, availableWidth / fallbackCols);
        const cellHeight = Math.max(minCellHeight, availableHeight / fallbackRows);
        
        for (let i = 0; i < bubbleCount; i++) {
          const col = i % fallbackCols;
          const row = Math.floor(i / fallbackCols);
          const x = sidePadding + col * cellWidth + cellWidth / 2;
          const y = topPadding + row * cellHeight + cellHeight / 2;
          
          // Ensure position is within bubble area bounds
          const clampedX = Math.max(sidePadding + maxBubbleSize/2, Math.min(width - sidePadding - maxBubbleSize/2, x));
          const clampedY = Math.max(topPadding + maxBubbleSize/2, Math.min(bubbleAreaHeight - bottomPadding - maxBubbleSize/2, y));
          
          positions.push({ x: clampedX, y: clampedY });
        }
      } else {
        // Desktop fallback: expand grid slightly (in top 2/3 area)
        const fallbackSpacing = Math.min(120, (width - sidePadding * 2) / 4);
        const fallbackCols = Math.floor((width - sidePadding * 2) / fallbackSpacing);
        const fallbackRows = Math.ceil(bubbleCount / fallbackCols);
        
        for (let i = 0; i < bubbleCount; i++) {
          const col = i % fallbackCols;
          const row = Math.floor(i / fallbackCols);
          const x = sidePadding + col * fallbackSpacing + fallbackSpacing / 2;
          const y = topPadding + row * fallbackSpacing + fallbackSpacing / 2;
          
          // Ensure desktop fallback stays in top 2/3 area
          const clampedY = Math.min(y, bubbleAreaHeight - bottomPadding - 40); // 40px buffer
          positions.push({ x, y: clampedY });
        }
      }
    } else {
      // Normal grid generation (in top 2/3 area)
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = cols === 1 ? width / 2 : sidePadding + (i * (width - sidePadding * 2) / (cols - 1));
          const y = rows === 1 ? bubbleAreaHeight / 2 : topPadding + (j * (bubbleAreaHeight - topPadding - bottomPadding) / (rows - 1));
          positions.push({ x, y });
        }
      }
      
      // Shuffle positions only for normal grid
      for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
      }
    }
    
    socialPlatforms.forEach((platform, index) => {
      const size = (platform.baseSize || 80) * scale;
      let finalX = 0, finalY = 0;
      let attempts = 0;
      const maxAttempts = 20;
      
      // Ensure we have a position for each bubble
      if (index >= positions.length) {
        // Create emergency position (in top 2/3 area)
        const emergencyX = sidePadding + (index % 3) * ((width - sidePadding * 2) / 3);
        const emergencyY = topPadding + Math.floor(index / 3) * ((bubbleAreaHeight - topPadding - bottomPadding) / 3);
        positions.push({ x: emergencyX, y: emergencyY });
      }
      
      const position = positions[index];
      
      // Add some randomness to avoid too rigid grid (less on mobile in fallback mode)
      const useRandomOffset = !(gridCapacity < bubbleCount && isMobile);
      const offsetMultiplier = useRandomOffset ? randomOffset : (isMobile ? 15 : 30);
      
      do {
        const randomOffsetX = (Math.random() - 0.5) * offsetMultiplier;
        const randomOffsetY = (Math.random() - 0.5) * offsetMultiplier;
        
        // Calculate position considering bubble size (radius from edge)
        const radius = size / 2;
        finalX = Math.max(sidePadding + radius, Math.min(width - sidePadding - radius, position.x + randomOffsetX));
        finalY = Math.max(topPadding + radius, Math.min(bubbleAreaHeight - bottomPadding - radius, position.y + randomOffsetY));
        
        // Check for overlaps with already placed bubbles
        let hasOverlap = false;
        for (const existingBubble of newBubbles) {
          const existingX = (existingBubble.x / 100) * width;
          const existingY = (existingBubble.y / 100) * bubbleAreaHeight;
          const safetyMargin = isMobile ? (isSmallMobile ? 15 : 20) : 30;
          
          if (checkOverlap(finalX, finalY, size, existingX, existingY, existingBubble.size || 80, safetyMargin)) {
            hasOverlap = true;
            break;
          }
        }
        
        if (!hasOverlap) break;
        attempts++;
      } while (attempts < maxAttempts);
      
      const bubble: SocialBubble = {
        ...platform,
        gradientType: platform.gradientType as 'linear' | 'radial' | 'solid',
        size,
        x: (finalX / width) * 100,
        y: (finalY / bubbleAreaHeight) * 100,
        animationType: Math.random() > 0.5 ? 'float' : 'pulse',
        animationDuration: 3 + Math.random() * 4,
        animationDelay: Math.random() * 2,
        pulseDelay: Math.random() * 2,
        floatDelay: Math.random() * 2,
        isVisible: true,
      };
      
      newBubbles.push(bubble);
    });
    
    setBubbles(newBubbles);
    setAnimationKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === 'undefined') {
      return;
    }
    
    generateBubbles();
    
    // 禁用页面滚动
    document.body.style.overflow = 'hidden';
    
    const handleResize = () => {
      // 防抖：延迟重新布局以避免频繁触发
      setTimeout(() => {
        generateBubbles();
      }, 150);
    };
    
    const handleVisualViewportChange = () => {
      // 视觉视口变化时重新布局
      setTimeout(() => {
        generateBubbles();
      }, 150);
    };
    
    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
    
    // 监听视觉视口变化（移动端浏览器UI变化）
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualViewportChange);
    }
    
    // 清理函数：组件卸载时恢复滚动和移除监听器
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleVisualViewportChange);
      }
    };
  }, [generateBubbles]);

  const handleBubbleClick = (bubble: SocialBubble) => {
    // 直接打开链接，不隐藏气泡
    window.open(bubble.url, '_blank');
  };

  return (
    <>
      {/* 固定位置的Join Us按钮 */}
      <div className="fixed top-20 right-4 z-60">
        <button
          onClick={() => setIsJoinUsModalOpen(true)}
          className="animate-ping-custom transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-500/50 rounded-lg p-2 md:p-3 transform rotate-12"
        >
          <span className="font-join-us">
            Join Us
          </span>
        </button>
      </div>

      {/* Join Us Modal */}
      {isJoinUsModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full mx-4 relative border border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsJoinUsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4 font-postmodern-display">
                Join Us
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* 总招聘需求 */}
              <div className="bg-gray-900/50 rounded-lg p-6">
                <pre className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
                  {GENERAL_RECRUITMENT_NEEDS}
                </pre>
              </div>
              
              {/* 其他页面的提示 */}
              <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-600/30">
                <p className="text-yellow-300 text-sm font-medium">
                  💡 直选渠道请前往个人页面或乐队页面
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" 
           style={{ height: '100dvh', minHeight: '100vh' }}>
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
        <div className="absolute bottom-0 left-0 right-0 flex items-start justify-center z-10 pointer-events-none pt-8" 
             style={{ height: '33.33%' }}>
          <div className="flex items-center gap-4 md:gap-8">
            <motion.h1 
              key={animationKey}
              className="text-4xl md:text-6xl lg:text-7xl font-postmodern-display text-center tracking-tight"
              initial={{ 
                opacity: 0, 
                y: -30,
                scale: 0.95,
                color: "rgba(255, 255, 255, 0.25)"
              }}
              animate={{ 
                opacity: 1, 
                y: [0, 50, 0],
                scale: [1, 1.02, 1],
                color: [
                  "rgba(255, 255, 255, 0.25)",
                  "rgba(75, 85, 99, 0.8)",
                  "rgba(255, 255, 255, 1)"
                ]
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                y: {
                  times: [0, 0.6, 1],
                  duration: 0.6
                },
                scale: {
                  times: [0, 0.3, 1],
                  duration: 0.6
                },
                color: {
                  times: [0, 0.667, 1],
                  duration: 0.6,
                  ease: [0.7, 0, 0.3, 1]
                }
              }}
            >
              Contact Us
            </motion.h1>
            
            {/* Alumni Aunty Meme */}
            <motion.div
              key={`meme-${animationKey}`}
              className="flex-shrink-0"
              initial={{ 
                opacity: 0,
                scale: 0.8,
                rotate: -5
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              transition={{
                delay: 0.7,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
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
                <span className="text-xs text-gray-400 text-center px-2">MEME<br/>HERE</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Styles for Custom Bubble Animations */}
        {bubbles.length > 0 && (
          <style dangerouslySetInnerHTML={{
            __html: getCustomPulseStyles(bubbles)
          }} />
        )}
      </div>
    </>
  );
};

export default ContactPage; 