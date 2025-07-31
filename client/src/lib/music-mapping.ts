import type { MusicTrack } from "@shared/schema";

// Weather-based music playlists
const musicPlaylists = {
  clear: [
    {
      title: "Sunny Day Vibes",
      artist: "Chill Beats",
      mood: "밝고 경쾌한 • 맑은 날",
      youtubeId: "jfKfPfyJRdk", // lofi hip hop radio
    },
    {
      title: "Happy Summer",
      artist: "Upbeat Music",
      mood: "신나는 팝 • 화창한 날씨",
      youtubeId: "5qap5aO4i9A", // lofi hip hop
    },
    {
      title: "Acoustic Sunshine",
      artist: "Relaxing Guitar",
      mood: "따뜻한 어쿠스틱 • 햇살",
      youtubeId: "DWcJFNfaw9c", // calm piano
    },
  ],
  rain: [
    {
      title: "Rainy Day Jazz",
      artist: "Smooth Jazz Cafe",
      mood: "차분한 재즈 • 비오는 날",
      youtubeId: "Dx5qFachd3A", // jazz cafe
    },
    {
      title: "Rain Sounds & Piano",
      artist: "Nature Sounds",
      mood: "편안한 피아노 • 빗소리",
      youtubeId: "q76bMs-NwRk", // rain sounds
    },
    {
      title: "Melancholic Indie",
      artist: "Indie Folk",
      mood: "감성적인 인디 • 우울한 날씨",
      youtubeId: "BeQNLgqnbIc", // indie music
    },
  ],
  snow: [
    {
      title: "Winter Wonderland",
      artist: "Classical Piano",
      mood: "고요한 클래식 • 눈오는 날",
      youtubeId: "EKkzbbLYPuI", // winter music
    },
    {
      title: "Cozy Fireplace",
      artist: "Ambient Sounds",
      mood: "따뜻한 앰비언트 • 겨울밤",
      youtubeId: "L_LUpnjgPso", // fireplace sounds
    },
    {
      title: "Nordic Folk",
      artist: "Traditional Music",
      mood: "신비로운 포크 • 설국",
      youtubeId: "RWQMg56ZVZY", // nordic music
    },
  ],
  clouds: [
    {
      title: "Cloudy Afternoon",
      artist: "Lo-Fi Chill",
      mood: "여유로운 로파이 • 흐린 날",
      youtubeId: "jfKfPfyJRdk", // lofi study
    },
    {
      title: "Contemplative",
      artist: "Ambient Electronic",
      mood: "사색적인 앰비언트 • 구름",
      youtubeId: "lTRiuFIWV54", // ambient music
    },
    {
      title: "Dreamy Synthwave",
      artist: "Retro Electronic",
      mood: "몽환적인 신스웨이브 • 흐림",
      youtubeId: "MV_3Dpw-BRY", // synthwave
    },
  ],
  fog: [
    {
      title: "Mysterious Ambience",
      artist: "Dark Ambient",
      mood: "신비로운 앰비언트 • 안개",
      youtubeId: "wzjWIxXBs_s", // dark ambient
    },
    {
      title: "Ethereal Soundscape",
      artist: "Atmospheric",
      mood: "몽환적인 사운드스케이프 • 안개",
      youtubeId: "1ZYbU82GVz4", // ethereal music
    },
    {
      title: "Foggy Morning",
      artist: "Nature & Piano",
      mood: "고요한 피아노 • 안개낀 아침",
      youtubeId: "nTkKoD_mBmY", // morning music
    },
  ],
};

export function getPlaylistForWeather(condition: string): MusicTrack[] {
  return musicPlaylists[condition as keyof typeof musicPlaylists] || musicPlaylists.clear;
}

export function getRandomTrackForWeather(condition: string): MusicTrack {
  const playlist = getPlaylistForWeather(condition);
  return playlist[Math.floor(Math.random() * playlist.length)];
}
