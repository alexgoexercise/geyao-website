"use client";

import { Phone } from "lucide-react";

interface PhoneButtonProps {
  phoneNumber: string;
  personName: string;
}

const PhoneButton = ({ phoneNumber, personName }: PhoneButtonProps) => {
  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 创建确认弹窗
    const dialog = document.createElement('div');
    dialog.className = 'fixed inset-0 z-50 flex items-center justify-center';
    dialog.innerHTML = `
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="this.parentElement.remove()"></div>
      <div class="relative bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <button onclick="this.parentElement.parentElement.remove()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
        
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
        </div>
        
        <div class="text-center mb-6">
          <h3 class="text-xl font-bold text-white mb-2">Call ${personName}?</h3>
          <p class="text-gray-300 mb-4">You're about to call this person's phone number</p>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <p class="text-blue-500 font-mono text-lg font-semibold">${phoneNumber}</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500 flex-shrink-0">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" x2="12" y1="8" y2="12"/>
            <line x1="12" x2="12.01" y1="16" y2="16"/>
          </svg>
          <p class="text-yellow-400 text-sm">This will open your phone app to make the call</p>
        </div>
        
        <div class="flex gap-3">
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="flex-1 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors font-medium">
            Cancel
          </button>
          <button onclick="window.location.href='tel:${phoneNumber}'; this.parentElement.parentElement.parentElement.remove();" class="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Now
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(dialog);
  };

  return (
    <div className="flex items-center gap-3 text-gray-300">
      <Phone size={20} className="text-primary" />
      <button
        onClick={handlePhoneClick}
        className="hover:text-white transition-colors cursor-pointer"
      >
        {phoneNumber}
      </button>
    </div>
  );
};

export default PhoneButton; 