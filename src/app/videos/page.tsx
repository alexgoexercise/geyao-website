import VideosGrid from '@/components/VideosGrid';

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            视频库
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            探索我们丰富的视频内容，包括演出视频、排练实录、采访和幕后花絮
          </p>
        </div>

        {/* 视频网格 */}
        <VideosGrid />
      </div>
    </div>
  );
} 