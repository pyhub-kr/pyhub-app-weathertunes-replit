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
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>(0);
  const playStartRef = useRef<number>(0);

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
            // Could trigger next track here
          }
        },
      },
    });
  }, [volume]);

  const startTimeTracking = useCallback(() => {
    if (intervalRef.current) return;
    
    // Ensure playStartRef is set
    if (playStartRef.current === 0) {
      playStartRef.current = Date.now();
    }
    
    intervalRef.current = setInterval(() => {
      if (playStartRef.current > 0) {
        // Calculate elapsed time since play started
        const elapsedSeconds = (Date.now() - playStartRef.current) / 1000;
        const totalTime = startTimeRef.current + elapsedSeconds;
        
        // Set reasonable duration (3-5 minutes for typical songs)
        const estimatedDuration = 240; // 4 minutes
        
        setCurrentTime(Math.min(totalTime, estimatedDuration));
        setDuration(estimatedDuration);
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
    if (playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
      playStartRef.current = Date.now();
    }
  }, []);

  const pause = useCallback(() => {
    if (playerRef.current && playerRef.current.pauseVideo) {
      playerRef.current.pauseVideo();
      // Update startTimeRef to current time when pausing
      if (playStartRef.current > 0) {
        const elapsedSeconds = (Date.now() - playStartRef.current) / 1000;
        startTimeRef.current += elapsedSeconds;
        playStartRef.current = 0;
      }
    }
  }, []);

  const seekTo = useCallback((seconds: number) => {
    startTimeRef.current = seconds;
    playStartRef.current = Date.now();
    setCurrentTime(seconds);
    
    if (playerRef.current && isPlaying) {
      // Don't seek YouTube video, just update our internal time
      // YouTube seeking doesn't work well with live streams
    }
  }, [isPlaying]);

  const setPlayerVolume = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(newVolume);
    }
  }, []);

  const loadVideo = useCallback((videoId: string, trackTitle?: string, trackMood?: string) => {
    if (playerRef.current && playerRef.current.loadVideoById) {
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
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' }
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
    }
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
  };
}
