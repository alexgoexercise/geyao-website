import { notFound } from "next/navigation";
import { bandsData } from "@/data/bands";
import { peopleData } from "@/data/people";
import { Instagram, Youtube, Music, Users, Calendar, Play, ArrowLeft, Heart, Share2, Clock, ExternalLink, Guitar, Mic, Piano, Drum } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BandPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BandPage = async ({ params }: BandPageProps) => {
  const { id } = await params;
  const band = bandsData.find(b => b.id === id);
  
  if (!band) {
    notFound();
  }

  const bandMembers = peopleData.filter(person => band.members.includes(person.id));

  // Function to get instrument icon
  const getInstrumentIcon = (instrument: string) => {
    const iconProps = { size: 16, className: "text-primary" };
    switch (instrument.toLowerCase()) {
      case 'guitar':
        return <Guitar {...iconProps} />;
      case 'vocals':
        return <Mic {...iconProps} />;
      case 'piano':
        return <Piano {...iconProps} />;
      case 'drums':
        return <Drum {...iconProps} />;
      case 'bass':
        return <Guitar {...iconProps} />; // Using guitar icon for bass
      default:
        return <Music {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Band Photo */}
            <div className="relative lg:w-1/3">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-gray-700/50">
                <Image
                  src={band.photo}
                  alt={band.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Band Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{band.name}</h1>
              
              {/* 风格 tags section */}
              {band.tags && band.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {band.tags.map((tag, idx) => (
                    <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>Formed {band.formed}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{bandMembers.length} members</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {band.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {band.social.instagram && (
                  <a
                    href={`https://instagram.com/${band.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Instagram size={24} />
                  </a>
                )}
                {band.social.youtube && (
                  <a
                    href={`https://youtube.com/@${band.social.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Youtube size={24} />
                  </a>
                )}
                {band.social.spotify && (
                  <a
                    href={`https://open.spotify.com/artist/${band.social.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Music size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Users size={32} />
            Band Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bandMembers.map((member) => (
              <Link
                key={member.id}
                href={`/people/${member.id}`}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-colors">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{member.name}</h3>
                  </div>
                </div>
                
                {/* Hover Effect - Roles with Icons */}
                <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-white mb-3">{member.name}</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.roles.map((role, index) => (
                        <div key={index} className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-2 rounded-lg text-sm font-medium">
                          {getInstrumentIcon(role)}
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        {band.videos && band.videos.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Play size={32} />
                Performance Videos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {band.videos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gray-700/50">
                    {video.thumbnail ? (
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                        <Play className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{video.duration}</span>
                      </div>
                      <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">
                        YouTube
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default BandPage;