'use client';

import { useState, useMemo, useRef } from 'react';
import { Search, Play, Clock, FileText, X } from 'lucide-react';
import { Video, searchVideos, formatDuration, formatFileSize, videosData } from '@/data/videos';
import Link from 'next/link';

interface VideosGridProps {
  videos?: Video[];
  showFilters?: boolean;
}

export default function VideosGrid({ videos: propVideos, showFilters = true }: VideosGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 使用传入的视频数据或默认数据
  const allVideos = propVideos || videosData;

  // 过滤和搜索视频
  const filteredVideos = useMemo(() => {
    if (!searchQuery.trim()) return allVideos;
    return searchVideos(searchQuery);
  }, [allVideos, searchQuery]);

  // 高亮搜索关键词
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-400/30 text-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  // 清除搜索
  const clearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  return (
    <div className="space-y-6">
      {/* 智能搜索栏 */}
      {showFilters && (
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
          <div className="relative">
            {/* 搜索输入框 */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="搜索视频标题、标签、分类或乐队..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 搜索结果统计 */}
      {showFilters && searchQuery && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
            <Search className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">
              找到 <span className="text-white font-semibold">{filteredVideos.length}</span> 个相关视频
            </span>
          </div>
        </div>
      )}

      {/* 视频网格 */}
      {filteredVideos.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            {searchQuery ? '没有找到相关视频' : '暂无视频'}
          </h3>
          <p className="text-gray-400">
            {searchQuery ? '尝试使用不同的关键词' : '视频库正在建设中'}
          </p>
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              清除搜索
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <Link 
              key={video.id} 
              href={`/videos/${video.id}`}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                {/* 视频缩略图 */}
                <div className="relative aspect-video bg-gray-800">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                      <Play className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  
                  {/* 播放按钮覆盖层 */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Play className="w-8 h-8 text-white" fill="white" />
                    </div>
                  </div>

                  {/* 时长标签 */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {formatDuration(video.duration)}
                  </div>
                </div>

                {/* 视频信息 */}
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {searchQuery ? highlightText(video.title, searchQuery) : video.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {searchQuery ? highlightText(video.description, searchQuery) : video.description}
                  </p>

                  {/* 视频元数据 */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatDuration(video.duration)}</span>
                    </div>
                    <span>{formatFileSize(video.size)}</span>
                  </div>

                  {/* 分类和标签 */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">
                      {searchQuery ? highlightText(video.category, searchQuery) : video.category}
                    </span>
                    {video.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-500/20 text-gray-300 text-xs px-2 py-1 rounded">
                        {searchQuery ? highlightText(tag, searchQuery) : tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 