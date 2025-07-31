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

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported, using default Daejeon location");
      setCoordinates(DEFAULT_DAEJEON_COORDINATES);
      setIsUsingDefault(true);
      setLocationError("위치 서비스를 지원하지 않아 대전으로 설정되었습니다.");
      return;
    }

    const locationTimeout = setTimeout(() => {
      console.log("Location request timeout, using default Daejeon location");
      setCoordinates(DEFAULT_DAEJEON_COORDINATES);
      setIsUsingDefault(true);
      setLocationError("위치 정보 요청 시간이 초과되어 대전으로 설정되었습니다.");
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
        setLocationError(errorMessage);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 300000, // 5 minutes
      }
    );

    return () => clearTimeout(locationTimeout);
  }, []);

  const { data: location, isLoading, error } = useQuery<Location>({
    queryKey: ['/api/geocode', coordinates?.lat, coordinates?.lon],
    enabled: !!coordinates,
  });

  return {
    location,
    isLoading: isLoading && !!coordinates,
    error: locationError || (error as Error)?.message,
    isUsingDefault,
  };
}
