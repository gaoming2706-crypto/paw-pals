/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BottomNavBar } from './components/BottomNavBar';
import { PetSwitcherModal } from './components/PetSwitcherModal';
import { Toast } from './components/Toast';
import { TopTimeBar } from './components/TopTimeBar';
import { HealthTab } from './components/tabs/HealthTab';
import { HomeTab } from './components/tabs/HomeTab';
import { MineTab } from './components/tabs/MineTab';
import { PassportTab } from './components/tabs/PassportTab';
import { SquareTab } from './components/tabs/SquareTab';
import { DEFAULT_PET } from './data/mockData';
import { PetInfo, ProductItem, TabType } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [currentPet, setCurrentPet] = useState<PetInfo>(DEFAULT_PET);
  const [isPetSwitcherOpen, setIsPetSwitcherOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => [...prev, product]);
    showToast(`已将《${product.name}》加入购物车 🛒`);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#1b1c19] flex justify-center selection:bg-[#ffdcc3]">
      {/* Mobile container - optimized for mobile devices and responsive center frame on desktop */}
      <div className="w-full max-w-[460px] min-h-screen flex flex-col bg-[#fbf9f4] relative shadow-2xl overflow-x-hidden">
        
        {/* 1. 顶部留出时间栏 132 像素 (132px Time / Status Bar as explicitly requested) */}
        <TopTimeBar currentPet={currentPet} />

        {/* 2. Sticky App Navigation Header */}
        <AppHeader
          currentTab={currentTab}
          currentPet={currentPet}
          onOpenPetSwitcher={() => setIsPetSwitcherOpen(true)}
          cartCount={cartItems.length}
        />

        {/* 3. Main View Router */}
        <main className="flex-1 flex flex-col relative w-full">
          {currentTab === 'home' && (
            <HomeTab
              currentPet={currentPet}
              onOpenPetSwitcher={() => setIsPetSwitcherOpen(true)}
              onShowToast={showToast}
              onNavigateTab={(tab) => setCurrentTab(tab)}
            />
          )}

          {currentTab === 'passport' && (
            <PassportTab
              currentPet={currentPet}
              onShowToast={showToast}
            />
          )}

          {currentTab === 'health' && (
            <HealthTab onShowToast={showToast} />
          )}

          {currentTab === 'square' && (
            <SquareTab onShowToast={showToast} />
          )}

          {currentTab === 'mine' && (
            <MineTab
              onShowToast={showToast}
              onAddToCart={handleAddToCart}
              onNavigateTab={(tab) => setCurrentTab(tab)}
            />
          )}
        </main>

        {/* 4. Floating Bottom Navigation Bar */}
        <BottomNavBar
          currentTab={currentTab}
          onTabChange={(tab) => {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* 5. Modals & Notifications */}
        <PetSwitcherModal
          isOpen={isPetSwitcherOpen}
          currentPet={currentPet}
          onSelectPet={(pet) => {
            setCurrentPet(pet);
            showToast(`已成功切换当前宠宝为：${pet.name} 🐾`);
          }}
          onClose={() => setIsPetSwitcherOpen(false)}
        />

        <Toast message={toastMessage} />
      </div>
    </div>
  );
}
