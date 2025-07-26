# Brutalist Europe

> An interactive showcase of 10 influential brutalist buildings across Europe

## 🏢 About

Brutalist Europe is a single-page web application that celebrates the bold architectural movement that shaped post-war European cities. Through interactive maps, timeline visualizations, and detailed building profiles, explore the concrete monuments that embodied utopian social ideals and pushed the boundaries of architectural expression.

## 🌐 Live Demo

[View Live Site](https://sushicoder-101.github.io/brutalist-europe/)

## ✨ Features

### 🎯 Multiple View Modes
- **Grid View**: Browse buildings in a card-based layout with stunning photography
- **Map View**: Explore building locations across Europe with interactive markers
- **Timeline View**: Journey through decades of brutalist architecture chronologically
- **Essay View**: Read about the history, philosophy, and legacy of brutalism

### 🔍 Interactive Features
- **Real-time Search**: Filter buildings by name, architect, city, or description
- **Country Filtering**: Focus on specific countries using the dropdown filter
- **Detailed Modals**: Click any building for comprehensive information including:
  - Architectural features
  - Historical significance
  - High-quality imagery with fallback handling

### 📱 Modern UX
- **Keyboard Navigation**: Use keys 1-4 to switch views, "/" to focus search
- **Touch Gestures**: Swipe left/right on mobile to navigate between views
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and transitions throughout

### 🎨 Brutalist-Inspired Design
- **Raw Concrete Aesthetic**: Dark color palette with concrete-like textures
- **Bold Typography**: Heavy, uppercase fonts reflecting brutalist principles
- **Geometric Layouts**: Sharp edges and angular components
- **Industrial Elements**: Exposed borders and utilitarian styling

## 🏛️ Featured Buildings

The showcase includes iconic brutalist structures from across Europe:

- **Barbican Centre** (London, UK) - Denys Lasdun, 1982
- **Trellick Tower** (London, UK) - Ernő Goldfinger, 1972
- **National Theatre** (London, UK) - Denys Lasdun, 1976
- **University of East Anglia Ziggurats** (Norwich, UK) - Denys Lasdun, 1968
- **Unité d'Habitation** (Marseille, France) - Le Corbusier, 1952
- **And 5 more architectural masterpieces...**

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Semantic markup with responsive meta tags
- **CSS3**: Modern styling with flexbox, grid, and custom properties
- **Vanilla JavaScript**: No frameworks - pure, performant code
- **Leaflet.js**: Interactive mapping functionality

### Architecture
- **Single Page Application**: Client-side routing and view management
- **Component-Based**: Modular functions for rendering different views
- **State Management**: Simple global state with reactive updates
- **Performance Optimized**: Lazy loading, debounced search, intersection observers

### Design Patterns
- **Progressive Enhancement**: Works without JavaScript for basic content
- **Responsive First**: Mobile-optimized with desktop enhancements
- **Accessibility**: Keyboard navigation and semantic HTML
- **Error Handling**: Graceful fallbacks for failed image loads

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mattdaily/brutalist-europe.git
   cd brutalist-europe
   ```

2. **Serve locally**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### No Build Process Required
This project uses vanilla web technologies with no build step, making it easy to deploy and modify.

## 📁 Project Structure

```
brutalist-europe/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling system
├── script.js           # Application logic and interactions
├── data.js             # Building data and utility functions
├── .nojekyll           # GitHub Pages configuration
└── README.md           # This file
```

## 🎨 Customization

### Adding New Buildings
1. Add building data to the `brutalistBuildings` array in `data.js`
2. Include required fields: name, architect, year, city, country, coordinates, etc.
3. The app will automatically include it in all views

### Styling Modifications
- Edit `styles.css` to modify the brutalist theme
- CSS custom properties make color scheme changes easy
- Responsive breakpoints are clearly documented

### Functionality Extensions
- Add new view types by extending the `switchView()` function
- Implement additional filters in the search system
- Enhance the modal system with new content sections

## 🌟 Key Features Deep Dive

### Image Handling System
- **Smart Loading**: Lazy loading with opacity transitions
- **Error Recovery**: Custom SVG fallbacks with building-specific branding
- **Performance**: Optimized loading states and smooth transitions

### Search & Filter System
- **Debounced Input**: 300ms delay prevents excessive filtering
- **Multi-field Search**: Searches across names, architects, cities, and descriptions
- **Real-time Updates**: All views update simultaneously when filters change

### Responsive Design
- **Mobile-First**: Optimized for touch interfaces
- **Breakpoints**: 768px and 480px breakpoints for tablet and mobile
- **Typography**: Clamp functions ensure readable text at all sizes

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Site deploys automatically to `https://username.github.io/repository-name`

### Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **Surge.sh**: Use `surge` command-line tool

## 🤝 Contributing

Contributions are welcome! Here are ways you can help:

1. **Add Buildings**: Research and add more brutalist structures
2. **Improve Content**: Enhance building descriptions and historical context
3. **Bug Fixes**: Report and fix issues
4. **Features**: Suggest and implement new functionality
5. **Documentation**: Improve this README or add code comments

### Development Guidelines
- Maintain the brutalist design aesthetic
- Ensure responsive compatibility
- Test across different browsers
- Follow existing code patterns
- No external dependencies beyond Leaflet.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Le Corbusier** and the brutalist architects for their visionary work
- **Leaflet.js** team for the excellent mapping library
- **OpenStreetMap** contributors for map data
- **Brutalist architecture photographers** whose work inspires this showcase

## 📞 Contact

**Matt Daily**
- GitHub: [@mattdaily](https://github.com/mattdaily)
- Project Link: [https://github.com/mattdaily/brutalist-europe](https://github.com/mattdaily/brutalist-europe)

---

**Built with ❤️ and concrete** 🏗️