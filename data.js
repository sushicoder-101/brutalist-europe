const brutalistBuildings = [
    {
        id: 1,
        name: "Unité d'Habitation",
        architect: "Le Corbusier",
        year: 1952,
        city: "Marseille",
        country: "France",
        countryCode: "FR",
        coordinates: [43.2618, 5.3944],
        description: "A revolutionary residential building that pioneered the concept of vertical living. This massive concrete structure houses 337 apartments and includes shops, services, and recreational facilities.",
        features: [
            "Béton brut (raw concrete) construction",
            "Pilotis (supporting columns)",
            "Roof garden with sculptural elements",
            "Internal shopping street"
        ],
        significance: "Established the template for modernist housing projects worldwide and introduced the concept of self-contained vertical communities.",
        image: "images/Unité d'Habitation .webp"
    },
    {
        id: 2,
        name: "Barbican Centre",
        architect: "Chamberlin, Powell & Bon",
        year: 1982,
        city: "London",
        country: "United Kingdom",
        countryCode: "UK",
        coordinates: [51.5197, -0.0938],
        description: "Europe's largest multi-arts venue, this cultural complex exemplifies the Brutalist movement's civic ambitions. The building integrates residential, cultural, and commercial functions in a concrete fortress.",
        features: [
            "Board-marked concrete surfaces",
            "Complex geometric forms",
            "Integration with residential towers",
            "Extensive use of raw concrete"
        ],
        significance: "Represents the peak of Brutalist civic architecture and demonstrates how the style could create dynamic cultural spaces.",
        image: "images/barbican centre.jpg"
    },
    {
        id: 3,
        name: "Trellick Tower",
        architect: "Ernő Goldfinger",
        year: 1972,
        city: "London",
        country: "United Kingdom",
        countryCode: "UK",
        coordinates: [51.5211, -0.2056],
        description: "A 31-story residential tower that embodies the optimistic vision of Brutalist social housing. Its distinctive separate service tower connected by bridges creates a striking silhouette.",
        features: [
            "Separate service tower design",
            "Connecting bridges at every third floor",
            "Raw concrete construction",
            "Geometric window arrangements"
        ],
        significance: "Iconic example of Brutalist housing that influenced tower design across Europe and remains a beloved London landmark.",
        image: "images/Trellick Tower .jpg"
    },
    {
        id: 4,
        name: "National Theatre",
        architect: "Sir Denys Lasdun",
        year: 1976,
        city: "London",
        country: "United Kingdom",
        countryCode: "UK",
        coordinates: [51.5077, -0.1145],
        description: "A monumental cultural building on London's South Bank featuring terraced concrete forms that cascade toward the Thames. Houses three theaters within its massive concrete structure.",
        features: [
            "Terraced concrete terraces",
            "Board-marked concrete surfaces",
            "Integration with urban landscape",
            "Monumental scale and presence"
        ],
        significance: "Exemplifies Brutalist architecture's capacity for creating inspiring public spaces and cultural institutions.",
        image: "images/National Theatre .webp"
    },
    {
        id: 5,
        name: "Habitat 67",
        architect: "Moshe Safdie",
        year: 1967,
        city: "Montreal",
        country: "Canada",
        countryCode: "CA",
        coordinates: [45.5017, -73.5439],
        description: "Though technically in North America, this building had profound influence on European Brutalism. An experimental housing complex of stacked concrete boxes creating a three-dimensional urban habitat.",
        features: [
            "Modular concrete construction",
            "Stacked cubic forms",
            "Private gardens for each unit",
            "Complex geometric arrangement"
        ],
        significance: "Demonstrated innovative approaches to high-density housing that influenced European Brutalist residential projects.",
        image: "images/Habitat 67 .avif"
    },
    {
        id: 6,
        name: "Robin Hood Gardens",
        architect: "Alison and Peter Smithson",
        year: 1972,
        city: "London",
        country: "United Kingdom",
        countryCode: "UK",
        coordinates: [51.5089, 0.0089],
        description: "A now-demolished social housing estate that represented the idealistic vision of Brutalist community planning. Two long concrete blocks framed a central green space.",
        features: [
            "Streets in the sky concept",
            "Integration with landscape",
            "Raw concrete construction",
            "Community-focused design"
        ],
        significance: "Embodied the social ideals of Brutalism but also highlighted the challenges of implementing utopian architectural visions.",
        image: "images/Robin Hood Gardens .jpg"
    },
    {
        id: 7,
        name: "Balfron Tower",
        architect: "Ernő Goldfinger",
        year: 1967,
        city: "London",
        country: "United Kingdom",
        countryCode: "UK",
        coordinates: [51.5089, -0.0156],
        description: "The predecessor to Trellick Tower, this 27-story residential building showcased Goldfinger's vision for vertical communities. Features the same separate service tower concept.",
        features: [
            "Separate service tower",
            "Raw concrete construction",
            "Geometric window patterns",
            "Integrated community facilities"
        ],
        significance: "Pioneered the architectural language that would define British Brutalist housing and influenced urban planning across Europe.",
        image: "images/Balfron Tower .jpg"
    },
    {
        id: 8,
        name: "Hayward Gallery",
        architect: "Higgs and Hill for LCC Architects Department",
        year: 1968,
        city: "London",
        country: "United Kingdom",
        countryCode: "UK",
        coordinates: [51.5056, -0.1147],
        description: "Part of the South Bank Centre complex, this gallery exemplifies Brutalist cultural architecture. Its raw concrete forms and geometric skylights create dramatic interior spaces.",
        features: [
            "Pyramid-shaped roof lights",
            "Board-marked concrete walls",
            "Geometric sculptural forms",
            "Integration with surrounding complex"
        ],
        significance: "Demonstrates how Brutalist architecture could create inspiring spaces for contemporary art and culture.",
        image: "images/Hayward Gallery .jpg"
    },
    {
        id: 9,
        name: "University of East Anglia",
        architect: "Sir Denys Lasdun",
        year: 1968,
        city: "Norwich",
        country: "United Kingdom",
        countryCode: "UK",
        coordinates: [52.6211, 1.2394],
        description: "A campus masterplan featuring interconnected concrete structures that step down a hillside. The design creates a continuous built landscape of terraced residential and academic buildings.",
        features: [
            "Terraced concrete construction",
            "Integration with natural landscape",
            "Continuous built form",
            "Zigzag residential blocks"
        ],
        significance: "Influential example of Brutalist campus design that demonstrated how the style could create cohesive educational environments.",
        image: "images/University of East Anglia .jpg"
    },
    {
        id: 10,
        name: "Hotel Dubrovnik",
        architect: "Andrija Mutnjaković",
        year: 1964,
        city: "Dubrovnik",
        country: "Croatia",
        countryCode: "HR",
        coordinates: [42.6507, 18.0944],
        description: "A striking hotel that demonstrates how Brutalist principles adapted to Mediterranean settings. Its dramatic cantilevers and raw concrete forms contrast with the historic city.",
        features: [
            "Dramatic concrete cantilevers",
            "Integration with coastal landscape",
            "Raw concrete construction",
            "Geometric sculptural forms"
        ],
        significance: "Shows how Brutalism spread beyond Britain and France to influence architecture across Europe, adapting to local contexts.",
        image: "images/Hotel Dubrovnik .jpg"
    }
];

// Helper functions for data filtering and sorting
function filterByCountry(buildings, country) {
    if (!country) return buildings;
    return buildings.filter(building => building.countryCode === country);
}

function filterBySearch(buildings, searchTerm) {
    if (!searchTerm) return buildings;
    const term = searchTerm.toLowerCase();
    return buildings.filter(building => 
        building.name.toLowerCase().includes(term) ||
        building.architect.toLowerCase().includes(term) ||
        building.city.toLowerCase().includes(term) ||
        building.description.toLowerCase().includes(term)
    );
}

function sortByYear(buildings) {
    return [...buildings].sort((a, b) => a.year - b.year);
}

function groupByDecade(buildings) {
    const grouped = {};
    buildings.forEach(building => {
        const decade = Math.floor(building.year / 10) * 10;
        if (!grouped[decade]) grouped[decade] = [];
        grouped[decade].push(building);
    });
    return grouped;
}