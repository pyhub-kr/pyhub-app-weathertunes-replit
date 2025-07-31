import type { MusicTrack } from "@shared/schema";

interface MusicPlayerProps {
  track: MusicTrack;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onRefresh: () => void;
}

export function MusicPlayer({
  track,
  isPlaying,
  currentTime,
  duration,
  volume,
  onPlayPause,
  onPrevious,
  onNext,
  onSeek,
  onVolumeChange,
  onRefresh,
}: MusicPlayerProps) {
  const formatTime = (seconds: number) => {
    // Handle invalid values
    if (isNaN(seconds) || seconds < 0) {
      return "0:00";
    }
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    
    // Format as HH:MM:SS if over 60 minutes, otherwise MM:SS
    if (mins >= 60) {
      const hours = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      return `${hours}:${remainingMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 shadow-2xl animate-slide-up">
      {/* Currently Playing Info */}
      <div className="text-center mb-6">
        <div className="text-white text-opacity-70 text-sm mb-1">현재 재생 중</div>
        <div className="text-white text-lg font-medium mb-1">{track.title}</div>
        <div className="text-white text-opacity-80 text-sm">{track.mood}</div>
      </div>
      
      {/* Music Controls */}
      <div className="flex items-center justify-center space-x-6 mb-6">
        <button 
          onClick={onPrevious}
          className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
          </svg>
        </button>
        
        <button 
          onClick={onPlayPause}
          className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-200"
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        <button 
          onClick={onNext}
          className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
          </svg>
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-white text-opacity-70 text-xs mb-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div 
          className="w-full bg-white bg-opacity-20 rounded-full h-1 cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            onSeek(percentage * duration);
          }}
        >
          <div 
            className="bg-white h-1 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Volume Control */}
      <div className="flex items-center space-x-3 mb-6">
        <svg className="w-4 h-4 text-white text-opacity-70" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        <div 
          className="flex-1 bg-white bg-opacity-20 rounded-full h-1 cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            onVolumeChange(percentage * 100);
          }}
        >
          <div 
            className="bg-white h-1 rounded-full" 
            style={{ width: `${volume}%` }}
          />
        </div>
        <svg className="w-4 h-4 text-white text-opacity-70" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.636-.49-3.154-1.343-4.243a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Additional Controls */}
      <div className="flex justify-center space-x-4">
        <button 
          onClick={onRefresh}
          className="text-white text-opacity-70 hover:text-opacity-100 transition-opacity"
          title="새로운 음악 찾기"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
