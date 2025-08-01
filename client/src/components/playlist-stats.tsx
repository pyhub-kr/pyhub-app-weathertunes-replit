import { getPlaylistStats } from "@/lib/music-mapping";
import { useState, useEffect } from "react";

export function PlaylistStats() {
  const [stats, setStats] = useState<any>(null);
  const [showStats, setShowStats] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const playlistStats = getPlaylistStats();
      console.log("Playlist stats loaded:", playlistStats);
      setStats(playlistStats);
      setError(null);
    } catch (error) {
      console.error("플레이리스트 통계 로딩 중 오류:", error);
      setError(error instanceof Error ? error.message : "Unknown error");
    }
  }, []);

  // 에러가 있으면 숨김 처리
  if (error) {
    console.warn("PlaylistStats error:", error);
    return null;
  }

  if (!stats) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-20 md:right-4">
      <button
        onClick={() => setShowStats(!showStats)}
        className="bg-black bg-opacity-30 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-40 transition-all duration-200 border border-white border-opacity-10"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      
      {showStats && (
        <div className="absolute bottom-16 right-0 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-4 text-white text-xs border border-white border-opacity-10 animate-slide-up">
          <div className="space-y-2 min-w-48">
            <div className="font-medium text-center mb-3 text-green-400">플레이리스트 통계</div>
            
            <div className="flex justify-between">
              <span>총 트랙:</span>
              <span className="font-mono">{stats.totalTracks}곡</span>
            </div>
            
            <div className="flex justify-between">
              <span>아티스트:</span>
              <span className="font-mono">{stats.artistCount}명</span>
            </div>
            
            <div className="flex justify-between">
              <span>평균 에너지:</span>
              <span className="font-mono">{stats.avgEnergy}/10</span>
            </div>
            
            <div className="flex justify-between">
              <span>평균 인기도:</span>
              <span className="font-mono">{stats.avgPopularity}/10</span>
            </div>
            
            <div className="border-t border-white border-opacity-20 pt-2 mt-3">
              <div className="text-center font-medium mb-2 text-blue-400">날씨별 분포</div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>☀️ 맑음:</span>
                  <span className="font-mono">{stats.weatherDistribution.clear}곡</span>
                </div>
                <div className="flex justify-between">
                  <span>🌧️ 비:</span>
                  <span className="font-mono">{stats.weatherDistribution.rain}곡</span>
                </div>
                <div className="flex justify-between">
                  <span>☁️ 흐림:</span>
                  <span className="font-mono">{stats.weatherDistribution.cloudy}곡</span>
                </div>
                <div className="flex justify-between">
                  <span>🌫️ 안개:</span>
                  <span className="font-mono">{stats.weatherDistribution.fog}곡</span>
                </div>
                <div className="flex justify-between">
                  <span>❄️ 눈:</span>
                  <span className="font-mono">{stats.weatherDistribution.snow}곡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}