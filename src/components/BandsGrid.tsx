"use client";

import { useState } from "react";
import { bandsData, Band } from "@/data/bands";
import { peopleData } from "@/data/people";
import { Instagram, Youtube, Music, Users, Calendar, Play, Guitar, Mic, Drum, Piano, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const genreIcons = {
  "Rock Fusion": Guitar,
  "Electronic Pop": Music2,
  "Classical Crossover": Music,
  "Jazz Fusion": Mic,
  "Acoustic Folk": Guitar,
  "Progressive Metal": Drum
};

const BandsGrid = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [hoveredBand, setHoveredBand] = useState<string | null>(null);

  const filteredBands = selectedGenre === "all" 
    ? bandsData 
    : bandsData.filter(band => band.genre === selectedGenre);

  const genres = ["all", ...Array.from(new Set(bandsData.map(b => b.genre)))];

  const getBandMembers = (memberIds: string[]) => {
    return peopleData.filter(person => memberIds.includes(person.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Bands
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the diverse musical talents and creative collaborations that define Geyao Music
          </p>
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {genres.map((genre) => {
            const Icon = genre === "all" ? Users : genreIcons[genre as keyof typeof genreIcons];
            return (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedGenre === genre
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span>{genre}</span>
              </button>
            );
          })}
        </div>

        {/* Bands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBands.map((band) => {
            const bandMembers = getBandMembers(band.members);
            return (
              <Link
                key={band.id}
                href={`/bands/${band.id}`}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
                onMouseEnter={() => setHoveredBand(band.id)}
                onMouseLeave={() => setHoveredBand(null)}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Band Photo and Info */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-colors duration-300">
                        <Image
                          src={band.photo}
                          alt={band.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                        {band.genre}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{band.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>Formed {band.formed}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{bandMembers.length} members</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {band.description}
                      </p>
                    </div>
                  </div>

                  {/* Members */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Users size={16} />
                      Members
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {bandMembers.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm"
                        >
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              src={member.photo}
                              alt={member.name}
                              width={24}
                              height={24}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-gray-300">{member.name}</span>
                          <span className="text-primary text-xs">({member.role})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Videos */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Play size={16} />
                      Videos
                    </h4>
                    <div className="space-y-2">
                      {band.videos.slice(0, 2).map((video, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{video.title}</span>
                        </div>
                      ))}
                      {band.videos.length > 2 && (
                        <div className="text-primary text-sm font-medium">
                          +{band.videos.length - 2} more videos
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {band.social.instagram && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(`https://instagram.com/${band.social.instagram.replace('@', '')}`, '_blank');
                        }}
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        <Instagram size={16} />
                      </button>
                    )}
                    {band.social.youtube && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(`https://youtube.com/@${band.social.youtube}`, '_blank');
                        }}
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        <Youtube size={16} />
                      </button>
                    )}
                    {band.social.spotify && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(`https://open.spotify.com/artist/${band.social.spotify}`, '_blank');
                        }}
                        className="p-2 bg-gray-700/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        <Music size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredBands.length === 0 && (
          <div className="text-center py-12">
            <Music size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">No bands found in this genre.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BandsGrid; 