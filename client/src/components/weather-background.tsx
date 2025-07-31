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
  const [showAttribution, setShowAttribution] = useState(true);
  
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

  // Hide attribution after 5 seconds, show when image changes
  useEffect(() => {
    setShowAttribution(true);
    const timer = setTimeout(() => {
      setShowAttribution(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImage?.id]);

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
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        // 볼륨 업 이벤트 발생
        window.dispatchEvent(new CustomEvent('volumeUp'));
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        // 볼륨 다운 이벤트 발생
        window.dispatchEvent(new CustomEvent('volumeDown'));
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
      

      

      

      
      {/* 배경 이미지 출처 정보 */}
      {currentImage && (
        <div 
          className={`fixed bottom-4 right-4 z-20 transition-opacity duration-500 ${
            showAttribution ? 'opacity-100' : 'opacity-30'
          }`}
          onMouseEnter={() => setShowAttribution(true)}
          onMouseLeave={() => setShowAttribution(false)}
        >
          <button
            onClick={() => {
              if (currentImage.links?.html) {
                window.open(currentImage.links.html, '_blank');
              }
            }}
            className="bg-black bg-opacity-50 backdrop-blur-md rounded-lg px-3 py-2 text-white text-xs hover:bg-opacity-70 transition-all duration-200 border border-white border-opacity-20"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
            }}
            title="Unsplash에서 보기"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Photo by {currentImage.user?.name} on Unsplash</span>
            </div>
          </button>
        </div>
      )}
      
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