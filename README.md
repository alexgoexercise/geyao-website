# Geyao Music Website

A modern music community website built with Next.js, showcasing bands, musicians, and their music.

## 🎵 Features

### Band Management
- **Band Profiles**: Detailed band pages with photos, descriptions, and member information
- **Music Genres**: Categorized by musical styles and tags
- **Social Integration**: Links to Instagram, YouTube, and Spotify profiles
- **Video Links**: Each band can showcase their performance videos through external links

### Musician Profiles
- **Personal Pages**: Individual musician profiles with photos and bios
- **Musical Roles**: Display instruments and musical expertise
- **Top 10 Albums**: Personal favorite albums with artwork fetched from iTunes API
- **Contact Information**: QR codes and social media links

### Interactive Features
- **Advanced Search**: Search bands by name, members, genres, or tags
- **Tag Filtering**: Filter bands by musical styles and characteristics
- **Responsive Design**: Optimized for mobile and desktop devices
- **Modern UI**: Dark theme with smooth animations and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd geyao-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── bands/          # Band listing and detail pages
│   ├── people/         # Musician profile pages
│   ├── events/         # Event information
│   └── contact/        # Contact page
├── components/         # Reusable React components
│   ├── BandsGrid.tsx   # Band grid with search/filter
│   ├── PeopleGrid.tsx  # Musician grid
│   └── Navbar.tsx      # Navigation component
├── data/              # Static data files
│   ├── bands.ts       # Band information and video links
│   └── people.ts      # Musician profiles and albums
└── lib/               # Utility functions
```

## 🎯 Key Technologies

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React icons
- **Images**: Next.js Image optimization
- **External APIs**: iTunes Search API for album artwork
- **TypeScript**: Full type safety

## 🎨 Design Features

- **Dark Theme**: Professional dark color scheme
- **Gradient Accents**: Purple/blue gradient primary colors
- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Album Artwork**: Automatic fetching from iTunes API

## 📱 Pages

- **Home**: Welcome page with navigation
- **Bands**: Grid view of all bands with search and filtering
- **People**: Grid view of all musicians
- **Events**: Upcoming events and performances
- **Contact**: Contact information

## 🔗 External Integrations

- **iTunes API**: For fetching album artwork
- **YouTube**: Video links for band performances
- **Social Media**: Instagram, YouTube, Spotify integration
- **QR Codes**: For easy contact sharing

## 🛠️ Development

### Adding New Bands
Edit `src/data/bands.ts` to add new band information including:
- Basic info (name, description, genre)
- Member IDs
- Social media links
- Video URLs with titles and durations

### Adding New Musicians
Edit `src/data/people.ts` to add new musician profiles including:
- Personal information
- Musical roles and instruments
- Top 10 favorite albums
- Contact details

## 📄 License

This project is private and proprietary.
