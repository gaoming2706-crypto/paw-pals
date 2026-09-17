import React from 'react';
import { ALL_PETS } from '../data/mockData';
import { PetInfo } from '../types';

interface PetSwitcherModalProps {
  isOpen: boolean;
  currentPet: PetInfo;
  onSelectPet: (pet: PetInfo) => void;
  onClose: () => void;
}

export const PetSwitcherModal: React.FC<PetSwitcherModalProps> = ({
  isOpen,
  currentPet,
  onSelectPet,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="pet-switcher-backdrop"
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end justify-center transition-opacity"
      onClick={onClose}
    >
      <div
        id="pet-switcher-drawer"
        className="w-full max-w-[460px] bg-white rounded-t-3xl p-5 shadow-2xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1 bg-[#e4e2dd] rounded-full mx-auto"></div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#1b1c19]">切换爱宠档案</h3>
            <p className="text-xs text-[#564335]">管理名下所有登记宠宝的主页与健康信息</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f0eee9] flex items-center justify-center text-[#564335] hover:bg-[#e4e2dd] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5 my-2">
          {ALL_PETS.map((pet) => {
            const isSelected = pet.id === currentPet.id;
            return (
              <div
                key={pet.id}
                onClick={() => {
                  onSelectPet(pet);
                  onClose();
                }}
                className={`p-3 rounded-2xl flex items-center justify-between cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#ffdcc3]/40 border-[#fa8c16] shadow-sm'
                    : 'bg-[#f5f3ee] border-transparent hover:bg-[#eae8e3]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={pet.avatar}
                    alt={pet.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#fa8c16]/30"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base font-bold text-[#1b1c19]">{pet.name}</span>
                      <span className="text-xs text-[#904d00] font-semibold">{pet.englishName}</span>
                      <span className="text-[10px] bg-[#ffdcc3] text-[#6e3900] px-1.5 py-0.2 rounded-full">
                        {pet.breed}
                      </span>
                    </div>
                    <span className="text-xs text-[#564335] mt-0.5">{pet.statusText}</span>
                  </div>
                </div>

                {isSelected ? (
                  <span
                    className="material-symbols-outlined text-[#fa8c16] text-[22px] fill"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                ) : (
                  <span className="text-xs text-[#904d00] font-semibold">切换</span>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            alert('已开启新增宠宝建档流程');
            onClose();
          }}
          className="w-full py-2.5 rounded-full border border-dashed border-[#fa8c16] text-[#fa8c16] font-bold text-sm flex items-center justify-center gap-1.5 hover:bg-[#ffdcc3]/20 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>登记新宠宝</span>
        </button>
      </div>
    </div>
  );
};
