import { useEffect, useState } from 'react';

interface LoadingSplashProps {
  isRefreshing?: boolean;
}

export function LoadingSplash({ isRefreshing = false }: LoadingSplashProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #60a5fa 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #a855f7 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Main Content */}
      <div className="relative text-center">
        {/* App Icon/Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center mb-4 animate-pulse">
            <div className="text-3xl sm:text-4xl">🎵</div>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl font-light tracking-wide">
            WeatherTunes
          </h1>
        </div>

        {/* Apple-style Loading Indicator */}
        <div className="mb-6">
          <div className="relative w-12 h-12 mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 border-2 border-white border-opacity-20 rounded-full"></div>
            {/* Spinning segment */}
            <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
            {/* Inner glow */}
            <div className="absolute inset-2 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-lg sm:text-xl font-light mb-2">
          {isRefreshing ? "위치 정보 새로고침" : "날씨 정보 불러오는 중"}
          <span className="inline-block w-8 text-left">{dots}</span>
        </div>
        
        {/* Subtitle */}
        <div className="text-white text-opacity-70 text-sm sm:text-base font-light">
          {isRefreshing ? "잠시만 기다려주세요" : "곧 음악이 시작됩니다"}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}