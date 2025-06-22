import VideoPlayer from '@/components/VideoPlayer';
import SimpleVideoTest from '@/components/SimpleVideoTest';

export default function TestVideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">视频播放测试 - 修复后</h1>
        
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">修复后的视频测试</h2>
            <p className="text-gray-300 mb-4">
              这些视频文件已经重新生成为浏览器兼容格式 (yuv420p, Constrained Baseline profile)
            </p>
            <VideoPlayer
              src="/videos/band6-progressive-metal-show.mp4"
              poster="/thumbnails/band6-progressive-metal-show.jpg"
              title="Band 6 - 前卫金属演出 (修复后)"
              className="w-full aspect-video"
            />
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">简单视频测试</h2>
            <SimpleVideoTest
              src="/videos/band1-member-interview.mp4"
              title="Band 1 - 成员采访 (修复后)"
            />
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">另一个测试视频</h2>
            <VideoPlayer
              src="/videos/band4-jazz-fusion-night.mp4"
              poster="/thumbnails/band4-jazz-fusion-night.jpg"
              title="Band 4 - 爵士融合之夜 (修复后)"
              className="w-full aspect-video"
            />
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">视频格式信息</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>编码格式:</strong> H.264/AVC</p>
              <p><strong>像素格式:</strong> yuv420p (浏览器兼容)</p>
              <p><strong>配置文件:</strong> Constrained Baseline (最大兼容性)</p>
              <p><strong>分辨率:</strong> 1280x720 (16:9)</p>
              <p><strong>帧率:</strong> 30 fps</p>
              <p><strong>时长:</strong> 10 秒</p>
              <p><strong>文件大小:</strong> ~231KB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 