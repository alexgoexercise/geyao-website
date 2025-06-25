"use client";

import { useState, useMemo, useRef } from "react";
import { bandsData, Band } from "@/data/bands";
import { peopleData } from "@/data/people";
import { Instagram, Youtube, Music, Users, Calendar, Play, Guitar, Mic, Drum, Piano, Music2, X } from "lucide-react";
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
  // 汇总所有tag
  const allTags = useMemo(() => {
    const tags = bandsData.flatMap(b => b.tags || []);
    return Array.from(new Set(tags));
  }, []);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [displayedTags, setDisplayedTags] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 随机选择10个tag展示
  const refreshDisplayedTags = () => {
    // 保持已选中的tag
    const unselectedTags = allTags.filter(tag => !selectedTags.includes(tag));
    const shuffled = [...unselectedTags].sort(() => Math.random() - 0.5);
    const newDisplayedTags = [...selectedTags, ...shuffled.slice(0, 10 - selectedTags.length)];
    setDisplayedTags(newDisplayedTags);
  };

  // 初始化展示的tags
  useMemo(() => {
    refreshDisplayedTags();
  }, [allTags]);

  // tag点击切换
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  // 清空筛选
  const clearFilters = () => {
    setSelectedTags([]);
    setSearch("");
    searchInputRef.current?.focus();
  };

  // 筛选乐队 - 支持模糊搜索所有内容
  const filteredBands = useMemo(() => {
    return bandsData.filter(band => {
      // tag筛选
      const hasTag = selectedTags.length === 0 || (band.tags && band.tags.some(tag => selectedTags.includes(tag)));
      
      // 模糊搜索关键词筛选
      const keyword = search.trim().toLowerCase();
      if (!keyword) return hasTag;
      
      // 搜索乐队名
      if (band.name.toLowerCase().includes(keyword)) return hasTag;
      // 搜索描述
      if (band.description.toLowerCase().includes(keyword)) return hasTag;
      // 搜索genre
      if (band.genre.toLowerCase().includes(keyword)) return hasTag;
      // 搜索tags
      if (band.tags && band.tags.some(tag => tag.toLowerCase().includes(keyword))) return hasTag;
      // 搜索成员名
      const bandMembers = peopleData.filter(person => band.members.includes(person.id));
      if (bandMembers.some(member => member.name.toLowerCase().includes(keyword))) return hasTag;
      // 搜索视频名
      if (band.videos.some(video => video.title.toLowerCase().includes(keyword))) return hasTag;
      
      return false;
    });
  }, [selectedTags, search]);

  const [hoveredBand, setHoveredBand] = useState<string | null>(null);

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

        {/* 搜索 + 随机Tag区 */}
        <div className="mb-10">
          {/* 搜索框 */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-xl">
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="搜索乐队名、成员名、视频名、风格..."
                className="w-full px-6 py-4 bg-gradient-to-r from-primary/20 via-gray-900 to-primary/20 border-2 border-primary/60 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-primary/40 focus:border-primary shadow-xl font-semibold transition-all duration-300 placeholder:whitespace-nowrap text-sm sm:text-xl"
                style={{ boxShadow: '0 4px 32px 0 rgba(80,80,180,0.10)' }}
              />
            </div>
          </div>
          {/* 随机Tag展示 + 操作icon区 */}
          <div className="relative text-center mb-4">
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              {displayedTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border border-primary/30 transition-all duration-200 mx-1
                    ${selectedTags.includes(tag)
                      ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20"
                      : "bg-white/10 text-primary hover:bg-primary/20 hover:scale-105"}
                  `}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <button
                onClick={refreshDisplayedTags}
                className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors text-sm"
                title="换一批标签"
              >
                <span role="img" aria-label="refresh">🔄</span>
                换一批标签
              </button>
              {(selectedTags.length > 0 || search) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors text-sm"
                  title="重置"
                >
                  <X size={16} />
                  重置
                </button>
              )}
            </div>
          </div>
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
                          <span>{bandMembers.length}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {band.tags && band.tags.map((tag, idx) => (
                          <span key={idx} className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
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