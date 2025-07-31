import { useEffect, useState } from "react";
import type { WeatherData } from "@shared/schema";
import { getTimeOfDay, getTimeDisplayName } from "@/lib/time-background";
import { useUnsplashBackgrounds } from "@/hooks/use-unsplash-backgrounds";
import { ParticleEffects } from "@/components/particle-effects";

interface WeatherBackgroundProps {
  weather: WeatherData | null;
  isLoading: boolean;
  showHelp: boolean;
  onHelpToggle: () => void;
}

export function WeatherBackground({ weather, isLoading, showHelp, onHelpToggle }: WeatherBackgroundProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // 시간대를 Unsplash 훅에서 요구하는 형식으로 변환
  const mapTimeOfDay = (timeOfDay: string): 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night' => {
    switch (timeOfDay) {
      case 'sunrise': return 'dawn';
      case 'morning': return 'morning';
      case 'afternoon': return 'afternoon';
      case 'evening': return 'evening';
      case 'sunset': return 'evening';
      case 'night': return 'night';
      default: return 'morning';
    }
  };

  const timeOfDay = mapTimeOfDay(getTimeOfDay());
  
  const {
    currentImage,
    previousImage,
    totalImages,
    currentIndex,
    isLoading: imagesLoading,
    changeBackground,
    isTransitioning
  } = useUnsplashBackgrounds(weather?.condition, timeOfDay);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // 키보드 이벤트 리스너
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault();
        changeBackground('next');
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        changeBackground('prev');
      } else if (e.code === 'KeyB') {
        e.preventDefault();
        changeBackground('random');
      } else if (e.code === 'KeyH') {
        e.preventDefault();
        onHelpToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [changeBackground, onHelpToggle]);

  const currentBackgroundUrl = currentImage?.urls?.regular;
  const previousBackgroundUrl = previousImage?.urls?.regular;
  const fallbackGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* 기본 배경 이미지 (항상 표시) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: previousBackgroundUrl ? `url(${previousBackgroundUrl})` : fallbackGradient,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />
      
      {/* 새 배경 이미지 (전환 시 페이드 인) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: currentBackgroundUrl ? `url(${currentBackgroundUrl})` : fallbackGradient,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 2,
          opacity: isTransitioning ? 1 : (currentBackgroundUrl === previousBackgroundUrl ? 0 : 1)
        }}
      />
      
      {/* 오버레이 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
      
      {/* 파티클 효과 */}
      {weather?.condition && (
        <ParticleEffects condition={weather.condition} intensity={0.8} />
      )}
      
      {/* 시간 정보 (좌상단) */}
      <div className="absolute top-6 left-6 z-20 text-white text-opacity-90 text-sm font-medium">
        <div className="bg-black bg-opacity-40 rounded-full px-3 py-1 backdrop-blur-sm">
          {getTimeDisplayName(getTimeOfDay())} {currentTime.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
      

      

      
      {/* 로딩 상태 */}
      {(isLoading || imagesLoading) && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="bg-black bg-opacity-50 rounded-xl p-4 backdrop-blur-sm">
            <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
            <div className="text-white text-sm">
              {isLoading ? '날씨 정보 로딩 중...' : '배경 이미지 로딩 중...'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}