import { PropertyDetails, PhotoItem, Amenity, BedroomInfo, NearbyAttraction } from '../types/property';

export const PROPERTY_DATA: PropertyDetails = {
  name: "Villa Es Pont",
  tagline: "Private Spanish-Style Villa in Son Vida with Panoramic Palma Bay Views",
  location: {
    village: "Son Vida, Palma",
    region: "Palma de Mallorca",
    island: "Mallorca",
    country: "Spain",
    fullAddress: "Carrer Marola 4, 07013 Son Vida, Spain",
    coordinates: {
      lat: 39.5944,
      lng: 2.5942,
    },
  },
  metrics: {
    guests: 10,
    bedrooms: 6,
    bathrooms: 4,
    beds: 6,
    livingAreaM2: 450,
    plotAreaM2: 2200,
    poolSize: "10m × 5m private swimming pool",
  },
  licenseNumber: "ETV/13085 (Mallorca – Regional registration number)",
  description: {
    summary:
      "Es Pont is a private Spanish-style villa in the prestigious residential area of Son Vida, with sweeping views over Palma, the bay and the Cathedral. Set within more than 2,200 m² of secluded grounds, the property offers 6 bedrooms, 4 bathrooms, a 10 x 5 m pool, mature Mediterranean gardens, elegant outdoor living and a private basketball court. A peaceful retreat of character and privacy, only minutes from Palma.",
    longDescription: [
      "The villa combines authentic Mediterranean character with generous indoor and outdoor living. Guests can enjoy several terraces, a fully equipped kitchen, air conditioning, high-speed Wi-Fi, free parking, a barbecue area and a beautifully landscaped garden designed for privacy and relaxation.",
      "Guests have access to the entire villa and its outdoor areas, including the pool, terraces, gardens, barbecue area and basketball court. The property is private and intended for a peaceful and comfortable stay.",
      "Es Pont is ideal for families and groups looking for privacy, comfort and a premium setting in Son Vida. The expansive 10m × 5m swimming pool is nestled amidst lush subtropical foliage and offers open sunbathing decks, comfortable loungers, and captivating vistas of Palma's city skyline and shimmering Mediterranean waters.",
      "Conveniently positioned in Son Vida—widely celebrated as one of the most exclusive enclaves in the Mediterranean—the villa is just a 10-minute drive from the historic quarter of Palma, world-class dining, and marinas, while premier championship golf courses (Son Vida Golf, Son Muntaner, Son Quint) are just around the corner."
    ],
    highlights: [
      "Sweeping views over Palma, the bay and the Cathedral",
      "Set within more than 2,200 m² of secluded private grounds",
      "Private 10m × 5m swimming pool with expansive sun deck",
      "Private full basketball court on the property grounds",
      "Mature Mediterranean gardens and multiple shaded terraces",
      "6 generous bedrooms, 6 beds & 4 full bathrooms",
      "Fully equipped chef kitchen, indoor fireplace & BBQ area",
      "High-speed Wi-Fi and individual air conditioning throughout",
      "Prestigious Son Vida address only 10 minutes from Palma center",
      "Official regional tourist registration number ETV/13085"
    ]
  },
  policies: {
    checkIn: "16:00 – 24:00 (Self check-in or personal host greeting)",
    checkOut: "Until 10:00 AM",
    deposit: "€500 refundable security deposit (reimbursed upon departure inspection)",
    ecoTax: "Balearic Sustainable Tourism Tax (Ecotasa) €2.20 per adult per night",
    cancellation: "Direct booking flexible cancellation policy: Full refund up to 14 days prior to arrival",
    rules: [
      "Maximum occupancy: 10 guests (suitable for families and mature groups)",
      "Strictly no parties or events permitted",
      "Pets may be accepted upon prior request with host",
      "Quiet hours: 23:00 – 08:00 (residential neighborhood protocol)",
      "Strictly non-smoking inside the villa",
      "A rental car is recommended for maximum convenience"
    ]
  }
};

