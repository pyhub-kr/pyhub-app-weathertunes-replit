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
    night: 'night dark moody cityscape skyline campfire bonfire cozy fireplace warm lights urban nightscape'
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
    fog: 'fog mist ethereal mysterious atmospheric vapor',
    windy: 'windy movement dynamic nature flowing',
    mist: 'misty foggy ethereal dreamy mysterious',
    haze: 'hazy atmospheric soft dreamy golden'
  };

  const baseKeyword = weatherKeywords[condition] || 'beautiful nature landscape';
  return `${baseKeyword} ${timeKeywords[timeOfDay]}`;
};

export function useUnsplashBackgrounds(condition: string | undefined, timeOfDay: 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night') {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
  const previousImage = images?.results?.[previousImageIndex];

  const changeBackground = (direction: 'next' | 'prev' | 'random' = 'next') => {
    if (!images?.results?.length || isTransitioning) return;

    // 새 이미지 인덱스 계산
    let newIndex;
    if (direction === 'random') {
      newIndex = Math.floor(Math.random() * images.results.length);
    } else if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % images.results.length;
    } else {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.results.length - 1;
    }
    
    // 같은 이미지면 건너뛰기
    if (newIndex === currentImageIndex) return;
    
    // 이전 이미지 저장하고 전환 시작
    setPreviousImageIndex(currentImageIndex);
    setCurrentImageIndex(newIndex);
    setIsTransitioning(true);
    
    // 전환 애니메이션 완료 후 상태 정리
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  // 자동 배경 변경 (1분마다)
  useEffect(() => {
    if (!images?.results?.length) return;
    
    const interval = setInterval(() => {
      changeBackground('next');
    }, 60 * 1000); // 1분

    return () => clearInterval(interval);
  }, [images]);

  // 이미지 프리로딩
  useEffect(() => {
    if (!images?.results?.length) return;
    
    // 다음 몇 개 이미지를 미리 로드
    const preloadImages = () => {
      for (let i = 1; i <= 3; i++) {
        const nextIndex = (currentImageIndex + i) % images.results.length;
        const img = new Image();
        img.src = images.results[nextIndex]?.urls?.regular || '';
      }
    };
    
    preloadImages();
  }, [images, currentImageIndex]);

  return {
    currentImage,
    previousImage,
    images: images?.results || [],
    totalImages: images?.results?.length || 0,
    currentIndex: currentImageIndex,
    isLoading,
    error,
    changeBackground,
    isTransitioning
  };
}