import React, { useState } from 'react';
import { INITIAL_PRODUCTS, USER_PROFILE } from '../../data/mockData';
import { ProductItem } from '../../types';

interface MineTabProps {
  onShowToast: (msg: string) => void;
  onAddToCart: (product: ProductItem) => void;
  onNavigateTab: (tab: 'passport' | 'health' | 'square') => void;
}

const CATEGORIES = [
  { id: 'all', label: '穿戴服饰', icon: '👔' },
  { id: 'leash', label: '胸背项圈', icon: '🦮' },
  { id: 'food', label: '天然冻干', icon: '🥩' },
  { id: 'health', label: '维生素营养', icon: '💊' },
  { id: 'toys', label: '益智玩具', icon: '🎾' }
];

export const MineTab: React.FC<MineTabProps> = ({
  onShowToast,
  onAddToCart,
  onNavigateTab
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [products] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [couponClaimed, setCouponClaimed] = useState<boolean>(false);

  const handleClaimCoupon = () => {
    if (couponClaimed) {
      onShowToast('您已成功领取 100 元新宠穿搭券，结算时自动抵扣！');
      return;
    }
    setCouponClaimed(true);
    onShowToast('🎉 恭喜领取 100 元新宠穿搭满减礼包！已存入卡券包！');
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : selectedCategory === 'leash'
      ? products.filter((p) => p.category === '胸背项圈')
      : selectedCategory === 'food'
      ? products.filter((p) => p.category === '天然冻干')
      : selectedCategory === 'health'
      ? products.filter((p) => p.category === '维生素营养')
      : products.filter((p) => p.category === '益智玩具');

  return (
    <div className="flex flex-col gap-4 pb-28 px-4 pt-3">
      {/* Profile & Pet Card */}
      <section className="relative">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_-2px_rgba(210,145,80,0.12)] p-4 border border-[#fa8c16]/10">
          <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full bg-[#ffdcc3]/30 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-[#85fa51]/15 blur-xl pointer-events-none"></div>

          {/* User Info Header */}
          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <img
                  className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-[#fa8c16]/20"
                  src={USER_PROFILE.avatar}
                  alt={USER_PROFILE.name}
                />
                <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#fa8c16] text-white shadow-xs">
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-base font-extrabold text-[#1b1c19] truncate">
                    {USER_PROFILE.name}
                  </h2>
                  <span className="px-2 py-0.2 rounded-full bg-[#ffdcc3] text-[#6e3900] text-[10px] font-bold">
                    {USER_PROFILE.title}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#f5f3ee] text-[#904d00] text-[11px] font-bold">
                    <span
                      className="material-symbols-outlined text-[13px] fill"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      military_tech
                    </span>
                    {USER_PROFILE.badge}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('passport')}
              className="flex flex-col items-center justify-center px-2.5 py-1.5 rounded-xl bg-[#f5f3ee] text-[#564335] hover:text-[#904d00] transition-colors shrink-0 cursor-pointer shadow-2xs"
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
              <span className="text-[10px] font-bold mt-0.5">宠友名片</span>
            </button>
          </div>

          {/* Assets & Paw Points Banner */}
          <div className="mt-3 grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#f5f3ee]">
            <div
              onClick={() => onShowToast('当前拥有 1,280 萌爪积分，可抵扣商城订单 12.8 元 🪙')}
              className="flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/60 rounded-lg p-1 transition-colors"
            >
              <span className="text-xl font-extrabold text-[#fa8c16] tracking-tight">
                {USER_PROFILE.points.toLocaleString()}
              </span>
              <span className="flex items-center gap-0.5 text-[11px] text-[#564335] mt-0.5 font-medium">
                <span className="material-symbols-outlined text-[12px] text-[#fa8c16]">toll</span>
                萌爪积分
              </span>
            </div>

            <div
              onClick={() => onShowToast('您共有 4 张卡券：新宠立减券、体检抵用券、洗美券等 🎫')}
              className="flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/60 rounded-lg p-1 transition-colors"
            >
              <span className="text-xl font-extrabold text-[#1b1c19] tracking-tight">
                {USER_PROFILE.coupons}
              </span>
              <span className="text-[11px] text-[#564335] mt-0.5 font-medium">专属卡券</span>
            </div>

            <div
              onClick={() => onNavigateTab('square')}
              className="flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/60 rounded-lg p-1 transition-colors"
            >
              <span className="text-xl font-extrabold text-[#1b1c19] tracking-tight">
                {USER_PROFILE.friends}
              </span>
              <span className="text-[11px] text-[#564335] mt-0.5 font-medium">同城狗友</span>
            </div>
          </div>

          {/* Quick Portals Grid */}
          <div className="mt-3 grid grid-cols-4 gap-1 pt-1">
            <button
              onClick={() => onNavigateTab('passport')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#ffdcc3]/60 flex items-center justify-center text-[#fa8c16] transition-transform group-active:scale-95">
                <span className="material-symbols-outlined text-[22px]">folder_shared</span>
              </div>
              <span className="mt-1 text-[11px] text-[#1b1c19] font-medium">宠物档案</span>
            </button>

            <button
              onClick={() => onNavigateTab('square')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#d4e3ff] flex items-center justify-center text-[#005fae] transition-transform group-active:scale-95">
                <span className="material-symbols-outlined text-[22px]">confirmation_number</span>
              </div>
              <span className="mt-1 text-[11px] text-[#1b1c19] font-medium">活动门票</span>
            </button>

            <button
              onClick={() => onNavigateTab('square')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#85fa51]/30 flex items-center justify-center text-[#266d00] transition-transform group-active:scale-95">
                <span className="material-symbols-outlined text-[22px]">diversity_1</span>
              </div>
              <span className="mt-1 text-[11px] text-[#1b1c19] font-medium">38位狗友</span>
            </button>

            <button
              onClick={() => onNavigateTab('passport')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-[#ffdad6]/60 flex items-center justify-center text-[#ba1a1a] transition-transform group-active:scale-95">
                <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
              </div>
              <span className="mt-1 text-[11px] text-[#1b1c19] font-medium">电子疫苗本</span>
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Gift Promotion Banner */}
      <section>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#fa8c16] via-[#fa8c16]/95 to-[#904d00] p-4 text-white shadow-[0_6px_20px_rgba(250,140,22,0.28)]">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
          <div className="flex items-center justify-between gap-3 relative z-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.2 rounded-full bg-white/20 text-[10px] text-white font-bold backdrop-blur-xs">
                  限时礼遇
                </span>
                <span className="text-[11px] text-[#ffdcc3] font-semibold">养宠新手首单</span>
              </div>
              <h3 className="text-sm font-bold text-white mt-1">新宠登记即送 100元穿搭满减包</h3>
              <p className="text-[11px] text-white/80 mt-0.5">防爆冲胸背、潮流保暖穿搭直享立减</p>
            </div>
            <button
              onClick={handleClaimCoupon}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md active:scale-95 transition-transform cursor-pointer ${
                couponClaimed
                  ? 'bg-white/90 text-[#266d00]'
                  : 'bg-white text-[#904d00] hover:bg-[#ffdcc3]'
              }`}
            >
              {couponClaimed ? '已领取 ✓' : '立即领取'}
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Mall Section */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#ffdcc3] text-[#fa8c16]">
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            </span>
            <h3 className="text-base font-bold text-[#1b1c19]">萌宠专属穿搭与好物精选</h3>
          </div>
          <button
            onClick={() => onShowToast('已进入 PawPals 官方优选宠物生活馆全部好物')}
            className="flex items-center text-[#904d00] text-xs font-bold hover:underline cursor-pointer"
          >
            查看全部
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Category Pills (Horizontal Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#fa8c16] text-white shadow-xs'
                    : 'bg-white text-[#564335] hover:bg-[#f5f3ee] border border-[#e4e2dd]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Waterfall Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_-2px_rgba(210,145,80,0.08)] border border-[#e4e2dd]/70 group"
            >
              <div className="relative w-full aspect-square bg-[#f5f3ee] overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-white text-[10px] font-bold shadow-xs ${
                    prod.badgeType === 'secondary'
                      ? 'bg-[#266d00]'
                      : prod.badgeType === 'tertiary'
                      ? 'bg-[#005fae]'
                      : 'bg-[#fa8c16]'
                  }`}
                >
                  {prod.badge}
                </span>
              </div>

              <div className="flex flex-col p-3 flex-1 justify-between gap-2">
                <div>
                  <span className="inline-block px-1.5 py-0.2 rounded bg-[#f0eee9] text-[#564335] text-[10px] font-semibold">
                    {prod.subTitle}
                  </span>
                  <h4 className="text-xs font-bold text-[#1b1c19] mt-1 line-clamp-2 leading-snug">
                    {prod.name}
                  </h4>
                  <p className="text-[10px] text-[#897363] mt-1">{prod.sales}</p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-baseline text-[#904d00]">
                    <span className="text-xs font-bold">¥</span>
                    <span className="text-base font-extrabold tracking-tight">
                      {prod.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(prod)}
                    className="w-8 h-8 rounded-full bg-[#904d00] hover:bg-[#fa8c16] text-white flex items-center justify-center shadow-sm active:scale-90 transition-transform cursor-pointer"
                    title="加购商品"
                  >
                    <span className="material-symbols-outlined text-[17px]">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Paw-Print End Message */}
      <div className="flex flex-col items-center justify-center py-4 text-center">
        <div className="flex items-center gap-2 text-[#dcc1af]">
          <span className="h-px w-8 bg-[#dcc1af]"></span>
          <span className="material-symbols-outlined text-[16px] text-[#fa8c16]">pets</span>
          <span className="h-px w-8 bg-[#dcc1af]"></span>
        </div>
        <p className="mt-2 text-xs text-[#564335]">给毛孩子的每一份爱，都清晰可循</p>
      </div>
    </div>
  );
};
