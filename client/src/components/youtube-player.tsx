import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function YouTubePlayer() {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed -bottom-full -left-full opacity-0 pointer-events-none">
      <div 
        ref={playerRef}
        id="youtube-player"
        style={{ width: '0', height: '0' }}
      />
    </div>
  );
}
