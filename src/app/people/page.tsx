"use client";

import React, { useState } from 'react';
import PeopleGrid from "@/components/PeopleGrid";
import { X } from "lucide-react";
import { GENERAL_RECRUITMENT_NEEDS } from '@/data/recruitmentNeeds';

const PeoplePage = () => {
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  return (
    <>
      <PeopleGrid />
      
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
              {/* 总招聘需求 */}
              <div className="bg-gray-900/50 rounded-lg p-6">
                <pre className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
                  {GENERAL_RECRUITMENT_NEEDS}
                </pre>
              </div>
              
              {/* 其他页面的提示 */}
              <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-600/30">
                <p className="text-yellow-300 text-sm font-medium">
                  💡 直选渠道请前往个人或乐队界面点击Join Us
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PeoplePage; 