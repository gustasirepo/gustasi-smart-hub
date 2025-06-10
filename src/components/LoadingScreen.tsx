import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/lovable-uploads/mylogo.svg" alt="Gustasi Logo" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 