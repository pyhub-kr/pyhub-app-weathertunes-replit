import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    full: string;
    raw: string;
  };
  description: string | null;
  alt_description: string | null;
  user: {
    name: string;
  };
}

interface UnsplashResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

// 날씨별 검색 키워드 매핑
const getSearchKeywords = (condition: string, timeOfDay: 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night') => {
  const timeKeywords = {
    dawn: 'sunrise dawn early morning',
    morning: 'morning sunny bright',
    afternoon: 'afternoon daylight sunny',
    evening: 'sunset evening golden hour',
    night: 'night dark moody'
  };

  const weatherKeywords: Record<string, string> = {
    clear: 'clear sky beautiful landscape',
    sunny: 'sunny bright beautiful nature',
    cloudy: 'cloudy overcast moody atmosphere',
    partly_cloudy: 'partly cloudy dramatic sky',
    overcast: 'overcast grey sky moody',
    rainy: 'rain raindrops water drops atmosphere',
    drizzle: 'light rain misty atmospheric',
    thunderstorm: 'storm dramatic dark clouds',
    snow: 'snow winter white peaceful',
    fog: 'fog mist ethereal mysterious',
    windy: 'windy movement dynamic nature'
  };

  const baseKeyword = weatherKeywords[condition] || 'beautiful nature landscape';
  return `${baseKeyword} ${timeKeywords[timeOfDay]}`;
};

export function useUnsplashBackgrounds(condition: string | undefined, timeOfDay: 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night') {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [backgroundTransition, setBackgroundTransition] = useState(false);

  const searchQuery = condition ? getSearchKeywords(condition, timeOfDay) : 'beautiful nature landscape';

  const { data: images, isLoading, error } = useQuery<UnsplashResponse>({
    queryKey: ['unsplash', condition, timeOfDay],
    queryFn: async () => {
      const response = await fetch(`/api/unsplash/${encodeURIComponent(searchQuery)}?per_page=30`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    },
    enabled: !!condition,
    staleTime: 1000 * 60 * 30, // 30분 캐시
  });

  const currentImage = images?.results?.[currentImageIndex];

  const changeBackground = (direction: 'next' | 'prev' | 'random' = 'next') => {
    if (!images?.results?.length) return;

    setBackgroundTransition(true);
    
    setTimeout(() => {
      if (direction === 'random') {
        setCurrentImageIndex(Math.floor(Math.random() * images.results.length));
      } else if (direction === 'next') {
        setCurrentImageIndex(prev => (prev + 1) % images.results.length);
      } else {
        setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.results.length - 1);
      }
      setBackgroundTransition(false);
    }, 150);
  };

  // 자동 배경 변경 (10분마다)
  useEffect(() => {
    if (!images?.results?.length) return;
    
    const interval = setInterval(() => {
      changeBackground('random');
    }, 10 * 60 * 1000); // 10분

    return () => clearInterval(interval);
  }, [images]);

  return {
    currentImage,
    images: images?.results || [],
    totalImages: images?.results?.length || 0,
    currentIndex: currentImageIndex,
    isLoading,
    error,
    changeBackground,
    backgroundTransition
  };
}