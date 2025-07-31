import { useEffect, useState } from "react";
import type { WeatherData } from "@shared/schema";
import { getTimeWeatherBackground, getTimeOfDay, getTimeDisplayName, getBackgroundCount, type WeatherCondition } from "@/lib/time-background";

interface WeatherBackgroundProps {
  weather: WeatherData | null;
  isLoading: boolean;
}

export function WeatherBackground({ weather, isLoading }: WeatherBackgroundProps) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(() => getTimeWeatherBackground());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showHelp, setShowHelp] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Update background when weather, time, or index changes
  useEffect(() => {
    const weatherCondition = weather?.condition as WeatherCondition;
    const newBackground = getTimeWeatherBackground(weatherCondition, backgroundIndex);
    console.log('Background updated:', { weatherCondition, backgroundIndex, newBackground });
    setCurrentBackground(newBackground);
  }, [weather?.condition, currentTime, backgroundIndex]);

  // Handle background change (키보드 단축키용)
  const changeBackground = (direction: 'next' | 'prev' = 'next') => {
    const weatherCondition = weather?.condition as WeatherCondition;
    const maxBackgrounds = getBackgroundCount(weatherCondition);
    let nextIndex;
    
    if (direction === 'next') {
      nextIndex = (backgroundIndex + 1) % maxBackgrounds;
    } else {
      nextIndex = backgroundIndex === 0 ? maxBackgrounds - 1 : backgroundIndex - 1;
    }
    
    setBackgroundIndex(nextIndex);
  };

  // 키보드 이벤트 리스너 추가
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 스페이스바 또는 화살표 키로 배경 변경
      if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault();
        changeBackground('next');
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        changeBackground('prev');
      } else if (e.code === 'KeyB') {
        e.preventDefault();
        changeBackground('next');
      } else if (e.code === 'KeyH') {
        e.preventDefault();
        setShowHelp(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [backgroundIndex, weather?.condition]);

  const timeOfDay = getTimeOfDay();
  const timeDisplayName = getTimeDisplayName(timeOfDay);

  return (
    <div 
      className="fixed inset-0 w-full h-full transition-all duration-1000 ease-in-out"
      title="배경을 클릭하여 다른 스타일로 변경"
    >
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 animated-background transition-all duration-1000 ease-in-out"
        style={{ background: currentBackground }}
      />
      
      {/* Floating Particles */}
      <div className="floating-particles" />
      
      {/* Shimmer Overlay */}
      <div className="shimmer-overlay" />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-15" />
      
      {/* Background change indicator - 좌하단 */}
      <div className="absolute bottom-6 left-6 z-20 text-white text-opacity-80 text-xs font-medium bg-black bg-opacity-40 rounded-full px-3 py-1 backdrop-blur-sm transition-all duration-300">
        배경 {backgroundIndex + 1}/{getBackgroundCount(weather?.condition as WeatherCondition)}
      </div>
      
      {/* 키보드 단축키 도움말 (H키로 토글) - 화면 중앙 */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-90 text-white text-lg rounded-xl p-6 backdrop-blur-md transition-all duration-300 max-w-md w-full mx-4 shadow-2xl border border-white border-opacity-20">
            <div className="font-bold mb-4 text-center text-xl">키보드 단축키</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-mono">스페이스바 / →</span>
                <span>다음 배경</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-mono">←</span>
                <span>이전 배경</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-mono">B</span>
                <span>배경 변경</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-mono">H</span>
                <span>도움말 토글</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-600 text-center text-yellow-300">
              현재 배경: {backgroundIndex + 1}/{getBackgroundCount(weather?.condition as WeatherCondition)}
            </div>
            <div className="mt-4 text-center text-gray-400 text-sm">
              H키를 다시 누르면 닫힙니다
            </div>
          </div>
        </div>
      )}
      
      {/* Help hint - H키 안내 (우하단, 음악 플레이어 위) */}
      {!showHelp && (
        <div className="absolute bottom-20 right-6 z-20 text-white text-opacity-60 text-xs bg-black bg-opacity-30 rounded px-2 py-1 backdrop-blur-sm transition-all duration-300">
          H키: 도움말
        </div>
      )}
      
      {/* Enhanced Weather and Time Effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Night time special effects */}
        {timeOfDay === 'night' && (
          <>
            <div className="absolute inset-0 opacity-80">
              <div className="stars-effect"></div>
            </div>
            <div className="absolute inset-0 opacity-60">
              <div className="shooting-stars"></div>
            </div>
          </>
        )}
        
        {/* Weather specific effects */}
        {weather?.condition === 'rain' && (
          <>
            <div className="absolute inset-0 opacity-40">
              <div className="rain-effect"></div>
            </div>
            <div className="absolute inset-0 opacity-20" style={{ animationDelay: '0.3s' }}>
              <div className="rain-effect"></div>
            </div>
            <div className="absolute inset-0 opacity-15" style={{ animationDelay: '0.6s' }}>
              <div className="rain-effect"></div>
            </div>
          </>
        )}
        
        {weather?.condition === 'snow' && (
          <>
            <div className="absolute inset-0 opacity-50">
              <div className="snow-effect"></div>
            </div>
            <div className="absolute inset-0 opacity-30" style={{ animationDelay: '2s' }}>
              <div className="snow-effect"></div>
            </div>
          </>
        )}
        
        {weather?.condition === 'thunderstorm' && (
          <div className="absolute inset-0 opacity-25">
            <div className="lightning-effect"></div>
          </div>
        )}
        
        {weather?.condition === 'fog' && (
          <div className="absolute inset-0 opacity-60">
            <div className="fog-effect"></div>
          </div>
        )}
      </div>
    </div>
  );
}
