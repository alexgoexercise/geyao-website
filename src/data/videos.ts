export interface Video {
  id: string;
  title: string;
  description: string;
  filePath: string;
  thumbnail?: string;
  duration: number; // in seconds
  category: string;
  tags: string[];
  uploadDate: string;
  size: number; // in bytes
  resolution: string;
  bandId?: string; // 关联的乐队
  eventId?: string; // 关联的活动
}

export const videoCategories = [
  '演出视频',
  '排练视频', 
  '采访视频',
  '音乐视频',
  '幕后花絮',
  '其他'
];

export const videosData: Video[] = [
  // Band 1 视频
  {
    id: 'band1-001',
    title: 'Band 1 - 摇滚之夜现场演出',
    description: 'Band 1 在校园音乐节上的精彩摇滚演出，展现了他们独特的音乐风格。',
    filePath: '/videos/band1-rock-night-live.mp4',
    thumbnail: '/thumbnails/band1-rock-night-live.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['摇滚', '现场', '音乐节', 'Band 1'],
    uploadDate: '2024-01-15',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '1'
  },
  {
    id: 'band1-002',
    title: 'Band 1 - 新歌排练实录',
    description: 'Band 1 在排练室练习新歌的日常，展示了他们的创作过程。',
    filePath: '/videos/band1-new-song-rehearsal.mp4',
    thumbnail: '/thumbnails/band1-new-song-rehearsal.jpg',
    duration: 10,
    category: '排练视频',
    tags: ['排练', '新歌', '创作', 'Band 1'],
    uploadDate: '2024-01-20',
    size: 41943040, // 40MB
    resolution: '1920x1080',
    bandId: '1'
  },
  {
    id: 'band1-003',
    title: 'Band 1 - 成员采访',
    description: 'Band 1 成员分享他们的音乐理念和未来计划。',
    filePath: '/videos/band1-member-interview.mp4',
    thumbnail: '/thumbnails/band1-member-interview.jpg',
    duration: 10,
    category: '采访视频',
    tags: ['采访', '音乐理念', 'Band 1'],
    uploadDate: '2024-02-01',
    size: 31457280, // 30MB
    resolution: '1920x1080',
    bandId: '1'
  },

  // Band 2 视频
  {
    id: 'band2-001',
    title: 'Band 2 - 电子音乐展示',
    description: 'Band 2 的电子音乐现场表演，融合了现代科技与音乐艺术。',
    filePath: '/videos/band2-electronic-showcase.mp4',
    thumbnail: '/thumbnails/band2-electronic-showcase.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['电子音乐', '现场', '科技', 'Band 2'],
    uploadDate: '2024-01-25',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '2'
  },
  {
    id: 'band2-002',
    title: 'Band 2 - 录音室制作过程',
    description: 'Band 2 在录音室制作新歌的幕后花絮。',
    filePath: '/videos/band2-studio-production.mp4',
    thumbnail: '/thumbnails/band2-studio-production.jpg',
    duration: 10,
    category: '幕后花絮',
    tags: ['录音室', '制作', '幕后', 'Band 2'],
    uploadDate: '2024-02-05',
    size: 41943040, // 40MB
    resolution: '1920x1080',
    bandId: '2'
  },
  {
    id: 'band2-003',
    title: 'Band 2 - DJ现场表演',
    description: 'Band 2 在派对上的DJ现场表演。',
    filePath: '/videos/band2-dj-live-set.mp4',
    thumbnail: '/thumbnails/band2-dj-live-set.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['DJ', '派对', '现场', 'Band 2'],
    uploadDate: '2024-02-10',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '2'
  },

  // Band 3 视频
  {
    id: 'band3-001',
    title: 'Band 3 - 古典跨界音乐会',
    description: 'Band 3 的古典跨界音乐会演出，优雅而富有感染力。',
    filePath: '/videos/band3-classical-crossover.mp4',
    thumbnail: '/thumbnails/band3-classical-crossover.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['古典', '跨界', '音乐会', 'Band 3'],
    uploadDate: '2024-01-30',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '3'
  },
  {
    id: 'band3-002',
    title: 'Band 3 - 弦乐四重奏',
    description: 'Band 3 的弦乐四重奏表演，展现了精湛的演奏技巧。',
    filePath: '/videos/band3-string-quartet.mp4',
    thumbnail: '/thumbnails/band3-string-quartet.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['弦乐', '四重奏', '古典', 'Band 3'],
    uploadDate: '2024-02-15',
    size: 41943040, // 40MB
    resolution: '1920x1080',
    bandId: '3'
  },
  {
    id: 'band3-003',
    title: 'Band 3 - 现代古典融合',
    description: 'Band 3 将古典音乐与现代元素融合的创新表演。',
    filePath: '/videos/band3-modern-classical-fusion.mp4',
    thumbnail: '/thumbnails/band3-modern-classical-fusion.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['现代', '古典', '融合', 'Band 3'],
    uploadDate: '2024-02-20',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '3'
  },

  // Band 4 视频
  {
    id: 'band4-001',
    title: 'Band 4 - 爵士融合之夜',
    description: 'Band 4 的爵士融合音乐表演，充满即兴和创意。',
    filePath: '/videos/band4-jazz-fusion-night.mp4',
    thumbnail: '/thumbnails/band4-jazz-fusion-night.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['爵士', '融合', '即兴', 'Band 4'],
    uploadDate: '2024-02-01',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '4'
  },
  {
    id: 'band4-002',
    title: 'Band 4 - 柔美爵士演奏',
    description: 'Band 4 的柔美爵士音乐演奏，营造轻松愉悦的氛围。',
    filePath: '/videos/band4-smooth-jazz-session.mp4',
    thumbnail: '/thumbnails/band4-smooth-jazz-session.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['柔美爵士', '轻松', 'Band 4'],
    uploadDate: '2024-02-08',
    size: 41943040, // 40MB
    resolution: '1920x1080',
    bandId: '4'
  },
  {
    id: 'band4-003',
    title: 'Band 4 - 爵士即兴演奏',
    description: 'Band 4 的爵士即兴演奏，展现了高超的演奏技巧。',
    filePath: '/videos/band4-jazz-improvisation.mp4',
    thumbnail: '/thumbnails/band4-jazz-improvisation.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['爵士', '即兴', '技巧', 'Band 4'],
    uploadDate: '2024-02-12',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '4'
  },

  // Band 5 视频
  {
    id: 'band5-001',
    title: 'Band 5 - 民谣原声演出',
    description: 'Band 5 的民谣原声演出，用音乐讲述故事。',
    filePath: '/videos/band5-acoustic-folk-session.mp4',
    thumbnail: '/thumbnails/band5-acoustic-folk-session.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['民谣', '原声', '故事', 'Band 5'],
    uploadDate: '2024-02-05',
    size: 41943040, // 40MB
    resolution: '1920x1080',
    bandId: '5'
  },
  {
    id: 'band5-002',
    title: 'Band 5 - 篝火歌曲',
    description: 'Band 5 在篝火旁的温馨歌曲表演。',
    filePath: '/videos/band5-campfire-songs.mp4',
    thumbnail: '/thumbnails/band5-campfire-songs.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['篝火', '温馨', '民谣', 'Band 5'],
    uploadDate: '2024-02-10',
    size: 31457280, // 30MB
    resolution: '1920x1080',
    bandId: '5'
  },
  {
    id: 'band5-003',
    title: 'Band 5 - 民谣故事会',
    description: 'Band 5 用民谣音乐讲述生活故事。',
    filePath: '/videos/band5-folk-storytelling.mp4',
    thumbnail: '/thumbnails/band5-folk-storytelling.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['民谣', '故事', '生活', 'Band 5'],
    uploadDate: '2024-02-15',
    size: 41943040, // 40MB
    resolution: '1920x1080',
    bandId: '5'
  },

  // Band 6 视频
  {
    id: 'band6-001',
    title: 'Band 6 - 前卫金属演出',
    description: 'Band 6 的前卫金属音乐演出，充满力量和技巧。',
    filePath: '/videos/band6-progressive-metal-show.mp4',
    thumbnail: '/thumbnails/band6-progressive-metal-show.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['前卫金属', '力量', '技巧', 'Band 6'],
    uploadDate: '2024-02-01',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '6'
  },
  {
    id: 'band6-002',
    title: 'Band 6 - 重金属排练',
    description: 'Band 6 的重金属音乐排练过程。',
    filePath: '/videos/band6-heavy-metal-rehearsal.mp4',
    thumbnail: '/thumbnails/band6-heavy-metal-rehearsal.jpg',
    duration: 10,
    category: '排练视频',
    tags: ['重金属', '排练', 'Band 6'],
    uploadDate: '2024-02-08',
    size: 41943040, // 40MB
    resolution: '1920x1080',
    bandId: '6'
  },
  {
    id: 'band6-003',
    title: 'Band 6 - 技术金属演奏',
    description: 'Band 6 的技术金属音乐演奏，展现了复杂的编曲。',
    filePath: '/videos/band6-technical-metal-performance.mp4',
    thumbnail: '/thumbnails/band6-technical-metal-performance.jpg',
    duration: 10,
    category: '演出视频',
    tags: ['技术金属', '复杂', '编曲', 'Band 6'],
    uploadDate: '2024-02-12',
    size: 52428800, // 50MB
    resolution: '1920x1080',
    bandId: '6'
  }
];

