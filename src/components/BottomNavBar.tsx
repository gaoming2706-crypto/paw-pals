import React from 'react';
import { TabType } from '../types';

interface BottomNavBarProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface TabConfig {
  key: TabType;
  label: string;
  icon: string;
}

const TABS: TabConfig[] = [
  { key: 'home', label: '首页', icon: 'pets' },
  { key: 'passport', label: '身份证', icon: 'badge' },
  { key: 'health', label: '健康', icon: 'vital_signs' },
  { key: 'square', label: '活动', icon: 'explore' },
  { key: 'mine', label: '我的', icon: 'sentiment_satisfied' }
];

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentTab, onTabChange }) => {
  return (
    <nav
      id="bottom-nav-bar"
      className="fixed bottom-0 left-0 right-0 z-50 pb-safe pointer-events-none"
    >
      <div className="max-w-[460px] mx-auto px-4 mb-3 pointer-events-auto">
        <div className="h-16 px-2 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_8px_24px_-4px_rgba(210,145,80,0.22)] border border-[#fa8c16]/15 flex items-center justify-around">
          {TABS.map((tab) => {
            const isActive = currentTab === tab.key;
            return (
              <button
                key={tab.key}
                id={`nav-tab-${tab.key}`}
                onClick={() => onTabChange(tab.key)}
                className={`flex flex-col items-center justify-center min-w-[54px] h-12 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#fa8c16] scale-105 font-bold'
                    : 'text-[#564335] hover:text-[#1b1c19]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[22px] transition-transform ${
                    isActive ? 'fill' : ''
                  }`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {tab.icon}
                </span>
                <span className="text-[11px] mt-0.5 tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
