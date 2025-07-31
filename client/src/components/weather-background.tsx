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
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [debugCollapsed, setDebugCollapsed] = useState(false);

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
    
    const logMessage = `키보드 ${direction === 'next' ? '다음' : '이전'}! ${backgroundIndex} → ${nextIndex}`;
    setDebugInfo(prev => [logMessage, ...prev.slice(0, 4)]);
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
      <div className="absolute bottom-4 left-4 z-20 text-white text-opacity-80 text-xs font-medium bg-black bg-opacity-40 rounded-full px-3 py-1 backdrop-blur-sm transition-all duration-300">
        배경 {backgroundIndex + 1}/{getBackgroundCount(weather?.condition as WeatherCondition)}
      </div>
      
      {/* Time display overlay */}
      <div className="absolute top-4 right-4 z-20 text-white text-opacity-80 text-xs font-medium bg-black bg-opacity-25 rounded-full px-3 py-1 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40">
        {timeDisplayName} • {currentTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      {/* 키보드 단축키 안내 */}
      <div className="absolute top-4 left-4 z-30 bg-black bg-opacity-60 text-white text-xs rounded-lg p-3 backdrop-blur-sm">
        <div className="font-bold mb-1">키보드 단축키:</div>
        <div>스페이스바 / → : 다음 배경</div>
        <div>← : 이전 배경</div>
        <div>B : 배경 변경</div>
        <div className="mt-2 text-yellow-300">
          현재: {backgroundIndex + 1}/{getBackgroundCount(weather?.condition as WeatherCondition)}
        </div>
      </div>
      
      {/* 우측 하단 접을 수 있는 디버그 로그 */}
      <div className="absolute bottom-4 right-4 z-30">
        <div 
          onClick={() => setDebugCollapsed(!debugCollapsed)}
          className="bg-black bg-opacity-80 text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-opacity-90"
        >
          {/* 헤더 (항상 보임) */}
          <div className="px-4 py-2 flex items-center justify-between min-w-[200px]">
            <span className="text-xs font-bold">디버그 로그</span>
            <span className="text-xs">{debugCollapsed ? '▲' : '▼'}</span>
          </div>
          
          {/* 콘텐츠 (접을 수 있음) */}
          {!debugCollapsed && (
            <div className="px-4 pb-4 border-t border-gray-600">
              <div className="text-xs mt-2">현재 인덱스: {backgroundIndex}</div>
              <div className="text-xs">총 배경수: {getBackgroundCount(weather?.condition as WeatherCondition)}</div>
              <div className="text-xs">날씨: {weather?.condition || 'default'}</div>
              <div className="text-xs">시간대: {getTimeOfDay()}</div>
              <div className="text-xs mt-2 font-bold">최근 로그:</div>
              <div className="max-h-32 overflow-y-auto">
                {debugInfo.length === 0 ? (
                  <div className="text-xs text-gray-400">아직 로그가 없습니다</div>
                ) : (
                  debugInfo.map((log, idx) => (
                    <div key={idx} className="text-xs text-yellow-300">{log}</div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
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
