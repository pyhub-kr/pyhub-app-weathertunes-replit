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

  // Handle background click to cycle through options
  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const weatherCondition = weather?.condition as WeatherCondition;
    const maxBackgrounds = getBackgroundCount(weatherCondition);
    const nextIndex = (backgroundIndex + 1) % maxBackgrounds;
    console.log('=== BACKGROUND CLICK EVENT ===');
    console.log('Weather condition:', weatherCondition);
    console.log('Max backgrounds:', maxBackgrounds);
    console.log('Current index:', backgroundIndex);
    console.log('Next index:', nextIndex);
    console.log('==============================');
    setBackgroundIndex(nextIndex);
  };

  const timeOfDay = getTimeOfDay();
  const timeDisplayName = getTimeDisplayName(timeOfDay);

  return (
    <div 
      className="fixed inset-0 w-full h-full transition-all duration-1000 ease-in-out cursor-pointer group"
      onClick={handleBackgroundClick}
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
      
      {/* Background change indicator - always visible for testing */}
      <div className="absolute bottom-4 left-4 z-20 text-white text-opacity-80 text-xs font-medium bg-black bg-opacity-40 rounded-full px-3 py-1 backdrop-blur-sm transition-all duration-300">
        배경 {backgroundIndex + 1}/{getBackgroundCount(weather?.condition as WeatherCondition)} (클릭하여 변경)
      </div>
      
      {/* Time display overlay */}
      <div className="absolute top-4 right-4 z-20 text-white text-opacity-80 text-xs font-medium bg-black bg-opacity-25 rounded-full px-3 py-1 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40">
        {timeDisplayName} • {currentTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      {/* Debug test buttons */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        <button 
          onClick={handleBackgroundClick}
          className="text-white text-xs font-bold bg-red-600 rounded px-4 py-2 hover:bg-red-700 transition-all duration-300 shadow-lg"
        >
          배경 변경 ({backgroundIndex + 1}/{getBackgroundCount(weather?.condition as WeatherCondition)})
        </button>
        <button 
          onClick={() => {
            console.log('Manual index change');
            setBackgroundIndex(prev => (prev + 1) % getBackgroundCount(weather?.condition as WeatherCondition));
          }}
          className="text-white text-xs font-bold bg-blue-600 rounded px-4 py-2 hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          직접 변경
        </button>
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