// 36 PRECISE ORIGINAL MUSCACHE IMAGES EXTRACTED DIRECTLY FROM THE LISTING
export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: "p1",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/a580aefe-b244-4b44-bd0d-7619594d8ab6.jpeg",
    alt: "Villa Es Pont private 10x5m swimming pool with sweeping views of Palma Bay and Cathedral",
    category: "exterior",
    caption: "The 10m × 5m private swimming pool and sun deck with sweeping panoramic views over Palma, the bay and the Cathedral."
  },
  {
    id: "p2",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/d411eac3-e1a1-4af2-a836-b4d0a1e94f40.jpeg",
    alt: "Pool terrace and comfortable sun loungers",
    category: "exterior",
    caption: "Sun loungers by the crystal-clear pool, surrounded by mature Mediterranean palm and pine trees."
  },
  {
    id: "p3",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/56a124b2-1356-4bd1-8b97-10b47f97b69f.jpeg",
    alt: "Upper panoramic terrace with outdoor dining and seating",
    category: "exterior",
    caption: "Elevated terrace lounge offering commanding perspectives across the Son Vida hills toward the Mediterranean sea."
  },
  {
    id: "p4",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/55e9a1c2-2f02-435b-838e-ce467ad23e15.jpeg",
    alt: "Sun-drenched outdoor patio and relaxation space",
    category: "exterior",
    caption: "Authentic Spanish-style architectural terrace with natural stone balustrades and covered loggia."
  },
  {
    id: "p5",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/acbf6e26-0a5a-4d4b-821c-b2af18cb1a10.jpeg",
    alt: "Private basketball court within the 2,200 m² grounds",
    category: "exterior",
    caption: "Exclusive private basketball court located right on the property grounds for leisure and sports."
  },
  {
    id: "p6",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/b0893833-37d1-484e-844e-ed814b22af3e.jpeg",
    alt: "Main living room with comfortable seating and fireplace",
    category: "interior",
    caption: "Spacious main living lounge featuring comfortable sofas, an indoor fireplace, and generous natural light."
  },
  {
    id: "p7",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/a60d741f-4059-422e-9d6f-f1a1e611bc3a.png",
    alt: "Living and dining space with garden vistas",
    category: "interior",
    caption: "Elegantly furnished interior living and dining areas connecting smoothly to outdoor sun terraces."
  },
  {
    id: "p8",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/0ba7a31e-1fdb-452c-9238-5b5ae62ea160.jpeg",
    alt: "Fully equipped chef kitchen with modern appliances",
    category: "kitchen",
    caption: "Fully equipped kitchen complete with refrigerator, dishwasher, oven, stovetop, coffee maker, and prep space."
  },
  {
    id: "p9",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/f6e58b7b-38df-4158-9373-bb912284466b.jpeg",
    alt: "Master bedroom suite with king bed and balcony access",
    category: "bedrooms",
    caption: "Peaceful bedroom suite with quality bedding, private balcony access, and picturesque Son Vida views."
  },
  {
    id: "p10",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/316fec02-4f6b-4b8d-9104-71d09ad760fd.jpeg",
    alt: "Second bedroom with natural light and storage",
    category: "bedrooms",
    caption: "Double bedroom with individual climate control, crisp cotton linens, and built-in wardrobes."
  },
  {
    id: "p11",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/509ffe73-d2bd-400b-ba3b-c248a133f16e.jpeg",
    alt: "Twin bedroom ideal for guests and children",
    category: "bedrooms",
    caption: "Twin bedroom with comfortable single beds, reading lamps, and serene garden orientation."
  },
  {
    id: "p12",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/5296d5ac-c744-4a0f-8daa-6320399960a0.jpeg",
    alt: "Fourth bedroom suite with garden outlook",
    category: "bedrooms",
    caption: "Spacious fourth bedroom offering flexible sleeping arrangements and quiet garden privacy."
  },
  {
    id: "p13",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/931b32d9-d11c-499c-af57-f2d4fc6c1600.jpeg",
    alt: "Modern tiled bathroom with walk-in shower",
    category: "interior",
    caption: "One of the four full bathrooms with walk-in shower, fresh towels, and complimentary essentials."
  },
  {
    id: "p14",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/ff8f5a80-198c-44ce-9cfa-0aa405ac1d02.jpeg",
    alt: "Second full bathroom with dual vanity",
    category: "interior",
    caption: "Well-appointed bathroom featuring full bathtub, vanity mirror, and plush bath sheets."
  },
  {
    id: "p15",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/d6e137ec-c831-412a-8be2-fb93577669a0.jpeg",
    alt: "Outdoor barbecue dining area",
    category: "exterior",
    caption: "Dedicated barbecue station and outdoor dining setting for memorable evening family meals."
  },
  {
    id: "p16",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/f9209425-bc44-402b-9d82-b67a9d195bf1.jpeg",
    alt: "Lush mature gardens and stone pathways",
    category: "surroundings",
    caption: "Beautifully landscaped grounds exceeding 2,200 m² with mature palms, flowering shrubs, and privacy."
  },
  {
    id: "p17",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/2b61c4f2-35e7-49b4-98bb-a3056ded4603.jpeg",
    alt: "Commanding views of Palma city and Mediterranean horizon",
    category: "surroundings",
    caption: "Spectacular sweeping views across Palma city skyline, Palma Bay, and the historic Cathedral."
  },
  {
    id: "p18",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/394fe604-d942-4fd6-8894-c8fb8641bcd0.jpeg",
    alt: "Exterior facade and traditional Mallorcan architecture",
    category: "exterior",
    caption: "Grand Spanish-style villa facade showcasing classic Mallorcan terracotta tiles and stone craftsmanship."
  },
  {
    id: "p19",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/b97338ad-43fa-4271-bd3b-063ac4826962.jpeg",
    alt: "Covered veranda and shaded afternoon lounge",
    category: "exterior",
    caption: "Shaded veranda terrace providing cool respite from the midday Mediterranean sun."
  },
  {
    id: "p20",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/7907a0fd-05a9-42fb-8f8c-fbbee9e0d632.png",
    alt: "Fifth bedroom with restful decor",
    category: "bedrooms",
    caption: "Additional private bedroom offering serene accommodations for extended families and friends."
  },
  {
    id: "p21",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/c00ad4b1-9a76-412d-aaa2-0083c8720b10.png",
    alt: "Sixth bedroom / multi-use quiet room",
    category: "bedrooms",
    caption: "Sixth versatile bedroom with ample wardrobe storage, air conditioning, and quiet garden outlook."
  },
  {
    id: "p22",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/21b7f2b3-7f84-4155-a64d-dc8bf4e90ef8.jpeg",
    alt: "Third full bathroom",
    category: "interior",
    caption: "Third full family bathroom with pristine vanity, mirrors, and walk-in shower."
  },
  {
    id: "p23",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/18221ce2-e8c1-4093-afca-b3bf1c5c4df2.png",
    alt: "Fourth bathroom and guest washroom",
    category: "interior",
    caption: "Fourth full bathroom convenient for both guests and poolside access."
  },
  {
    id: "p24",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/caf5e595-f16c-449c-8f89-3ec25ad6ba25.jpeg",
    alt: "Gated entry driveway and private parking",
    category: "exterior",
    caption: "Private gated driveway and secure parking area accommodating multiple vehicles."
  },
  {
    id: "p25",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/054b3920-b41f-4668-b868-dfcc0c05e0db.png",
    alt: "Poolside lounging deck and garden border",
    category: "exterior",
    caption: "Sun deck alongside the freshwater swimming pool bordered by native Mediterranean flora."
  },
  {
    id: "p26",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/0ef8fa43-e4e7-433c-8cbf-e91f2080eb7c.png",
    alt: "Upper bedroom terrace with panoramic mountain views",
    category: "bedrooms",
    caption: "Bedroom suite opening directly to private terrace with panoramic Son Vida hillside views."
  },
  {
    id: "p27",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/3facf5df-5788-4104-a53f-c3d5ab16ba53.png",
    alt: "Interior dining table setting and glassware",
    category: "kitchen",
    caption: "Generous family dining table perfectly positioned for entertaining and group meals."
  },
  {
    id: "p28",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/4bab215b-7d7d-4e0a-b43b-e87bd62096af.jpeg",
    alt: "Mediterranean stone walkway and palm trees",
    category: "surroundings",
    caption: "Natural stone pathways winding through palm trees across the 2,200 m² private estate."
  },
  {
    id: "p29",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/561ed09d-c1cd-43d6-a138-42726540852b.jpeg",
    alt: "Sunny morning breakfast terrace",
    category: "exterior",
    caption: "Peaceful morning patio ideal for breakfast with birdsong and gentle Mediterranean breeze."
  },
  {
    id: "p30",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/86cb1ec1-b17f-4d78-835e-4bac1ef80ee0.jpeg",
    alt: "Son Vida hillside and valley scenery",
    category: "surroundings",
    caption: "Serene surrounding mountain ridges and prestigious villas nestled in Son Vida."
  },
  {
    id: "p31",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/8c993aec-f847-46a9-b3c7-41adbe713760.png",
    alt: "Villa hallway and traditional tiled architectural details",
    category: "interior",
    caption: "Interior architectural features reflecting authentic Spanish estate craftsmanship."
  },
  {
    id: "p32",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/c35b182c-179b-4a4d-8cc0-d93a20d73f88.png",
    alt: "Upper floor sunset view point",
    category: "surroundings",
    caption: "Golden hour sunset perspectives stretching toward the horizon of Palma Bay."
  },
  {
    id: "p33",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/ef21c7e0-4d6f-4aba-8785-fd8cc6fd78cb.png",
    alt: "Modern bathroom amenities and premium fixtures",
    category: "interior",
    caption: "Impeccably cleaned bathroom facilities with organic toiletries and rain shower head."
  },
  {
    id: "p34",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/f1259678-2b7e-4090-9ca8-f6e4dfb566cb.jpeg",
    alt: "Tranquil outdoor reading and lounge area",
    category: "exterior",
    caption: "Secluded garden corner offering shade and quiet contemplation under pine canopies."
  },
  {
    id: "p35",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/fc13f15f-93e1-4d23-9ee0-c60b7621bca3.jpeg",
    alt: "Elevated view of estate grounds and swimming pool",
    category: "exterior",
    caption: "Bird's-eye view over the private pool, basketball court, and Mediterranean villa structure."
  },
  {
    id: "p36",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/fc9dc582-9bdd-4ccb-9085-2a575d83ebab.jpeg",
    alt: "Twilight illuminated pool and evening ambiance",
    category: "exterior",
    caption: "Atmospheric evening lighting around the pool terrace for magical summer nights under the stars."
  }
];

