export interface Person {
  id: string;
  name: string;
  photo?: string;
  description?: string;
  contact?: {
    email?: string;
    phone?: string;
    social?: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
  role?: string;
  roles?: string[];
  department?: string | string[];
  bands?: string[]; // Array of band IDs
  social?: {
    wechat?: string;
    instagram?: string;
    telegram?: string;
  };
  casualTalk?: string; // Random thoughts/casual talk
  topAlbums?: string[]; // Top 6 favorite albums
  recruitmentNeeds?: string; // What they need to recruit for their projects/collaborations
}

export const peopleData: Person[] = [
  {
    id: "1",
    name: "Ge Siyuan",
    photo: "/photos/Ge_Siyuan.jpeg",
    roles: ["Guitar"],
    department: ["Performer"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "Sh1ki_i",
      telegram: "@Sh1ki_i"
    },
    casualTalk: "I extremely hate mandopop. Actually listen to hip-hop more than band music.",
    topAlbums: [
      "Rust in Peace - Megadeth",
      "Periphery III",
      "Around the Fur - Deftones",
      "Augment - Erra",
      "A Great Chaos - Ken Carson",
      "Whole Lotta Red - Playboi Carti"
    ],
    recruitmentNeeds: "Looking for a metal drummer and a singer. Contact me for direct audition."
  },
  {
    id: "2",
    name: "Wang Qiulin | 大岛老师",
    photo: "/photos/Wang_Qiulin.jpg",
    roles: ["Keys"],
    department: ["Performer"],
    bands: ["1"],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@JuliantheWang"
    },
    casualTalk: "An INFJ whom can be found drinking coffee or alcohol most of the time, while listening to anything other than pop music 99% of the time.",
    topAlbums: [
      "丑奴儿 - 草东没有派对",
      "瓦合 - 草东没有派对",
      "Go Slow - deca joins",
      "Chopin: Piano Concertos No.1 & 2 - Polish Festial Orchestra, Krystian Zimerman",
      "吾日三省吾身 - 老王乐队",
      "Opus - Ryuichi Sakamoto"
    ],
    recruitmentNeeds: "I am looking for a good electric bassist / double bass player to work on some jazz genres. Contact me for direct audition."
  },
  {
    id: "3",
    name: "Zhao Jiajun | PointLeZzZ",
    photo: "/photos/Zhao_Jiajun.jpeg",
    roles: ["Rap"],
    department: ["Performer"],
    bands: ["2"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "4",
    name: "赵李修齐",
    photo: "/photos/Zhao_Lixiuqi.jpg",
    roles: ["Drums", "Bass"],
    department: "Performer",
    bands: ["3", "4"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "alex_go_sleep",
      telegram: "@alexgosleep"
    },
    casualTalk: "V我50",
    topAlbums: [
      "David Tao (陶喆同名专辑)",
      "15",
      "Appetite For Destruction",
      "Voodoo",
      "Slipknot",
      "阿密特意识专辑"
    ],
  },
  {
    id: "5",
    name: "Nie Xinyi Cynthia | 麻薯猫Moko",
    photo: "/photos/Nie_Xinyi.jpg",
    description: "Keyboardist and electronic music producer. Specializes in synthesizers and digital music production, bringing modern electronic elements to our sound.",
    roles: ["Violin"],
    department: ["Performer"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "sinncxynie",
      telegram: "@sinncxynie"
    },
    casualTalk: "🌙",
    topAlbums: [
      "Biitersweet - Polyphia",
      "河北墨麒麟 - 万能青年旅店",
      "Stairway to Heaven - Led Zeppelin",
      "Only One - Natural TV",
      "Sacred Play Secret Place - Matryoshika",
      "Merry Christmas Mr. Lawence - 坂本龙一"
    ],
  },
  {
    id: "6",
    name: "Li Yitong | Nat",
    photo: "/photos/Li_Yitong.jpeg",
    roles: ["Bass"],
    department: "Performer",
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "natalietangli",
      telegram: "@whoisnatalieee"
    },
    casualTalk: "I like metal guitarists :3",
    topAlbums: [
      "Blackwater Park - Opeth",
      "Fatalism - Polaris",
      "The Chosen - Enterprise Earth",
      "Killers - Iron Maiden",
      "In Utero - Nirvana",
      "Ultraviolence - Lana Del Rey"
    ],
    recruitmentNeeds: "Looking for a metal drummer who can play fast double kicks. Contact me for direct audition."
  },
  {
    id: "7",
    name: "Yang Haorui",
    photo: "/photos/Yang_Haorui.jpeg",
    roles: ["Guitar"],
    department: "Performer",
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "Howbayy",
      telegram: "@bhuio612"
    },
    topAlbums: [
      "Bold as love",
      "Cascade",
      "T&C"
    ],
  },
  {
    id: "8",
    name: "Wu Xiangjiekang | Mes",
    photo: "/photos/Wu_Xiangjiekang.jpeg",
    roles: ["Drums"],
    department: ["Performer"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "mes_kieran",
      telegram: "@MesKieran"
    },
    casualTalk: "intj",
    topAlbums: [
      "丑奴儿",
      "瓦合",
      "1989",
      "冀西南林路行",
      "Bow Down",
    ],
  },
  {
    id: "9",
    name: "Lu Haomeng",
    photo: "/photos/Lu_Haomeng.JPG",
    roles: ["Keys"],
    department: ["Performer", "Technician"],
    bands: ["5", "7"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "lhhhhhhhhhhhhm",
      telegram: "@lhmFZ"
    },
    casualTalk: "我是奶龙",
    topAlbums: [
      "相见恨晚 - 腰",
      "谬误与偏见 - 古田小伙",
      "无能的力量 - 崔健",
      "The Death Defying Unicorn - Motorpsycho",
      "Larks' Tongues in Aspic - King Crimson",
      "B-2 Unit - Ryuichi Sakamoto"
    ],
    recruitmentNeeds: "招一个玩电子音乐与合成器，想长期玩的。直接私信我就好。"
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
    casualTalk: "Social media is like jazz - it's all about improvisation and reading the room. I have a secret Instagram account where I post pictures of dogs I meet on the street!",
    topAlbums: [
      "Anti - Rihanna",
      "Blonde - Frank Ocean",
      "Ctrl - SZA",
      "Good Kid, M.A.A.D City - Kendrick Lamar",
      "Channel Orange - Frank Ocean",
      "To Pimp a Butterfly - Kendrick Lamar"
    ],
    recruitmentNeeds: "Seeking content creators who can produce short-form video content for TikTok and Instagram Reels, and social media influencers for cross-promotional collaborations. Also need copywriters for engaging social media captions and blog posts."
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
    casualTalk: "Perfect sound is invisible - when I do my job right, nobody notices me. I also build custom speakers in my garage and test them way too loud for my neighbors' liking!",
    topAlbums: [
      "The Dark Side of the Moon - Pink Floyd",
      "OK Computer - Radiohead",
      "Pet Sounds - The Beach Boys",
      "Abbey Road - The Beatles",
      "Kind of Blue - Miles Davis",
      "Aja - Steely Dan"
    ],
    recruitmentNeeds: "Looking for assistant sound engineers to help with live sound setup and mixing, and audio equipment technicians for maintenance and repairs. Interested in collaborating with musicians on experimental audio projects and soundscape compositions."
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
    casualTalk: "Lighting is the secret sauce that transforms a performance from good to magical. I see the world in color temperatures - my friends think I'm weird for noticing every light bulb!",
    topAlbums: [
      "The Wall - Pink Floyd",
      "The Joshua Tree - U2",
      "OK Computer - Radiohead",
      "Dark Side of the Moon - Pink Floyd",
      "Led Zeppelin IV - Led Zeppelin",
      "Thriller - Michael Jackson"
    ],
    recruitmentNeeds: "Seeking lighting designers with experience in concert and theatrical lighting, and stage assistants for equipment setup and management. Looking for visual artists to create immersive stage experiences and collaborate on multimedia performances."
  }
]; 