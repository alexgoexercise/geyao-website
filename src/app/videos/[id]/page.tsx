import { notFound } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';
import { videosData, formatDuration, formatFileSize } from '@/data/videos';
import { bandsData } from '@/data/bands';
import { peopleData } from '@/data/people';
import Link from 'next/link';
import { Calendar, Clock, FileText, Users, Tag } from 'lucide-react';

interface VideoPageProps {
  params: Promise<{ id: string }>;
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { id } = await params;
  const video = videosData.find(v => v.id === id);
  
  if (!video) {
    notFound();
  }

  // 获取关联的乐队信息
  const band = video.bandId ? bandsData.find(b => b.id === video.bandId) : null;
  
  // 获取乐队成员信息
  const bandMembers = band ? peopleData.filter(p => band.members.includes(p.id)) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* 视频播放器 */}
        <div className="mb-8">
          <VideoPlayer
            src={video.filePath}
            poster={video.thumbnail}
            title={video.title}
            className="w-full aspect-video"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 视频信息 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 标题和描述 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h1 className="text-3xl font-bold text-white mb-4">{video.title}</h1>
              <p className="text-gray-300 text-lg leading-relaxed">{video.description}</p>
            </div>

            {/* 视频元数据 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">视频信息</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">时长: {formatDuration(video.duration)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">大小: {formatFileSize(video.size)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">上传时间: {video.uploadDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">分类: {video.category}</span>
                </div>
              </div>
            </div>

            {/* 标签 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">标签</h2>
              <div className="flex flex-wrap gap-2">
                {video.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 关联乐队 */}
            {band && (
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">关联乐队</h2>
                <Link href={`/bands/${band.id}`} className="group">
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {band.name}
                    </h3>
                    <p className="text-gray-300 text-sm mt-2">{band.genre}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{bandMembers.length} 名成员</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* 乐队成员 */}
            {bandMembers.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">乐队成员</h2>
                <div className="space-y-3">
                  {bandMembers.map((member) => (
                    <Link key={member.id} href={`/people/${member.id}`} className="group">
                      <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-gray-400 text-sm">{member.role}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 相关视频 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">相关视频</h2>
              <div className="space-y-3">
                {videosData
                  .filter(v => v.id !== video.id && (v.bandId === video.bandId || v.category === video.category))
                  .slice(0, 3)
                  .map((relatedVideo) => (
                    <Link key={relatedVideo.id} href={`/videos/${relatedVideo.id}`} className="group">
                      <div className="flex gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-400 text-xs">视频</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm line-clamp-2">
                            {relatedVideo.title}
                          </h4>
                          <p className="text-gray-400 text-xs mt-1">{formatDuration(relatedVideo.duration)}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 