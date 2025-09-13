import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/Logo.png';
    img.onload = () => {
      setImageLoaded(true);
      // Small delay to ensure smooth transition
      setTimeout(() => setShowLoader(true), 50);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0E16] bg-opacity-95 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          {/* Animated outer ring */}
          <div className="w-28 h-28 rounded-full p-1.5">
            {/* Animated spinner */}
            <div className="absolute inset-0 rounded-full border-4 border-amber-500/20">
              <div className="absolute inset-0 rounded-full border-t-4 border-amber-500 animate-spin"></div>
            </div>
            
            {/* Center logo with fade-in and better sizing */}
            <div className="absolute inset-0 flex items-center justify-center p-2 transition-opacity duration-300"
                style={{ opacity: imageLoaded ? 1 : 0 }}>
              <img 
                src="/lovable-uploads/Logo.png" 
                alt="Gustasi Logo" 
                className="w-full h-auto max-w-[72px] scale-110"
                onLoad={() => setImageLoaded(true)}
                style={{ imageRendering: 'high-quality' }}
              />
            </div>
          </div>
        </div>
        <p className="text-amber-100 text-lg font-medium tracking-wide animate-pulse">Loading Gustasi...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;