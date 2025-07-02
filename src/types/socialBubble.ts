export interface SocialBubble {
  id: string;
  platform: string;
  url: string;
  icon: any; // FontAwesome icon definition or null for custom SVG
  color: string;
  variant?: string;
  baseSize?: number;
  glow?: string;
  gradientType?: 'linear' | 'radial' | 'solid';
  x: number;
  y: number;
  animationDuration: number;
  animationDelay: number;
  isVisible: boolean;
  size?: number;
} 