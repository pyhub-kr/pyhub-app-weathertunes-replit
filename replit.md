# Weather Music App

## Overview

This is a full-stack weather-based music application built with React, Express, TypeScript, and PostgreSQL. The app detects the user's location, fetches current weather data, and plays music that matches the weather conditions using YouTube videos as the audio source. Features include random shuffle playback, Media Session API for background control, expanded music database (750+ tracks), and enhanced visual backgrounds.

## User Preferences

Preferred communication style: Simple, everyday language.
UI Design Preference: Ultra-minimal interface with maximum immersion, no unnecessary debug panels or information displays.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Pattern**: RESTful API design
- **Error Handling**: Centralized error middleware
- **Logging**: Custom request/response logging middleware

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless connection

## Key Components

### Weather System
- **Location Detection**: Browser Geolocation API for user positioning
- **Weather API**: OpenWeatherMap API integration via backend proxy
- **Data Flow**: Location → Weather API → Music Selection
- **Caching**: 5-minute refresh interval for weather data

### Music System
- **Audio Source**: YouTube videos embedded as hidden players
- **Music Mapping**: Weather conditions mapped to curated playlists (750+ tracks)
- **Random Playback**: Shuffle mode with random track selection for next/previous
- **Player Controls**: Play/pause, next/previous, volume, seek controls
- **Background Control**: Media Session API for lock screen and browser controls
- **Auto-Play**: Automatic next track playback after user interaction
- **Background Management**: Dynamic background images based on weather and time

### User Interface
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme System**: CSS custom properties for light/dark mode support
- **Animations**: CSS transitions and animations for smooth UX
- **Components**: Modular component system with TypeScript interfaces

## Data Flow

1. **Location Acquisition**: Browser requests user location permission
2. **Weather Fetching**: Coordinates sent to backend weather proxy
3. **Music Selection**: Weather condition triggers playlist selection
4. **YouTube Integration**: Selected track loaded into hidden YouTube player
5. **UI Updates**: Weather card and music player update with new data
6. **Background Changes**: Dynamic background images match weather conditions

## External Dependencies

### APIs and Services
- **OpenWeatherMap API**: Weather data and geocoding services
- **YouTube IFrame API**: Music playback functionality
- **Neon Database**: PostgreSQL hosting service

### Frontend Libraries
- **TanStack Query**: Server state management and caching
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form validation and management

### Backend Libraries
- **Drizzle ORM**: Type-safe database interactions
- **Express**: Web framework and middleware
- **Zod**: Runtime type validation and schema definition

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Backend**: tsx for TypeScript execution with hot reload
- **Database**: Local PostgreSQL or Neon development instance

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend from public directory
- **Environment**: Production mode with optimized bundles

### Configuration Management
- **Environment Variables**: Database URL, API keys via process.env
- **Build Scripts**: Separate dev, build, and start commands
- **Type Checking**: TypeScript compilation verification

### Key Architectural Decisions

**Monorepo Structure**: Single repository with shared schemas between client and server reduces code duplication and ensures type consistency.

**Proxy Pattern for APIs**: Backend proxy for external APIs prevents CORS issues and allows for request/response transformation.

**Hidden YouTube Player**: Using YouTube's IFrame API with hidden video player provides free music streaming without video UI.

**Weather-Driven Experience**: Core feature where weather conditions directly influence music selection and visual presentation.

**Type-Safe Schema Sharing**: Zod schemas in shared directory ensure consistent data validation across frontend and backend.

**Random Shuffle Playback**: Playlists start from random tracks and navigate randomly to prevent repetitive listening patterns.

**Media Session API Integration**: Enables background playback control through browser notifications, lock screen controls, and keyboard media keys.

**Expanded Content Database**: 750+ music tracks categorized by weather conditions and time of day, with enhanced background image keywords including night cityscapes and campfire scenes.

## Recent Changes (2025-01-02)

- **Fixed Critical Playlist Generation Bug**: Resolved timeWeight undefined error that was preventing music from loading
- **Implemented Comprehensive DEBUG Mode**: Added error catching with detailed modal display showing stack traces and error context  
- **Enhanced Weather Condition Matching**: Improved support for "clouds" weather condition alongside "cloudy" and "overcast"
- **Added Complete Time Zone Support**: Added all time periods (dawn, sunrise, morning, forenoon, noon, afternoon, evening, sunset, night) with proper weights
- **Improved Error Handling**: Enhanced error boundary with separate production/development mode handling
- **Added Debug Logging**: Implemented detailed console logging for playlist generation and weather matching debugging
- **Fixed Music Player Visibility**: Resolved issue where music player wouldn't appear when playlist was empty but tracks were available

## Recent Changes (2025-08-01)

- **Added PostgreSQL Database Support**: Integrated Neon PostgreSQL database with Drizzle ORM for user management
- **Updated Database Schema**: Added user table with proper Drizzle schema definitions and relations
- **Migrated Storage Layer**: Replaced MemStorage with DatabaseStorage to use PostgreSQL for user data persistence
- **Fixed Critical MIME Type Issues**: Implemented comprehensive solution for CSS/JS MIME type errors during deployment
  - Added direct static file route handling with proper Content-Type headers
  - Implemented fallback asset serving with multiple path resolution
  - Added X-Content-Type-Options security header to prevent MIME sniffing
  - Resolved "text/html is not a valid JavaScript MIME type" deployment errors
- **Enhanced Asset Serving**: Implemented robust cache control headers and MIME type detection for all asset types
- **Database Migration Support**: Set up `npm run db:push` command for schema updates
- **Production Deployment Fix**: Ensured proper static file serving in both development and production environments