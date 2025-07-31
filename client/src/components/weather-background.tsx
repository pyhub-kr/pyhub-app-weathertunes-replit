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
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{ background: currentBackground }}
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      
      {/* Time display overlay */}
      <div className="absolute top-4 right-4 z-20 text-white text-opacity-70 text-xs font-medium bg-black bg-opacity-20 rounded-full px-3 py-1 backdrop-blur-sm">
        {timeDisplayName} • {currentTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
      </div>
      
      {/* Weather Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {weather?.condition === 'rain' && (
          <div className="absolute inset-0 opacity-30">
            <div className="rain-effect"></div>
          </div>
        )}
        
        {weather?.condition === 'snow' && (
          <div className="absolute inset-0 opacity-40">
            <div className="snow-effect"></div>
          </div>
        )}
        
        {weather?.condition === 'thunderstorm' && (
          <div className="absolute inset-0 opacity-20">
            <div className="lightning-effect"></div>
          </div>
        )}
      </div>
    </div>
  );
}
