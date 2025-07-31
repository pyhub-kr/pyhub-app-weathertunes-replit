import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Location } from "@shared/schema";

export function useGeolocation() {
  const [coordinates, setCoordinates] = useState<{lat: number, lon: number} | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("이 브라우저는 위치 서비스를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("위치 접근이 거부되었습니다. 브라우저 설정에서 위치 권한을 허용해주세요.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("위치 정보를 사용할 수 없습니다.");
            break;
          case error.TIMEOUT:
            setLocationError("위치 정보 요청 시간이 초과되었습니다.");
            break;
          default:
            setLocationError("위치 정보를 가져오는 중 알 수 없는 오류가 발생했습니다.");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  }, []);

  const { data: location, isLoading, error } = useQuery<Location>({
    queryKey: ['/api/geocode', coordinates?.lat, coordinates?.lon],
    enabled: !!coordinates,
  });

  return {
    location,
    isLoading: isLoading && !!coordinates,
    error: locationError || (error as Error)?.message,
  };
}
