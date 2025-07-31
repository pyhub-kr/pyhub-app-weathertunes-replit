import { useState, useEffect } from 'react';
import type { MusicTrack } from "@shared/schema";

interface UnsplashImage {
  id: string;
  user: {
    name: string;
    username: string;
  };
  links: {
    html: string;
  };
}

interface SourceLinksProps {
  currentImage: UnsplashImage | null;
  currentTrack: MusicTrack | null;
}

export function SourceLinks({ currentImage, currentTrack }: SourceLinksProps) {
  const [showLinks, setShowLinks] = useState(true);

  // Hide links after 5 seconds, show when image or track changes
  useEffect(() => {
    setShowLinks(true);
    const timer = setTimeout(() => {
      setShowLinks(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImage?.id, currentTrack?.youtubeId]);

  const handlePhotoClick = () => {
    if (currentImage?.links?.html) {
      window.open(currentImage.links.html, '_blank');
    }
  };

  const handleMusicClick = () => {
    if (currentTrack?.youtubeId) {
      window.open(`https://www.youtube.com/watch?v=${currentTrack.youtubeId}`, '_blank');
    }
  };

  if (!currentImage && !currentTrack) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-2 right-2 z-20 transition-opacity duration-500 ${
        showLinks ? 'opacity-100' : 'opacity-30'
      }`}
      onMouseEnter={() => setShowLinks(true)}
      onMouseLeave={() => setShowLinks(false)}
    >
      <div className="bg-black bg-opacity-60 backdrop-blur-md rounded-lg px-3 py-2 text-white text-xs border border-white border-opacity-20 min-w-48 space-y-1">
        {/* Photo Attribution */}
        {currentImage && (
          <button
            onClick={handlePhotoClick}
            className="block w-full text-left hover:bg-white hover:bg-opacity-10 rounded px-2 py-1 transition-all duration-200"
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.7)'
            }}
            title="Unsplash에서 보기"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="truncate">Photo by {currentImage.user?.name}</span>
            </div>
          </button>
        )}

        {/* Music Attribution */}
        {currentTrack && (
          <button
            onClick={handleMusicClick}
            className="block w-full text-left hover:bg-white hover:bg-opacity-10 rounded px-2 py-1 transition-all duration-200"
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.7)'
            }}
            title="YouTube에서 보기"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="truncate">{currentTrack.title} on YouTube</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}