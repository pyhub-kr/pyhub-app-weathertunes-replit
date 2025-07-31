import { useEffect, useState } from "react";
import { WeatherBackground } from "@/components/weather-background";
import { WeatherCard } from "@/components/weather-card";
import { MusicPlayer } from "@/components/music-player";
import { YouTubePlayer } from "@/components/youtube-player";
import { useGeolocation } from "@/hooks/use-geolocation";
import { useWeather } from "@/hooks/use-weather";
import { useYouTubePlayer } from "@/hooks/use-youtube-player";
import { getPlaylistForWeather } from "@/lib/music-mapping";
import type { MusicTrack } from "@shared/schema";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [playlist, setPlaylist] = useState<MusicTrack[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  const { location, isLoading: locationLoading, error: locationError, isUsingDefault } = useGeolocation();
  const { weather, isLoading: weatherLoading, error: weatherError } = useWeather(location);
  
  const {
    isReady,
    isPlaying,
    currentTime,
    duration,
    volume,
    play,
    pause,
    seekTo,
    setVolume: setPlayerVolume,
    loadVideo,
  } = useYouTubePlayer();

  // Update playlist when weather changes
  useEffect(() => {
    if (weather?.condition) {
      const newPlaylist = getPlaylistForWeather(weather.condition);
      setPlaylist(newPlaylist);
      setCurrentTrackIndex(0);
      setCurrentTrack(newPlaylist[0] || null);
    }
  }, [weather?.condition]);

  // Load current track when it changes
  useEffect(() => {
    if (currentTrack && isReady) {
      loadVideo(currentTrack.youtubeId, currentTrack.title, currentTrack.mood);
    }
  }, [currentTrack, isReady, loadVideo]);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handlePrevious = () => {
    if (playlist.length > 0) {
      const newIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist.length - 1;
      setCurrentTrackIndex(newIndex);
      setCurrentTrack(playlist[newIndex]);
    }
  };

  const handleNext = () => {
    if (playlist.length > 0) {
      const newIndex = currentTrackIndex < playlist.length - 1 ? currentTrackIndex + 1 : 0;
      setCurrentTrackIndex(newIndex);
      setCurrentTrack(playlist[newIndex]);
    }
  };

  const handleRefresh = () => {
    if (weather?.condition) {
      const newPlaylist = getPlaylistForWeather(weather.condition);
      setPlaylist(newPlaylist);
      const randomIndex = Math.floor(Math.random() * newPlaylist.length);
      setCurrentTrackIndex(randomIndex);
      setCurrentTrack(newPlaylist[randomIndex] || null);
    }
  };

  const isLoading = locationLoading || weatherLoading;
  // Only show error if we have a real error AND we're not using default location successfully
  const hasError = (locationError && !isUsingDefault) || weatherError;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <WeatherBackground weather={weather || null} isLoading={isLoading} />
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
            <div className="text-white text-lg">날씨 정보를 가져오는 중...</div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && !isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 text-center max-w-md mx-4">
            <div className="text-red-400 text-4xl mb-4">⚠️</div>
            <div className="text-white text-lg mb-4">오류가 발생했습니다</div>
            <div className="text-white text-opacity-80 text-sm mb-6">
              {locationError || weatherError}
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-full transition-all duration-200"
            >
              다시 시도
            </button>
          </div>
        </div>
      )}

      {/* Main Interface */}
      {!isLoading && !hasError && (
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Header */}
          <header className="flex justify-between items-center p-4 lg:p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.636-.49-3.154-1.343-4.243a1 1 0 010-1.414z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M13.243 8.757a1 1 0 011.414 0A5.984 5.984 0 0116 12a5.984 5.984 0 01-1.343 3.243 1 1 0 11-1.414-1.414A3.984 3.984 0 0014 12a3.984 3.984 0 00-.757-2.243 1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-white text-xl lg:text-2xl font-semibold">WeatherTunes</h1>
            </div>
            
            {location && (
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-medium">
                  {location.city || "위치 정보"}
                  {isUsingDefault && (
                    <span className="text-white text-opacity-70 text-xs ml-1">(기본위치)</span>
                  )}
                </span>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-1 flex items-center justify-center px-4 py-2 min-h-0">
            <div className="w-full max-w-sm mx-auto space-y-4 flex flex-col justify-center">
              {weather && <WeatherCard weather={weather} />}
              
              {currentTrack && (
                <MusicPlayer
                  track={currentTrack}
                  isPlaying={isPlaying}
                  currentTime={currentTime}
                  duration={duration}
                  volume={volume}
                  onPlayPause={handlePlayPause}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onSeek={seekTo}
                  onVolumeChange={setPlayerVolume}
                  onRefresh={handleRefresh}
                />
              )}
            </div>
          </main>

          {/* Footer */}
          <footer className="p-3 text-center">
            <div className="text-white text-opacity-60 text-xs">
              마지막 업데이트: {weather?.lastUpdated ? 
                new Date(weather.lastUpdated).toLocaleTimeString('ko-KR', {
                  hour: '2-digit',
                  minute: '2-digit'
                }) : '정보 없음'
              }
            </div>
          </footer>
        </div>
      )}

      {/* Hidden YouTube Player */}
      <YouTubePlayer />
    </div>
  );
}
