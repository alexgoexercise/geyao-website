export interface Band {
  id: string;
  name: string;
  photo: string;
  description: string;
  genre: string;
  members: string[]; // Array of person IDs
  formed: string;
  social: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  videos: {
    title: string;
    url: string;
    thumbnail?: string;
    duration: string;
  }[];
}

export const bandsData: Band[] = [
  {
    id: "1",
    name: "Band 1",
    photo: "/hero-background.jpg",
    description: "A dynamic rock ensemble that blends traditional Chinese melodies with modern rock elements. Known for their energetic live performances and innovative soundscapes.",
    genre: "Rock Fusion",
    members: ["1", "2", "3"], // Alex Chen, Sarah Lim, Marcus Wong
    formed: "2022",
    social: {
      instagram: "@band1_official",
      youtube: "Band1Official",
      spotify: "Band 1"
    },
    videos: [
      {
        title: "Live Performance at School Concert",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        duration: "3:45"
      },
      {
        title: "Rehearsal Session - New Song",
        url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        duration: "2:30"
      },
      {
        title: "Acoustic Version - Coffee House",
        url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        duration: "4:12"
      }
    ]
  },
  {
    id: "2",
    name: "Band 2",
    photo: "/globe.svg",
    description: "An electronic-pop group that creates immersive sound experiences through synthesizers and digital production. Their music transcends traditional boundaries.",
    genre: "Electronic Pop",
    members: ["5", "2"], // David Kim, Sarah Lim
    formed: "2023",
    social: {
      instagram: "@band2_electronic",
      youtube: "Band2Electronic",
      spotify: "Band 2"
    },
    videos: [
      {
        title: "Electronic Pop Showcase",
        url: "https://www.youtube.com/watch?v=ZZ5LpwO-An4",
        duration: "3:20"
      },
      {
        title: "Studio Recording Session",
        url: "https://www.youtube.com/watch?v=YykjpeuMNEk",
        duration: "5:15"
      },
      {
        title: "Live DJ Set at Party",
        url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        duration: "6:30"
      }
    ]
  },
  {
    id: "3",
    name: "Band 3",
    photo: "/file.svg",
    description: "A classical crossover ensemble that brings together traditional string instruments with contemporary arrangements. Elegant and sophisticated performances.",
    genre: "Classical Crossover",
    members: ["6", "4"], // Lisa Zhang, Emma Tan
    formed: "2021",
    social: {
      instagram: "@band3_classical",
      youtube: "Band3Classical",
      spotify: "Band 3"
    },
    videos: [
      {
        title: "Classical Crossover Concert",
        url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
        duration: "4:45"
      },
      {
        title: "String Quartet Performance",
        url: "https://www.youtube.com/watch?v=8jLOx1hD3_o",
        duration: "3:55"
      },
      {
        title: "Modern Classical Fusion",
        url: "https://www.youtube.com/watch?v=9cQlVww0zKo",
        duration: "5:20"
      }
    ]
  },
  {
    id: "4",
    name: "Band 4",
    photo: "/window.svg",
    description: "A jazz fusion quartet that explores the boundaries between traditional jazz and modern improvisation. Known for their complex harmonies and rhythmic innovation.",
    genre: "Jazz Fusion",
    members: ["4", "3", "1"], // Emma Tan, Marcus Wong, Alex Chen
    formed: "2023",
    social: {
      instagram: "@band4_jazz",
      youtube: "Band4Jazz",
      spotify: "Band 4"
    },
    videos: [
      {
        title: "Jazz Fusion Night",
        url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
        duration: "4:30"
      },
      {
        title: "Smooth Jazz Session",
        url: "https://www.youtube.com/watch?v=09R8_2nJtjg",
        duration: "3:40"
      },
      {
        title: "Jazz Improvisation",
        url: "https://www.youtube.com/watch?v=YVkUvmDQ3HY",
        duration: "7:15"
      }
    ]
  },
  {
    id: "5",
    name: "Band 5",
    photo: "/next.svg",
    description: "An acoustic folk group that tells stories through music. Their intimate performances and heartfelt lyrics create deep connections with audiences.",
    genre: "Acoustic Folk",
    members: ["2", "6"], // Sarah Lim, Lisa Zhang
    formed: "2022",
    social: {
      instagram: "@band5_folk",
      youtube: "Band5Folk",
      spotify: "Band 5"
    },
    videos: [
      {
        title: "Acoustic Folk Session",
        url: "https://www.youtube.com/watch?v=1G4isv_Fylg",
        duration: "3:25"
      },
      {
        title: "Campfire Songs",
        url: "https://www.youtube.com/watch?v=w1oM3kQpXRo",
        duration: "4:10"
      },
      {
        title: "Folk Storytelling",
        url: "https://www.youtube.com/watch?v=UptuU1T3y-c",
        duration: "5:45"
      }
    ]
  },
  {
    id: "6",
    name: "Band 6",
    photo: "/vercel.svg",
    description: "A progressive metal band that pushes the boundaries of heavy music. Their technical prowess and complex compositions have earned them a dedicated following.",
    genre: "Progressive Metal",
    members: ["1", "3", "5"], // Alex Chen, Marcus Wong, David Kim
    formed: "2024",
    social: {
      instagram: "@band6_metal",
      youtube: "Band6Metal",
      spotify: "Band 6"
    },
    videos: [
      {
        title: "Progressive Metal Show",
        url: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
        duration: "6:20"
      },
      {
        title: "Heavy Metal Rehearsal",
        url: "https://www.youtube.com/watch?v=LPn0KFlbqX8",
        duration: "4:35"
      },
      {
        title: "Metal Guitar Solo",
        url: "https://www.youtube.com/watch?v=0jgrCKhxE1s",
        duration: "3:50"
      }
    ]
  }
]; 