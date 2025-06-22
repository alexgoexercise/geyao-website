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
  department: string;
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
    department: "Instrumental",
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
    department: "Vocals",
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
    department: "Rhythm",
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
    department: "Instrumental",
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
    department: "Electronic",
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
    department: "Strings",
    bands: ["3", "5"] // Band 3, Band 5
  }
]; 