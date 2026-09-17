import React, { useState } from 'react';
import { PetInfo } from '../../types';

interface PassportTabProps {
  currentPet: PetInfo;
  onShowToast: (msg: string) => void;
}

export const PassportTab: React.FC<PassportTabProps> = ({ currentPet, onShowToast }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [dewormProgress, setDewormProgress] = useState<number>(74);

  const handleCopyChip = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentPet.chipCode);
    }
    setCopied(true);
    onShowToast(`芯片编码 ${currentPet.chipCode} 已复制到剪贴板 📋`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNfcBump = () => {
    onShowToast('已开启手机碰一碰感应，请靠近好友手机触碰感应 🐶✨');
  };

  const handleSavePoster = () => {
    onShowToast(`${currentPet.name} 的名片海报已生成并成功保存至相册 📸`);
  };

  const handleShareWeChat = () => {
    onShowToast('已唤起微信好友与宠友群聊分享窗口 🐾');
  };

  const handleReserveMedicine = () => {
    onShowToast('已为您锁定大宠爱驱虫药专属优惠配额，即将提醒用药 💊');
  };

  const handleCivilizedPledge = () => {
    onShowToast('您已完成《文明养犬自律公约》电子签署，共同守护社区美好！');
  };

  const handleLostAlert = () => {
    onShowToast('🚨 警报系统测试正常：已关联周边 3 公里 38 位同城狗友联动防走失网！');
  };

  return (
    <div className="flex flex-col gap-3 pb-28 px-4 pt-2">
      {/* Top Switcher & Floating Sub-Bar */}
      <section className="pt-1 pb-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-[#f5f3ee] px-3 py-1.5 rounded-full shadow-2xs">
          <span
            className="material-symbols-outlined text-[#fa8c16] text-[16px] fill"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          <span className="text-xs text-[#1b1c19] font-bold tracking-wide">
            城市犬籍备案档案编号：SH-2023-889104
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex w-2 h-2 rounded-full bg-[#266d00] animate-ping"></span>
          <span className="text-xs text-[#266d00] font-bold">证件有效</span>
        </div>
      </section>

      {/* 1. Pet Digital Passport Master Card (Bento Focus) */}
      <section className="my-1">
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#ffdcc3] via-white to-[#ffdcc3]/40 shadow-xl p-4 border border-[#fa8c16]/20">
          {/* Watermark Holographic Paw Pattern */}
          <div className="absolute -right-8 -top-8 w-40 h-40 text-[#fa8c16]/10 pointer-events-none">
            <svg className="w-full h-full transform rotate-12" fill="currentColor" viewBox="0 0 200 200">
              <circle cx="50" cy="50" r="24"></circle>
              <circle cx="100" cy="30" r="22"></circle>
              <circle cx="150" cy="50" r="24"></circle>
              <circle cx="40" cy="100" r="20"></circle>
              <path d="M70,110 C60,140 70,170 100,175 C130,170 140,140 130,110 C120,95 80,95 70,110 Z"></path>
            </svg>
          </div>

          {/* Passport Header */}
          <div className="flex items-start justify-between relative z-10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#fa8c16]/20 flex items-center justify-center text-[#fa8c16]">
                <span className="material-symbols-outlined text-[16px]">pets</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6e3900] font-bold">
                  PAWPALS OFFICIAL PASSPORT
                </p>
                <p className="text-[10px] text-[#564335]">国家标准动物芯片认证档案</p>
              </div>
            </div>
            <span className="bg-[#85fa51]/80 text-[#287100] text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
              <span className="material-symbols-outlined text-[12px]">check_circle</span>
              双重认证
            </span>
          </div>

          {/* Main Pet Info Grid */}
          <div className="flex gap-3 relative z-10 items-center">
            {/* Photo with Neutered Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md bg-[#eae8e3]">
                <img
                  className="w-full h-full object-cover"
                  src={currentPet.avatar}
                  alt={currentPet.name}
                />
              </div>
              <div className="absolute -bottom-2 -right-1 bg-gradient-to-r from-[#fa8c16] to-[#904d00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-0.5">
                <span
                  className="material-symbols-outlined text-[10px] fill"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span>已绝育 ✂️</span>
              </div>
            </div>

            {/* Bio Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-extrabold text-[#1b1c19] truncate">{currentPet.name}</h2>
                <span className="text-sm font-bold text-[#904d00]">{currentPet.englishName}</span>
                <span className="material-symbols-outlined text-[#005fae] text-[16px]" title="男孩子">
                  male
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                <span className="bg-white/90 px-2 py-0.5 rounded-md text-[11px] text-[#1b1c19] font-medium shadow-2xs">
                  {currentPet.breed}
                </span>
                <span className="bg-white/90 px-2 py-0.5 rounded-md text-[11px] text-[#1b1c19] font-medium shadow-2xs">
                  {currentPet.age}
                </span>
                <span className="bg-white/90 px-2 py-0.5 rounded-md text-[11px] text-[#1b1c19] font-medium shadow-2xs">
                  {currentPet.weight} kg
                </span>
              </div>
              <p className="text-xs text-[#564335] mt-2 flex items-center gap-1 truncate">
                <span className="material-symbols-outlined text-[13px] text-[#897363]">
                  calendar_today
                </span>
                生日：{currentPet.birthday} · {currentPet.color}
              </p>
            </div>
          </div>

          {/* Chip ID & Guardian Bar */}
          <div className="mt-3 pt-2 bg-white/80 backdrop-blur-md rounded-2xl p-2.5 flex flex-col gap-2 relative z-10 border border-[#fa8c16]/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#fa8c16] text-[16px]">
                  contactless
                </span>
                <span className="text-xs text-[#564335]">芯片编码:</span>
                <span className="text-xs font-bold text-[#1b1c19] tracking-wider select-all font-mono">
                  {currentPet.chipCode}
                </span>
              </div>
              <button
                onClick={handleCopyChip}
                className="bg-[#fa8c16] text-white text-xs font-bold px-2.5 py-0.5 rounded-full hover:opacity-90 active:scale-95 transition-transform cursor-pointer"
              >
                {copied ? '已复制' : '复制'}
              </button>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#f0eee9] text-[#564335]">
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-symbols-outlined text-[#266d00] text-[16px]">
                  person_check
                </span>
                <span className="text-xs text-[#1b1c19] truncate">
                  主理人：<strong className="font-semibold">{currentPet.ownerName}</strong>（已实名认证）
                </span>
              </div>
              <a
                className="inline-flex items-center gap-1 bg-[#f5f3ee] text-[#904d00] px-2.5 py-0.5 rounded-full text-xs font-bold hover:bg-[#ffdcc3]"
                href={`tel:${currentPet.ownerPhone}`}
              >
                <span className="material-symbols-outlined text-[13px]">call</span>
                紧急联络
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Dog Card & NFC Touch Interaction */}
      <section className="my-1">
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#e4e2dd]/60 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ffdcc3] flex items-center justify-center text-[#6e3900]">
                <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1b1c19]">{currentPet.name}的社交名片</h3>
                <p className="text-[11px] text-[#564335]">扫码互换名片 / 周末结伴同行</p>
              </div>
            </div>
            {/* NFC Bump Button */}
            <button
              onClick={handleNfcBump}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#f5f3ee] text-[#fa8c16] hover:bg-[#ffdcc3] text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">cell_merge</span>
              碰一碰加好友
            </button>
          </div>

          {/* Social Bio Quote Bubble */}
          <div className="relative bg-[#f5f3ee] rounded-2xl p-3 flex items-start gap-2">
            <span className="material-symbols-outlined text-[#fa8c16] text-[18px] flex-shrink-0 mt-0.5">
              format_quote
            </span>
            <p className="text-xs text-[#1b1c19] italic leading-relaxed">
              “爱吃冻干草莓的阳光大男孩！活泼温顺不拆家，欢迎同城宝子周末一起约跑、草坪翻滚遛弯呀🐾”
            </p>
          </div>

          {/* QR Code Presentation Box */}
          <div className="flex flex-col items-center justify-center p-3 bg-gradient-to-b from-white to-[#f5f3ee] rounded-2xl">
            <div className="relative p-3 bg-white rounded-2xl shadow-md flex flex-col items-center border border-[#e4e2dd]">
              <div className="w-40 h-40 rounded-xl p-2 bg-white flex items-center justify-center relative overflow-hidden">
                {/* Stylized QR Code SVG */}
                <svg className="w-full h-full text-[#1b1c19]" viewBox="0 0 160 160">
                  <rect x="10" y="10" width="40" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="7" />
                  <rect x="22" y="22" width="16" height="16" rx="3" fill="currentColor" />
                  <rect x="110" y="10" width="40" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="7" />
                  <rect x="122" y="22" width="16" height="16" rx="3" fill="currentColor" />
                  <rect x="10" y="110" width="40" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="7" />
                  <rect x="22" y="122" width="16" height="16" rx="3" fill="currentColor" />
                  <circle cx="65" cy="20" r="4" fill="currentColor" />
                  <circle cx="80" cy="20" r="4" fill="currentColor" />
                  <circle cx="95" cy="35" r="4" fill="currentColor" />
                  <circle cx="65" cy="45" r="4" fill="currentColor" />
                  <circle cx="80" cy="55" r="4" fill="currentColor" />
                  <circle cx="20" cy="65" r="4" fill="currentColor" />
                  <circle cx="35" cy="80" r="4" fill="currentColor" />
                  <circle cx="50" cy="70" r="4" fill="currentColor" />
                  <circle cx="65" cy="80" r="4" fill="currentColor" />
                  <circle cx="95" cy="80" r="4" fill="currentColor" />
                  <circle cx="110" cy="65" r="4" fill="currentColor" />
                  <circle cx="125" cy="80" r="4" fill="currentColor" />
                  <circle cx="140" cy="70" r="4" fill="currentColor" />
                  <circle cx="65" cy="110" r="4" fill="currentColor" />
                  <circle cx="80" cy="120" r="4" fill="currentColor" />
                  <circle cx="95" cy="135" r="4" fill="currentColor" />
                  <circle cx="110" cy="120" r="4" fill="currentColor" />
                  <circle cx="130" cy="115" r="4" fill="currentColor" />
                  <circle cx="145" cy="140" r="4" fill="currentColor" />
                  <circle cx="80" cy="145" r="4" fill="currentColor" />
                  {/* Center Badge */}
                  <rect x="62" y="62" width="36" height="36" rx="10" fill="#FA8C16" />
                  <text
                    x="80"
                    y="85"
                    fill="#FFFFFF"
                    fontFamily="Plus Jakarta Sans"
                    fontSize="15"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    Max
                  </text>
                </svg>
              </div>
              <span className="text-[11px] text-[#564335] mt-1.5 flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[13px] text-[#266d00]">
                  verified_user
                </span>
                微信小程序专用户籍码
              </span>
            </div>

            {/* Social CTAs */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-3">
              <button
                onClick={handleSavePoster}
                className="h-10 rounded-full bg-white border border-[#e4e2dd] text-[#1b1c19] text-xs font-bold flex items-center justify-center gap-1 shadow-2xs active:scale-95 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                保存名片海报
              </button>
              <button
                onClick={handleShareWeChat}
                className="h-10 rounded-full bg-gradient-to-r from-[#fa8c16] to-[#904d00] text-white text-xs font-bold flex items-center justify-center gap-1 shadow-md active:scale-95 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
                转发名片微信群
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vaccination & Deworming Health Timeline */}
      <section className="my-1">
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#e4e2dd]/60 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#85fa51]/30 flex items-center justify-center text-[#287100]">
                <span
                  className="material-symbols-outlined text-[20px] fill"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  health_and_safety
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1b1c19]">免疫与驱虫时间轴</h3>
                <p className="text-[11px] text-[#564335]">定点宠物医院连网数据自动核销</p>
              </div>
            </div>
            <span className="text-[11px] text-[#266d00] bg-[#85fa51]/40 px-2.5 py-0.5 rounded-full font-bold">
              已全面防护
            </span>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-3 relative pl-4 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#eae8e3]">
            {/* Item 1 */}
            <div className="relative bg-[#f5f3ee] rounded-2xl p-3 flex flex-col gap-1">
              <div className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-[#266d00] ring-4 ring-white"></div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1b1c19]">狂犬病灭活疫苗（进口）</span>
                <span className="bg-[#85fa51]/80 text-[#287100] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  绿标·安全防护中
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#564335]">
                <span>接种日期：2024.04.10</span>
                <span className="text-[#904d00] font-bold">下次加强：2025.04.10</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#897363] mt-0.5">
                <span className="material-symbols-outlined text-[13px]">local_hospital</span>
                接种机构：瑞鹏宠物医院（静安旗舰分院）· 医生：李伟
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative bg-[#f5f3ee] rounded-2xl p-3 flex flex-col gap-1">
              <div className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-[#266d00] ring-4 ring-white"></div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#1b1c19]">犬多联基础疫苗（联苗）</span>
                <span className="bg-[#85fa51]/80 text-[#287100] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  已完成全部免疫
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#564335]">
                <span>末次接种：2024.05.15</span>
                <span>周期防护中（年度免检）</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#897363] mt-0.5">
                <span className="material-symbols-outlined text-[13px]">verified</span>
                抗体检测水平：G级（优良保护滴度）
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative bg-[#f5f3ee] rounded-2xl p-3 flex flex-col gap-1.5">
              <div className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-[#fa8c16] ring-4 ring-white"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-[#1b1c19]">体内外驱虫防护周期</span>
                  <span className="bg-[#ffdcc3] text-[#6e3900] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    仅剩 8 天
                  </span>
                </div>
                <button
                  onClick={handleReserveMedicine}
                  className="text-[#fa8c16] text-xs font-bold flex items-center hover:underline cursor-pointer"
                >
                  预约用药
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </button>
              </div>

              {/* Progress */}
              <div className="w-full bg-[#eae8e3] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#fa8c16] h-full rounded-full transition-all duration-500"
                  style={{ width: `${dewormProgress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#564335]">
                <span>上次用药：22天前 (大宠爱超领)</span>
                <span className="text-[#fa8c16] font-bold">下次建议：2024.11.02</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Police Dog License Barcode */}
      <section className="my-1">
        <div className="bg-gradient-to-br from-white to-[#f5f3ee] rounded-3xl p-4 shadow-sm border border-[#e4e2dd]/60 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4e3ff] flex items-center justify-center text-[#005fae]">
                <span className="material-symbols-outlined text-[20px]">badge</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1b1c19]">城市公安电子犬证</h3>
                <p className="text-[11px] text-[#564335]">公安物联系统直连备案 · 支持一键免检核验</p>
              </div>
            </div>
            <span className="bg-[#005fae] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              已备案年检
            </span>
          </div>

          {/* Barcode Strip */}
          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-2xs border border-[#e4e2dd]">
            <p className="text-[11px] text-[#564335]">进出商场 / 宠物公园 / 物业巡查快速验码</p>
            <div className="w-full max-w-[280px] h-12 flex items-center justify-center">
              <svg className="w-full h-full text-[#1b1c19]" viewBox="0 0 240 50">
                <rect x="0" y="0" width="3" height="50" fill="currentColor"></rect>
                <rect x="5" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="9" y="0" width="4" height="50" fill="currentColor"></rect>
                <rect x="16" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="22" y="0" width="5" height="50" fill="currentColor"></rect>
                <rect x="30" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="35" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="39" y="0" width="4" height="50" fill="currentColor"></rect>
                <rect x="46" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="51" y="0" width="6" height="50" fill="currentColor"></rect>
                <rect x="60" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="64" y="0" width="3" height="50" fill="currentColor"></rect>
                <rect x="70" y="0" width="5" height="50" fill="currentColor"></rect>
                <rect x="78" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="83" y="0" width="3" height="50" fill="currentColor"></rect>
                <rect x="89" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="93" y="0" width="6" height="50" fill="currentColor"></rect>
                <rect x="102" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="107" y="0" width="4" height="50" fill="currentColor"></rect>
                <rect x="114" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="118" y="0" width="5" height="50" fill="currentColor"></rect>
                <rect x="126" y="0" width="3" height="50" fill="currentColor"></rect>
                <rect x="132" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="137" y="0" width="4" height="50" fill="currentColor"></rect>
                <rect x="144" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="148" y="0" width="5" height="50" fill="currentColor"></rect>
                <rect x="156" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="161" y="0" width="4" height="50" fill="currentColor"></rect>
                <rect x="168" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="173" y="0" width="5" height="50" fill="currentColor"></rect>
                <rect x="181" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="186" y="0" width="3" height="50" fill="currentColor"></rect>
                <rect x="192" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="196" y="0" width="6" height="50" fill="currentColor"></rect>
                <rect x="205" y="0" width="2" height="50" fill="currentColor"></rect>
                <rect x="210" y="0" width="4" height="50" fill="currentColor"></rect>
                <rect x="217" y="0" width="1" height="50" fill="currentColor"></rect>
                <rect x="221" y="0" width="5" height="50" fill="currentColor"></rect>
                <rect x="229" y="0" width="3" height="50" fill="currentColor"></rect>
                <rect x="235" y="0" width="4" height="50" fill="currentColor"></rect>
              </svg>
            </div>
            <span className="text-xs text-[#1b1c19] font-mono tracking-widest font-bold">
              3101 0620 2308 8910
            </span>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div
              onClick={handleCivilizedPledge}
              className="bg-white p-2.5 rounded-2xl flex items-center gap-2 border border-[#e4e2dd] cursor-pointer hover:bg-[#f5f3ee] transition-colors"
            >
              <span className="material-symbols-outlined text-[#266d00] text-[22px]">verified</span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#1b1c19]">文明养犬承诺</span>
                <span className="text-[10px] text-[#564335] truncate">牵绳·拾便·戴嘴套</span>
              </div>
            </div>
            <div
              onClick={handleLostAlert}
              className="bg-white p-2.5 rounded-2xl flex items-center gap-2 border border-[#e4e2dd] cursor-pointer hover:bg-[#f5f3ee] transition-colors"
            >
              <span className="material-symbols-outlined text-[#005fae] text-[22px]">policy</span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#1b1c19]">丢失一键警报</span>
                <span className="text-[10px] text-[#564335] truncate">联动周边3公里狗友</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
