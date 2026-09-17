import React, { useEffect, useState } from 'react';
import { PetInfo } from '../types';

interface TopTimeBarProps {
  currentPet: PetInfo;
}

export const TopTimeBar: React.FC<TopTimeBarProps> = ({ currentPet }) => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}`);

      const month = now.getMonth() + 1;
      const date = now.getDate();
      const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      const dayName = days[now.getDay()];
      setDateStr(`${month}月${date}日 ${dayName}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="app-top-time-bar"
      className="w-full h-[132px] bg-[#fbf9f4] border-b border-[#e4e2dd]/60 flex flex-col justify-between px-4 pt-2 pb-2 select-none relative z-50 shadow-[0_2px_10px_rgba(210,145,80,0.06)]"
      style={{ height: '132px', minHeight: '132px', maxHeight: '132px' }}
    >
      {/* Top Status Bar Row (Signal, Carrier, Battery) */}
      <div className="flex items-center justify-between text-xs font-semibold text-[#1b1c19]/80 px-1 pt-0.5">
        <div className="flex items-center gap-1.5">
          <span className="tracking-tight text-[13px] font-bold">{timeStr || '09:41'}</span>
          <span className="text-[10px] text-[#904d00] bg-[#ffdcc3] px-1.5 py-0.2 rounded font-bold">5G+</span>
        </div>

        {/* Dynamic Island Capsule in Center */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1c19] text-white shadow-sm transition-all hover:scale-[1.02] cursor-default">
          <span className="inline-block w-2 h-2 rounded-full bg-[#85fa51] animate-pulse"></span>
          <span className="text-[11px] font-medium tracking-wide flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#fa8c16] fill">pets</span>
            <span>{currentPet.name} · {currentPet.statusText.split('·')[1]?.trim() || '状态在线'}</span>
          </span>
        </div>

        {/* Right Status (WiFi, Battery) */}
        <div className="flex items-center gap-2">
          {/* Signal bars */}
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-1 bg-[#1b1c19] rounded-full"></span>
            <span className="w-0.5 h-1.5 bg-[#1b1c19] rounded-full"></span>
            <span className="w-0.5 h-2 bg-[#1b1c19] rounded-full"></span>
            <span className="w-0.5 h-2.5 bg-[#1b1c19] rounded-full"></span>
          </div>
          {/* Wifi */}
          <span className="material-symbols-outlined text-[15px]">wifi</span>
          {/* Battery */}
          <div className="flex items-center gap-0.5">
            <span className="text-[11px] font-bold">100%</span>
            <div className="w-5 h-2.5 border border-[#1b1c19] rounded-sm p-0.5 flex items-center relative">
              <div className="h-full w-full bg-[#266d00] rounded-xs"></div>
              <div className="w-0.5 h-1 bg-[#1b1c19] absolute -right-1 rounded-r-xs"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Big Time Display & Weather/Pet Date Info */}
      <div className="flex items-center justify-between px-2 pb-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold tracking-tight text-[#1b1c19] font-mono leading-none">
            {timeStr || '09:41'}
          </span>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#564335] leading-tight">{dateStr || '9月17日 星期四'}</span>
            <span className="text-[10px] text-[#904d00] font-medium">北京 · 晴 22℃ 适宜遛狗 🦮</span>
          </div>
        </div>

        {/* 132px Time Bar Indicator Badge */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 bg-[#f0eee9] px-2.5 py-1 rounded-full border border-[#dcc1af]/60">
            <span className="material-symbols-outlined text-[14px] text-[#904d00]">schedule</span>
            <span className="text-[11px] font-bold text-[#904d00]">顶部时间栏 132px</span>
          </div>
          <span className="text-[10px] text-[#564335]/70 mt-0.5">PawPals 时钟同步系统</span>
        </div>
      </div>
    </div>
  );
};
