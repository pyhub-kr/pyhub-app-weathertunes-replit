import { useEffect, useState, useCallback } from "react";
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
  const [showHelp, setShowHelp] = useState(false);
  
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
    setOnTrackEnd,
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

  const handlePrevious = useCallback(() => {
    if (playlist.length > 0) {
      const newIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist.length - 1;
      setCurrentTrackIndex(newIndex);
      setCurrentTrack(playlist[newIndex]);
    }
  }, [playlist, currentTrackIndex]);

  const handleNext = useCallback(() => {
    if (playlist.length > 0) {
      const newIndex = currentTrackIndex < playlist.length - 1 ? currentTrackIndex + 1 : 0;
      setCurrentTrackIndex(newIndex);
      setCurrentTrack(playlist[newIndex]);
    }
  }, [playlist, currentTrackIndex]);

  // 트랙이 끝났을 때 자동으로 다음 곡 재생
  useEffect(() => {
    if (setOnTrackEnd) {
      setOnTrackEnd(handleNext);
    }
  }, [setOnTrackEnd, handleNext]);

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
      <WeatherBackground 
        weather={weather || null} 
        isLoading={isLoading} 
        showHelp={showHelp}
        onHelpToggle={() => setShowHelp(prev => !prev)}
      />
      
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
            <div className="flex items-center">
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

      {/* 키보드 단축키 도움말 (H키로 토글) - 최상위 레벨 */}
      {showHelp && (
        <>
          {/* 배경 오버레이 - 완전 투명 (클릭 감지용) */}
          <div 
            className="fixed inset-0 bg-transparent" 
            style={{ zIndex: 10000 }}
            onClick={() => setShowHelp(false)}
          />
          {/* 도움말 모달 */}
          <div 
            className="fixed inset-0 flex items-center justify-center pointer-events-none" 
            style={{ zIndex: 10001 }}
          >
            <div className="bg-black text-white text-lg rounded-xl p-6 transition-all duration-300 max-w-md w-full mx-4 shadow-2xl border-2 border-white border-opacity-50 pointer-events-auto"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}>
              <div className="font-bold mb-4 text-center text-xl">키보드 단축키</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">스페이스바 / →</span>
                  <span>다음 배경</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">←</span>
                  <span>이전 배경</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">B</span>
                  <span>배경 변경</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">H</span>
                  <span>도움말 토글</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-600 text-center text-yellow-300">
                현재 배경: 다양한 배경
              </div>
              <div className="mt-4 text-center text-gray-400 text-sm">
                H키를 다시 누르거나 배경을 클릭하면 닫힙니다
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
