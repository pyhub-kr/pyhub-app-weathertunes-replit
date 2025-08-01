import { useTimeZoneDetection } from "@/hooks/use-time-zone-detection";
import { getTimeDisplayName } from "@/lib/time-background";

export function TimeZoneIndicator() {
  const { currentTimeZone, isTimeZoneChangeDetected } = useTimeZoneDetection();
  
  return (
    <div className="flex items-center space-x-2 text-white text-xs">
      <div className="flex items-center space-x-1">
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          isTimeZoneChangeDetected() ? 'bg-green-400 animate-pulse' : 'bg-white bg-opacity-50'
        }`} />
        <span className="text-shadow">
          {getTimeDisplayName(currentTimeZone)}
        </span>
      </div>
      {isTimeZoneChangeDetected() && (
        <span className="text-green-400 animate-fade-in text-shadow">
          시간대 업데이트됨
        </span>
      )}
    </div>
  );
}