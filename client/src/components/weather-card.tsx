import type { WeatherData } from "@shared/schema";

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
  const icon = weatherIcons[weather.condition as keyof typeof weatherIcons] || '🌤️';

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 shadow-2xl animate-slide-up">
      <div className="text-center mb-6">
        {/* Weather Icon */}
        <div className="w-24 h-24 mx-auto mb-4 animate-float text-6xl flex items-center justify-center">
          {icon}
        </div>
        
        {/* Temperature */}
        <div className="text-5xl lg:text-6xl font-light text-white mb-2">
          {weather.temperature}°
        </div>
        
        {/* Weather Description */}
        <div className="text-xl text-white text-opacity-90 mb-4 capitalize">
          {weather.description}
        </div>
        
        {/* Additional Weather Info */}
        <div className="flex justify-between text-white text-opacity-70 text-sm">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span>{weather.visibility}km</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2a.75.75 0 001.5 0v-4.19l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 11.89a.75.75 0 101.1 1.02l1.95-2.1V15z" clipRule="evenodd" />
            </svg>
            <span>{weather.windSpeed}km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
