import React, { useState } from 'react';
import { INITIAL_SUPPLEMENTS } from '../../data/mockData';
import { SupplementItem } from '../../types';

interface HealthTabProps {
  onShowToast: (msg: string) => void;
}

export const HealthTab: React.FC<HealthTabProps> = ({ onShowToast }) => {
  const [supplements, setSupplements] = useState<SupplementItem[]>(INITIAL_SUPPLEMENTS);
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const toggleSupplement = (id: string) => {
    setSupplements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updated = !item.checked;
          onShowToast(
            updated
              ? `已打卡今日 ${item.name} 服用记录 ✨`
              : `已取消今日 ${item.name} 服用打卡`
          );
          return { ...item, checked: updated };
        }
        return item;
      })
    );
  };

  const handleBookHospital = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
      onShowToast('🎉 预约成功！已为麦麦锁定瑞鹏医疗科技园院区专属优惠体检名额！');
    }, 900);
  };

  return (
    <div className="flex flex-col gap-4 pb-28 px-4 pt-3">
      {/* 1. 今日综合状态看板 */}
      <section className="relative overflow-hidden bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] border border-[#fa8c16]/10">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-[#85fa51]/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#ffdcc3]/30 rounded-full blur-xl pointer-events-none"></div>

        <div className="relative flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#266d00]"></span>
              <span className="text-[11px] font-bold text-[#266d00] uppercase tracking-wider">
                今日健康评级：极佳
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-[#1b1c19]">状态活力满满</h2>
            <p className="text-xs text-[#564335] mt-0.5">综合多维体征、作息与运动数据实时计算</p>
          </div>

          {/* Radial Score Dial */}
          <div className="relative flex items-center justify-center w-20 h-20 shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 72 72">
              <circle
                className="text-[#eae8e3]"
                cx="36"
                cy="36"
                fill="transparent"
                r="30"
                stroke="currentColor"
                strokeWidth="6"
              ></circle>
              <circle
                className="text-[#266d00]"
                cx="36"
                cy="36"
                fill="transparent"
                r="30"
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray="188.5"
                strokeDashoffset="7.5"
                strokeLinecap="round"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-[#1b1c19] leading-none">96</span>
              <span className="text-[10px] text-[#897363] font-semibold">分</span>
            </div>
          </div>
        </div>

        {/* Mood & Factors Banner */}
        <div className="mt-3 pt-3 bg-[#f5f3ee]/80 rounded-xl p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-xl">😄</span>
              <span className="text-sm font-bold text-[#1b1c19]">心情指数：超级开心</span>
            </div>
            <span className="text-[10px] bg-[#ffdcc3] text-[#6e3900] font-bold px-2 py-0.5 rounded-full">
              高频摇尾巴中
            </span>
          </div>

          <p className="text-xs text-[#564335]">
            分析来源：今日户外运动充分 2.8km、早晚主粮营养均衡、饮水达标率良好。
          </p>

          <div className="grid grid-cols-3 gap-2 mt-1">
            <div className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-lg shadow-2xs">
              <span className="material-symbols-outlined text-[16px] text-[#fa8c16]">directions_walk</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-[#564335]">步道散步</span>
                <span className="text-xs font-bold text-[#1b1c19] truncate">2.8 km</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-lg shadow-2xs">
              <span className="material-symbols-outlined text-[16px] text-[#005fae]">water_drop</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-[#564335]">饮水达成</span>
                <span className="text-xs font-bold text-[#1b1c19] truncate">81%</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-lg shadow-2xs">
              <span className="material-symbols-outlined text-[16px] text-[#266d00]">sentiment_very_satisfied</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-[#564335]">活跃时长</span>
                <span className="text-xs font-bold text-[#1b1c19] truncate">78 分钟</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 体重与体态走势 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-[#fa8c16]">monitor_weight</span>
              <span className="text-base font-bold text-[#1b1c19]">体重与体态走势</span>
            </div>
            <span className="text-xs text-[#564335]">近 6 个月追踪数据</span>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-extrabold text-[#1b1c19]">24.5</span>
              <span className="text-xs text-[#564335]">kg</span>
            </div>
            <span className="text-[10px] text-[#266d00] bg-[#85fa51]/30 px-2 py-0.5 rounded-full font-bold">
              BCS 5/9 标准体态
            </span>
          </div>
        </div>

        {/* 6-Month Weight Chart */}
        <div className="relative w-full h-36 bg-[#f5f3ee]/60 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-[#897363]">
            <span>26.0kg (警戒)</span>
            <span className="text-[#266d00] font-semibold">理想范围: 24.0~25.0kg</span>
          </div>

          {/* SVG Graph */}
          <div className="w-full h-20 relative">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 320 80">
              <defs>
                <linearGradient id="weightGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fa8c16" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#fa8c16" stopOpacity="0.0"></stop>
                </linearGradient>
              </defs>
              <rect x="0" y="24" width="320" height="34" rx="4" fill="#85fa51" fillOpacity="0.15"></rect>
              <path
                d="M 10 58 Q 70 54, 130 42 T 250 32 L 310 28 L 310 80 L 10 80 Z"
                fill="url(#weightGrad)"
              ></path>
              <path
                d="M 10 58 Q 70 54, 130 42 T 250 32 L 310 28"
                fill="none"
                stroke="#fa8c16"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
              <circle cx="10" cy="58" r="3.5" fill="#ffffff" stroke="#fa8c16" strokeWidth="2.5"></circle>
              <circle cx="72" cy="55" r="3.5" fill="#ffffff" stroke="#fa8c16" strokeWidth="2.5"></circle>
              <circle cx="134" cy="42" r="3.5" fill="#ffffff" stroke="#fa8c16" strokeWidth="2.5"></circle>
              <circle cx="196" cy="38" r="3.5" fill="#ffffff" stroke="#fa8c16" strokeWidth="2.5"></circle>
              <circle cx="258" cy="32" r="3.5" fill="#ffffff" stroke="#fa8c16" strokeWidth="2.5"></circle>
              <circle cx="310" cy="28" r="5" fill="#fa8c16" stroke="#ffffff" strokeWidth="2"></circle>
            </svg>
          </div>

          <div className="flex justify-between items-center text-[11px] text-[#897363]">
            <span>5月</span>
            <span>6月</span>
            <span>7月</span>
            <span>8月</span>
            <span>9月</span>
            <span className="font-bold text-[#fa8c16]">本月 24.5kg</span>
          </div>
        </div>

        {/* AI Health analysis */}
        <div className="flex items-start gap-2 bg-[#ffdcc3]/30 rounded-xl p-3">
          <span className="material-symbols-outlined text-[18px] text-[#fa8c16] shrink-0 mt-0.5">
            auto_awesome
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#1b1c19]">智能形体分析建议</span>
            <span className="text-xs text-[#564335] leading-relaxed mt-0.5">
              金毛成年期骨骼与背脊线条状态优良，建议维持当前每日 320g 食量与适度跑跳，避免关节负荷过大。
            </span>
          </div>
        </div>
      </section>

      {/* 3. 饮食与营养追踪 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-[#fa8c16]">restaurant</span>
            <span className="text-base font-bold text-[#1b1c19]">饮食与营养追踪</span>
          </div>
          <span className="text-[10px] text-[#266d00] bg-[#85fa51]/30 px-2 py-0.5 rounded-full font-bold">
            目标达成 100%
          </span>
        </div>

        {/* Feeding Graphic */}
        <div className="bg-[#f5f3ee]/70 rounded-xl p-3 flex items-center justify-between gap-3">
          <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
              <circle
                className="text-[#eae8e3]"
                cx="40"
                cy="40"
                fill="transparent"
                r="32"
                stroke="currentColor"
                strokeWidth="8"
              ></circle>
              <circle
                className="text-[#fa8c16]"
                cx="40"
                cy="40"
                fill="transparent"
                r="32"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="201"
                strokeDashoffset="100.5"
              ></circle>
              <circle
                className="text-[#ffdcc3]"
                cx="40"
                cy="40"
                fill="transparent"
                r="32"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="201"
                strokeDashoffset="0"
                strokeLinecap="round"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-[#1b1c19] leading-none">
                320<span className="text-[10px]">g</span>
              </span>
              <span className="text-[10px] text-[#897363]">全天定量</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fa8c16]"></span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1b1c19]">早餐鲜肉粮</span>
                  <span className="text-[10px] text-[#564335]">08:00 完成进食</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1b1c19]">160g</span>
            </div>

            <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffdcc3]"></span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1b1c19]">晚餐主食配方</span>
                  <span className="text-[10px] text-[#564335]">18:30 完成进食</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1b1c19]">160g</span>
            </div>
          </div>
        </div>

        {/* Supplement Checklist with Interactivity */}
        <div className="flex flex-col gap-2 mt-1">
          <span className="text-xs font-bold text-[#564335]">维生素与补剂管理清单</span>
          {supplements.map((item) => (
            <label
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-[#f5f3ee]/60 hover:bg-[#f5f3ee] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    item.tagColor === 'tertiary'
                      ? 'bg-[#d4e3ff] text-[#005fae]'
                      : item.tagColor === 'secondary'
                      ? 'bg-[#85fa51]/30 text-[#266d00]'
                      : 'bg-[#ffdcc3] text-[#904d00]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#1b1c19]">{item.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                        item.tagColor === 'tertiary'
                          ? 'bg-[#d4e3ff] text-[#005fae]'
                          : item.tagColor === 'secondary'
                          ? 'bg-[#85fa51]/30 text-[#266d00]'
                          : 'bg-[#ffdcc3] text-[#904d00]'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#564335] mt-0.5">{item.instructions}</span>
                </div>
              </div>

              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleSupplement(item.id)}
                className="w-5 h-5 rounded text-[#fa8c16] focus:ring-0 accent-[#fa8c16] cursor-pointer"
              />
            </label>
          ))}
        </div>
      </section>

      {/* 4. 喝水与排便状态 */}
      <section className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-3.5 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px] text-[#005fae]">water_drop</span>
              <span className="text-xs font-bold text-[#1b1c19]">喝水监控</span>
            </div>
            <span className="text-[10px] text-[#005fae] bg-[#d4e3ff] px-1.5 py-0.2 rounded-full font-bold">
              正常
            </span>
          </div>

          <div className="my-3 flex flex-col items-center">
            <div className="w-full h-2 bg-[#eae8e3] rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-[#6aaaff] to-[#005fae] rounded-full w-[81%]"></div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-[#1b1c19]">650</span>
              <span className="text-xs text-[#564335]">/ 800 ml</span>
            </div>
          </div>

          <span className="text-[11px] text-[#564335] text-center bg-[#f5f3ee] py-1 rounded-lg">
            今日饮水补给 3 次
          </span>
        </div>

        <div className="bg-white rounded-2xl p-3.5 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px] text-[#904d00]">eco</span>
              <span className="text-xs font-bold text-[#1b1c19]">排便状况</span>
            </div>
            <span className="text-[10px] text-[#266d00] bg-[#85fa51]/30 px-1.5 py-0.2 rounded-full font-bold">
              2次 · 良好
            </span>
          </div>

          <div className="my-3 flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-[#85fa51]/30 flex items-center justify-center text-[#266d00] mb-1">
              <span className="material-symbols-outlined text-[20px]">task_alt</span>
            </div>
            <span className="text-xs font-bold text-[#1b1c19]">布里斯托 4 型</span>
            <span className="text-[10px] text-[#564335]">理想香蕉便便 🍌</span>
          </div>

          <span className="text-[11px] text-[#564335] text-center bg-[#f5f3ee] py-1 rounded-lg">
            肠胃消化吸收状态佳
          </span>
        </div>
      </section>

      {/* 5. 驱虫与体检提醒日历 */}
      <section className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_-2px_rgba(210,145,80,0.1)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-[#fa8c16]">event_upcoming</span>
            <span className="text-base font-bold text-[#1b1c19]">驱虫与体检日历</span>
          </div>
          <button
            onClick={() => onShowToast('已展开麦麦历年全套健康体检档案 🩺')}
            className="text-xs text-[#904d00] font-bold flex items-center gap-0.5 cursor-pointer hover:underline"
          >
            完整档案 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>

        {/* Deworming tile */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f3ee]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#fa8c16]/15 flex flex-col items-center justify-center text-[#fa8c16] shrink-0">
              <span className="text-base font-extrabold leading-none">8</span>
              <span className="text-[10px] font-bold">天后</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#1b1c19]">体内外一体驱虫</span>
              <span className="text-[11px] text-[#564335]">建议药品：超可信 / 大宠爱</span>
            </div>
          </div>
          <button
            onClick={() => onShowToast('已设置驱虫提前 2 天短信与应用强提醒 ⏰')}
            className="px-3 py-1 rounded-full bg-white text-[#904d00] text-xs font-bold shadow-2xs hover:bg-[#eae8e3] cursor-pointer"
          >
            设提醒
          </button>
        </div>

        {/* Annual Checkup */}
        <div className="flex flex-col p-3 rounded-xl bg-gradient-to-br from-[#ffdcc3]/40 via-[#f5f3ee] to-white gap-3 border border-[#fa8c16]/10">
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#fa8c16] flex items-center justify-center text-white shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[18px]">medical_services</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1b1c19]">秋季深度体检建议</span>
                <span className="text-[10px] text-[#6e3900] bg-[#ffdcc3] px-1.5 py-0.2 rounded font-bold">
                  即将到期
                </span>
              </div>
              <span className="text-[11px] text-[#564335] mt-0.5 leading-relaxed">
                金毛步入成犬第 3 年，建议下月进行髋关节 X 光筛查与全血生化 12 项检查。
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#564335]">
            <span className="material-symbols-outlined text-[14px] text-[#897363]">domain</span>
            <span>同城合作：瑞鹏宠物医疗中心 (科技园分院)</span>
          </div>

          <button
            onClick={handleBookHospital}
            disabled={isBooking}
            className={`w-full h-11 rounded-full text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer ${
              isBooked
                ? 'bg-[#266d00]'
                : 'bg-gradient-to-r from-[#fa8c16] to-[#904d00]'
            }`}
          >
            {isBooking ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                <span>正在对接最近院区...</span>
              </>
            ) : isBooked ? (
              <>
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>已预约瑞鹏科技园分院（专属 85 折）</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>一键预约合作宠物医院 (享专属折扣)</span>
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};
