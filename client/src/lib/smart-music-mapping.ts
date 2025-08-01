import type { MusicTrack } from "@shared/schema";
import { getTimeOfDay } from "./time-background";
import { 
  musicDatabase, 
  clearWeatherTracks, 
  rainyWeatherTracks, 
  cloudyWeatherTracks, 
  foggyWeatherTracks, 
  snowyWeatherTracks 
} from "./music-database";

// 시간대별 가중치 시스템
const timeWeights = {
  dawn: { morning: 2, afternoon: 0.5, evening: 0.3, night: 1 },
  sunrise: { morning: 3, afternoon: 1, evening: 0.5, night: 0.2 },
  morning: { morning: 3, afternoon: 1, evening: 0.5, night: 0.2 },
  forenoon: { morning: 2, afternoon: 2, evening: 0.8, night: 0.3 },
  noon: { morning: 1, afternoon: 3, evening: 1, night: 0.3 },
  afternoon: { morning: 0.5, afternoon: 3, evening: 1, night: 0.3 },
  evening: { morning: 0.2, afternoon: 1, evening: 3, night: 1 },
  sunset: { morning: 0.2, afternoon: 0.8, evening: 3, night: 2 },
  night: { morning: 0.1, afternoon: 0.3, evening: 1, night: 3 }
};

// 날씨별 기본 에너지 레벨
const weatherEnergyPreference = {
  clear: { min: 6, max: 10 },
  rain: { min: 3, max: 7 },
  cloudy: { min: 5, max: 8 },
  fog: { min: 2, max: 6 },
  snow: { min: 4, max: 8 }
};

// 스마트 플레이리스트 생성 함수
export function getMusicForWeather(weatherCondition: string, maxTracks: number = 50): MusicTrack[] {
  const condition = weatherCondition.toLowerCase();
  const currentTime = getTimeOfDay();
  
  // 날씨별 기본 트랙 풀 선택
  let baseTracks: MusicTrack[] = [];
  let weatherType: keyof typeof weatherEnergyPreference = "clear";
  
  console.log(`[DEBUG] Weather condition: "${condition}"`);
  console.log(`[DEBUG] Available tracks - Clear: ${clearWeatherTracks.length}, Cloudy: ${cloudyWeatherTracks.length}, Rain: ${rainyWeatherTracks.length}`);
  
  if (condition.includes("clear") || condition.includes("sunny")) {
    baseTracks = clearWeatherTracks;
    weatherType = "clear";
  } else if (condition.includes("rain") || condition.includes("drizzle") || condition.includes("shower")) {
    baseTracks = rainyWeatherTracks;
    weatherType = "rain";
  } else if (condition.includes("cloud") || condition.includes("overcast") || condition.includes("clouds")) {
    baseTracks = cloudyWeatherTracks;
    weatherType = "cloudy";
  } else if (condition.includes("fog") || condition.includes("mist") || condition.includes("haze")) {
    baseTracks = foggyWeatherTracks;
    weatherType = "fog";
  } else if (condition.includes("snow") || condition.includes("blizzard") || condition.includes("sleet")) {
    baseTracks = snowyWeatherTracks;
    weatherType = "snow";
  } else {
    baseTracks = clearWeatherTracks;
    weatherType = "clear";
  }
  
  console.log(`[DEBUG] Selected weather type: ${weatherType}, Base tracks: ${baseTracks.length}`);
  console.log(`[DEBUG] Current time: ${currentTime}`);
  
  // 시간대와 에너지 레벨에 따른 가중치 점수 계산
  const scoredTracks = baseTracks.map(track => {
    let score = 0;
    
    // 시간대 가중치
    const timeWeight = timeWeights[currentTime as keyof typeof timeWeights];
    if (timeWeight && track.tags.time) {
      track.tags.time.forEach(time => {
        if (time && timeWeight[time as keyof typeof timeWeight]) {
          score += timeWeight[time as keyof typeof timeWeight];
        }
      });
    }
    
    // 에너지 레벨 가중치
    const energyPreference = weatherEnergyPreference[weatherType];
    if (track.tags.energy >= energyPreference.min && track.tags.energy <= energyPreference.max) {
      score += 2;
    } else {
      score += Math.max(0, 1 - Math.abs(track.tags.energy - (energyPreference.min + energyPreference.max) / 2) / 3);
    }
    
    // 인기도 가중치
    score += track.tags.popularity * 0.3;
    
    // 랜덤 요소 추가 (다양성 확보)
    score += Math.random() * 1.5;
    
    return { ...track, score };
  });
  
  // 점수 순으로 정렬하고 상위 트랙 선택
  const sortedTracks = scoredTracks
    .sort((a, b) => b.score - a.score)
    .slice(0, maxTracks);
  
  // score 프로퍼티 제거하고 반환
  return sortedTracks.map(({ score, ...track }) => track);
}

