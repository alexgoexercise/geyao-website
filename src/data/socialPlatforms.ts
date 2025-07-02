import { faInstagram, faYoutube, faLinkedin, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const socialPlatforms = [
  { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/nusgeyao', icon: faInstagram, color: 'from-pink-500 to-purple-600', variant: 'gradient', baseSize: 80, glow: 'shadow-pink-400/60', gradientType: 'linear' },
  { id: 'bilibili', platform: 'Bilibili', url: 'https://b23.tv/cArs6d6', icon: null, color: 'from-pink-400 to-pink-600', variant: 'bordered', baseSize: 72, glow: 'shadow-pink-300/50', gradientType: 'radial' },
  { id: 'xiaohongshu', platform: 'Xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/600e8a780000000001001246?xsec_token=YBVEVoQHx4oTJRLq1WO7MqLZtq7svYHnr8jfiFv-iwsBE=&xsec_source=app_share&xhsshare=CopyLink&appuid=60dab21800000000010008b1&apptime=1751461120&share_id=95d76212c5ba4d62981080bfffb0fee9', icon: null, color: 'bg-[#FF2442]', variant: 'solid', baseSize: 64, glow: 'shadow-red-500/60', gradientType: 'solid' },
  { id: 'tiktok', platform: 'TikTok', url: 'https://www.tiktok.com/', icon: faTiktok, color: 'from-black to-gray-700', variant: 'oval', baseSize: 96, glow: 'shadow-black/70', gradientType: 'linear' },
  { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com/@nusgeyao5810?si=rN27DsNcF6J5rT9v', icon: faYoutube, color: 'from-red-500 to-red-700', variant: 'shadow', baseSize: 88, glow: 'shadow-red-600/70', gradientType: 'radial' },
  { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/company/nusgeyao', icon: faLinkedin, color: 'from-blue-600 to-blue-800', variant: 'squircle', baseSize: 70, glow: 'shadow-blue-500/60', gradientType: 'linear' },
  { id: 'email', platform: 'Email', url: 'mailto:contact@nusgeyao.edu.sg', icon: faEnvelope, color: 'bg-[#22c55e]', variant: 'doubleborder', baseSize: 60, glow: 'shadow-green-400/60', gradientType: 'solid' },
  { id: 'phone', platform: 'Phone', url: 'tel:+65-1234-5678', icon: faPhone, color: 'from-emerald-500 to-emerald-700', variant: 'pulse', baseSize: 90, glow: 'shadow-emerald-400/60', gradientType: 'linear' },
  { id: 'music', platform: 'Spotify', url: 'https://spotify.com/artist/nusgeyao', icon: faSpotify, color: 'from-green-400 to-green-600', variant: 'gradient', baseSize: 78, glow: 'shadow-green-400/60', gradientType: 'radial' },
];

export default socialPlatforms; 