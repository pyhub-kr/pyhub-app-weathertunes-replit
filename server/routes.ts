import type { Express } from "express";
import { createServer, type Server } from "http";
import { weatherDataSchema, locationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Weather API proxy using Open-Meteo (free, no API key required)
  app.get("/api/weather", async (req, res) => {
    try {
      const query = z.object({
        lat: z.string(),
        lon: z.string(),
      }).parse(req.query);

      // Open-Meteo API call - no API key required
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${query.lat}&longitude=${query.lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,visibility,wind_speed_10m&timezone=auto`
      );

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform Open-Meteo data to our schema
      const current = data.current_weather;
      const hourly = data.hourly;
      
      const weatherData = {
        temperature: Math.round(current.temperature),
        description: getWeatherDescription(current.weathercode),
        condition: mapWeatherCodeToCondition(current.weathercode),
        humidity: hourly.relative_humidity_2m ? Math.round(hourly.relative_humidity_2m[0]) : 50,
        windSpeed: Math.round(current.windspeed), // Open-Meteo already in km/h
        visibility: hourly.visibility ? Math.round(hourly.visibility[0] / 1000) : 10, // Convert m to km
        city: "현재 위치", // Open-Meteo doesn't provide city names
        country: "KR",
        lastUpdated: new Date().toISOString(),
      };

      const validatedData = weatherDataSchema.parse(weatherData);
      res.json(validatedData);
    } catch (error) {
      console.error("Weather API error:", error);
      res.status(500).json({ 
        error: "날씨 정보를 가져올 수 없습니다. 잠시 후 다시 시도해주세요." 
      });
    }
  });

  // Geocoding API proxy
  app.get("/api/geocode", async (req, res) => {
    try {
      const query = z.object({
        lat: z.string(),
        lon: z.string(),
      }).parse(req.query);

      const apiKey = process.env.OPENWEATHER_API_KEY || process.env.VITE_OPENWEATHER_API_KEY || "demo_key";
      
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${query.lat}&lon=${query.lon}&limit=1&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Geocoding API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.length === 0) {
        throw new Error("Location not found");
      }

      const locationData = {
        latitude: parseFloat(query.lat),
        longitude: parseFloat(query.lon),
        city: data[0].local_names?.ko || data[0].name,
        country: data[0].country,
      };

      const validatedData = locationSchema.parse(locationData);
      res.json(validatedData);
    } catch (error) {
      console.error("Geocoding API error:", error);
      res.status(500).json({ 
        error: "위치 정보를 가져올 수 없습니다." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to map Open-Meteo weather codes to our simplified conditions
function mapWeatherCodeToCondition(weatherCode: number): string {
  // Open-Meteo weather codes: https://open-meteo.com/en/docs
  if (weatherCode === 0) return 'clear'; // Clear sky
  if (weatherCode >= 1 && weatherCode <= 3) return 'clouds'; // Mainly clear, partly cloudy, overcast
  if (weatherCode >= 45 && weatherCode <= 48) return 'fog'; // Fog
  if (weatherCode >= 51 && weatherCode <= 67) return 'rain'; // Drizzle and rain
  if (weatherCode >= 71 && weatherCode <= 77) return 'snow'; // Snow
  if (weatherCode >= 80 && weatherCode <= 99) return 'rain'; // Rain showers and thunderstorms
  
  return 'clear'; // Default fallback
}

// Helper function to get weather description from Open-Meteo weather codes
function getWeatherDescription(weatherCode: number): string {
  const descriptions: Record<number, string> = {
    0: '맑음',
    1: '대체로 맑음',
    2: '부분 흐림',
    3: '흐림',
    45: '안개',
    48: '서리 안개',
    51: '가벼운 이슬비',
    53: '보통 이슬비',
    55: '강한 이슬비',
    56: '가벼운 얼음 이슬비',
    57: '강한 얼음 이슬비',
    61: '가벼운 비',
    63: '보통 비',
    65: '강한 비',
    66: '가벼운 얼음비',
    67: '강한 얼음비',
    71: '가벼운 눈',
    73: '보통 눈',
    75: '강한 눈',
    77: '진눈깨비',
    80: '가벼운 소나기',
    81: '보통 소나기',
    82: '강한 소나기',
    85: '가벼운 눈 소나기',
    86: '강한 눈 소나기',
    95: '뇌우',
    96: '우박을 동반한 뇌우',
    99: '강한 우박을 동반한 뇌우',
  };
  
  return descriptions[weatherCode] || '알 수 없음';
}
