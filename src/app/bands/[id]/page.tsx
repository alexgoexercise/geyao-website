"use client";

import { notFound } from "next/navigation";
import { bandsData } from "@/data/bands";
import { peopleData } from "@/data/people";
import { Instagram, Youtube, Music, Users, Calendar, Play, ArrowLeft, Heart, Share2, Clock, ExternalLink, Guitar, Mic, Piano, Drum, X, FolderOpen, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { GENERAL_RECRUITMENT_NEEDS } from "@/data/recruitmentNeeds";

interface BandPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BandPage = ({ params }: BandPageProps) => {
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);
  const { id } = React.use(params);
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

        {/* Google Drive Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <FolderOpen size={32} />
              乐队作品集
            </h2>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Google Drive Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                  <FolderOpen size={32} className="text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-6">Google Drive 作品库</h3>
                
                {/* Access Button */}
                <a
                  href={band.googleDrive.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Download size={20} />
                  访问 Google Drive
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 固定位置的Join Us按钮 */}
        <div className="fixed top-20 right-4 z-60">
          <button
            onClick={() => setIsJoinUsModalOpen(true)}
            className="animate-ping-custom transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-500/50 rounded-lg p-2 md:p-3 transform rotate-12"
          >
            <span className="font-join-us">
              Join Us
            </span>
          </button>
        </div>

        {/* Join Us Modal */}
        {isJoinUsModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full mx-4 relative border border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsJoinUsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-4 font-postmodern-display">
                  Join Us
                </h2>
                <p className="text-gray-300 font-postmodern-body">
                  欢迎加入我们的音乐社团！
                </p>
              </div>
              
              <div className="space-y-6">
                {/* 乐队招聘需求 */}
                {band.recruitmentNeeds && band.recruitmentNeeds.trim() ? (
                  <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {band.name} 的招聘需求
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {band.recruitmentNeeds}
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-700/20 rounded-lg p-6 border border-gray-600/30">
                    <h3 className="text-xl font-bold text-gray-400 mb-3">
                      {band.name} 的招聘需求
                    </h3>
                    <p className="text-gray-500 text-sm italic">
                      暂无特定招聘需求
                    </p>
                  </div>
                )}
                
                {/* 总招聘需求 */}
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <pre className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
                    {GENERAL_RECRUITMENT_NEEDS}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BandPage;