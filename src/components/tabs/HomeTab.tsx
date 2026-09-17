import React, { useState } from 'react';
import { PetInfo } from '../../types';

interface HomeTabProps {
  currentPet: PetInfo;
  onOpenPetSwitcher: () => void;
  onShowToast: (msg: string) => void;
  onNavigateTab: (tab: 'passport' | 'health' | 'square' | 'mine') => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  currentPet,
  onOpenPetSwitcher,
  onShowToast,
  onNavigateTab
}) => {
  const [waterIntake, setWaterIntake] = useState<number>(650);
  const [isWalking, setIsWalking] = useState<boolean>(false);
  const [isJoinedMeetup, setIsJoinedMeetup] = useState<boolean>(false);
  const [photos, setPhotos] = useState<string[]>([
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCHe4zbGVesw2LiLKHNsHE1nJ4P6kI7JKuaHuqOsZ1ChnMWSY7t9FR-o-yoDgPEbrEXqN_14ZJr2Z86IOI1M8egmD_x0VdFtx8Te8vnyfTMikHodD-0YyqfpvgZAI_IbIMtEXMCdac-ArSPUeoulYrdooUdHfQNqt7YuWtDLMRNRGOyPBeeNdqeYkwnYqxxlqslmL3wzbw4GUSdVljebChi6sCwnrZ-zzDoYjtqmptc-LyLQkL3myIK',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuChO1zRcPaYHssJ1WHd6fXXemZLuu7DyOoHCSE0P7rFTMBPp7QvwrHaTmp7-nXhwbC89Hf7rSjGY7BlVn4xSVS-_WSbLzLxD0pZCwBL_whO-t8MWmSVMOaajGo2zq9DgK8k1tyEeCCp6o8_8c2AP471j6LUN3n-d0fKynROzXeF3QIC76K_oAgmDEI3h1JWRCWlVHL69wpp3o_UhCwIyFoEkKfHQVphakR7mfO98fNG2evHPOWFwEfK'
  ]);

  const handleAddWater = () => {
    const nextVal = Math.min(800, waterIntake + 50);
    setWaterIntake(nextVal);
    onShowToast(`已为 ${currentPet.name} 记录饮水 +50ml (累计 ${nextVal}ml) 💧`);
  };

  const handleToggleWalk = () => {
    setIsWalking(!isWalking);
    onShowToast(
      !isWalking
        ? `🐾 开始为 ${currentPet.name} 记录户外漫步轨迹！`
        : `已保存本次遛狗记录，麦麦状态棒棒哒！`
    );
  };

  const handleToggleMeetup = () => {
    setIsJoinedMeetup(!isJoinedMeetup);
    onShowToast(
      !isJoinedMeetup
        ? `报名成功！已将金毛柯基聚会添加到活动门票中 🍁`
        : `已取消该场同城团建报名`
    );
  };

  const handleAddPhoto = () => {
    onShowToast(`📷 已成功添加阳光抓拍照至今日动态相册！`);
  };

  const waterPercent = Math.min(100, Math.round((waterIntake / 800) * 100));

  return (
    <div className="flex flex-col gap-4 pb-28 px-4 pt-3">
      {/* Pet Header Card */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={currentPet.avatar}
                alt={currentPet.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#fa8c16]/30 shadow-sm"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#266d00] text-white rounded-full flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[13px] fill">check</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold text-[#1b1c19] tracking-tight">
                  {currentPet.name}
                </h2>
                <span className="text-xs bg-[#f5f3ee] text-[#6e3900] px-2 py-0.5 rounded-full font-semibold">
                  {currentPet.breed} · {currentPet.age}
                </span>
              </div>
              <p className="text-xs text-[#564335] mt-0.5 font-medium">{currentPet.statusText}</p>
            </div>
          </div>

          <button
            onClick={onOpenPetSwitcher}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#f5f3ee] hover:bg-[#eae8e3] text-[#1b1c19] text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow-2xs"
          >
            <span className="material-symbols-outlined text-[15px] text-[#fa8c16]">sync</span>
            <span>切换</span>
          </button>
        </div>

        {/* Weather card */}
        <div
          onClick={() => onNavigateTab('square')}
          className="bg-[#fbf9f4] rounded-xl p-3 flex items-center justify-between cursor-pointer border border-[#fa8c16]/15 hover:bg-[#f5f3ee] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#fa8c16]/15 flex items-center justify-center text-[#fa8c16]">
              <span className="material-symbols-outlined text-[20px]">sunny</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#1b1c19]">晴天 22℃</span>
                <span className="text-[10px] bg-[#85fa51] text-[#1a5200] font-bold px-1.5 py-0.2 rounded-full">
                  撒欢指数 98%
                </span>
              </div>
              <span className="text-xs text-[#564335] mt-0.5">微风拂面，超级适合草地飞盘！</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#897363]">chevron_right</span>
        </div>
      </section>

      {/* Section: 今日运动与漫步轨迹 */}
      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#fa8c16]"></span>
            <h3 className="text-base font-bold text-[#1b1c19]">今日运动与漫步轨迹</h3>
          </div>
          <span className="text-xs text-[#fa8c16] font-bold">朝阳公园路线</span>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-4">
          {/* Map & Trail graphic */}
          <div className="relative w-full h-36 bg-[#f5f3ee] rounded-xl overflow-hidden p-3 flex flex-col justify-between">
            {/* Top Tag */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#266d00] shadow-xs">
                <span className="material-symbols-outlined text-[14px]">pets</span>
                <span>上次遛宠 · 42分钟前完成</span>
              </span>
            </div>

            {/* Simulated Trail SVG Curve */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80">
                <path
                  d="M 20 65 Q 90 10, 160 50 T 280 20"
                  fill="none"
                  stroke="#fa8c16"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
                {/* Start Point */}
                <circle cx="20" cy="65" r="5" fill="#266d00" />
                <circle cx="20" cy="65" r="9" fill="#266d00" opacity="0.25" />
                {/* End Point */}
                <circle cx="280" cy="20" r="7" fill="#fa8c16" />
                <circle cx="280" cy="20" r="14" fill="#fa8c16" opacity="0.3" className="animate-ping" />
              </svg>
            </div>

            {/* Action Button: 再遛一次 */}
            <div className="flex justify-end z-10">
              <button
                id="walk-again-btn"
                onClick={handleToggleWalk}
                className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#fa8c16] hover:bg-[#904d00] text-white text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">
                  {isWalking ? 'stop_circle' : 'play_arrow'}
                </span>
                <span>{isWalking ? '结束遛宠' : '再遛一次'}</span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 divide-x divide-[#e4e2dd] pt-1">
            <div className="flex flex-col items-center">
              <span className="text-xs text-[#564335]">遛宠时长</span>
              <div className="flex items-baseline gap-0.5 mt-0.5">
                <span className="text-xl font-extrabold text-[#1b1c19]">42</span>
                <span className="text-xs text-[#564335]">min</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs text-[#564335]">探索里程</span>
              <div className="flex items-baseline gap-0.5 mt-0.5">
                <span className="text-xl font-extrabold text-[#1b1c19]">2.8</span>
                <span className="text-xs text-[#564335]">km</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs text-[#564335]">麦麦消耗</span>
              <div className="flex items-baseline gap-0.5 mt-0.5">
                <span className="text-xl font-extrabold text-[#1b1c19]">145</span>
                <span className="text-xs text-[#564335]">kcal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 饮水追踪 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#005fae]/10 flex items-center justify-center text-[#005fae]">
              <span className="material-symbols-outlined text-[18px]">water_drop</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#1b1c19]">饮水追踪</span>
              <span className="text-[11px] text-[#564335]">目标 800ml</span>
            </div>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-extrabold text-[#005fae]">{waterIntake}</span>
            <span className="text-xs text-[#564335]">ml</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#e4e2dd] h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#6aaaff] to-[#005fae] h-full rounded-full transition-all duration-500"
            style={{ width: `${waterPercent}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <span className="text-[#564335]">已达成 {waterPercent}%</span>
          <button
            onClick={handleAddWater}
            className="text-[#005fae] font-bold hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">add</span>
            <span>加水 50ml</span>
          </button>
        </div>
      </section>

      {/* Section: 今日偶遇 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#1b1c19]">今日偶遇</span>
              <span className="text-[10px] bg-[#85fa51] text-[#1a5200] font-bold px-1.5 py-0.2 rounded-full">
                嗅闻社交
              </span>
            </div>
            <span className="text-xs text-[#564335] mt-0.5">结交了 4 位可爱狗友</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Dog Avatars Stack */}
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMq7t8wYcdVs4IvyxN-sV33gkI9JHymqUrPSIrssULWhyua2kk0e0IpWk_3Af9w-Sc81suKDC2Jq0oRD0gdQDxgGSQLi4MyHqaRf4Im1iyGXHwviKx3Hoz7qNiqS0HzIJ9DjKN640WSHAIDhgGVI_irvgbq2MadP6wuKranc4K6nE6SEmxL_iSTBgoV4uHeSpX_pLmfLLqXIszkVUV8_UeKhmJqpTGPitJ9wATzkIlSUaqeY4oPG1"
              alt="Corgi"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUWCL3m_1rl69xSfuQbZygEzhna5aPOBGjnkmFwWmRO28Ezxc6flq9Qggwg-_Ft9LEWtROa7YdwgebDG7mhVgZZL6-DTbudD-cYO3dlkeO0NIEVzyFgH0tY1GkvGzR3eveI9J2Jg-pVQI8VgDjqSqkCgr2pJFxFYcrO5OKlWTTF70VAMnV3A_3vX2W2uI5-B-9HhUOc7sZoT_DehdzJsLfjpuk4c4Q93wx4rdSy9SUeuesOUvqOc_7"
              alt="Samoyed"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0_xxLSvTDernBSyJorjnab-hs8rX5ULNnrDB4gV7T3Y6D18nE_MhwKqzMVWca03XVOojFUNLIkhPgOwRfGjksR7qur0ZfnCJdQNuH-0gPPSmu1f_uzlbDCF4xc45SR2cXtNqAFhseOTUMabdHc62Ur3A7JUv8Mwux1NS488Q8wKTNKiVjhYW70MWj_WxFrguwStyvGWVJLg9fWKDkeqE46Q9QCnwvmzminwyUQtpt4eJ7_kaBIn9x"
              alt="Collie"
            />
          </div>
          <button
            onClick={() => onShowToast('已给今日偶遇的 4 位狗友送上了专属骨头点赞 🦴')}
            className="w-8 h-8 rounded-full bg-[#fbf9f4] flex items-center justify-center text-[#fa8c16] hover:bg-[#ffdcc3] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">favorite</span>
          </button>
        </div>
      </section>

      {/* Section: 阳光大草坪 · 随手抓拍 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#fa8c16] text-[18px]">photo_camera</span>
            <span className="text-sm font-bold text-[#1b1c19]">阳光大草坪 · 随手抓拍</span>
          </div>
          <span className="text-xs text-[#897363]">今日 10:24</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {/* Photo 1 */}
          <div className="relative aspect-square rounded-xl overflow-hidden group shadow-2xs">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYiJKB3RKnC-pOaNJei3GHbtPVx9JAXxP0aRAsTB0KUQOdTihsofLdE5T-KABTPysqJaMavj5UoN6db4lk8MoUb9HYfY2-1n9YPJB2Jt9D57qdyXUOfqislOli2K4HLpJdiwVm0BLGdrx8ShkoZWnzMFWEPyUkE5JdZ8m85kGErC2JunxvutoK_WWEMoILzQ4OI1Lav29dgiGfvYoGOBE7nCceLfIGEKI4SiuvQV1id2ey8hnj-Gwy"
              alt="奔跑中"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-1.5 left-1.5 text-[10px] bg-black/60 text-white px-1.5 py-0.2 rounded-md">
              奔跑中
            </span>
          </div>

          {/* Photo 2 */}
          <div className="relative aspect-square rounded-xl overflow-hidden group shadow-2xs">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChO1zRcPaYHssJ1WHd6fXXemZLuu7DyOoHCSE0P7rFTMBPp7QvwrHaTmp7-nXhwbC89Hf7rSjGY7BlVn4xSVS-_WSbLzLxD0pZCwBL_whO-t8MWmSVMOaajGo2zq9DgK8k1tyEeCCp6o8_8c2AP471j6LUN3n-d0fKynROzXeF3QIC76K_oAgmDEI3h1JWRCWlVHL69wpp3o_UhCwIyFoEkKfHQVphakR7mfO98fNG2evHPOWFwEfK"
              alt="贴贴"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-1.5 left-1.5 text-[10px] bg-black/60 text-white px-1.5 py-0.2 rounded-md">
              贴贴
            </span>
          </div>

          {/* Add photo card */}
          <button
            onClick={handleAddPhoto}
            className="aspect-square rounded-xl bg-[#fbf9f4] border-2 border-dashed border-[#dcc1af] flex flex-col items-center justify-center text-[#564335] hover:bg-[#f5f3ee] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px] text-[#fa8c16]">add_a_photo</span>
            <span className="text-[11px] font-bold mt-1">添加萌照</span>
          </button>
        </div>
      </section>

      {/* Section: 今日出门穿搭 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#fa8c16]/10 flex items-center justify-center text-[#fa8c16]">
              <span className="material-symbols-outlined text-[18px]">checkroom</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#1b1c19]">今日出门穿搭</span>
              <span className="text-[11px] text-[#564335]">今日保暖防风指数 5星</span>
            </div>
          </div>
          <button
            onClick={() => onShowToast('已开启穿搭相册与全身照抓拍 📸')}
            className="flex items-center gap-1 text-xs font-bold text-[#904d00] bg-[#ffdcc3] px-2.5 py-1 rounded-full hover:bg-[#fa8c16] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">photo_camera</span>
            <span>拍穿搭打卡</span>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {/* Outfit 1 */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f3ee]">
            <div className="w-10 h-10 rounded-xl bg-[#ffdcc3] flex items-center justify-center text-[#904d00]">
              <span className="material-symbols-outlined text-[22px]">dry_cleaning</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#904d00] font-bold">保暖衣物</span>
              <span className="text-sm font-bold text-[#1b1c19]">复古暖橙针织小马甲</span>
              <span className="text-xs text-[#564335]">防风防毛乱款 · 均码</span>
            </div>
          </div>

          {/* Outfit 2 */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f3ee]">
            <div className="w-10 h-10 rounded-xl bg-[#85fa51]/30 flex items-center justify-center text-[#266d00]">
              <span className="material-symbols-outlined text-[22px]">roller_shades</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#266d00] font-bold">安全牵引</span>
              <span className="text-sm font-bold text-[#1b1c19]">马卡龙双头反光牵引绳</span>
              <span className="text-xs text-[#564335]">防爆冲加粗弹性把手</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 今日营养与便便 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#266d00]/10 flex items-center justify-center text-[#266d00]">
              <span className="material-symbols-outlined text-[18px]">restaurant</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#1b1c19]">今日营养与便便</span>
              <span className="text-[11px] text-[#564335]">能量摄入与肠胃消化状态</span>
            </div>
          </div>
          <span className="text-xs bg-[#85fa51] text-[#1a5200] font-bold px-2 py-0.5 rounded-full">
            消化极佳
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Food item */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f5f3ee]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#fa8c16]">lunch_dining</span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#1b1c19]">天然冻干鲜肉犬粮</span>
                <span className="text-xs text-[#564335]">早晚各 160g，共 320g 达标</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#1b1c19]">320g</span>
          </div>

          {/* Supplement item */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f5f3ee]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#005fae]">medication</span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#1b1c19]">营养补充剂打卡</span>
                <span className="text-xs text-[#564335]">深海鱼油 1粒 · 复合维B 1片 · 软骨素</span>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-[20px] text-[#266d00] fill"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>

          {/* Stool record */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f5f3ee]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#fa8c16]">eco</span>
              <span className="text-sm font-bold text-[#1b1c19]">排便记录</span>
            </div>
            <span className="text-xs text-[#564335] font-medium">金黄色成型 · 完美香蕉便便 🍌</span>
          </div>
        </div>
      </section>

      {/* Section: 同城团建热召 Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#fa8c16] via-[#fa8c16]/95 to-[#904d00] p-4 text-white shadow-lg">
        <div className="flex items-center justify-between text-xs text-white/90 mb-1">
          <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full font-bold">
            <span className="material-symbols-outlined text-[13px]">celebration</span>
            同城团建热召
          </span>
          <span className="font-bold">本周六 15:00</span>
        </div>

        <h4 className="text-base font-bold text-white mt-1">朝阳公园金毛柯基大乱斗聚会</h4>
        <p className="text-xs text-white/80 mt-0.5">
          草坪撒欢、奔跑捡球、零食自助与宠物摄影师跟拍！
        </p>

        <div className="flex items-center justify-between mt-3 pt-1">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-[10px] font-bold border border-white">
                +18
              </div>
              <img
                className="w-7 h-7 rounded-full border border-white object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq1EkOkL6YkJb63q8AF657J54xV7E823h7mr1QObRSYvzTTvd8VVQKQ0NRju5iq_BpbO_B5HawK8FzE-3IZTFxYTKjPQtEKB3roJr8fUp1-y_Q50fTO52NNRyYxF7gLG1HtyPjFZTGht5xQWrirZ-KwlmOEz3wiWfIvSU_hs4tLUQBWEze4yOv7vFbphYsYH_DAK_FBrUguHzCz2p2ztxlP81Z-1V2ZSfCQro2hh29JEOJIFMP0wsg"
                alt="Pup"
              />
            </div>
            <span className="text-xs text-white font-medium">已有 18 只宠宝报名</span>
          </div>

          <button
            onClick={handleToggleMeetup}
            className={`px-4 py-2 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer ${
              isJoinedMeetup
                ? 'bg-white text-[#266d00]'
                : 'bg-white text-[#904d00] hover:bg-[#ffdcc3]'
            }`}
          >
            {isJoinedMeetup ? '已报名 ✓' : '一键报名'}
          </button>
        </div>
      </section>
    </div>
  );
};
