import React, { useState } from 'react';
import { INITIAL_MEETUPS, INITIAL_PHOTO_FEEDS } from '../../data/mockData';
import { MeetupItem, PhotoFeedItem } from '../../types';

interface SquareTabProps {
  onShowToast: (msg: string) => void;
}

export const SquareTab: React.FC<SquareTabProps> = ({ onShowToast }) => {
  const [activeSegment, setActiveSegment] = useState<'meetup' | 'gallery' | 'nearby'>('meetup');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [meetups, setMeetups] = useState<MeetupItem[]>(INITIAL_MEETUPS);
  const [feeds, setFeeds] = useState<PhotoFeedItem[]>(INITIAL_PHOTO_FEEDS);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);

  const toggleMeetupRegistration = (id: string) => {
    setMeetups((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const isJoined = !m.isJoined;
          onShowToast(
            isJoined
              ? `报名成功！已将《${m.title}》电子门票存入您的专属卡券 🎟️`
              : `已取消该场次报名`
          );
          return {
            ...m,
            isJoined,
            joinedCount: isJoined ? m.joinedCount + 1 : m.joinedCount - 1
          };
        }
        return m;
      })
    );
  };

  const toggleFeedLike = (id: string) => {
    setFeeds((prev) =>
      prev.map((f) => {
        if (f.id === id) {
          const isLiked = !f.isLiked;
          onShowToast(isLiked ? '为可爱的宠宝送上了大大的爱心 ❤️' : '已取消点赞');
          return {
            ...f,
            isLiked,
            likes: isLiked ? f.likes + 1 : f.likes - 1
          };
        }
        return f;
      })
    );
  };

  return (
    <div className="flex flex-col gap-4 pb-28 px-4 pt-3">
      {/* Top Search & Location Strip */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center bg-[#f5f3ee] rounded-full px-3.5 py-2 shadow-2xs border border-[#e4e2dd]">
            <span className="material-symbols-outlined text-[#897363] text-[20px]">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索奥森团建、宠物友好咖啡、飞盘..."
              className="bg-transparent border-none outline-none text-xs text-[#1b1c19] ml-2 w-full placeholder:text-[#897363]"
            />
          </div>
          <button
            onClick={() => onShowToast('📍 当前定位：北京市朝阳区 · 关联周边 5km 宠物社群')}
            className="w-10 h-10 rounded-full bg-[#f5f3ee] hover:bg-[#eae8e3] flex items-center justify-center text-[#904d00] shadow-2xs transition-transform active:scale-95 cursor-pointer"
            title="切换定位"
          >
            <span className="material-symbols-outlined text-[20px]">near_me</span>
          </button>
        </div>

        {/* Segmented Filter */}
        <div className="flex items-center justify-between bg-[#f0eee9] rounded-full p-1 shadow-2xs">
          <button
            onClick={() => setActiveSegment('meetup')}
            className={`flex-1 py-1.5 px-2 rounded-full text-center text-xs font-bold transition-all cursor-pointer ${
              activeSegment === 'meetup'
                ? 'bg-white text-[#904d00] shadow-xs'
                : 'text-[#564335] hover:text-[#1b1c19]'
            }`}
          >
            同城团建活动
          </button>
          <button
            onClick={() => setActiveSegment('gallery')}
            className={`flex-1 py-1.5 px-2 rounded-full text-center text-xs font-bold transition-all cursor-pointer ${
              activeSegment === 'gallery'
                ? 'bg-white text-[#904d00] shadow-xs'
                : 'text-[#564335] hover:text-[#1b1c19]'
            }`}
          >
            萌宠照片广场
          </button>
          <button
            onClick={() => setActiveSegment('nearby')}
            className={`flex-1 py-1.5 px-2 rounded-full text-center text-xs font-bold transition-all cursor-pointer ${
              activeSegment === 'nearby'
                ? 'bg-white text-[#904d00] shadow-xs'
                : 'text-[#564335] hover:text-[#1b1c19]'
            }`}
          >
            狗友附近动态
          </button>
        </div>
      </div>

      {/* Meetups Section */}
      {(activeSegment === 'meetup' || activeSegment === 'nearby') && (
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fa8c16] animate-pulse"></span>
              <h2 className="text-base font-bold text-[#1b1c19]">周末同城精选</h2>
            </div>
            <span className="text-xs text-[#897363]">北京 · 12场进行中</span>
          </div>

          <div className="flex flex-col gap-4">
            {meetups.map((meetup) => (
              <article
                key={meetup.id}
                className="bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(210,145,80,0.12)] overflow-hidden flex flex-col border border-[#e4e2dd]/70"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={meetup.image}
                    alt={meetup.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10"></div>

                  {/* Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        meetup.tagColor === 'secondary' ? 'bg-[#266d00]' : 'bg-[#005fae]'
                      }`}
                    ></span>
                    <span
                      className={`text-[11px] font-bold ${
                        meetup.tagColor === 'secondary' ? 'text-[#266d00]' : 'text-[#005fae]'
                      }`}
                    >
                      {meetup.tag}
                    </span>
                  </div>

                  {/* Distance */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">distance</span>
                    <span>{meetup.distance}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-col text-white">
                    <span className="text-[10px] text-[#ffdcc3] uppercase tracking-wider font-semibold">
                      {meetup.subTag}
                    </span>
                    <h3 className="text-sm font-bold text-white drop-shadow-xs">{meetup.title}</h3>
                  </div>
                </div>

                <div className="p-3.5 flex flex-col gap-2.5">
                  <div className="flex flex-col gap-1 text-xs text-[#564335]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#fa8c16] text-[16px]">
                        calendar_today
                      </span>
                      <span className="font-semibold text-[#1b1c19]">{meetup.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#fa8c16] text-[16px]">
                        pets
                      </span>
                      <span className="truncate">{meetup.location}</span>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {meetup.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f5f3ee] text-[#564335] px-2 py-0.5 rounded-full text-[11px] font-medium"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Registration Bar */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#f0eee9]">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {meetup.attendeeAvatars.map((ava, i) => (
                          <img
                            key={i}
                            src={ava}
                            alt="Attendee"
                            className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                          />
                        ))}
                        <div className="w-7 h-7 rounded-full bg-[#ffdcc3] text-[#904d00] text-[10px] font-bold ring-2 ring-white flex items-center justify-center">
                          +{meetup.joinedCount}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#1b1c19]">
                          已报 {meetup.joinedCount} / {meetup.maxCount} 只
                        </span>
                        <span className="text-[10px] text-[#897363]">
                          仅剩 {meetup.maxCount - meetup.joinedCount} 个席位
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleMeetupRegistration(meetup.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer ${
                        meetup.isJoined
                          ? 'bg-[#266d00] text-white'
                          : 'bg-gradient-to-r from-[#fa8c16] to-[#904d00] text-white hover:opacity-95'
                      }`}
                    >
                      {meetup.isJoined ? '已报名 ✓' : `立即报名 (¥${meetup.price}/犬)`}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Gallery Photo Feed Section */}
      {(activeSegment === 'gallery' || activeSegment === 'nearby') && (
        <section className="flex flex-col gap-3 mt-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#fa8c16] text-[20px]">save_as</span>
              <h2 className="text-base font-bold text-[#1b1c19]">萌宠晒圈照片墙</h2>
            </div>
            <div className="flex items-center gap-1 text-[#fa8c16] text-xs font-bold">
              <span>按最热排序</span>
              <span className="material-symbols-outlined text-[15px]">tune</span>
            </div>
          </div>

          {/* Masonry layout */}
          <div className="grid grid-cols-2 gap-2.5 items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-2.5">
              <article className="bg-white rounded-2xl overflow-hidden shadow-2xs border border-[#e4e2dd]/70 flex flex-col group">
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={feeds[0].image}
                    alt={feeds[0].content}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-xs rounded-full px-2 py-0.5 text-white text-[10px] flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[11px]">location_on</span>
                    <span>{feeds[0].location}</span>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-1.5">
                  <p className="text-xs font-bold text-[#1b1c19] line-clamp-2 leading-tight">
                    {feeds[0].content}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1 min-w-0">
                      <img
                        src={feeds[0].avatar}
                        alt={feeds[0].author}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span className="text-[11px] text-[#564335] truncate">{feeds[0].author}</span>
                    </div>
                    <button
                      onClick={() => toggleFeedLike(feeds[0].id)}
                      className={`flex items-center gap-0.5 text-xs transition-colors cursor-pointer ${
                        feeds[0].isLiked ? 'text-[#ba1a1a]' : 'text-[#897363]'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[15px]"
                        style={feeds[0].isLiked ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        favorite
                      </span>
                      <span>{feeds[0].likes}</span>
                    </button>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-2xl overflow-hidden shadow-2xs border border-[#e4e2dd]/70 flex flex-col group">
                <div className="relative w-full h-60 overflow-hidden">
                  <img
                    src={feeds[2].image}
                    alt={feeds[2].content}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-[#fa8c16] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    高清连拍
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-xs rounded-full px-2 py-0.5 text-white text-[10px] flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[11px]">location_on</span>
                    <span>{feeds[2].location}</span>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-1.5">
                  <p className="text-xs font-bold text-[#1b1c19] line-clamp-2 leading-tight">
                    {feeds[2].content}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1 min-w-0">
                      <img
                        src={feeds[2].avatar}
                        alt={feeds[2].author}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span className="text-[11px] text-[#564335] truncate">{feeds[2].author}</span>
                    </div>
                    <button
                      onClick={() => toggleFeedLike(feeds[2].id)}
                      className={`flex items-center gap-0.5 text-xs transition-colors cursor-pointer ${
                        feeds[2].isLiked ? 'text-[#ba1a1a]' : 'text-[#897363]'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-[15px]"
                        style={feeds[2].isLiked ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        favorite
                      </span>
                      <span>{feeds[2].likes}</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2.5">
              <article className="bg-white rounded-2xl overflow-hidden shadow-2xs border border-[#e4e2dd]/70 flex flex-col group">
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={feeds[1].image}
                    alt={feeds[1].content}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-xs rounded-full px-2 py-0.5 text-white text-[10px] flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[11px]">bathtub</span>
                    <span>{feeds[1].location}</span>
                  </div>
                </div>
                <div className="p-2.5 flex flex-col gap-1.5">
                  <p className="text-xs font-bold text-[#1b1c19] line-clamp-2 leading-tight">
                    {feeds[1].content}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1 min-w-0">
                      <img
                        src={feeds[1].avatar}
                        alt={feeds[1].author}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span className="text-[11px] text-[#564335] truncate">{feeds[1].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleFeedLike(feeds[1].id)}
                        className={`flex items-center gap-0.5 text-xs transition-colors cursor-pointer ${
                          feeds[1].isLiked ? 'text-[#ba1a1a]' : 'text-[#897363]'
                        }`}
                      >
                        <span
                          className="material-symbols-outlined text-[15px]"
                          style={feeds[1].isLiked ? { fontVariationSettings: "'FILL' 1" } : undefined}
                        >
                          favorite
                        </span>
                        <span>{feeds[1].likes}</span>
                      </button>
                      <span className="flex items-center gap-0.5 text-[#897363] text-xs">
                        <span className="material-symbols-outlined text-[15px]">chat_bubble</span>
                        <span>{feeds[1].comments}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Inspiration Card */}
              <article className="bg-[#f5f3ee] rounded-2xl p-3 flex flex-col gap-1.5 border border-[#e4e2dd]">
                <div className="flex items-center gap-1.5 text-[#fa8c16]">
                  <span className="material-symbols-outlined text-[18px]">celebration</span>
                  <span className="text-xs font-bold">今日打卡灵感</span>
                </div>
                <p className="text-[11px] text-[#564335] leading-relaxed">
                  “秋意渐浓，记得带好保暖小毛毯和便携拾便袋，文明遛犬让城市更有温度 🍂”
                </p>
                <div className="mt-1 flex items-center justify-between text-[#897363] text-[10px]">
                  <span>来自 PawPals 社区守约倡议</span>
                  <button
                    onClick={() => onShowToast('已查看城市养宠友好倡议与免费领拾便袋网点 🌿')}
                    className="text-[#904d00] font-bold hover:underline cursor-pointer"
                  >
                    了解详情 &gt;
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-4 z-40">
        <button
          onClick={() => setIsPublishModalOpen(true)}
          className="flex items-center gap-1.5 h-11 px-4 bg-gradient-to-r from-[#fa8c16] to-[#904d00] text-white rounded-full shadow-[0_8px_20px_rgba(250,140,22,0.4)] hover:shadow-lg active:scale-95 transition-all cursor-pointer font-bold text-xs"
        >
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          <span>发活动 / 晒宠照</span>
        </button>
      </div>

      {/* Modal Drawer */}
      {isPublishModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end justify-center"
          onClick={() => setIsPublishModalOpen(false)}
        >
          <div
            className="w-full max-w-[460px] bg-white rounded-t-3xl p-5 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-[#eae8e3] rounded-full mx-auto"></div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#1b1c19]">分享快乐时光</h3>
                <p className="text-xs text-[#564335]">与同城宠友记录点滴或组局出门</p>
              </div>
              <button
                onClick={() => setIsPublishModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f5f3ee] flex items-center justify-center text-[#564335]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => {
                  setIsPublishModalOpen(false);
                  onShowToast('📸 已打开相机拍照与相册选择器');
                }}
                className="bg-[#f5f3ee] hover:bg-[#ffdcc3]/40 p-4 rounded-2xl flex flex-col items-center text-center gap-2 cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#fa8c16]/20 text-[#fa8c16] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">add_photo_alternate</span>
                </div>
                <span className="text-xs font-bold text-[#1b1c19]">晒萌宠美照</span>
                <span className="text-[10px] text-[#897363]">记录高光穿搭与可爱日常</span>
              </div>

              <div
                onClick={() => {
                  setIsPublishModalOpen(false);
                  onShowToast('🐾 已进入发起同城团建向导页面');
                }}
                className="bg-[#f5f3ee] hover:bg-[#85fa51]/30 p-4 rounded-2xl flex flex-col items-center text-center gap-2 cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#266d00]/20 text-[#266d00] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">groups</span>
                </div>
                <span className="text-xs font-bold text-[#1b1c19]">发起同城团建</span>
                <span className="text-[10px] text-[#897363]">组建草坪飞盘、徒步或戏水局</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