export const AMENITIES_LIST: Amenity[] = [
  // Scenic views
  { id: "v1", name: "City skyline view", category: "views", categoryTitle: "Scenic views", icon: "Landmark", highlight: true, description: "Expansive panoramic perspective over the historic Palma skyline" },
  { id: "v2", name: "Bay view", category: "views", categoryTitle: "Scenic views", icon: "Waves", highlight: true, description: "Breathtaking vistas across the open Mediterranean waters of Palma Bay" },
  { id: "v3", name: "Pool view", category: "views", categoryTitle: "Scenic views", icon: "Waves", description: "Overlooking the private freshwater swimming pool and sun deck" },
  { id: "v4", name: "Sea view", category: "views", categoryTitle: "Scenic views", icon: "Sun", highlight: true, description: "Sparkling Mediterranean horizon from elevated terraces" },

  // Bathroom
  { id: "b1", name: "Hairdryer", category: "bathroom", categoryTitle: "Bathroom", icon: "Sparkles" },
  { id: "b2", name: "Shampoo", category: "bathroom", categoryTitle: "Bathroom", icon: "Sparkles" },
  { id: "b3", name: "Hot water", category: "bathroom", categoryTitle: "Bathroom", icon: "Bath", description: "Continuous reliable hot water supply across all 4 bathrooms" },

  // Bedroom and laundry
  { id: "bl1", name: "Washing machine", category: "bedroom_laundry", categoryTitle: "Bedroom and laundry", icon: "Sparkles" },
  { id: "bl2", name: "Tumble dryer", category: "bedroom_laundry", categoryTitle: "Bedroom and laundry", icon: "Sparkles" },
  { id: "bl3", name: "Essentials", category: "bedroom_laundry", categoryTitle: "Bedroom and laundry", icon: "Bed", description: "Towels, bed sheets, soap and toilet paper" },
  { id: "bl4", name: "Hangers", category: "bedroom_laundry", categoryTitle: "Bedroom and laundry", icon: "CheckCircle" },
  { id: "bl5", name: "Iron", category: "bedroom_laundry", categoryTitle: "Bedroom and laundry", icon: "Sparkles" },

  // Entertainment
  { id: "e1", name: "TV", category: "entertainment", categoryTitle: "Entertainment", icon: "Tv", description: "High-definition television in the living salon" },

  // Heating and cooling
  { id: "hc1", name: "Air conditioning", category: "heating_cooling", categoryTitle: "Heating and cooling", icon: "Wind", highlight: true, description: "Climate control units in living areas and bedrooms" },
  { id: "hc2", name: "Indoor fireplace", category: "heating_cooling", categoryTitle: "Heating and cooling", icon: "Flame", description: "Traditional Spanish wood-burning fireplace" },
  { id: "hc3", name: "Heating", category: "heating_cooling", categoryTitle: "Heating and cooling", icon: "Flame", description: "Comprehensive heating for year-round comfort" },

  // Home safety
  { id: "hs1", name: "Exterior security cameras on property", category: "home_safety", categoryTitle: "Home safety", icon: "ShieldCheck", description: "Outside areas, such as the entryway, are monitored by security cameras." },
  { id: "hs2", name: "Smoke alarm", category: "home_safety", categoryTitle: "Home safety", icon: "ShieldCheck" },
  { id: "hs3", name: "Carbon monoxide alarm", category: "home_safety", categoryTitle: "Home safety", icon: "ShieldCheck" },

  // Internet and office
  { id: "io1", name: "Wifi", category: "internet_office", categoryTitle: "Internet and office", icon: "Wifi", highlight: true, description: "Fast, reliable wireless internet across the estate" },
  { id: "io2", name: "Dedicated workspace", category: "internet_office", categoryTitle: "Internet and office", icon: "Briefcase", description: "Quiet desk setup suitable for remote work or study" },

  // Kitchen and dining
  { id: "kd1", name: "Kitchen", category: "kitchen_dining", categoryTitle: "Kitchen and dining", icon: "ChefHat", highlight: true, description: "Space where guests can cook their own meals" },
  { id: "kd2", name: "Fridge", category: "kitchen_dining", categoryTitle: "Kitchen and dining", icon: "Utensils", description: "Large refrigerator and freezer compartment" },
  { id: "kd3", name: "Cooking basics", category: "kitchen_dining", categoryTitle: "Kitchen and dining", icon: "Utensils", description: "Pots and pans, oil, salt and pepper" },
  { id: "kd4", name: "Coffee maker", category: "kitchen_dining", categoryTitle: "Kitchen and dining", icon: "Coffee", description: "Fresh morning coffee preparation" },

  // Location features
  { id: "lf1", name: "Private entrance", category: "location_features", categoryTitle: "Location features", icon: "Key", description: "Separate street or building entrance" },

  // Outdoor
  { id: "od1", name: "Outdoor furniture", category: "outdoor", categoryTitle: "Outdoor", icon: "Sun", description: "Dining tables, sun loungers, and shaded terrace seating" },

  // Parking and facilities
  { id: "pf1", name: "Free parking on premises", category: "parking_facilities", categoryTitle: "Parking and facilities", icon: "Car", highlight: true, description: "Secure private on-site parking for multiple cars" },
  { id: "pf2", name: "Pool", category: "parking_facilities", categoryTitle: "Parking and facilities", icon: "Waves", highlight: true, description: "Private 10m × 5m freshwater swimming pool" },
  { id: "pf3", name: "Gym", category: "parking_facilities", categoryTitle: "Parking and facilities", icon: "Activity", description: "Fitness facilities and basketball court on premises" },

  // Services
  { id: "s1", name: "Pets allowed", category: "services", categoryTitle: "Services", icon: "CheckCircle", description: "Assistance animals are always allowed" },
  { id: "s2", name: "Smoking allowed", category: "services", categoryTitle: "Services", icon: "CheckCircle", description: "Permitted in designated outdoor areas" },
  { id: "s3", name: "Host greets you", category: "services", categoryTitle: "Services", icon: "UserCheck", description: "Personal warm greeting on arrival or flexible smart lock access" }
];

