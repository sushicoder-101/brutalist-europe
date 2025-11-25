# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page web application showcasing 10 influential brutalist buildings across Europe. The app is built with vanilla HTML, CSS, and JavaScript, using Leaflet.js for interactive mapping functionality. The application is deployed via GitHub Pages and requires no build process.

## Running the Application

The application requires no build process or dependencies. Simply open `index.html` in a web browser to run the application locally. All external dependencies (Leaflet.js) are loaded via CDN.

For local development with a server:
```bash
python -m http.server 8000  # Python 3
npx serve .                  # Node.js
php -S localhost:8000        # PHP
```

## Architecture

### Core Files Structure
- `index.html` - Main HTML structure with five view containers (grid, map, timeline, essay, social-impact)
- `styles.css` - Brutalist-inspired CSS framework with responsive design and animations
- `script.js` - Main application logic, view management, and interactive features
- `data.js` - Building data array and utility functions
- `images/` - Directory containing building photographs
- `.nojekyll` - GitHub Pages configuration to bypass Jekyll processing
- `CNAME` - Custom domain configuration for GitHub Pages deployment

### Application State Management
The app uses simple global state variables:
- `currentView` - Tracks active view ('grid', 'map', 'timeline', 'essay', 'social-impact')
- `currentBuildings` - Filtered array of buildings based on search/filter
- `map` - Leaflet map instance (lazy-loaded on first map view)

### View System
Five main views are managed through a unified switching system:
- **Grid View**: Card-based layout showing building thumbnails with image loading states
- **Map View**: Interactive Leaflet map with building markers and popups
- **Timeline View**: Chronological display grouped by decade
- **Legacy View**: Long-form essay about brutalist architecture's history and philosophy
- **Social Impact View**: In-depth essay about the social consequences and legacy of brutalism

View switching is handled by `switchView(viewName)` which:
1. Updates navigation button states
2. Toggles CSS classes on view containers
3. Calls appropriate render functions
4. Handles special ID mapping (e.g., 'social-impact' → 'socialImpactView')

### Data Structure
Each building object in `brutalistBuildings` contains:
- Basic info: id, name, architect, year, city, country, countryCode
- Geographic: coordinates [lat, lng] array for map plotting
- Content: description (string), features (array of strings), significance (string)
- Media: image (relative path to images directory with fallback handling)

Example:
```javascript
{
  id: 1,
  name: "Unité d'Habitation",
  architect: "Le Corbusier",
  year: 1952,
  city: "Marseille",
  country: "France",
  countryCode: "FR",
  coordinates: [43.2618, 5.3944],
  description: "A revolutionary residential building...",
  features: ["Béton brut construction", "Pilotis", ...],
  significance: "Established the template for modernist housing...",
  image: "images/Unité d'Habitation .webp"
}
```

### Image Handling System
Robust image loading with error handling:
- Loading states with visual indicators ("Loading..." / "Loading image...")
- Automatic fallback to custom SVG placeholders via `createFallbackImage()`
- Lazy loading with `loading="lazy"` attribute
- Smooth opacity transitions (0 to 1) on successful load
- Error recovery through `handleImageError(img, buildingName, isModal)` function
- Custom SVG fallbacks feature building name and geometric shapes

### Search and Filter
Real-time filtering system:
- Text search across name, architect, city, description fields
- Country dropdown filter with countryCode matching
- Debounced search input (300ms delay) for performance
- Results update all views simultaneously via `renderCurrentView()`
- Filter functions: `filterByCountry()` and `filterBySearch()`

### Modal System
Detailed building information displayed in overlay modal:
- Dynamic content generation via `createModalContent()`
- Image loading optimization with loading states
- Keyboard navigation (Escape to close)
- Click-outside-to-close functionality
- Body scroll lock when modal is active
- Displays: full-size image, description, features list, historical significance

### Interactive Features
- **Keyboard shortcuts**:
  - 1/2/3/4/5 for view switching (grid/map/timeline/essay/social-impact)
  - / for search focus (with preventDefault to avoid conflicts)
- **Touch gestures**: Swipe left/right for view navigation on mobile (100px threshold)
- **Smooth animations**: Fade-in effects with Intersection Observer
- **Responsive design**: Breakpoints at 768px (tablet) and 480px (mobile)
- **Scroll animations**: Elements fade in as they enter viewport using IntersectionObserver

## Key Functions

### View Rendering
- `renderGridView()` - Creates building cards with image loading states and click handlers
- `renderMapView()` - Manages Leaflet map instance, markers, and popups
- `renderTimelineView()` - Groups buildings by decade and renders chronologically
- `renderLegacyView()` - Renders essay view with scroll animations
- `renderSocialImpactView()` - Renders social impact essay with scroll animations
- `renderCurrentView()` - Dispatches to appropriate render function based on currentView

