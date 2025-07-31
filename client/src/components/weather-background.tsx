import { useEffect, useState } from "react";
import type { WeatherData } from "@shared/schema";

interface WeatherBackgroundProps {
  weather: WeatherData | null;
  isLoading: boolean;
}

const weatherBackgrounds = {
  clear: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
  rain: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
  snow: 'https://images.unsplash.com/photo-1478827387698-6ba70b24ee20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
  clouds: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
  fog: 'https://images.unsplash.com/photo-1486488831823-3a16c90b2b41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
};

export function WeatherBackground({ weather, isLoading }: WeatherBackgroundProps) {
  const [currentBackground, setCurrentBackground] = useState(weatherBackgrounds.clear);

  useEffect(() => {
    if (weather?.condition && weatherBackgrounds[weather.condition as keyof typeof weatherBackgrounds]) {
      setCurrentBackground(weatherBackgrounds[weather.condition as keyof typeof weatherBackgrounds]);
    }
  }, [weather?.condition]);

  return (
    <div className="fixed inset-0 w-full h-full transition-all duration-1000 ease-in-out">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: `url('${currentBackground}')` }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Weather Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {weather?.condition === 'rain' && (
          <div className="absolute inset-0 opacity-60">
            {/* Rain effect could be added here with CSS animations */}
          </div>
        )}
        
        {weather?.condition === 'snow' && (
          <div className="absolute inset-0 opacity-70">
            {/* Snow effect could be added here with CSS animations */}
          </div>
        )}
      </div>
    </div>
  );
}
