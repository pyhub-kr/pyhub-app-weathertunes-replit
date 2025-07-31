import type { Express } from "express";
import { createServer, type Server } from "http";
import { weatherDataSchema, locationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Unsplash images endpoint
  app.get('/api/unsplash/:query', async (req, res) => {
    try {
      const { query } = req.params;
      const { page = 1, per_page = 20 } = req.query;
      
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${per_page}&orientation=landscape`,
        {
          headers: {
            'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Unsplash API error:', error);
      res.status(500).json({ error: 'Failed to fetch images from Unsplash' });
    }
  });

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

  // Simple geocoding - return basic location info without external API
  app.get("/api/geocode", async (req, res) => {
    try {
      const query = z.object({
        lat: z.string(),
        lon: z.string(),
      }).parse(req.query);

      const lat = parseFloat(query.lat);
      const lon = parseFloat(query.lon);

      // Simple location detection based on coordinates
      let city = "현재 위치";
      let country = "KR";

      // Basic Korean region detection
      if (lat >= 37.4 && lat <= 37.7 && lon >= 126.8 && lon <= 127.2) {
        city = "서울";
      } else if (lat >= 35.0 && lat <= 35.3 && lon >= 128.9 && lon <= 129.3) {
        city = "부산";
      } else if (lat >= 36.2 && lat <= 36.5 && lon >= 127.3 && lon <= 127.5) {
        city = "대전";
      } else if (lat >= 35.8 && lat <= 36.0 && lon >= 127.0 && lon <= 127.2) {
        city = "대구";
      } else if (lat >= 37.2 && lat <= 37.4 && lon >= 126.6 && lon <= 127.0) {
        city = "인천";
      } else if (lat >= 35.1 && lat <= 35.3 && lon >= 126.8 && lon <= 127.2) {
        city = "광주";
      } else if (lat >= 36.5 && lat <= 36.7 && lon >= 127.3 && lon <= 127.5) {
        city = "세종";
      }

      const locationData = {
        latitude: lat,
        longitude: lon,
        city: city,
        country: country,
      };

      const validatedData = locationSchema.parse(locationData);
      res.json(validatedData);
    } catch (error) {
      console.error("Geocoding error:", error);
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
