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
  casualTalk: string; // Random thoughts/casual talk
  topAlbums: string[]; // Top 6 favorite albums
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
    casualTalk: "Music is like cooking - you need the right ingredients, perfect timing, and a bit of improvisation to create something magical. Also, I collect vintage guitar picks from around the world!",
    topAlbums: [
      "Dark Side of the Moon - Pink Floyd",
      "Abbey Road - The Beatles",
      "Led Zeppelin IV - Led Zeppelin",
      "OK Computer - Radiohead",
      "Hotel California - Eagles",
      "Stairway to Heaven - Led Zeppelin"
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
    casualTalk: "I believe every song has its own personality. Sometimes I spend hours just humming melodies to my plants - they're surprisingly good listeners and never complain about my experimenting!",
    topAlbums: [
      "21 - Adele",
      "Back to Black - Amy Winehouse",
      "The Miseducation of Lauryn Hill - Lauryn Hill",
      "Lemonade - Beyoncé",
      "Blue - Joni Mitchell",
      "Tapestry - Carole King"
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
    casualTalk: "Life is all about rhythm - from your heartbeat to your morning coffee routine. I find drum patterns everywhere, even in the sound of rain on windows. My neighbors probably think I'm crazy!",
    topAlbums: [
      "In the Air Tonight - Phil Collins",
      "When the Levee Breaks - Led Zeppelin",
      "Bonham - John Bonham",
      "Bleed - Meshuggah",
      "Tom Sawyer - Rush",
      "Moby Dick - Led Zeppelin"
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
    casualTalk: "Bass lines are like the foundation of a house - you don't always notice them, but everything falls apart without them. I also have a secret obsession with 80s synth-pop!",
    topAlbums: [
      "Hysteria - Muse",
      "The Wall - Pink Floyd",
      "Moving Pictures - Rush",
      "Blood Sugar Sex Magik - Red Hot Chili Peppers",
      "Animals - Pink Floyd",
      "Portrait of Tracy - Jaco Pastorius"
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
    casualTalk: "I think synthesizers are time machines - they can transport you to the 80s, the future, or somewhere completely otherworldly. My studio is basically a spaceship with too many blinking lights!",
    topAlbums: [
      "Discovery - Daft Punk",
      "Random Access Memories - Daft Punk",
      "Kraftwerk - Computer World",
      "Oxygène - Jean-Michel Jarre",
      "Blade Runner Soundtrack - Vangelis",
      "Ambient 1: Music for Airports - Brian Eno"
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
    casualTalk: "People think classical music is stuffy, but it's actually full of drama, passion, and rebellion. Plus, my violin has traveled more countries than most people I know!",
    topAlbums: [
      "Four Seasons - Vivaldi",
      "Bach: Violin Concertos - Bach",
      "Paganini: 24 Caprices - Paganini",
      "Tchaikovsky: Violin Concerto - Tchaikovsky",
      "Brahms: Violin Concerto - Brahms",
      "Mendelssohn: Violin Concerto - Mendelssohn"
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
    casualTalk: "Good music criticism is like being a translator between artists and audiences. Also, I have an embarrassing weakness for cheesy 90s pop ballads - don't judge me!",
    topAlbums: [
      "Pet Sounds - The Beach Boys",
      "Sgt. Pepper's - The Beatles",
      "What's Going On - Marvin Gaye",
      "Revolver - The Beatles",
      "Highway 61 Revisited - Bob Dylan",
      "Rubber Soul - The Beatles"
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
    casualTalk: "PR is like being a professional storyteller - every band has an amazing story, you just need to find the right way to tell it. I collect vintage concert posters from the 70s!",
    topAlbums: [
      "1989 - Taylor Swift",
      "25 - Adele",
      "Lemonade - Beyoncé",
      "folklore - Taylor Swift",
      "When We All Fall Asleep - Billie Eilish",
      "Thank U, Next - Ariana Grande"
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
    casualTalk: "Being an MC is like being a bridge between the stage and the audience. I practice my introductions in the shower - my rubber duck gives the best feedback!",
    topAlbums: [
      "Live at Wembley - Queen",
      "MTV Unplugged - Nirvana",
      "Live Aid - Various Artists",
      "Woodstock - Various Artists",
      "The Last Waltz - The Band",
      "Live at Fillmore East - Allman Brothers"
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
    casualTalk: "Social media is like jazz - it's all about improvisation and reading the room. I have a secret Instagram account where I post pictures of dogs I meet on the street!",
    topAlbums: [
      "Anti - Rihanna",
      "Blonde - Frank Ocean",
      "Ctrl - SZA",
      "Good Kid, M.A.A.D City - Kendrick Lamar",
      "Channel Orange - Frank Ocean",
      "To Pimp a Butterfly - Kendrick Lamar"
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
    casualTalk: "Perfect sound is invisible - when I do my job right, nobody notices me. I also build custom speakers in my garage and test them way too loud for my neighbors' liking!",
    topAlbums: [
      "The Dark Side of the Moon - Pink Floyd",
      "OK Computer - Radiohead",
      "Pet Sounds - The Beach Boys",
      "Abbey Road - The Beatles",
      "Kind of Blue - Miles Davis",
      "Aja - Steely Dan"
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
    casualTalk: "Lighting is the secret sauce that transforms a performance from good to magical. I see the world in color temperatures - my friends think I'm weird for noticing every light bulb!",
    topAlbums: [
      "The Wall - Pink Floyd",
      "The Joshua Tree - U2",
      "OK Computer - Radiohead",
      "Dark Side of the Moon - Pink Floyd",
      "Led Zeppelin IV - Led Zeppelin",
      "Thriller - Michael Jackson"
    ]
  }
]; 