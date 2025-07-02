import type { SocialBubble } from '../types/socialBubble';

export function getBubbleClass(bubble: SocialBubble) {
  let base = '';
  // Gradient type
  if (bubble.gradientType === 'solid') {
    base = `${bubble.color}`;
  } else if (bubble.gradientType === 'radial') {
    if (bubble.id === 'bilibili') {
      base = 'bg-[radial-gradient(circle_at_60%_40%,#f9a8d4_0%,#be185d_100%)]';
    } else if (bubble.id === 'youtube') {
      base = 'bg-[radial-gradient(circle_at_50%_50%,#ef4444_0%,#b91c1c_100%)]';
    } else if (bubble.id === 'music' || bubble.id === 'spotify') {
      base = 'bg-[radial-gradient(circle_at_50%_50%,#4ade80_0%,#16a34a_100%)]';
    } else {
      base = 'bg-[radial-gradient(circle_at_50%_50%,#f472b6_0%,#be185d_100%)]';
    }
  } else {
    base = `bg-gradient-to-br ${bubble.color}`;
  }
  // Shape
  let shape = 'rounded-full';
  if (bubble.variant === 'oval') shape = 'rounded-[40%/50%]';
  if (bubble.variant === 'squircle') shape = 'rounded-[30%]';
  // Border/extra
  let border = '';
  if (bubble.variant === 'bordered') border = 'border-4 border-white/40';
  if (bubble.variant === 'doubleborder') border = 'border-4 border-white/60 ring-4 ring-primary/30';
  // Pulse
  let pulse = bubble.variant === 'pulse' ? 'animate-pulse' : '';
  // Glow/shadow
  let shadow = bubble.glow ? `shadow-2xl ${bubble.glow}` : 'shadow-2xl';
  return `${base} ${shape} ${border} ${pulse} ${shadow}`;
} 