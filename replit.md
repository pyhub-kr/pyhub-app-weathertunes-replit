# Weather Music App

## Overview

This is a full-stack weather-based music application built with React, Express, TypeScript, and PostgreSQL. The app detects the user's location, fetches current weather data, and plays music that matches the weather conditions using YouTube videos as the audio source.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- **Music Mapping**: Weather conditions mapped to curated playlists
- **Player Controls**: Play/pause, next/previous, volume, seek controls
- **Background Management**: Dynamic background images based on weather

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