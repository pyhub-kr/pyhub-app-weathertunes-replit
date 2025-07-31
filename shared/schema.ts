import { z } from "zod";

export const weatherDataSchema = z.object({
  temperature: z.number(),
  description: z.string(),
  condition: z.string(), // clear, rain, snow, clouds, fog
  humidity: z.number(),
  windSpeed: z.number(),
  visibility: z.number(),
  city: z.string(),
  country: z.string(),
  lastUpdated: z.string(),
});

export const locationSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export const musicTrackSchema = z.object({
  title: z.string(),
  artist: z.string(),
  mood: z.string(),
  youtubeId: z.string(),
  duration: z.number().optional(),
});

export type WeatherData = z.infer<typeof weatherDataSchema>;
export type Location = z.infer<typeof locationSchema>;
export type MusicTrack = z.infer<typeof musicTrackSchema>;
