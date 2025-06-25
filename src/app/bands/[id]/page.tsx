import { notFound } from "next/navigation";
import { bandsData } from "@/data/bands";
import { peopleData } from "@/data/people";
import { getVideosByBand, formatDuration } from "@/data/videos";
import { Instagram, Youtube, Music, Users, Calendar, Play, ArrowLeft, Heart, Share2, Clock, ExternalLink } from "lucide-react";
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
  const bandVideos = getVideosByBand(band.id);

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
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
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
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{member.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Play size={32} />
              Performance Videos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bandVideos.map((video) => (
              <Link
                key={video.id}
                href={`/videos/${video.id}`}
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
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                    </div>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {video.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Bands */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Other Bands</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bandsData
              .filter(b => b.id !== band.id)
              .slice(0, 3)
              .map((relatedBand) => (
                <Link
                  key={relatedBand.id}
                  href={`/bands/${relatedBand.id}`}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedBand.photo}
                      alt={relatedBand.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{relatedBand.name}</h3>
                  <p className="text-primary text-sm mb-2">{relatedBand.genre}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandPage;