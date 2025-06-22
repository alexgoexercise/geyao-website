'use client';

import { useState } from 'react';
import { Upload, FileVideo, X, Plus } from 'lucide-react';
import { videoCategories } from '@/data/videos';

export default function VideoUploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [videoInfo, setVideoInfo] = useState({
    title: '',
    description: '',
    category: '',
    tags: [] as string[],
    bandId: '',
    eventId: ''
  });
  const [newTag, setNewTag] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const videoFiles = files.filter(file => file.type.startsWith('video/'));
    setUploadedFiles(prev => [...prev, ...videoFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const addTag = () => {
    if (newTag.trim() && !videoInfo.tags.includes(newTag.trim())) {
      setVideoInfo(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setVideoInfo(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (uploadedFiles.length === 0) {
      alert('请选择要上传的视频文件');
      return;
    }

    if (!videoInfo.title || !videoInfo.category) {
      alert('请填写视频标题和分类');
      return;
    }

    // 这里应该实现实际的文件上传逻辑
    console.log('上传视频:', { files: uploadedFiles, info: videoInfo });
    
    // 模拟上传过程
    alert('视频上传功能需要后端支持。这里只是演示界面。');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            上传视频
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            上传你的视频内容，分享给音乐社区
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 文件上传区域 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">选择视频文件</h2>
              
              {/* 拖拽上传区域 */}
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-4">
                  拖拽视频文件到这里，或点击选择文件
                </p>
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="video-upload"
                />
                <label
                  htmlFor="video-upload"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors"
                >
                  选择文件
                </label>
              </div>

              {/* 已选择的文件列表 */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">已选择的文件</h3>
                  <div className="space-y-3">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white/10 rounded-lg p-4"
                      >
                        <div className="flex items-center gap-3">
                          <FileVideo className="w-6 h-6 text-blue-400" />
                          <div>
                            <p className="text-white font-medium">{file.name}</p>
                            <p className="text-gray-400 text-sm">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 视频信息 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">视频信息</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 标题 */}
                <div className="md:col-span-2">
                  <label className="block text-white font-medium mb-2">视频标题 *</label>
                  <input
                    type="text"
                    value={videoInfo.title}
                    onChange={(e) => setVideoInfo(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="输入视频标题"
                    required
                  />
                </div>

                {/* 描述 */}
                <div className="md:col-span-2">
                  <label className="block text-white font-medium mb-2">视频描述</label>
                  <textarea
                    value={videoInfo.description}
                    onChange={(e) => setVideoInfo(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="描述视频内容..."
                  />
                </div>

                {/* 分类 */}
                <div>
                  <label className="block text-white font-medium mb-2">分类 *</label>
                  <select
                    value={videoInfo.category}
                    onChange={(e) => setVideoInfo(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">选择分类</option>
                    {videoCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* 关联乐队 */}
                <div>
                  <label className="block text-white font-medium mb-2">关联乐队</label>
                  <select
                    value={videoInfo.bandId}
                    onChange={(e) => setVideoInfo(prev => ({ ...prev, bandId: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">选择乐队</option>
                    <option value="1">Band 1</option>
                    <option value="2">Band 2</option>
                    <option value="3">Band 3</option>
                    <option value="4">Band 4</option>
                    <option value="5">Band 5</option>
                    <option value="6">Band 6</option>
                  </select>
                </div>
              </div>

              {/* 标签 */}
              <div className="mt-6">
                <label className="block text-white font-medium mb-2">标签</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="输入标签"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                {/* 已添加的标签 */}
                {videoInfo.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {videoInfo.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-blue-300 hover:text-blue-100"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                上传视频
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 