export interface Person {
  id: string;
  name: string;
  photo: string;
  description: string;
  contact: {
    email?: string;
    phone?: string;
    social?: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
  role: string;
  roles: string[];
  department: string | string[];
  bands: string[]; // Array of band IDs
  social: {
    wechat: string;
    instagram: string;
    telegram: string;
  };
  dream: string;
  dislike: string;
  topAlbums: string[]; // Top 10 favorite albums
}

export const peopleData: Person[] = [
  {
    id: "1",
    name: "Alex Chen",
    photo: "/hero-background.jpg",
    description: "Lead guitarist and founding member of Geyao Music. Passionate about creating innovative soundscapes that blend traditional Chinese music with modern rock elements.",
    contact: {
      email: "alex.chen@geyao.edu",
      phone: "+65 9123 4567",
      social: {
        instagram: "@alexchen_music",
        twitter: "@alexchen_geyao"
      }
    },
    role: "Lead Guitarist",
    roles: ["Guitar", "Vocals"],
    department: ["Performer", "Technician"],
    bands: ["1", "4", "6"], // Band 1, Band 4, Band 6
    social: {
      wechat: "/qr-codes/alex-chen-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "创建一个融合中西方音乐元素的世界级乐队",
    dislike: "过于商业化的音乐制作",
    topAlbums: [
      "Dark Side of the Moon - Pink Floyd",
      "Abbey Road - The Beatles",
      "Led Zeppelin IV - Led Zeppelin",
      "OK Computer - Radiohead",
      "Hotel California - Eagles",
      "Stairway to Heaven - Led Zeppelin",
      "Bohemian Rhapsody - Queen",
      "Wish You Were Here - Pink Floyd",
      "The Wall - Pink Floyd",
      "Rumours - Fleetwood Mac"
    ]
  },
  {
    id: "2",
    name: "Sarah Lim",
    photo: "/globe.svg",
    description: "Vocalist with a powerful voice that can range from soulful ballads to energetic pop anthems. Specializes in vocal arrangement and harmony coaching.",
    contact: {
      email: "sarah.lim@geyao.edu",
      phone: "+65 9234 5678",
      social: {
        instagram: "@sarahlim_vocalist",
        linkedin: "sarah-lim-music"
      }
    },
    role: "Lead Vocalist",
    roles: ["Vocals", "Piano"],
    department: "Performer",
    bands: ["1", "2", "5"], // Band 1, Band 2, Band 5
    social: {
      wechat: "/qr-codes/sarah-lim-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "在世界著名音乐厅举办个人演唱会",
    dislike: "失去嗓音的恐惧",
    topAlbums: [
      "21 - Adele",
      "Back to Black - Amy Winehouse",
      "The Miseducation of Lauryn Hill - Lauryn Hill",
      "Lemonade - Beyoncé",
      "Blue - Joni Mitchell",
      "Tapestry - Carole King",
      "What's Love Got to Do with It - Tina Turner",
      "I Never Loved a Man - Aretha Franklin",
      "Songs in A Minor - Alicia Keys",
      "Whitney Houston - Whitney Houston"
    ]
  },
  {
    id: "3",
    name: "Marcus Wong",
    photo: "/file.svg",
    description: "Drummer and percussion specialist. Brings dynamic rhythms and creative beats to every performance. Also handles sound engineering and production.",
    contact: {
      email: "marcus.wong@geyao.edu",
      phone: "+65 9345 6789",
      social: {
        instagram: "@marcus_drums",
        twitter: "@marcus_geyao"
      }
    },
    role: "Drummer",
    roles: ["Drums"],
    department: ["Performer", "Technician"],
    bands: ["1", "4", "6"], // Band 1, Band 4, Band 6
    social: {
      wechat: "/qr-codes/marcus-wong-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "开发革命性的电子鼓技术",
    dislike: "单调重复的节奏模式",
    topAlbums: [
      "In the Air Tonight - Phil Collins",
      "When the Levee Breaks - Led Zeppelin",
      "Bonham - John Bonham",
      "Bleed - Meshuggah",
      "Tom Sawyer - Rush",
      "Moby Dick - Led Zeppelin",
      "YYZ - Rush",
      "The Art of Dying - Gojira",
      "Toxicity - System of a Down",
      "Chop Suey! - System of a Down"
    ]
  },
  {
    id: "4",
    name: "Emma Tan",
    photo: "/window.svg",
    description: "Bassist and music theory expert. Provides the foundation for our sound while also contributing to songwriting and arrangement.",
    contact: {
      email: "emma.tan@geyao.edu",
      phone: "+65 9456 7890",
      social: {
        instagram: "@emma_bass",
        linkedin: "emma-tan-music"
      }
    },
    role: "Bassist",
    roles: ["Bass", "Guitar"],
    department: "Performer",
    bands: ["3", "4"], // Band 3, Band 4
    social: {
      wechat: "/qr-codes/emma-tan-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "创作一部以贝斯为主角的交响乐",
    dislike: "被忽视贝斯手的重要性",
    topAlbums: [
      "Hysteria - Muse",
      "The Wall - Pink Floyd",
      "Moving Pictures - Rush",
      "Blood Sugar Sex Magik - Red Hot Chili Peppers",
      "Animals - Pink Floyd",
      "Portrait of Tracy - Jaco Pastorius",
      "The Dark Side of the Moon - Pink Floyd",
      "Primus Sucks - Primus",
      "Teen Town - Weather Report",
      "Tommy the Cat - Primus"
    ]
  },
  {
    id: "5",
    name: "David Kim",
    photo: "/next.svg",
    description: "Keyboardist and electronic music producer. Specializes in synthesizers and digital music production, bringing modern electronic elements to our sound.",
    contact: {
      email: "david.kim@geyao.edu",
      phone: "+65 9567 8901",
      social: {
        instagram: "@davidkim_keys",
        twitter: "@david_geyao"
      }
    },
    role: "Keyboardist",
    roles: ["Piano", "Vocals"],
    department: ["Performer", "Technician"],
    bands: ["2", "6"], // Band 2, Band 6
    social: {
      wechat: "/qr-codes/david-kim-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "开发一款革命性的音乐合成器",
    dislike: "过时的MIDI设备",
    topAlbums: [
      "Discovery - Daft Punk",
      "Random Access Memories - Daft Punk",
      "Kraftwerk - Computer World",
      "Oxygène - Jean-Michel Jarre",
      "Blade Runner Soundtrack - Vangelis",
      "Ambient 1: Music for Airports - Brian Eno",
      "Selected Ambient Works - Aphex Twin",
      "Yoshida Daikiti - Vangelis",
      "Homework - Daft Punk",
      "The Man-Machine - Kraftwerk"
    ]
  },
  {
    id: "6",
    name: "Lisa Zhang",
    photo: "/vercel.svg",
    description: "Violinist and classical music specialist. Brings elegance and sophistication to our performances with her mastery of both classical and contemporary violin techniques.",
    contact: {
      email: "lisa.zhang@geyao.edu",
      phone: "+65 9678 9012",
      social: {
        instagram: "@lisa_violin",
        linkedin: "lisa-zhang-violin"
      }
    },
    role: "Violinist",
    roles: ["Violin", "Piano"],
    department: "Performer",
    bands: ["3", "5"], // Band 3, Band 5
    social: {
      wechat: "/qr-codes/lisa-zhang-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "将古典小提琴与现代音乐完美融合",
    dislike: "对小提琴的刻板印象",
    topAlbums: [
      "Four Seasons - Vivaldi",
      "Bach: Violin Concertos - Bach",
      "Paganini: 24 Caprices - Paganini",
      "Tchaikovsky: Violin Concerto - Tchaikovsky",
      "Brahms: Violin Concerto - Brahms",
      "Mendelssohn: Violin Concerto - Mendelssohn",
      "Mozart: Violin Sonatas - Mozart",
      "Beethoven: Violin Sonatas - Beethoven",
      "Sibelius: Violin Concerto - Sibelius",
      "Prokofiev: Violin Concertos - Prokofiev"
    ]
  },
  {
    id: "7",
    name: "Michael Chang",
    photo: "/hero-background.jpg",
    description: "Music critic and commentator with extensive experience in analyzing musical performances and providing insightful commentary on various genres and styles.",
    contact: {
      email: "michael.chang@geyao.edu",
      phone: "+65 9789 0123",
      social: {
        instagram: "@michael_music_critic",
        twitter: "@mchang_commentary"
      }
    },
    role: "Music Critic",
    roles: [],
    department: ["Commentator", "Publicity"],
    bands: ["1", "2", "3", "4", "5", "6"], // All bands
    social: {
      wechat: "/qr-codes/michael-chang-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "建立一个影响力巨大的音乐评论平台",
    dislike: "缺乏深度的音乐评论",
    topAlbums: [
      "Pet Sounds - The Beach Boys",
      "Sgt. Pepper's - The Beatles",
      "What's Going On - Marvin Gaye",
      "Revolver - The Beatles",
      "Highway 61 Revisited - Bob Dylan",
      "Rubber Soul - The Beatles",
      "What's Going On - Marvin Gaye",
      "The Velvet Underground & Nico - The Velvet Underground",
      "Abbey Road - The Beatles",
      "Are You Experienced - Jimi Hendrix"
    ]
  },
  {
    id: "8",
    name: "Jennifer Lee",
    photo: "/globe.svg",
    description: "Public relations specialist and marketing coordinator. Handles media relations, event promotion, and brand management for Geyao Music.",
    contact: {
      email: "jennifer.lee@geyao.edu",
      phone: "+65 9890 1234",
      social: {
        instagram: "@jen_publicity",
        linkedin: "jennifer-lee-pr"
      }
    },
    role: "PR Specialist",
    roles: [],
    department: "Publicity",
    bands: ["1", "2", "3", "4", "5", "6"], // All bands
    social: {
      wechat: "/qr-codes/jennifer-lee-wechat.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "让更多人了解并热爱独立音乐",
    dislike: "虚假的营销手段",
    topAlbums: [
      "1989 - Taylor Swift",
      "25 - Adele",
      "Lemonade - Beyoncé",
      "folklore - Taylor Swift",
      "When We All Fall Asleep - Billie Eilish",
      "Thank U, Next - Ariana Grande",
      "Future Nostalgia - Dua Lipa",
      "Sour - Olivia Rodrigo",
      "Positions - Ariana Grande",
      "evermore - Taylor Swift"
    ]
  },
  {
    id: "9",
    name: "Robert Tan",
    photo: "/file.svg",
    description: "Event commentator and MC for live performances. Specializes in engaging audiences and providing context for musical performances.",
    contact: {
      email: "robert.tan@geyao.edu",
      phone: "+65 9901 2345",
      social: {
        instagram: "@robert_mc",
        twitter: "@robert_commentator"
      }
    },
    role: "Event MC",
    roles: [],
    department: "Commentator",
    bands: ["1", "2", "3", "4", "5", "6"], // All bands
    social: {
      wechat: "/qr-code-default.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "成为最受欢迎的音乐活动主持人",
    dislike: "冷场的尴尬气氛",
    topAlbums: [
      "Live at Wembley - Queen",
      "MTV Unplugged - Nirvana",
      "Live Aid - Various Artists",
      "Woodstock - Various Artists",
      "The Last Waltz - The Band",
      "Live at Fillmore East - Allman Brothers",
      "Stop Making Sense - Talking Heads",
      "Live in Concert - Bob Marley",
      "Unplugged in New York - Nirvana",
      "One More Time - Daft Punk"
    ]
  },
  {
    id: "10",
    name: "Amanda Wong",
    photo: "/window.svg",
    description: "Social media manager and content creator. Handles digital marketing, social media campaigns, and online presence for all bands.",
    contact: {
      email: "amanda.wong@geyao.edu",
      phone: "+65 9012 3456",
      social: {
        instagram: "@amanda_social",
        linkedin: "amanda-wong-digital"
      }
    },
    role: "Social Media Manager",
    roles: [],
    department: "Publicity",
    bands: ["1", "2", "3", "4", "5", "6"], // All bands
    social: {
      wechat: "/qr-code-default.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "打造病毒式传播的音乐内容",
    dislike: "算法限制创意表达",
    topAlbums: [
      "Anti - Rihanna",
      "Blonde - Frank Ocean",
      "Ctrl - SZA",
      "Good Kid, M.A.A.D City - Kendrick Lamar",
      "Channel Orange - Frank Ocean",
      "To Pimp a Butterfly - Kendrick Lamar",
      "Lorde - Pure Heroine",
      "The Weeknd - After Hours",
      "Solange - When I Get Home",
      "Tyler, The Creator - Igor"
    ]
  },
  {
    id: "11",
    name: "Kevin Liu",
    photo: "/hero-background.jpg",
    description: "Sound engineer and technical specialist. Handles audio equipment setup, mixing, and live sound management for all performances.",
    contact: {
      email: "kevin.liu@geyao.edu",
      phone: "+65 9123 7890",
      social: {
        instagram: "@kevin_sound",
        linkedin: "kevin-liu-audio"
      }
    },
    role: "Sound Engineer",
    roles: [],
    department: "Technician",
    bands: ["1", "2", "3", "4", "5", "6"], // All bands
    social: {
      wechat: "/qr-code-default.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "开发完美的音响系统",
    dislike: "糟糕的音质和设备故障",
    topAlbums: [
      "The Dark Side of the Moon - Pink Floyd",
      "OK Computer - Radiohead",
      "Pet Sounds - The Beach Boys",
      "Abbey Road - The Beatles",
      "Kind of Blue - Miles Davis",
      "Aja - Steely Dan",
      "Random Access Memories - Daft Punk",
      "Thriller - Michael Jackson",
      "Rumours - Fleetwood Mac",
      "The Wall - Pink Floyd"
    ]
  },
  {
    id: "12",
    name: "Sophie Chen",
    photo: "/globe.svg",
    description: "Lighting technician and stage manager. Coordinates lighting design and stage setup for live performances and events.",
    contact: {
      email: "sophie.chen@geyao.edu",
      phone: "+65 9234 8901",
      social: {
        instagram: "@sophie_lights",
        twitter: "@sophie_stage"
      }
    },
    role: "Lighting Technician",
    roles: [],
    department: "Technician",
    bands: ["1", "2", "3", "4", "5", "6"], // All bands
    social: {
      wechat: "/qr-code-default.svg",
      instagram: "@default",
      telegram: "@lhmFZ"
    },
    dream: "创造令人难忘的视觉体验",
    dislike: "单调乏味的舞台设计",
    topAlbums: [
      "The Wall - Pink Floyd",
      "Dark Side of the Moon - Pink Floyd",
      "U2 - The Joshua Tree",
      "Radiohead - Kid A",
      "Björk - Homogenic",
      "Nine Inch Nails - The Downward Spiral",
      "David Bowie - The Rise and Fall of Ziggy Stardust",
      "Genesis - The Lamb Lies Down on Broadway",
      "King Crimson - In the Court of the Crimson King",
      "Yes - Close to the Edge"
    ]
  }
]; 