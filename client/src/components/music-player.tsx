import type { MusicTrack } from "@shared/schema";

interface MusicPlayerProps {
  track: MusicTrack;
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onRefresh: () => void;
}

export function MusicPlayer({
  track,
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  onRefresh,
}: MusicPlayerProps) {

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-4 shadow-2xl animate-slide-up hover:bg-opacity-15 transition-all duration-300 hover:scale-105">
      {/* Currently Playing Info */}
      <div className="text-center mb-4">
        <div className="text-white text-opacity-70 text-xs mb-1 animate-pulse">현재 재생 중</div>
        <div className="text-white text-base font-medium mb-1 truncate transition-all duration-300">{track.title}</div>
        <div className="text-white text-opacity-80 text-sm transition-colors duration-300">{track.mood}</div>
      </div>
      
      {/* Music Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button 
          onClick={onPrevious}
          className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5 text-white transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
          </svg>
        </button>
        
        <button 
          onClick={onPlayPause}
          className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-200 hover:scale-110 active:scale-95"
          style={isPlaying ? { animation: 'pulse 2s infinite' } : {}}
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
          className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5 text-white transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
          </svg>
        </button>
      </div>
      

      
      {/* Additional Controls */}
      <div className="flex justify-center space-x-4">
        <button 
          onClick={onRefresh}
          className="text-white text-opacity-70 hover:text-opacity-100 transition-all duration-200 hover:scale-110 active:scale-95 hover:rotate-180"
          title="새로운 음악 찾기"
        >
          <svg className="w-5 h-5 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
