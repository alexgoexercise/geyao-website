'use client';

import { useState } from 'react';
import { Edit, Trash2, Eye, Download, MoreVertical } from 'lucide-react';
import { videosData, formatDuration, formatFileSize } from '@/data/videos';
import Link from 'next/link';

export default function VideoManagePage() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = videosData.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleVideoSelection = (videoId: string) => {
    setSelectedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const selectAllVideos = () => {
    setSelectedVideos(filteredVideos.map(v => v.id));
  };

  const deselectAllVideos = () => {
    setSelectedVideos([]);
  };

  const deleteSelectedVideos = () => {
    if (selectedVideos.length === 0) return;
    
    if (confirm(`确定要删除选中的 ${selectedVideos.length} 个视频吗？`)) {
      // 这里应该实现实际的删除逻辑
      console.log('删除视频:', selectedVideos);
      setSelectedVideos([]);
      alert('删除功能需要后端支持。这里只是演示界面。');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            视频管理
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            管理你的视频内容，编辑信息或删除不需要的视频
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* 工具栏 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* 搜索 */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="搜索视频..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 批量操作 */}
              <div className="flex gap-2">
                {selectedVideos.length > 0 ? (
                  <>
                    <button
                      onClick={deselectAllVideos}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    >
                      取消选择
                    </button>
                    <button
                      onClick={deleteSelectedVideos}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      删除选中 ({selectedVideos.length})
                    </button>
                  </>
                ) : (
                  <button
                    onClick={selectAllVideos}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    全选
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 视频列表 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedVideos.length === filteredVideos.length && filteredVideos.length > 0}
                        onChange={() => selectedVideos.length === filteredVideos.length ? deselectAllVideos() : selectAllVideos()}
                        className="rounded border-gray-400 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">视频</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">分类</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">时长</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">大小</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">上传时间</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredVideos.map((video) => (
                    <tr key={video.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedVideos.includes(video.id)}
                          onChange={() => toggleVideoSelection(video.id)}
                          className="rounded border-gray-400 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-400 text-xs">视频</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{video.title}</h3>
                            <p className="text-gray-400 text-sm line-clamp-1">{video.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
                          {video.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {formatDuration(video.duration)}
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {formatFileSize(video.size)}
                      </td>
                      <td className="px-6 py-4 text-gray-300">
                        {video.uploadDate}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/videos/${video.id}`}
                            className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded transition-colors"
                            title="查看"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button
                            className="p-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded transition-colors"
                            title="编辑"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 rounded transition-colors"
                            title="下载"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors"
                            title="删除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 空状态 */}
            {filteredVideos.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg">
                  {searchQuery ? '没有找到匹配的视频' : '还没有上传任何视频'}
                </div>
                {!searchQuery && (
                  <Link
                    href="/videos/upload"
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    上传第一个视频
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* 统计信息 */}
          <div className="mt-6 text-center text-gray-400">
            共 {filteredVideos.length} 个视频
            {selectedVideos.length > 0 && `，已选择 ${selectedVideos.length} 个`}
          </div>
        </div>
      </div>
    </div>
  );
} 