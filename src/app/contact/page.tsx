'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import socialPlatforms from '@/data/socialPlatforms';
import Bubble from '@/components/Bubble';
import { getCustomPulseStyles } from '@/lib/bubbleStyles';
import type { SocialBubble } from '@/types/socialBubble';

const ContactPage = () => {
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

  // Generate random positions and animations, keeping bubbles fully in viewport and responsive
  const generateBubbles = useCallback(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 375;
    // Use visual viewport if available for better mobile experience
    const visualViewport = typeof window !== 'undefined' && window.visualViewport;
    let height = typeof window !== 'undefined' ? window.innerHeight : 667;
    
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
    
    console.log(`Screen: ${width}x${height}, BubbleArea: ${bubbleAreaHeight.toFixed(0)}, Mobile: ${isMobile}, Grid: ${cols}x${rows}, Capacity: ${gridCapacity}, Bubbles: ${bubbleCount}`);
    
    const positions: { x: number; y: number }[] = [];
    
    // If grid can't fit all bubbles, use fallback strategy
    if (gridCapacity < bubbleCount) {
      console.log('Grid insufficient, using fallback layout');
      
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
        
        console.log(`Mobile fallback: ${fallbackCols}x${fallbackRows}, cell: ${cellWidth.toFixed(1)}x${cellHeight.toFixed(1)}, maxBubble: ${maxBubbleSize.toFixed(1)}`);
        
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
    
    // Check if we need to use 3x3 grid fallback
    let useGridFallback = false;
    let totalFailedAttempts = 0;
    
    socialPlatforms.forEach((platform, index) => {
      const size = (platform.baseSize || 80) * scale;
      let finalX = 0, finalY = 0;
      let attempts = 0;
      const maxAttempts = 20;
      
      // Ensure we have a position for each bubble
      if (index >= positions.length) {
        console.warn(`Not enough positions for bubble ${index}. Available: ${positions.length}`);
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
      
      if (attempts >= maxAttempts) {
        console.warn(`Could not find non-overlapping position for bubble ${index} after ${maxAttempts} attempts`);
        totalFailedAttempts++;
        useGridFallback = true;
      }
      
      console.log(`Bubble ${index} (${platform.platform}): position (${position.x.toFixed(1)}, ${position.y.toFixed(1)}) -> final (${finalX.toFixed(1)}, ${finalY.toFixed(1)}) [attempts: ${attempts}]`);
      
      const bubble: SocialBubble = {
        ...platform,
        gradientType: platform.gradientType as 'linear' | 'radial' | 'solid',
        size,
        x: (finalX / width) * 100,
        y: (finalY / bubbleAreaHeight) * 100, // 使用bubbleAreaHeight而不是height
        animationDuration: Math.random() * 20 + 15, // For float animation
        animationDelay: Math.random() * 0.1, // All bubbles explode together with slight randomness
        isVisible: true
      };
      
      newBubbles.push(bubble);
    });
    
    // If too many bubbles failed to find positions, use 3x3 grid fallback
    if (useGridFallback && totalFailedAttempts > bubbleCount / 2) {
      console.log('Using 3x3 grid fallback due to positioning failures');
      newBubbles.length = 0; // Clear existing bubbles
      
             // Calculate optimal size for 3x3 grid based on window size
       const availableWidth = width - sidePadding * 2;
       const availableHeight = bubbleAreaHeight - topPadding - bottomPadding;
       const cellWidth = availableWidth / 3;
       const cellHeight = availableHeight / 3;
       
       // Use smaller percentage of cell size to ensure no overlap, with responsive limits
       const maxBubbleSize = Math.min(cellWidth, cellHeight) * (isMobile ? 0.6 : 0.65); // 60-65% of cell size
       const gridSize = Math.max(50, Math.min(maxBubbleSize, isMobile ? 70 : 100)); // Smaller responsive limits
      
      socialPlatforms.forEach((platform, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        
        // Calculate grid positions (centered in bubble area)
        const cellWidth = availableWidth / 3;
        const cellHeight = availableHeight / 3;
        const gridX = sidePadding + col * cellWidth + cellWidth / 2;
        const gridY = topPadding + row * cellHeight + cellHeight / 2;
        
        const bubble: SocialBubble = {
          ...platform,
          gradientType: platform.gradientType as 'linear' | 'radial' | 'solid',
          size: gridSize,
          x: (gridX / width) * 100,
          y: (gridY / bubbleAreaHeight) * 100,
          animationDuration: Math.random() * 20 + 15,
          animationDelay: Math.random() * 0.1, // All bubbles explode together with slight randomness
          isVisible: true
        };
        
        newBubbles.push(bubble);
        console.log(`Grid bubble ${index} (${platform.platform}): position (${gridX.toFixed(1)}, ${gridY.toFixed(1)}) size: ${gridSize}`);
      });
    }
    
    setBubbles(newBubbles);
    setAnimationKey(prev => prev + 1); // Force re-animation on each generation
  }, []);

  useEffect(() => {
    generateBubbles();
    
    // 禁用页面滚动
    document.body.style.overflow = 'hidden';
    
    // 处理视口变化（特别是移动端地址栏隐藏/显示）
    const handleResize = () => {
      // 延迟重新生成以等待视口稳定
      setTimeout(() => {
        generateBubbles();
      }, 100);
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
              y: -30, // 开始位置向上30px
              scale: 0.95,
              color: "rgba(255, 255, 255, 0.25)" // 初始白色25%透明度
            }}
            animate={{ 
              opacity: 1, 
              y: [0, 50, 0], // 下沉动作：从0位置下沉50px再回到0
              scale: [1, 1.02, 1], // 轻微缩放增加动量感
              color: [
                "rgba(255, 255, 255, 0.25)", // 开始：白色25%透明度
                "rgba(75, 85, 99, 0.8)",     // 0.5秒后：深灰色80%透明度
                "rgba(255, 255, 255, 1)"    // 0.8秒后：纯白色
              ]
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94], // 自定义缓动函数，更有弹性
              y: {
                times: [0, 0.6, 1], // 控制下沉时机：60%时到达最低点
                duration: 0.6
              },
              scale: {
                times: [0, 0.3, 1], // 缩放在前30%时间内完成
                duration: 0.6
              },
              color: {
                times: [0, 0.667, 1], // 颜色变化时机：0秒开始，0.4秒(0.667*0.6)变深灰，0.6秒变回白色
                duration: 0.6,
                ease: [0.7, 0, 0.3, 1] // 先急后缓的贝塞尔曲线
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
              delay: 0.7, // 在Contact Us动画结束后开始
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
                // 如果图片加载失败，显示占位符
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* 占位符文本 */}
            <div className="hidden w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-700/50 rounded-lg border-2 border-dashed border-gray-500 flex items-center justify-center">
              <span className="text-xs text-gray-400 text-center px-2">MEME<br/>HERE</span>
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
           0%, 100% {
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

export default ContactPage; 