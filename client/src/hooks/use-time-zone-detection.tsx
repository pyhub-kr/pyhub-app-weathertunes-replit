import { useState, useEffect, useCallback } from "react";
import { getTimeOfDay, type TimeOfDay } from "@/lib/time-background";

export function useTimeZoneDetection() {
  const [currentTimeZone, setCurrentTimeZone] = useState<TimeOfDay>(getTimeOfDay());
  const [lastUpdateTime, setLastUpdateTime] = useState<number>(Date.now());

  const checkTimeZoneChange = useCallback(() => {
    // Page Visibility API로 탭이 활성화된 상태에서만 체크
    if (document.hidden) return;

    const newTimeZone = getTimeOfDay();
    const now = Date.now();
    
    if (newTimeZone !== currentTimeZone) {
      console.log(`시간대 변경 감지: ${currentTimeZone} → ${newTimeZone}`);
      setCurrentTimeZone(newTimeZone);
      setLastUpdateTime(now);
      return true; // 변경됨
    }
    
    return false; // 변경되지 않음
  }, [currentTimeZone]);

  // 15분마다 시간대 체크
  useEffect(() => {
    const interval = setInterval(() => {
      checkTimeZoneChange();
    }, 15 * 60 * 1000); // 15분

    // 탭이 다시 활성화될 때도 체크
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // 탭이 활성화된 후 약간의 지연을 두고 체크
        setTimeout(checkTimeZoneChange, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [checkTimeZoneChange]);

  // 수동으로 시간대 체크 (필요시 사용)
  const forceCheck = useCallback(() => {
    return checkTimeZoneChange();
  }, [checkTimeZoneChange]);

  return {
    currentTimeZone,
    lastUpdateTime,
    forceCheck,
    isTimeZoneChangeDetected: useCallback(() => {
      return Date.now() - lastUpdateTime < 60000; // 1분 내 변경 감지
    }, [lastUpdateTime])
  };
}