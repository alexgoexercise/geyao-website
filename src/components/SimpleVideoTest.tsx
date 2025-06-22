'use client';

import React, { useRef, useState, useEffect } from 'react';

interface SimpleVideoTestProps {
  src: string;
  title?: string;
}

export default function SimpleVideoTest({ src, title }: SimpleVideoTestProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('SimpleVideoTest: Testing video:', src);

    const handleLoadStart = () => {
      console.log('SimpleVideoTest: Load started');
      setIsLoading(true);
      setError(null);
    };

    const handleLoadedMetadata = () => {
      console.log('SimpleVideoTest: Metadata loaded');
      setVideoInfo({
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        readyState: video.readyState,
        networkState: video.networkState
      });
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      console.log('SimpleVideoTest: Can play');
      setIsLoading(false);
    };

    const handleError = (e: Event) => {
      const videoElement = e.target as HTMLVideoElement;
      const error = videoElement.error;
      
      console.error('SimpleVideoTest: Error:', {
        error,
        errorCode: error?.code,
        errorMessage: error?.message,
        networkState: videoElement.networkState,
        readyState: videoElement.readyState
      });

      setError(`错误代码: ${error?.code}, 消息: ${error?.message}`);
      setIsLoading(false);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">{title || '视频测试'}</h3>
      
      <div className="space-y-4">
        <video
          ref={videoRef}
          src={src}
          controls
          className="w-full aspect-video"
          preload="metadata"
        >
          您的浏览器不支持视频播放。
        </video>

        {isLoading && (
          <div className="text-blue-400">加载中...</div>
        )}

        {error && (
          <div className="text-red-400">
            <div className="font-semibold">错误:</div>
            <div>{error}</div>
          </div>
        )}

        {videoInfo && (
          <div className="text-green-400">
            <div className="font-semibold">视频信息:</div>
            <div>时长: {videoInfo.duration}秒</div>
            <div>分辨率: {videoInfo.videoWidth}x{videoInfo.videoHeight}</div>
            <div>就绪状态: {videoInfo.readyState}</div>
            <div>网络状态: {videoInfo.networkState}</div>
          </div>
        )}

        <div className="text-gray-300 text-sm">
          <div>视频源: {src}</div>
        </div>
      </div>
    </div>
  );
} 