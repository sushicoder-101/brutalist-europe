# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page web application showcasing 10 influential brutalist buildings across Europe. The app is built with vanilla HTML, CSS, and JavaScript, using Leaflet.js for interactive mapping functionality.

## Running the Application

The application requires no build process or dependencies. Simply open `index.html` in a web browser to run the application locally. All external dependencies (Leaflet.js) are loaded via CDN.

## Architecture

### Core Files Structure
- `index.html` - Main HTML structure with three view containers (grid, map, timeline)
- `styles.css` - Brutalist-inspired CSS framework with responsive design
- `script.js` - Main application logic and view management
- `data.js` - Building data array and utility functions

### Application State Management
The app uses simple global state variables:
- `currentView` - Tracks active view ('grid', 'map', 'timeline')
- `currentBuildings` - Filtered array of buildings based on search/filter
- `map` - Leaflet map instance (lazy-loaded)

### View System
Three main views are managed through a unified switching system:
- **Grid View**: Card-based layout showing building thumbnails
- **Map View**: Interactive Leaflet map with building markers
- **Timeline View**: Chronological display grouped by decade

View switching is handled by `switchView()` which updates navigation state, toggles CSS classes, and calls appropriate render functions.

### Data Structure
Each building object in `brutalistBuildings` contains:
- Basic info: id, name, architect, year, city, country, countryCode
- Geographic: coordinates array for map plotting
- Content: description, features array, significance
- Media: image URL with fallback handling

### Image Handling System
Robust image loading with error handling:
- Loading states with visual indicators
- Automatic fallback to custom SVG placeholders
- Lazy loading and smooth opacity transitions
- Error recovery through `handleImageError()` function

### Search and Filter
Real-time filtering system:
- Text search across name, architect, city, description
- Country dropdown filter
- Debounced search input for performance
- Results update all views simultaneously

### Modal System
Detailed building information displayed in overlay modal:
- Dynamic content generation
- Image loading optimization
- Keyboard navigation (Escape to close)
- Click-outside-to-close functionality

### Interactive Features
- Keyboard shortcuts: 1/2/3 for view switching, / for search focus
- Touch gestures: swipe left/right for view navigation on mobile
- Smooth animations and transitions throughout
- Responsive design for mobile and tablet

## Key Functions

### View Rendering
- `renderGridView()` - Creates building cards with image loading
- `renderMapView()` - Manages Leaflet map and markers
- `renderTimelineView()` - Groups buildings by decade

### Data Processing
- `filterByCountry()` - Filter buildings by country code
- `filterBySearch()` - Text-based search filtering
- `groupByDecade()` - Organize buildings chronologically

### Image Management
- `handleImageError()` - Fallback system for failed images
- `createFallbackImage()` - Generates brutalist-style SVG placeholders

The application follows a functional programming approach with clear separation of concerns between data, presentation, and interaction logic.