### Component Creation
- `createBuildingCard(building)` - Generates DOM element for grid view card
- `createTimelineBuilding(building)` - Generates DOM element for timeline entry
- `createModalContent(building)` - Generates HTML string for modal content
- `createFallbackImage(buildingName)` - Generates data URI SVG placeholder

### View Management
- `switchView(viewName)` - Handles view transitions and state updates
- `initializeApp()` - Sets up initial view and event listeners
- `setupEventListeners()` - Attaches navigation, search, and filter handlers
- `setupModalEvents()` - Attaches modal interaction handlers

### Data Processing
- `filterByCountry(buildings, country)` - Filter buildings by countryCode
- `filterBySearch(buildings, searchTerm)` - Case-insensitive text search across fields
- `groupByDecade(buildings)` - Organize buildings into decade-keyed object
- `sortByYear(buildings)` - Sort buildings chronologically (returns new array)

### Image Management
- `handleImageError(img, buildingName, isModal)` - Fallback system for failed images
- Sets fallback SVG as image source
- Hides appropriate loading indicator

### Modal Functions
- `openModal(building)` - Shows modal with building details, locks body scroll
- `closeModal()` - Hides modal and restores body scroll
- `openModalFromMap(buildingId)` - Global function for map popup buttons

### Animation & Performance
- `applyScrollAnimations()` - Sets up IntersectionObserver for fade-in effects
- `refreshAnimations()` - Re-applies animations after content changes (100ms delay)
- `debounce(func, wait)` - Returns debounced function for performance optimization
- `debouncedSearch` - Debounced version of handleSearch (300ms)

### Interaction Handlers
- `handleSearch()` - Applies search and country filters, re-renders view
- `handleFilter()` - Applies country and search filters, re-renders view
- `handleSwipe()` - Processes touch gestures for view navigation (100px threshold)
- Keyboard event handler - Processes keyboard shortcuts (1-5, /, Escape)
- Touch event handlers - Track touchstart/touchend for swipe gestures

### Map Functions
- `initializeMap()` - Creates Leaflet map instance with OpenStreetMap tiles
- Map marker management - Clears old markers, adds new ones for currentBuildings

## Development Conventions

### Code Style
- Vanilla JavaScript (ES6+) - no frameworks or build tools
- Functional programming approach with pure functions where possible
- Clear separation between data, presentation, and interaction logic
- Global functions only when needed (e.g., `openModalFromMap` for inline onclick)

### State Management
- Simple global state variables (currentView, currentBuildings, map)
- State updates trigger view re-renders
- Map instance persists once initialized (lazy loading pattern)

### Event Handling
- Event delegation where appropriate
- Debouncing for performance-critical handlers (search)
- Keyboard shortcuts don't trigger when modal is active
- Touch gestures respect modal state

### CSS Conventions
- Brutalist-inspired design: dark colors, bold typography, geometric shapes
- BEM-like naming without strict adherence
- Mobile-first responsive design with progressive enhancement
- CSS animations and transitions for smooth UX

### Adding New Features

#### Adding a New View
1. Add view container to `index.html` with appropriate ID
2. Add navigation button with `data-view` attribute
3. Add case to `switchView()` function
4. Create render function (e.g., `renderNewView()`)
5. Update keyboard shortcuts and touch gesture arrays if needed
6. Add CSS styles for the new view

#### Adding New Buildings
1. Add building object to `brutalistBuildings` array in `data.js`
2. Include all required fields (see Data Structure section)
3. Add building image to `images/` directory
4. Update country filter dropdown in `index.html` if new country

#### Modifying Styles
- Edit `styles.css` directly (no build process)
- Test responsive breakpoints at 768px and 480px
- Maintain brutalist aesthetic: concrete grays, bold fonts, geometric layouts

## Deployment

### GitHub Pages
- Deployed to: https://sushicoder-101.github.io/brutalist-europe/
- `.nojekyll` file prevents Jekyll processing
- `CNAME` file configures custom domain (if applicable)
- No build step required - direct deployment of source files

### Testing Locally
- Use local web server to avoid CORS issues with Leaflet
- Test all five views and transitions
- Verify search/filter functionality
- Check responsive behavior at different screen sizes
- Test keyboard shortcuts and touch gestures

## Performance Considerations
- Lazy loading for images (`loading="lazy"`)
- Debounced search input (300ms)
- Lazy initialization of Leaflet map (only on first map view)
- IntersectionObserver for scroll animations (efficient viewport detection)
- CSS transitions handled by GPU (transform, opacity)

The application follows a functional programming approach with clear separation of concerns between data, presentation, and interaction logic. No external dependencies beyond Leaflet.js ensures fast load times and simple maintenance.