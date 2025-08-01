import { useState, useEffect } from 'react';
import type { WeatherData } from "@shared/schema";
import { getTimeDisplayName, getTimeOfDay } from "@/lib/time-background";
import { TimeZoneIndicator } from "@/components/time-zone-indicator";

interface WeatherCardProps {
  weather: WeatherData;
}

const weatherIcons = {
  clear: '☀️',
  rain: '🌧️',
  snow: '❄️',
  clouds: '☁️',
  fog: '🌫️'
};

export function WeatherCard({ weather }: WeatherCardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const icon = weatherIcons[weather.condition as keyof typeof weatherIcons] || '🌤️';
  const timeOfDay = getTimeOfDay();
  const timeDisplayName = getTimeDisplayName(timeOfDay);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl animate-slide-up hover:bg-opacity-40 transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-white border-opacity-10">
      <div className="text-center mb-4 sm:mb-6">
        {/* Time of Day and Current Time */}
        <div className="text-xs sm:text-sm text-white mb-2 uppercase tracking-wider text-shadow">
          <div className="animate-pulse">{timeDisplayName}</div>
          <div className="mt-1 text-xs text-white text-shadow">
            {currentTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        
        {/* Weather Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 text-4xl sm:text-5xl lg:text-6xl flex items-center justify-center transition-transform duration-300 hover:scale-110" style={{ animation: 'float 3s ease-in-out infinite' }}>
          {icon}
        </div>
        
        {/* Temperature */}
        <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-2 text-shadow">
          {weather.temperature}°
        </div>
        
        {/* Weather Description */}
        <div className="text-lg sm:text-xl text-white mb-3 sm:mb-4 capitalize text-shadow">
          {weather.description}
        </div>
        
        {/* Additional Weather Info */}
        <div className="flex justify-between text-white text-xs sm:text-sm text-shadow">
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span>{weather.visibility}km</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2a.75.75 0 001.5 0v-4.19l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 11.89a.75.75 0 101.1 1.02l1.95-2.1V15z" clipRule="evenodd" />
            </svg>
            <span>{weather.windSpeed}km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