export const getVideosByCategory = (category: string) => {
  return videosData.filter(video => video.category === category);
};

export const getVideosByBand = (bandId: string) => {
  return videosData.filter(video => video.bandId === bandId);
};

export const searchVideos = (query: string) => {
  if (!query.trim()) return videosData;
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  // 处理搜索查询，移除多余空格并创建多个变体
  const normalizedQuery = lowercaseQuery.replace(/\s+/g, ' '); // 多个空格替换为单个空格
  const noSpaceQuery = lowercaseQuery.replace(/\s+/g, ''); // 移除所有空格
  const spaceVariants = [
    lowercaseQuery,
    normalizedQuery,
    noSpaceQuery
  ];
  
  return videosData.filter(video => {
    // 检查标题
    const titleLower = video.title.toLowerCase();
    if (spaceVariants.some(variant => titleLower.includes(variant))) {
      return true;
    }
    
    // 检查描述
    const descLower = video.description.toLowerCase();
    if (spaceVariants.some(variant => descLower.includes(variant))) {
      return true;
    }
    
    // 检查标签
    if (video.tags.some(tag => {
      const tagLower = tag.toLowerCase();
      return spaceVariants.some(variant => tagLower.includes(variant));
    })) {
      return true;
    }
    
    // 检查分类
    const categoryLower = video.category.toLowerCase();
    if (spaceVariants.some(variant => categoryLower.includes(variant))) {
      return true;
    }
    
    // 检查乐队ID（通过bandId生成"Band X"格式进行匹配）
    if (video.bandId) {
      const bandName = `band ${video.bandId}`;
      const bandNameWithSpace = `band ${video.bandId}`;
      const bandNameNoSpace = `band${video.bandId}`;
      
      if (spaceVariants.some(variant => 
        bandName.includes(variant) || 
        bandNameWithSpace.includes(variant) || 
        bandNameNoSpace.includes(variant)
      )) {
        return true;
      }
    }
    
    return false;
  });
};

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

export const formatFileSize = (bytes: number): string => {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 B';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}; 