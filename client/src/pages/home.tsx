import { useEffect, useState, useCallback } from "react";
import { WeatherBackground } from "@/components/weather-background";
import { WeatherCard } from "@/components/weather-card";
import { MusicPlayer } from "@/components/music-player";
import { YouTubePlayer } from "@/components/youtube-player";
import { SourceLinks } from "@/components/source-links";
import { useGeolocation } from "@/hooks/use-geolocation";
import { useWeather } from "@/hooks/use-weather";
import { useYouTubePlayer } from "@/hooks/use-youtube-player";
import { useUserCount } from "@/hooks/use-user-count";
import { getPlaylistForWeather } from "@/lib/music-mapping";
import type { MusicTrack } from "@shared/schema";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [playlist, setPlaylist] = useState<MusicTrack[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState<any>(null);
  
  const { location, isLoading: locationLoading, error: locationError, isUsingDefault, refreshLocation, isRefreshing } = useGeolocation();
  const { weather, isLoading: weatherLoading, error: weatherError } = useWeather(location);
  const { userCount, isConnected } = useUserCount();
  
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

  // Update playlist when weather changes with random starting track
  useEffect(() => {
    if (weather?.condition) {
      const newPlaylist = getPlaylistForWeather(weather.condition);
      setPlaylist(newPlaylist);
      // Start with random track instead of first one
      const randomIndex = Math.floor(Math.random() * newPlaylist.length);
      setCurrentTrackIndex(randomIndex);
      setCurrentTrack(newPlaylist[randomIndex] || null);
    }
  }, [weather?.condition]);

  // Load current track when it changes and auto-play if user has interacted
  useEffect(() => {
    if (currentTrack && isReady) {
      loadVideo(currentTrack.youtubeId, currentTrack.title, currentTrack.mood);
      // Auto-play after a brief delay to ensure video is loaded
      if (hasUserInteracted) {
        setTimeout(() => {
          play();
        }, 1000);
      }
    }
  }, [currentTrack, isReady, loadVideo, play, hasUserInteracted]);

  // Enable auto-play after first user interaction
  useEffect(() => {
    const enableAutoplay = () => {
      setHasUserInteracted(true);
      // Auto-play current track if it's loaded and not playing
      if (currentTrack && isReady && !isPlaying) {
        setTimeout(() => {
          play();
        }, 500);
      }
    };

    if (!hasUserInteracted) {
      document.addEventListener('click', enableAutoplay, { once: true });
      document.addEventListener('keydown', enableAutoplay, { once: true });
      document.addEventListener('touchstart', enableAutoplay, { once: true });

      return () => {
        document.removeEventListener('click', enableAutoplay);
        document.removeEventListener('keydown', enableAutoplay);
        document.removeEventListener('touchstart', enableAutoplay);
      };
    }
  }, [hasUserInteracted, currentTrack, isReady, isPlaying, play]);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handlePrevious = useCallback(() => {
    if (playlist.length > 0) {
      // Random previous track instead of sequential
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * playlist.length);
      } while (newIndex === currentTrackIndex && playlist.length > 1); // Avoid same track
      
      setCurrentTrackIndex(newIndex);
      setCurrentTrack(playlist[newIndex]);
    }
  }, [playlist, currentTrackIndex]);

  const handleNext = useCallback(() => {
    if (playlist.length > 0) {
      // Random next track instead of sequential
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * playlist.length);
      } while (newIndex === currentTrackIndex && playlist.length > 1); // Avoid same track
      
      setCurrentTrackIndex(newIndex);
      setCurrentTrack(playlist[newIndex]);
    }
  }, [playlist, currentTrackIndex]);

  // 트랙이 끝났을 때 자동으로 다음 곡 재생 및 Media Session API 설정
  useEffect(() => {
    if (setOnTrackEnd) {
      setOnTrackEnd(() => {
        handleNext();
        // Auto-play next track
        setTimeout(() => {
          play();
        }, 1000);
      });
    }

    // Media Session API 핸들러 설정
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        handleNext();
        setTimeout(() => {
          play();
        }, 500);
      });
      
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        handlePrevious();
        setTimeout(() => {
          play();
        }, 500);
      });
    }
  }, [setOnTrackEnd, handleNext, handlePrevious, play]);

  // 볼륨 조절 키보드 이벤트 리스너
  useEffect(() => {
    const handleVolumeUp = () => {
      setPlayerVolume(Math.min(volume + 10, 100));
    };

    const handleVolumeDown = () => {
      setPlayerVolume(Math.max(volume - 10, 0));
    };

    window.addEventListener('volumeUp', handleVolumeUp);
    window.addEventListener('volumeDown', handleVolumeDown);

    return () => {
      window.removeEventListener('volumeUp', handleVolumeUp);
      window.removeEventListener('volumeDown', handleVolumeDown);
    };
  }, [volume, setPlayerVolume]);

  const handleRefresh = () => {
    if (weather?.condition) {
      const newPlaylist = getPlaylistForWeather(weather.condition);
      setPlaylist(newPlaylist);
      const randomIndex = Math.floor(Math.random() * newPlaylist.length);
      setCurrentTrackIndex(randomIndex);
      setCurrentTrack(newPlaylist[randomIndex] || null);
    }
  };

  // 위치가 변경되면 음악도 새로 고침
  useEffect(() => {
    if (location && weather?.condition && currentTrack) {
      console.log("Location changed, refreshing music for condition:", weather.condition);
      handleRefresh();
    }
  }, [location?.city, location?.country]); // 도시나 국가가 변경되면 트리거

  const isLoading = locationLoading || weatherLoading;
  // Only show error if we have a real error AND we're not using default location successfully
  const hasError = (locationError && !isUsingDefault) || weatherError;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f23]">
      {/* Background */}
      <WeatherBackground 
        weather={weather || null} 
        isLoading={isLoading} 
        showHelp={showHelp}
        onHelpToggle={() => setShowHelp(prev => !prev)}
        onImageChange={setCurrentBackgroundImage}
      />
      
      {/* Loading Overlay */}
      {(isLoading || isRefreshing) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
            <div className="text-white text-lg" style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
            }}>
              {isRefreshing ? "위치 정보를 새로고침 중..." : "날씨 정보를 가져오는 중..."}
            </div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && !isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-8 text-center max-w-md mx-4 border border-white border-opacity-20">
            <div className="text-red-400 text-4xl mb-4">⚠️</div>
            <div className="text-white text-lg mb-4" style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
            }}>오류가 발생했습니다</div>
            <div className="text-white text-opacity-80 text-sm mb-6" style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
            }}>
              {locationError || weatherError}
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-full transition-all duration-200" style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
              }}
            >
              다시 시도
            </button>
          </div>
        </div>
      )}

      {/* Auto-play Notice */}
      {!hasUserInteracted && currentTrack && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-black bg-opacity-80 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm animate-pulse border border-white border-opacity-20" style={{
          textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
        }}>
          화면을 터치하면 음악이 자동 재생됩니다 🎵
        </div>
      )}

      {/* Main Interface */}
      {!isLoading && !hasError && !isRefreshing && (
        <div className="relative z-10 flex flex-col h-screen safe-area-inset overflow-hidden">
          {/* Header */}
          <header className="flex justify-between items-center p-3 sm:p-4 lg:p-6 flex-shrink-0">
            <div className="flex items-center">
              <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold" style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
              }}>WeatherTunes</h1>
            </div>
            
            {/* User Count Display */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {isConnected && userCount.totalUsers > 0 && (
                <div className="flex items-center space-x-1 bg-black bg-opacity-30 backdrop-blur-md rounded-full px-2 sm:px-3 py-1 sm:py-1.5 border border-white border-opacity-10">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs sm:text-sm font-medium" style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                  }}>
                    {userCount.totalUsers}명 접속
                  </span>
                </div>
              )}
              
              {location && (
                <div className="flex items-center space-x-1 sm:space-x-2 bg-black bg-opacity-30 backdrop-blur-md rounded-full px-2 sm:px-4 py-1.5 sm:py-2 border border-white border-opacity-10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium" style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                }}>
                  {location.city || "위치 정보"}
                  {isUsingDefault && (
                    <span className="text-white text-opacity-70 text-xs ml-1 hidden sm:inline" style={{
                      textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                    }}>(기본위치)</span>
                  )}
                </span>
                <button
                  onClick={refreshLocation}
                  disabled={isRefreshing}
                  className="ml-1 sm:ml-2 p-0.5 sm:p-1 hover:bg-white hover:bg-opacity-10 rounded-full transition-all duration-200 disabled:opacity-50"
                  title="위치 새로고침"
                >
                  <svg 
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-white transition-transform duration-500 ${isRefreshing ? 'animate-spin' : 'hover:rotate-180'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
                </div>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 min-h-0 overflow-y-auto">
            <div className="w-full max-w-xs sm:max-w-sm mx-auto space-y-2 sm:space-y-3 lg:space-y-4 flex flex-col justify-center">
              {weather && <WeatherCard weather={weather} />}
              
              {currentTrack && (
                <MusicPlayer
                  track={currentTrack}
                  isPlaying={isPlaying}
                  onPlayPause={handlePlayPause}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onRefresh={handleRefresh}
                />
              )}
            </div>
          </main>

          {/* Footer */}
          <footer className="p-2 sm:p-3 text-center flex-shrink-0">
            <div className="text-white text-opacity-60 text-xs" style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
            }}>
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
            <div className="bg-black text-white text-sm sm:text-lg rounded-xl p-4 sm:p-6 transition-all duration-300 max-w-xs sm:max-w-md mx-4 shadow-2xl border-2 border-white border-opacity-50 pointer-events-auto backdrop-blur-md"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}>
              <div className="font-bold mb-3 sm:mb-4 text-center text-lg sm:text-xl">키보드 단축키</div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">스페이스바 / →</span>
                  <span className="text-xs sm:text-base">다음 배경</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">←</span>
                  <span className="text-xs sm:text-base">이전 배경</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">B</span>
                  <span className="text-xs sm:text-base">배경 변경</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">↑</span>
                  <span className="text-xs sm:text-base">볼륨 증가</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">↓</span>
                  <span className="text-xs sm:text-base">볼륨 감소</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">H</span>
                  <span className="text-xs sm:text-base">도움말 토글</span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-600 text-center text-yellow-300 text-xs sm:text-base">
                현재 배경: 다양한 배경
              </div>
              <div className="mt-3 sm:mt-4 text-center text-gray-400 text-xs">
                H키를 다시 누르거나 배경을 클릭하면 닫힙니다
              </div>
            </div>
          </div>
        </>
      )}

      {/* Source Links */}
      <SourceLinks 
        currentImage={currentBackgroundImage}
        currentTrack={currentTrack}
      />
    </div>
  );
}