export const BEDROOMS_LIST: BedroomInfo[] = [
  {
    id: "b1",
    name: "Master Suite",
    bedType: "1 King Bed",
    capacity: "2 Guests",
    description: "Grand master bedroom suite with sweeping vistas across Palma Bay, private terrace access, air conditioning, and generous en-suite dressing area.",
    features: ["King size bed", "Panoramic bay & Cathedral view", "Air conditioning", "Private terrace access"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/f6e58b7b-38df-4158-9373-bb912284466b.jpeg"
  },
  {
    id: "b2",
    name: "Double Bedroom 2",
    bedType: "1 Queen Bed",
    capacity: "2 Guests",
    description: "Bright and serene double bedroom with built-in cedar wardrobes, individual air conditioning, and views of the mature Mediterranean gardens.",
    features: ["Queen bed", "Garden & mountain hillside view", "Air conditioning", "Built-in wardrobes"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/316fec02-4f6b-4b8d-9104-71d09ad760fd.jpeg"
  },
  {
    id: "b3",
    name: "Bedroom 3 (Twin / Family)",
    bedType: "2 Single Beds",
    capacity: "2 Guests",
    description: "Comfortable twin room ideal for children or friends, featuring twin single beds, reading lights, and direct bathroom proximity.",
    features: ["Two single beds", "Quiet garden orientation", "Reading lamps", "Air conditioning"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/509ffe73-d2bd-400b-ba3b-c248a133f16e.jpeg"
  },
  {
    id: "b4",
    name: "Bedroom 4",
    bedType: "1 Double Bed",
    capacity: "2 Guests",
    description: "Spacious bedroom with traditional Spanish architectural charm, cool tiled floors, and abundant natural daylight.",
    features: ["Double bed", "Quiet location", "Individual climate control", "Wardrobe space"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/5296d5ac-c744-4a0f-8daa-6320399960a0.jpeg"
  },
  {
    id: "b5",
    name: "Bedrooms 5 & 6",
    bedType: "Flexible Double / Singles (Accommodating up to 10 guests)",
    capacity: "2–4 Guests",
    description: "Additional restful bedrooms ensuring ample space and supreme comfort for larger family gatherings, private golf retreats, or groups.",
    features: ["Comfortable mattresses", "Fresh cotton linens", "High-speed Wi-Fi access", "Multiple adjacent bathrooms"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/7907a0fd-05a9-42fb-8f8c-fbbee9e0d632.png"
  }
];

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    name: "Son Vida Championship Golf Course",
    distance: "1.2 km",
    driveTime: "3 min drive",
    description: "Mallorca's legendary 18-hole golf club with historic clubhouse, pro shop, and gourmet restaurant overlooking the greens.",
    category: "dining"
  },
  {
    name: "Palma Historic Old Town & Cathedral La Seu",
    distance: "5.5 km",
    driveTime: "10 min drive",
    description: "Gothic cathedral, Royal Palace of La Almudaina, designer shopping along Passeig des Born, and tapas dining.",
    category: "village"
  },
  {
    name: "Marina Port de Mallorca & Santa Catalina",
    distance: "6.0 km",
    driveTime: "11 min drive",
    description: "Vibrant culinary quarter with lively market halls, waterfront promenade, superyacht marina, and cocktail bars.",
    category: "dining"
  },
  {
    name: "Illetes & Cala Major Sandy Beaches",
    distance: "8.5 km",
    driveTime: "14 min drive",
    description: "Turquoise crystal waters, beach clubs, and sheltered sandy coves just west of Palma Bay.",
    category: "beach"
  },
  {
    name: "Palma de Mallorca Airport (PMI)",
    distance: "16 km",
    driveTime: "15 min drive",
    description: "Direct fast connection via the Via de Cintura (Ma-20) highway to Mallorca's international airport.",
    category: "transport"
  },
  {
    name: "Serra de Tramuntana Foothills & Valldemossa",
    distance: "18 km",
    driveTime: "20 min drive",
    description: "UNESCO World Heritage mountain landscapes, olive terraces, and scenic winding roads towards Valldemossa and Deià.",
    category: "nature"
  }
];

export const DIRECT_BOOKING_PERKS = [
  {
    title: "Best Rate Guarantee",
    desc: "Save 15% to 20% compared to Airbnb & Booking.com by cutting out third-party platform service commissions."
  },
  {
    title: "Zero Hidden Booking Fees",
    desc: "Transparent all-inclusive pricing with no unexpected surprise service fees added at final checkout."
  },
  {
    title: "Direct Host Communication",
    desc: "Liaise directly with your local property manager for personalized check-in and custom local island tips."
  },
  {
    title: "Flexible Rescheduling",
    desc: "Enjoy relaxed cancellation up to 14 days before arrival and priority handling for date adjustments."
  }
];

export const FAQS = [
  {
    q: "How does the direct booking process work?",
    a: "Our integrated booking engine is powered by Smoobu, the official property management system for Villa Es Pont. Your dates are instantly synchronized across all booking channels with real-time availability and guaranteed lowest direct prices."
  },
  {
    q: "Where is Villa Es Pont located?",
    a: "The villa is situated in Son Vida, one of the most prestigious and secure residential areas in Palma de Mallorca. It offers tranquility, 24-hour security presence, and sweeping panoramic views over Palma city, Palma Bay, and the historic Cathedral, all within 10 minutes of central Palma."
  },
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 16:00 to 24:00 (via self-check-in or in-person greeting). Check-out is by 10:00 AM to allow our professional housekeeping team to prepare the estate for arriving guests."
  },
  {
    q: "Is a rental car recommended?",
    a: "Yes, a car is recommended for maximum convenience, although central Palma and taxi services are only a short 10-minute drive away. The villa offers secure private parking on premises for multiple cars."
  },
  {
    q: "What recreational features does the villa have?",
    a: "In addition to the private 10m × 5m swimming pool, expansive sun deck, and barbecue dining area, the property boasts its own private basketball court on the 2,200 m² grounds."
  },
  {
    q: "Are parties or events permitted?",
    a: "No, parties and events are strictly not permitted. Villa Es Pont is located in a peaceful residential community and is reserved exclusively for families and mature groups seeking quiet relaxation."
  },
  {
    q: "What is the official tourist license number?",
    a: "The property is officially registered with the Balearic Tourism Authority under license number ETV/13085."
  }
];
