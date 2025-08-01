import { useState, useEffect, useCallback, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function useYouTubePlayer() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [currentTrackInfo, setCurrentTrackInfo] = useState<{title: string, mood: string} | null>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>(0);
  const playStartRef = useRef<number>(0);
  const onTrackEndRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
      
      window.onYouTubeIframeAPIReady = initializePlayer;
    } else if (window.YT.Player) {
      initializePlayer();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const initializePlayer = useCallback(() => {
    if (playerRef.current) return;

    playerRef.current = new window.YT.Player('youtube-player', {
      height: '0',
      width: '0',
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: (event: any) => {
          console.log("YouTube player ready");
          setIsReady(true);
          event.target.setVolume(volume);
        },
        onStateChange: (event: any) => {
          const state = event.data;
          if (state === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
            playStartRef.current = Date.now();
            // Use setTimeout to ensure state is updated before starting tracking
            setTimeout(() => {
              startTimeTracking();
            }, 100);
            
            // Update media session for background control
            if ('mediaSession' in navigator) {
              navigator.mediaSession.playbackState = 'playing';
            }
          } else {
            setIsPlaying(false);
            stopTimeTracking();
            
            // Update media session
            if ('mediaSession' in navigator) {
              navigator.mediaSession.playbackState = 'paused';
            }
          }

          if (state === window.YT.PlayerState.ENDED) {
            // 곡이 끝났을 때 콜백 실행
            if (onTrackEndRef.current) {
              onTrackEndRef.current();
            }
          }
        },
      },
    });
  }, [volume]);

  const startTimeTracking = useCallback(() => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime && playerRef.current.getDuration) {
        try {
          // YouTube 플레이어에서 실제 현재 시간과 총 길이 가져오기
          const currentSeconds = playerRef.current.getCurrentTime();
          const totalSeconds = playerRef.current.getDuration();
          
          if (!isNaN(currentSeconds)) {
            setCurrentTime(currentSeconds);
          }
          
          if (!isNaN(totalSeconds) && totalSeconds > 0) {
            setDuration(totalSeconds);
          } else {
            // duration을 가져올 수 없을 때 기본값 사용
            setDuration(240);
          }
        } catch (error) {
          // API 호출 실패 시 기존 방식 사용
          if (playStartRef.current > 0) {
            const elapsedSeconds = (Date.now() - playStartRef.current) / 1000;
            const totalTime = startTimeRef.current + elapsedSeconds;
            setCurrentTime(Math.min(totalTime, 240));
            setDuration(240);
          }
        }
      }
    }, 1000);
  }, []);

  const stopTimeTracking = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }, []);

  const play = useCallback(() => {
    try {
      if (playerRef.current && playerRef.current.playVideo) {
        console.log("YouTube player play() called");
        playerRef.current.playVideo();
        playStartRef.current = Date.now();
      } else {
        console.warn("YouTube player not ready or playVideo method unavailable");
      }
    } catch (error) {
      console.error("Error calling play():", error);
    }
  }, []);

  const pause = useCallback(() => {
    try {
      if (playerRef.current && playerRef.current.pauseVideo) {
        console.log("YouTube player pause() called");
        playerRef.current.pauseVideo();
        // Update startTimeRef to current time when pausing
        if (playStartRef.current > 0) {
          const elapsedSeconds = (Date.now() - playStartRef.current) / 1000;
          startTimeRef.current += elapsedSeconds;
          playStartRef.current = 0;
        }
      } else {
        console.warn("YouTube player not ready or pauseVideo method unavailable");
      }
    } catch (error) {
      console.error("Error calling pause():", error);
    }
  }, []);

  const seekTo = useCallback((seconds: number) => {
    // YouTube 플레이어에서 실제 위치 변경
    if (playerRef.current && playerRef.current.seekTo) {
      playerRef.current.seekTo(seconds, true);
    }
    
    // 내부 시간 추적 업데이트
    startTimeRef.current = seconds;
    playStartRef.current = Date.now();
    setCurrentTime(seconds);
  }, []);

  const setPlayerVolume = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(newVolume);
    }
  }, []);

  const loadVideo = useCallback((videoId: string, trackTitle?: string, trackMood?: string) => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      console.log(`Loading video: ${videoId} - ${trackTitle}`);
      playerRef.current.loadVideoById(videoId);
      // Reset time counters for new video
      startTimeRef.current = 0;
      playStartRef.current = 0;
      setCurrentTime(0);
      setDuration(240); // 4 minutes estimated
      
      // Set up media session metadata for background control
      if ('mediaSession' in navigator && trackTitle) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: trackTitle,
          artist: 'WeatherTunes',
          album: trackMood || '날씨 기반 음악',
          artwork: [
            { src: '/icon.svg', sizes: '192x192', type: 'image/svg+xml' },
            { src: '/icon.svg', sizes: '512x512', type: 'image/svg+xml' }
          ]
        });
        
        // Set up action handlers
        navigator.mediaSession.setActionHandler('play', () => {
          if (playerRef.current) playerRef.current.playVideo();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
          if (playerRef.current) playerRef.current.pauseVideo();
        });
      }
    } else {
      console.error("Cannot load video - player not ready or loadVideoById not available");
    }
  }, []);

  const setOnTrackEnd = useCallback((callback: (() => void) | null) => {
    onTrackEndRef.current = callback;
  }, []);

  return {
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
  };
}
