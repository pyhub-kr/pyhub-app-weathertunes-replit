import type { MusicTrack } from "@shared/schema";
import { getTimeOfDay } from "./time-background";

// 2025년 최신 K-pop 기반 날씨별/시간별 플레이리스트
const musicPlaylists = {
  clear: [
    {
      title: "God of Music",
      artist: "SEVENTEEN",
      mood: "에너지 넘치는 • 맑은 하늘",
      youtubeId: "1Ef9hrn78vQ", 
    },
    {
      title: "Get Up",
      artist: "NewJeans",
      mood: "상쾌한 팝 • 화창한 날씨",
      youtubeId: "ArmDp-zijuc",
    },
    {
      title: "LOVE DIVE",
      artist: "IVE",
      mood: "밝고 세련된 • 햇살 가득한 날",
      youtubeId: "Y8JFxS1HlDo",
    },
    {
      title: "How Sweet",
      artist: "NewJeans",
      mood: "달콤한 팝 • 상쾌한 아침",
      youtubeId: "KgqcaDdSH7c",
    },
    {
      title: "Attention",
      artist: "NewJeans",
      mood: "캐치한 비트 • 경쾌한 하루",
      youtubeId: "js1CtxSY38I",
    },
    {
      title: "THUNDER",
      artist: "SEVENTEEN",
      mood: "강렬한 에너지 • 역동적인 오후",
      youtubeId: "FICVWMdGCM4",
    },
    {
      title: "Lemon Drop",
      artist: "ATEEZ",
      mood: "상큼한 팝 • 밝은 여름날",
      youtubeId: "0SLm_JpF4OE",
    },
    {
      title: "Hype Boy",
      artist: "NewJeans",
      mood: "에너지틱 • 신나는 날",
      youtubeId: "11cta61wi0g",
    },
    {
      title: "DRIP",
      artist: "BABYMONSTER",
      mood: "파워풀한 힙합 • 당당한 오후",
      youtubeId: "qrn-_Gz-Qjo",
    },
    {
      title: "IF I SAY, I LOVE YOU",
      artist: "BOYNEXTDOOR",
      mood: "밴드 사운드 • 청춘 로맨스",
      youtubeId: "SMLjbJJYSi8",
    },
    {
      title: "Like JENNIE",
      artist: "JENNIE (BLACKPINK)",
      mood: "자신감 넘치는 • 화창한 낮",
      youtubeId: "79a5i4xbNPY",
    },
    {
      title: "Supernatural",
      artist: "NewJeans",
      mood: "몽환적 팝 • 맑은 하늘",
      youtubeId: "8HI4Jp6q7sk",
    },
  ],
  rain: [
    {
      title: "Through the Night",
      artist: "IU",
      mood: "감성 발라드 • 비오는 밤",
      youtubeId: "BzYnNdJhZQw",
    },
    {
      title: "Spring Day",
      artist: "BTS",
      mood: "그리움 • 비 오는 오후",
      youtubeId: "xEeFrLSkMm8",
    },
    {
      title: "Stay",
      artist: "BLACKPINK",
      mood: "감성적인 어쿠스틱 • 빗소리와 함께",
      youtubeId: "FzVR_fymZw4",
    },
    {
      title: "Broken Party",
      artist: "CHEN (EXO)",
      mood: "반항적인 록팝 • 우울한 날씨",
      youtubeId: "8rqvO8i4rW8",
    },
    {
      title: "toxic till the end",
      artist: "Rosé (BLACKPINK)",
      mood: "감성적인 팝 • 비 내리는 저녁",
      youtubeId: "t6NWZmiM6iU",
    },
    {
      title: "OMG",
      artist: "NewJeans",
      mood: "몽환적인 R&B • 창가의 빗소리",
      youtubeId: "sVTy_wmn5SU",
    },
    {
      title: "Dear Name",
      artist: "IU",
      mood: "따뜻한 발라드 • 비 오는 날의 위로",
      youtubeId: "8ykMyNHAdKk",
    },
    {
      title: "Eight",
      artist: "IU feat. SUGA (BTS)",
      mood: "감성적인 협업 • 비 갠 후의 마음",
      youtubeId: "TgOu00Mf3kI",
    },
    {
      title: "Maybe Tomorrow",
      artist: "DAY6",
      mood: "치유의 록 발라드 • 희망의 메시지",
      youtubeId: "tkl8QBogeS0",
    },
    {
      title: "You, Clouds, Rain",
      artist: "Heize",
      mood: "R&B 발라드 • 비와 추억",
      youtubeId: "afxLaQiLu-o",
    },
  ],
  cloudy: [
    {
      title: "Celebrity",
      artist: "IU",
      mood: "서정적인 팝 • 흐린 하늘",
      youtubeId: "0-q1KafFCLU",
    },
    {
      title: "You're the Best",
      artist: "MAMAMOO",
      mood: "힘이 되는 메시지 • 흐린 날 격려",
      youtubeId: "QbhmTM1cRro",
    },
    {
      title: "Dynamite",
      artist: "BTS",
      mood: "희망적인 디스코 • 구름 사이 햇살",
      youtubeId: "gdZLi9oWNZg",
    },
    {
      title: "Love Scenario",
      artist: "iKON",
      mood: "따뜻한 감성 • 흐린 날의 사랑",
      youtubeId: "vecSVX1QYbQ",
    },
    {
      title: "Palette",
      artist: "IU feat. G-DRAGON",
      mood: "성숙한 팝 • 회색 하늘 아래",
      youtubeId: "d9IxdwEFk1c",
    },
    {
      title: "Blue Hour",
      artist: "TXT (Tomorrow X Together)",
      mood: "몽환적인 팝 • 황혼의 구름",
      youtubeId: "Vd9QkWsd5p4",
    },
    {
      title: "Feel My Rhythm",
      artist: "Red Velvet",
      mood: "우아한 팝 • 차분한 오후",
      youtubeId: "R9At2ICm4LQ",
    },
    {
      title: "Next Level",
      artist: "aespa",
      mood: "미래적인 팝 • 구름 위 여행",
      youtubeId: "4TWR90KJl84",
    },
    {
      title: "Breath",
      artist: "Lee Hi",
      mood: "차분한 R&B • 깊은 호흡",
      youtubeId: "oBLUJtvHNVs",
    },
    {
      title: "Spring Breeze",
      artist: "Wanna One",
      mood: "상쾌한 발라드 • 봄바람",
      youtubeId: "FeFBOOBRLgY",
    },
  ],
  fog: [
    {
      title: "Whiplash",
      artist: "aespa",
      mood: "신비로운 하우스 • 안개 속 댄스",
      youtubeId: "jWQx2f-CErI",
    },
    {
      title: "Dreams Come True",
      artist: "aespa",
      mood: "몽환적인 R&B • 안개낀 꿈",
      youtubeId: "9AzHT6QkFxM",
    },
    {
      title: "Psycho",
      artist: "Red Velvet",
      mood: "미스터리한 팝 • 안개의 환상",
      youtubeId: "uR8Mrt1IpXg",
    },
    {
      title: "Inception",
      artist: "ATEEZ",
      mood: "신비로운 록 • 안개 속 모험",
      youtubeId: "2NArH91kHoQ",
    },
    {
      title: "Black Mamba",
      artist: "aespa",
      mood: "다크한 팝 • 미지의 안개",
      youtubeId: "ZeerrnuLi5E",
    },
    {
      title: "Ring Ring",
      artist: "Rocket Punch",
      mood: "신비로운 팝 • 안개 속 울림",
      youtubeId: "WOWyj__BORU",
    },
    {
      title: "Panorama",
      artist: "IZ*ONE",
      mood: "장대한 팝 • 안개 너머 풍경",
      youtubeId: "G8GaQdW2wHc",
    },
    {
      title: "Déjà Vu",
      artist: "ATEEZ",
      mood: "기시감의 록 • 안개 속 기억",
      youtubeId: "nlnMDttgTbk",
    },
  ],
  snow: [
    {
      title: "Miracles in December",
      artist: "EXO",
      mood: "겨울 발라드 • 눈 내리는 기적",
      youtubeId: "yVLxRXoLaas",
    },
    {
      title: "Peekaboo",
      artist: "Red Velvet",
      mood: "겨울 팝 • 눈속의 장난",
      youtubeId: "6uJf2IT2Zh8",
    },
    {
      title: "White",
      artist: "TWICE",
      mood: "순백의 팝 • 하얀 눈꽃",
      youtubeId: "1nM5jdXhybM",
    },
    {
      title: "Winter Ahead",
      artist: "V (BTS) & Park Hyo Shin",
      mood: "겨울 발라드 • 눈 오는 밤",
      youtubeId: "rOg_0SWuLV8",
    },
    {
      title: "Breath",
      artist: "Girls' Generation",
      mood: "겨울 발라드 • 하얀 숨결",
      youtubeId: "7GFU8SLWaKI",
    },
    {
      title: "Snow Flower",
      artist: "V (BTS)",
      mood: "겨울 발라드 • 눈꽃의 추억",
      youtubeId: "ipCraMsaQzs",
    },
    {
      title: "Winter Song",
      artist: "DREAMCATCHER",
      mood: "록 발라드 • 겨울의 노래",
      youtubeId: "RqJ0nFkJWyE",
    },
    {
      title: "December",
      artist: "NU'EST",
      mood: "감성 발라드 • 12월의 추억",
      youtubeId: "MMBkU2yZUIU",
    },
  ],
  thunderstorm: [
    {
      title: "THUNDEROUS",
      artist: "Stray Kids",
      mood: "강렬한 락 • 번개와 천둥",
      youtubeId: "EaswWiwMVs8",
    },
    {
      title: "God's Menu",
      artist: "Stray Kids",
      mood: "파워풀한 힙합 • 폭풍의 에너지",
      youtubeId: "TQTlCHxyuu8",
    },
    {
      title: "MANIAC",
      artist: "Stray Kids",
      mood: "강렬한 록 • 광풍의 소용돌이",
      youtubeId: "OjpvDmEZpjE",
    },
    {
      title: "Answer",
      artist: "ATEEZ",
      mood: "웅장한 락 • 폭풍 속 답",
      youtubeId: "yW7wZX3DUaY",
    },
    {
      title: "ON",
      artist: "BTS",
      mood: "전투적인 힙합 • 천둥 같은 의지",
      youtubeId: "mPVDGOVjRQ0",
    },
    {
      title: "HWAA",
      artist: "(G)I-DLE",
      mood: "강렬한 팝 • 불꽃과 번개",
      youtubeId: "z3szNvgQUag",
    },
    {
      title: "Wonderland",
      artist: "ATEEZ",
      mood: "모험적인 락 • 폭풍 속 원더랜드",
      youtubeId: "Z_BhMhZpAug",
    },
    {
      title: "Kill This Love",
      artist: "BLACKPINK",
      mood: "강렬한 팝 • 파괴적인 사랑",
      youtubeId: "2S24-y0Ij3Y",
    },
  ]
};

