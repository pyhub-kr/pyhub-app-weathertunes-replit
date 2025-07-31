import { useEffect, useState } from "react";
import type { WeatherData } from "@shared/schema";
import { getTimeWeatherBackground, getTimeOfDay, getTimeDisplayName, type WeatherCondition } from "@/lib/time-background";

interface WeatherBackgroundProps {
  weather: WeatherData | null;
  isLoading: boolean;
}

export function WeatherBackground({ weather, isLoading }: WeatherBackgroundProps) {
  const [currentBackground, setCurrentBackground] = useState(() => getTimeWeatherBackground());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Update background when weather or time changes
  useEffect(() => {
    const weatherCondition = weather?.condition as WeatherCondition;
    const newBackground = getTimeWeatherBackground(weatherCondition);
    setCurrentBackground(newBackground);
  }, [weather?.condition, currentTime]);

  const timeOfDay = getTimeOfDay();
  const timeDisplayName = getTimeDisplayName(timeOfDay);

  return (
    <div className="fixed inset-0 w-full h-full transition-all duration-1000 ease-in-out">
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
      
      {/* Time display overlay */}
      <div className="absolute top-4 right-4 z-20 text-white text-opacity-80 text-xs font-medium bg-black bg-opacity-25 rounded-full px-3 py-1 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-40">
        {timeDisplayName} • {currentTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      {/* Enhanced Weather Effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
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
