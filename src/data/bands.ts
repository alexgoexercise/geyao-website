export interface Band {
  id: string;
  name: string;
  photo: string;
  description: string;
  genre: string;
  tags?: string[];
  members: string[]; // Array of person IDs
  formed: string;
  social: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  googleDrive: {
    url: string;
    description: string;
  };
  recruitmentNeeds?: string; // What the band needs to recruit for their performances/projects
}

export const bandsData: Band[] = [
  {
    id: "1",
    name: "One Minute",
    photo: "/hero-background.jpg",
    description: "A dynamic rock ensemble that blends traditional Chinese melodies with modern rock elements. Known for their energetic live performances and innovative soundscapes.",
    genre: "Rock Fusion",
    tags: ["rock", "fusion", "chinese", "modern"],
    members: ["2"],
    formed: "2022",
    social: {
      instagram: "@band1_official",
      youtube: "Band1Official",
      spotify: "Band 1"
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/1Band1_RockFusion_Recordings",
      description: "包含现场演出录音、排练录像、原创作品和音乐制作素材"
    },
    recruitmentNeeds: "Looking for a keyboardist to add rich harmonic layers to our rock fusion sound, and a backup vocalist who can handle both lead and harmony parts. Also seeking a merchandise manager for our upcoming tour."
  },
  {
    id: "2",
    name: "MADreamers",
    photo: "/globe.svg",
    description: "An electronic-pop group that creates immersive sound experiences through synthesizers and digital production. Their music transcends traditional boundaries.",
    genre: "Electronic Pop",
    tags: ["electronic", "pop", "synth", "digital"],
    members: ["3"],
    formed: "2023",
    social: {
      instagram: "@band2_electronic",
      youtube: "Band2Electronic",
      spotify: "Band 2"
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/2Band2_ElectronicPop_Productions",
      description: "电子音乐制作文件、DJ Set录音、合成器音效库和视觉艺术素材"
    },
    recruitmentNeeds: "Seeking a drummer who can integrate electronic beats with live percussion, and a visual artist for creating synchronized light shows during performances. Also looking for a remix engineer to help with track production."
  },
  {
    id: "3",
    name: "水泥幻象",
    photo: "/file.svg",
    description: "A classical crossover ensemble that brings together traditional string instruments with contemporary arrangements. Elegant and sophisticated performances.",
    genre: "Classical Crossover",
    tags: ["classical", "crossover", "strings", "contemporary"],
    members: ["4"], // Lisa Zhang, Emma Tan
    formed: "2021",
    social: {
      instagram: "@band3_classical",
      youtube: "Band3Classical",
      spotify: "Band 3"
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/3Band3_ClassicalCrossover_Scores",
      description: "古典交叉风格乐谱、弦乐四重奏录音、音乐会演出视频和编曲作品"
    },
    recruitmentNeeds: "Looking for a pianist specializing in classical and contemporary styles, and a cellist to complete our string ensemble. Also seeking a classical music arranger to help adapt popular songs into our crossover format."
  },
  {
    id: "4",
    name: "余香肉丝",
    photo: "/window.svg",
    description: "A jazz fusion quartet that explores the boundaries between traditional jazz and modern improvisation. Known for their complex harmonies and rhythmic innovation.",
    genre: "Jazz Fusion",
    tags: ["jazz", "fusion", "improvisation", "harmony"],
    members: ["4"],
    formed: "2023",
    social: {
      instagram: "@band4_jazz",
      youtube: "Band4Jazz",
      spotify: "Band 4"
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/4Band4_JazzFusion_Sessions",
      description: "爵士融合即兴演奏录音、和声练习素材、节奏创新实验和现场演出记录"
    },
    recruitmentNeeds: "Seeking a saxophone player with strong improvisation skills and a pianist who understands jazz harmony and chord progressions. Also looking for a jazz vocalist for our upcoming album project."
  },
  {
    id: "5",
    name: "安得万全法",
    photo: "/next.svg",
    description: "An acoustic folk group that tells stories through music. Their intimate performances and heartfelt lyrics create deep connections with audiences.",
    genre: "Acoustic Folk",
    tags: ["acoustic", "folk", "storytelling", "intimate"],
    members: ["5", "8", "9"],
    formed: "2022",
    social: {
      instagram: "@band5_folk",
      youtube: "Band5Folk",
      spotify: "Band 5"
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/5Band5_AcousticFolk_Stories",
      description: "民谣歌曲录音、原创故事歌词、吉他指弹教学和篝火音乐会记录"
    },
    recruitmentNeeds: "Looking for an acoustic guitarist who can fingerpick and play in various tunings, and a harmonica player for authentic folk sound. Also seeking a songwriter who specializes in folk narratives and storytelling."
  },
  {
    id: "6",
    name: "きっと、いつか幸せに",
    photo: "/vercel.svg",
    description: "A progressive metal band that pushes the boundaries of heavy music. Their technical prowess and complex compositions have earned them a dedicated following.",
    genre: "Progressive Metal",
    tags: ["progressive", "metal", "technical", "complex"],
    members: ["6"],
    formed: "2024",
    social: {
      instagram: "@band6_metal",
      youtube: "Band6Metal",
      spotify: "Band 6"
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/6Band6_ProgressiveMetal_Compositions",
      description: "前卫金属作品录音、技术性演奏教学、复杂编曲文件和重金属演出视频"
    },
    recruitmentNeeds: "Looking for a bassist who can handle complex progressive compositions and odd time signatures, and a second guitarist for intricate dual-guitar arrangements. Also seeking a metal vocalist with both clean and harsh vocal capabilities."
  },
  {
    id: "7",
    name: "Mission Hidden",
    photo: "/vercel.svg",
    description: "A progressive metal band that pushes the boundaries of heavy music. Their technical prowess and complex compositions have earned them a dedicated following.",
    genre: "Progressive Metal",
    tags: ["progressive", "metal", "technical", "complex"],
    members: ["9"],
    formed: "2024",
    social: {
      instagram: "@band6_metal",
      youtube: "Band6Metal",
      spotify: "Band 6"
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/6Band6_ProgressiveMetal_Compositions",
      description: "前卫金属作品录音、技术性演奏教学、复杂编曲文件和重金属演出视频"
    },
    recruitmentNeeds: "Looking for a bassist who can handle complex progressive compositions and odd time signatures, and a second guitarist for intricate dual-guitar arrangements. Also seeking a metal vocalist with both clean and harsh vocal capabilities."
  }
]; 