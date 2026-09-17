import React from 'react';
import { APP_LOGO } from '../data/mockData';
import { PetInfo, TabType } from '../types';

interface AppHeaderProps {
  currentTab: TabType;
  currentPet: PetInfo;
  onOpenPetSwitcher: () => void;
  cartCount: number;
  onOpenCart?: () => void;
}

const TAB_SUBTITLES: Record<TabType, string> = {
  home: 'Home',
  passport: 'Passport',
  health: 'Health',
  square: 'Square',
  mine: 'Mine'
};

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentTab,
  currentPet,
  onOpenPetSwitcher,
  cartCount
}) => {
  return (
    <header
      id="app-main-header"
      className="sticky top-0 w-full z-40 bg-[#fbf9f4]/95 backdrop-blur-xl border-b border-[#e4e2dd]/70 shadow-[0_4px_20px_-4px_rgba(210,145,80,0.12)]"
    >
      <div className="h-14 px-4 flex items-center justify-between">
        {/* Brand & Tab Title */}
        <div className="flex items-center gap-2.5">
          <img
            alt="宝贝宠物 PawPals Logo"
            className="h-8 w-auto object-contain drop-shadow-sm"
            src={APP_LOGO}
          />
          <div className="flex flex-col">
            <span className="text-[16px] text-[#1b1c19] font-bold leading-tight tracking-tight">
              宝贝宠物 PawPals
            </span>
            <span className="text-[10px] text-[#fa8c16] font-semibold tracking-wide">
              {TAB_SUBTITLES[currentTab]}
            </span>
          </div>
        </div>

        {/* Pet Switcher & Mini-Program Control Capsule */}
        <div className="flex items-center gap-2">
          {/* Switch Pet Button */}
          <button
            id="switch-pet-btn"
            onClick={onOpenPetSwitcher}
            className="flex items-center gap-1.5 p-1 pr-2 rounded-full bg-white/95 shadow-[0_2px_8px_rgba(210,145,80,0.14)] hover:bg-[#f5f3ee] transition-all active:scale-95 border border-[#fa8c16]/20 cursor-pointer"
            title="切换宠宝"
          >
            <img
              alt={currentPet.name}
              className="w-7 h-7 rounded-full object-cover ring-2 ring-[#fa8c16]/30"
              src={currentPet.avatar}
            />
            <span className="text-[12px] font-bold text-[#1b1c19] max-w-[48px] truncate">
              {currentPet.name}
            </span>
            <span className="material-symbols-outlined text-[16px] text-[#564335]">
              expand_more
            </span>
          </button>

          {/* Mini-Program Action Capsule */}
          <div className="flex items-center justify-center h-8 px-2.5 rounded-full bg-white/95 shadow-[0_2px_8px_rgba(210,145,80,0.14)] border border-[#dcc1af]/40">
            <button
              className="text-[#1b1c19] hover:text-[#fa8c16] transition-colors p-0.5 cursor-pointer relative"
              title="购物车与更多"
            >
              <span className="material-symbols-outlined text-[16px] leading-none block">
                more_horiz
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#fa8c16] text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <span className="mx-2 h-3 w-px bg-[#dcc1af]"></span>
            <button
              className="text-[#1b1c19] hover:text-[#266d00] transition-colors p-0.5 cursor-pointer"
              title="小程序控制中心"
            >
              <span className="material-symbols-outlined text-[14px] leading-none block">
                fiber_manual_record
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
