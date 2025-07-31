import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Location } from "@shared/schema";

// 대전 기본 좌표 (City Hall)
const DEFAULT_DAEJEON_COORDINATES = {
  lat: 36.3504,
  lon: 127.3845
};

export function useGeolocation() {
  const [coordinates, setCoordinates] = useState<{lat: number, lon: number} | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isUsingDefault, setIsUsingDefault] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshLocation = () => {
    setIsRefreshing(true);
    setRefreshTrigger(prev => prev + 1);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported, using default Daejeon location");
      setCoordinates(DEFAULT_DAEJEON_COORDINATES);
      setIsUsingDefault(true);
      setLocationError(null); // Clear error since we're using default location
      return;
    }

    const locationTimeout = setTimeout(() => {
      console.log("Location request timeout, using default Daejeon location");
      setCoordinates(DEFAULT_DAEJEON_COORDINATES);
      setIsUsingDefault(true);
      setLocationError(null); // Clear error since we're using default location
    }, 8000); // 8초 후 타임아웃

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(locationTimeout);
        console.log("Location found:", position.coords.latitude, position.coords.longitude);
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLocationError(null);
        setIsUsingDefault(false);
        setIsRefreshing(false);
      },
      (error) => {
        clearTimeout(locationTimeout);
        console.log("Location error, using default Daejeon location:", error);
        let errorMessage = "";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "위치 접근이 거부되어 대전으로 설정되었습니다.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "위치 정보를 사용할 수 없어 대전으로 설정되었습니다.";
            break;
          case error.TIMEOUT:
            errorMessage = "위치 정보 요청 시간이 초과되어 대전으로 설정되었습니다.";
            break;
          default:
            errorMessage = "위치 정보를 가져올 수 없어 대전으로 설정되었습니다.";
            break;
        }
        setCoordinates(DEFAULT_DAEJEON_COORDINATES);
        setIsUsingDefault(true);
        setLocationError(null); // Clear error since we're using default location
        setIsRefreshing(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 300000, // 5 minutes
      }
    );

    return () => clearTimeout(locationTimeout);
  }, [refreshTrigger]);

  const { data: location, isLoading, error } = useQuery<Location>({
    queryKey: [`/api/geocode?lat=${coordinates?.lat}&lon=${coordinates?.lon}`],
    enabled: !!coordinates,
  });

  return {
    location,
    isLoading: isLoading && !!coordinates,
    error: locationError || (error as Error)?.message,
    isUsingDefault,
    refreshLocation,
    isRefreshing,
  };
}
