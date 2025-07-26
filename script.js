// App state
let currentView = 'grid';
let currentBuildings = [...brutalistBuildings];
let map = null;

// DOM elements
const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');
const buildingsGrid = document.getElementById('buildingsGrid');
const timelineContainer = document.getElementById('timelineContainer');
const searchInput = document.querySelector('.search-input');
const filterSelect = document.querySelector('.filter-select');
const modal = document.getElementById('buildingModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderGridView();
    setupEventListeners();
    setupModalEvents();
}

// Event listeners
function setupEventListeners() {
    // Navigation
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = e.target.dataset.view;
            switchView(view);
        });
    });

    // Search and filter
    searchInput.addEventListener('input', handleSearch);
    filterSelect.addEventListener('change', handleFilter);
}

function setupModalEvents() {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// View switching
function switchView(viewName) {
    currentView = viewName;
    
    // Update navigation
    navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    
    // Update views
    views.forEach(view => {
        view.classList.toggle('active', view.id === viewName + 'View');
    });
    
    // Render appropriate view
    switch(viewName) {
        case 'grid':
            renderGridView();
            break;
        case 'map':
            renderMapView();
            break;
        case 'timeline':
            renderTimelineView();
            break;
        case 'essay':
            renderLegacyView();
            break;
        case 'social-impact':
            renderSocialImpactView();
            break;
    }
}

// Grid view rendering
function renderGridView() {
    buildingsGrid.innerHTML = '';
    
    currentBuildings.forEach(building => {
        const card = createBuildingCard(building);
        buildingsGrid.appendChild(card);
    });
}

function createBuildingCard(building) {
    const card = document.createElement('div');
    card.className = 'building-card fade-in';
    card.innerHTML = `
        <div class="building-year">${building.year}</div>
        <div class="image-container">
            <img src="${building.image}" alt="${building.name}" class="building-image" loading="lazy" onerror="handleImageError(this, '${building.name}')">
            <div class="image-loading">Loading...</div>
        </div>
        <div class="building-info">
            <h3 class="building-name">${building.name}</h3>
            <div class="building-meta">
                ${building.architect} • ${building.city}, ${building.country}
            </div>
            <p class="building-description">
                ${building.description.substring(0, 120)}...
            </p>
        </div>
    `;
    
    // Set up image loading
    const img = card.querySelector('.building-image');
    const loadingDiv = card.querySelector('.image-loading');
    
    img.addEventListener('load', () => {
        loadingDiv.style.display = 'none';
        img.style.opacity = '1';
    });
    
    card.addEventListener('click', () => openModal(building));
    return card;
}

// Map view rendering
function renderMapView() {
    if (!map) {
        initializeMap();
    }
    
    // Clear existing markers
    map.eachLayer(layer => {
        if (layer.options && layer.options.isMarker) {
            map.removeLayer(layer);
        }
    });
    
    // Add markers for current buildings
    currentBuildings.forEach(building => {
        const marker = L.marker(building.coordinates, { isMarker: true })
            .addTo(map)
            .bindPopup(`
                <div class="popup-content">
                    <h4>${building.name}</h4>
                    <p><strong>${building.architect}</strong></p>
                    <p>${building.year} • ${building.city}</p>
                    <button onclick="openModalFromMap(${building.id})" class="popup-btn">View Details</button>
                </div>
            `);
    });
}

function initializeMap() {
    map = L.map('map').setView([51.5074, -0.1278], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
}

// Global function for map popup buttons
window.openModalFromMap = function(buildingId) {
    const building = brutalistBuildings.find(b => b.id === buildingId);
    if (building) {
        openModal(building);
    }
}

// Timeline view rendering
function renderTimelineView() {
    const groupedBuildings = groupByDecade(currentBuildings);
    const sortedDecades = Object.keys(groupedBuildings).sort((a, b) => a - b);
    
    timelineContainer.innerHTML = '';
    
    sortedDecades.forEach(decade => {
        const section = document.createElement('div');
        section.className = 'decade-section fade-in';
        
        const title = document.createElement('h2');
        title.className = 'decade-title';
        title.textContent = `${decade}s`;
        section.appendChild(title);
        
        const buildingsContainer = document.createElement('div');
        buildingsContainer.className = 'timeline-buildings';
        
        const sortedBuildings = groupedBuildings[decade].sort((a, b) => a.year - b.year);
        
        sortedBuildings.forEach(building => {
            const buildingDiv = createTimelineBuilding(building);
            buildingsContainer.appendChild(buildingDiv);
        });
        
        section.appendChild(buildingsContainer);
        timelineContainer.appendChild(section);
    });
}

function createTimelineBuilding(building) {
    const div = document.createElement('div');
    div.className = 'timeline-building';
    div.innerHTML = `
        <div class="timeline-year">${building.year}</div>
        <div class="timeline-info">
            <h3>${building.name}</h3>
            <div class="timeline-meta">
                ${building.architect} • ${building.city}, ${building.country}
            </div>
            <p>${building.description.substring(0, 150)}...</p>
        </div>
    `;
    
    div.addEventListener('click', () => openModal(building));
    return div;
}

// Search and filter functionality
function handleSearch() {
    const searchTerm = searchInput.value;
    const countryFilter = filterSelect.value;
    
    currentBuildings = filterBySearch(
        filterByCountry(brutalistBuildings, countryFilter),
        searchTerm
    );
    
    renderCurrentView();
}

function handleFilter() {
    const searchTerm = searchInput.value;
    const countryFilter = filterSelect.value;
    
    currentBuildings = filterByCountry(
        filterBySearch(brutalistBuildings, searchTerm),
        countryFilter
    );
    
    renderCurrentView();
}

function renderCurrentView() {
    switch(currentView) {
        case 'grid':
            renderGridView();
            break;
        case 'map':
            renderMapView();
            break;
        case 'timeline':
            renderTimelineView();
            break;
        case 'essay':
            renderLegacyView();
            break;
        case 'social-impact':
            renderSocialImpactView();
            break;
    }
}

// Legacy view rendering
function renderLegacyView() {
    // Legacy content is static HTML, no dynamic rendering needed
    // Apply fade-in animations to legacy sections
    refreshAnimations();
}

// Social Impact view rendering
function renderSocialImpactView() {
    // Social Impact content is static HTML, no dynamic rendering needed
    // Apply fade-in animations to social impact sections
    refreshAnimations();
}

// Image error handling
function handleImageError(img, buildingName, isModal = false) {
    const fallbackSvg = createFallbackImage(buildingName);
    img.src = fallbackSvg;
    img.alt = `${buildingName} - Image unavailable`;
    
    if (isModal) {
        const loadingDiv = img.parentElement.querySelector('.modal-image-loading');
        if (loadingDiv) loadingDiv.style.display = 'none';
    } else {
        const loadingDiv = img.parentElement.querySelector('.image-loading');
        if (loadingDiv) loadingDiv.style.display = 'none';
    }
}

function createFallbackImage(buildingName) {
    const svg = `data:image/svg+xml;charset=UTF-8,
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
            <rect width="800" height="600" fill="%23333333"/>
            <rect x="100" y="150" width="600" height="300" fill="%23555555" stroke="%23777777" stroke-width="4"/>
            <rect x="150" y="200" width="100" height="200" fill="%23444444"/>
            <rect x="300" y="180" width="200" height="220" fill="%23444444"/>
            <rect x="550" y="190" width="100" height="210" fill="%23444444"/>
            <text x="400" y="500" text-anchor="middle" fill="%23CCCCCC" font-family="Arial Black" font-size="24" font-weight="bold">${buildingName.toUpperCase()}</text>
            <text x="400" y="530" text-anchor="middle" fill="%23999999" font-family="Arial" font-size="16">IMAGE UNAVAILABLE</text>
        </svg>`;
    return svg.replace(/\s+/g, ' ').trim();
}

// Modal functionality
function openModal(building) {
    modalBody.innerHTML = createModalContent(building);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set up modal image loading
    const modalImg = modalBody.querySelector('.modal-image');
    const modalLoadingDiv = modalBody.querySelector('.modal-image-loading');
    
    if (modalImg && modalLoadingDiv) {
        modalImg.addEventListener('load', () => {
            modalLoadingDiv.style.display = 'none';
            modalImg.style.opacity = '1';
        });
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function createModalContent(building) {
    return `
        <div class="modal-image-container">
            <img src="${building.image}" alt="${building.name}" class="modal-image" onerror="handleImageError(this, '${building.name}', true)">
            <div class="modal-image-loading">Loading image...</div>
        </div>
        <h2 class="modal-title">${building.name}</h2>
        <div class="modal-meta">
            <strong>${building.architect}</strong> • ${building.year} • ${building.city}, ${building.country}
        </div>
        
        <div class="modal-section">
            <h3>Description</h3>
            <p>${building.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Key Architectural Features</h3>
            <ul class="modal-features">
                ${building.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Historical Significance</h3>
            <p>${building.significance}</p>
        </div>
    `;
}

// Utility functions for smooth scrolling and performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search for better performance
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animations to elements as they come into view
function applyScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Re-apply animations when content changes
function refreshAnimations() {
    setTimeout(applyScrollAnimations, 100);
}

// Enhanced rendering with animations
const originalRenderGridView = renderGridView;
renderGridView = function() {
    originalRenderGridView();
    refreshAnimations();
};

const originalRenderTimelineView = renderTimelineView;
renderTimelineView = function() {
    originalRenderTimelineView();
    refreshAnimations();
};

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) return;
    
    switch(e.key) {
        case '1':
            switchView('grid');
            break;
        case '2':
            switchView('map');
            break;
        case '3':
            switchView('timeline');
            break;
        case '4':
            switchView('essay');
            break;
        case '5':
            switchView('social-impact');
            break;
        case '/':
            e.preventDefault();
            searchInput.focus();
            break;
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 100;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) < swipeThreshold) return;
    
    if (modal.classList.contains('active')) return;
    
    const views = ['grid', 'map', 'timeline', 'essay', 'social-impact'];
    const currentIndex = views.indexOf(currentView);
    
    if (diff > 0 && currentIndex < views.length - 1) {
        // Swipe left - next view
        switchView(views[currentIndex + 1]);
    } else if (diff < 0 && currentIndex > 0) {
        // Swipe right - previous view
        switchView(views[currentIndex - 1]);
    }
}