import { useQuery } from "@tanstack/react-query";
import type { WeatherData, Location } from "@shared/schema";

export function useWeather(location: Location | null | undefined) {
  const { data: weather, isLoading, error } = useQuery<WeatherData>({
    queryKey: [`/api/weather?lat=${location?.latitude}&lon=${location?.longitude}`],
    enabled: !!(location?.latitude && location?.longitude),
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  return {
    weather,
    isLoading,
    error: (error as Error)?.message,
  };
}
