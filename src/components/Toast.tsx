import React from 'react';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      id="app-toast-alert"
      className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-[#30312e] text-[#f2f1ec] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-sm font-medium z-50 animate-bounce transition-all duration-300 pointer-events-none"
    >
      <span
        className="material-symbols-outlined text-[#85fa51] text-[18px] fill"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        check_circle
      </span>
      <span>{message}</span>
    </div>
  );
};
