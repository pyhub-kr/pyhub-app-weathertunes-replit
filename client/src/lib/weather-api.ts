import type { WeatherData, Location } from "@shared/schema";

export async function fetchWeatherData(location: Location): Promise<WeatherData> {
  const response = await fetch(`/api/weather?lat=${location.latitude}&lon=${location.longitude}`);
  
  if (!response.ok) {
    throw new Error("날씨 정보를 가져올 수 없습니다.");
  }
  
  return response.json();
}

export async function fetchLocationData(lat: number, lon: number): Promise<Location> {
  const response = await fetch(`/api/geocode?lat=${lat}&lon=${lon}`);
  
  if (!response.ok) {
    throw new Error("위치 정보를 가져올 수 없습니다.");
  }
  
  return response.json();
}
