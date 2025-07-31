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
            startTimeTracking();
          } else {
            setIsPlaying(false);
            stopTimeTracking();
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
    
    intervalRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration ? playerRef.current.getDuration() : 0;
        
        // Validate and limit time values (max 24 hours = 86400 seconds)
        const validCurrentTime = (currentTime && currentTime > 0 && currentTime <= 86400) ? currentTime : 0;
        const validDuration = (duration && duration > 0 && duration <= 86400) ? duration : 0;
        
        setCurrentTime(validCurrentTime);
        setDuration(validDuration);
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
    }
  }, []);

  const pause = useCallback(() => {
    if (playerRef.current && playerRef.current.pauseVideo) {
      playerRef.current.pauseVideo();
    }
  }, []);

  const seekTo = useCallback((seconds: number) => {
    if (playerRef.current && playerRef.current.seekTo) {
      playerRef.current.seekTo(seconds, true);
    }
  }, []);

  const setPlayerVolume = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(newVolume);
    }
  }, []);

  const loadVideo = useCallback((videoId: string) => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(videoId);
      setCurrentTime(0);
      setDuration(0);
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