// Random shuffle function for playlists
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get music tracks based on weather condition and time of day
export function getMusicForWeather(weatherCondition: string): MusicTrack[] {
  const timeOfDay = getTimeOfDay();
  let playlist: MusicTrack[] = [];

  // Weather-based selection
  switch (weatherCondition.toLowerCase()) {
    case 'clear':
    case 'sunny':
      playlist = musicPlaylists.clear;
      break;
    case 'rain':
    case 'drizzle':
    case 'shower':
      playlist = musicPlaylists.rain;
      break;
    case 'cloudy':
    case 'overcast':
    case 'partly cloudy':
      playlist = musicPlaylists.cloudy;
      break;
    case 'fog':
    case 'mist':
    case 'haze':
      playlist = musicPlaylists.fog;
      break;
    case 'snow':
    case 'sleet':
    case 'blizzard':
      playlist = musicPlaylists.snow;
      break;
    case 'thunderstorm':
    case 'storm':
      playlist = musicPlaylists.thunderstorm;
      break;
    default:
      // Default to clear weather playlist
      playlist = musicPlaylists.clear;
  }

  // Time-based modifications can be added here if needed
  // For now, just shuffle the selected playlist
  return shuffleArray(playlist);
}

// Get a random track from the selected playlist
export function getRandomTrack(weatherCondition: string): MusicTrack {
  const playlist = getMusicForWeather(weatherCondition);
  const randomIndex = Math.floor(Math.random() * playlist.length);
  return playlist[randomIndex];
}

// Get next/previous track from the current playlist
export function getNextTrack(currentTrack: MusicTrack, weatherCondition: string): MusicTrack {
  const playlist = getMusicForWeather(weatherCondition);
  const currentIndex = playlist.findIndex(track => track.youtubeId === currentTrack.youtubeId);
  
  if (currentIndex === -1) {
    // If current track not found, return a random track
    return getRandomTrack(weatherCondition);
  }
  
  // Get next track (or loop to beginning)
  const nextIndex = (currentIndex + 1) % playlist.length;
  return playlist[nextIndex];
}

export function getPreviousTrack(currentTrack: MusicTrack, weatherCondition: string): MusicTrack {
  const playlist = getMusicForWeather(weatherCondition);
  const currentIndex = playlist.findIndex(track => track.youtubeId === currentTrack.youtubeId);
  
  if (currentIndex === -1) {
    // If current track not found, return a random track
    return getRandomTrack(weatherCondition);
  }
  
  // Get previous track (or loop to end)
  const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
  return playlist[prevIndex];
}