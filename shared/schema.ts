import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Database schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

// Music application schemas (existing)
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
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  youtubeId: z.string(),
  tags: z.object({
    weather: z.array(z.string()),      // ['clear', 'rain', 'cloudy', 'snow', 'fog']
    mood: z.array(z.string()),         // ['energetic', 'calm', 'romantic', 'dreamy', 'powerful']
    genre: z.array(z.string()),        // ['kpop', 'ballad', 'dance', 'rnb', 'hiphop']
    time: z.array(z.string()),         // ['morning', 'afternoon', 'evening', 'night']
    energy: z.number().min(1).max(10), // 1-10 (차분함-활기참)
    popularity: z.number().min(1).max(10), // 1-10 (인지도)
  }),
  // 레거시 지원을 위한 옵셔널 필드
  mood: z.string().optional(),
  duration: z.number().optional(),
});

export type WeatherData = z.infer<typeof weatherDataSchema>;
export type Location = z.infer<typeof locationSchema>;
export type MusicTrack = z.infer<typeof musicTrackSchema>;
