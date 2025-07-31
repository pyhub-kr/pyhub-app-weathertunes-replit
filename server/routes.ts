import type { Express } from "express";
import { createServer, type Server } from "http";
import { weatherDataSchema, locationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Weather API proxy to avoid CORS issues
  app.get("/api/weather", async (req, res) => {
    try {
      const query = z.object({
        lat: z.string(),
        lon: z.string(),
      }).parse(req.query);

      const apiKey = process.env.OPENWEATHER_API_KEY || process.env.VITE_OPENWEATHER_API_KEY || "demo_key";
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform OpenWeatherMap data to our schema
      const weatherData = {
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        condition: mapWeatherCondition(data.weather[0].main.toLowerCase()),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        visibility: Math.round(data.visibility / 1000), // Convert m to km
        city: data.name,
        country: data.sys.country,
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

// Helper function to map OpenWeatherMap conditions to our simplified conditions
function mapWeatherCondition(condition: string): string {
  const conditionMap: Record<string, string> = {
    'clear': 'clear',
    'clouds': 'clouds',
    'rain': 'rain',
    'drizzle': 'rain',
    'thunderstorm': 'rain',
    'snow': 'snow',
    'mist': 'fog',
    'fog': 'fog',
    'haze': 'fog',
    'dust': 'fog',
    'sand': 'fog',
    'smoke': 'fog',
  };

  return conditionMap[condition] || 'clear';
}