// 특정 조건으로 필터링된 플레이리스트 생성
export function getFilteredPlaylist(
  weather: string, 
  mood?: string[], 
  energy?: { min: number; max: number },
  genre?: string[],
  maxTracks: number = 30
): MusicTrack[] {
  const baseTracks = getMusicForWeather(weather, 200); // 더 큰 풀에서 시작
  
  let filteredTracks = baseTracks;
  
  // 무드 필터
  if (mood && mood.length > 0) {
    filteredTracks = filteredTracks.filter(track =>
      track.tags.mood.some(trackMood => 
        mood.some(filterMood => trackMood.includes(filterMood))
      )
    );
  }
  
  // 에너지 레벨 필터
  if (energy) {
    filteredTracks = filteredTracks.filter(track =>
      track.tags.energy >= energy.min && track.tags.energy <= energy.max
    );
  }
  
  // 장르 필터
  if (genre && genre.length > 0) {
    filteredTracks = filteredTracks.filter(track =>
      track.tags.genre.some(trackGenre => genre.includes(trackGenre))
    );
  }
  
  // 결과를 인기도와 랜덤성으로 정렬
  return filteredTracks
    .sort((a, b) => (b.tags.popularity + Math.random()) - (a.tags.popularity + Math.random()))
    .slice(0, maxTracks);
}

// 랜덤 트랙을 가져오는 함수 (가중치 적용)
export function getRandomTrack(playlist: MusicTrack[]): MusicTrack | null {
  if (playlist.length === 0) return null;
  
  // 인기도 기반 가중치 랜덤 선택
  const totalWeight = playlist.reduce((sum, track) => sum + track.tags.popularity, 0);
  let random = Math.random() * totalWeight;
  
  for (const track of playlist) {
    random -= track.tags.popularity;
    if (random <= 0) {
      return track;
    }
  }
  
  // 폴백으로 순수 랜덤 선택
  const randomIndex = Math.floor(Math.random() * playlist.length);
  return playlist[randomIndex];
}

// 다음 트랙 추천 (스마트 알고리즘)
export function getNextTrack(playlist: MusicTrack[], currentTrack: MusicTrack | null): MusicTrack | null {
  if (playlist.length === 0) return null;
  if (playlist.length === 1) return playlist[0];
  
  if (!currentTrack) return getRandomTrack(playlist);
  
  // 현재 트랙과 유사한 특성을 가진 트랙 선호
  const similarTracks = playlist.filter(track => {
    if (track.id === currentTrack.id) return false;
    
    // 유사한 에너지 레벨 (+/-2)
    const energySimilar = Math.abs(track.tags.energy - currentTrack.tags.energy) <= 2;
    
    // 공통 무드나 장르가 있는지
    const moodSimilar = track.tags.mood.some(mood => currentTrack.tags.mood.includes(mood));
    const genreSimilar = track.tags.genre.some(genre => currentTrack.tags.genre.includes(genre));
    
    return energySimilar && (moodSimilar || genreSimilar);
  });
  
  // 유사한 트랙이 있으면 그 중에서 선택, 없으면 전체에서 선택
  const candidateTracks = similarTracks.length > 0 ? similarTracks : 
    playlist.filter(track => track.id !== currentTrack.id);
  
  return getRandomTrack(candidateTracks);
}

// 이전 트랙 (다양성을 위해 랜덤)
export function getPreviousTrack(playlist: MusicTrack[], currentTrack: MusicTrack | null): MusicTrack | null {
  if (playlist.length === 0) return null;
  
  const availableTracks = currentTrack ? 
    playlist.filter(track => track.id !== currentTrack.id) : playlist;
  
  return getRandomTrack(availableTracks);
}

// 무드별 플레이리스트 생성
export function getMoodPlaylist(mood: string, weather: string = "clear"): MusicTrack[] {
  return getFilteredPlaylist(weather, [mood], undefined, undefined, 25);
}

// 에너지 레벨별 플레이리스트 생성
export function getEnergyPlaylist(energyLevel: number, weather: string = "clear"): MusicTrack[] {
  const energyRange = { min: Math.max(1, energyLevel - 2), max: Math.min(10, energyLevel + 2) };
  return getFilteredPlaylist(weather, undefined, energyRange, undefined, 25);
}

// 시간대별 플레이리스트 생성
export function getTimeBasedPlaylist(weather: string): MusicTrack[] {
  const currentTime = getTimeOfDay();
  const baseTracks = getMusicForWeather(weather, 100);
  
  // 현재 시간대에 적합한 트랙 필터링
  const timeAppropriate = baseTracks.filter(track => 
    track.tags.time.includes(currentTime)
  );
  
  return timeAppropriate.length > 0 ? timeAppropriate : baseTracks;
}

// 아티스트별 플레이리스트 생성
export function getArtistPlaylist(artist: string): MusicTrack[] {
  return musicDatabase.filter(track => 
    track.artist.toLowerCase().includes(artist.toLowerCase())
  );
}

// 통계 정보 제공
export function getPlaylistStats() {
  const totalTracks = musicDatabase.length;
  const weatherDistribution = {
    clear: clearWeatherTracks.length,
    rain: rainyWeatherTracks.length,
    cloudy: cloudyWeatherTracks.length,
    fog: foggyWeatherTracks.length,
    snow: snowyWeatherTracks.length
  };
  
  const artistCount = new Set(musicDatabase.map(track => track.artist)).size;
  const avgEnergy = musicDatabase.reduce((sum, track) => sum + track.tags.energy, 0) / totalTracks;
  const avgPopularity = musicDatabase.reduce((sum, track) => sum + track.tags.popularity, 0) / totalTracks;
  
  return {
    totalTracks,
    weatherDistribution,
    artistCount,
    avgEnergy: Math.round(avgEnergy * 10) / 10,
    avgPopularity: Math.round(avgPopularity * 10) / 10
  };
}