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
  department: string | string[];
  bands: string[]; // Array of band IDs
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
    department: ["Performer", "Technician"],
    bands: ["1", "4", "6"] // Band 1, Band 4, Band 6
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
    department: "Performer",
    bands: ["1", "2", "5"] // Band 1, Band 2, Band 5
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
    department: ["Performer", "Technician"],
    bands: ["1", "4", "6"] // Band 1, Band 4, Band 6
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
    department: "Performer",
    bands: ["3", "4"] // Band 3, Band 4
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
    department: ["Performer", "Technician"],
    bands: ["2", "6"] // Band 2, Band 6
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
    department: "Performer",
    bands: ["3", "5"] // Band 3, Band 5
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
    department: ["Commentator", "Publicity"],
    bands: ["1", "2", "3", "4", "5", "6"] // All bands
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
    department: "Publicity",
    bands: ["1", "2", "3", "4", "5", "6"] // All bands
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
    department: "Commentator",
    bands: ["1", "2", "3", "4", "5", "6"] // All bands
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
    department: "Publicity",
    bands: ["1", "2", "3", "4", "5", "6"] // All bands
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
    department: "Technician",
    bands: ["1", "2", "3", "4", "5", "6"] // All bands
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
    department: "Technician",
    bands: ["1", "2", "3", "4", "5", "6"] // All bands
  }
]; 