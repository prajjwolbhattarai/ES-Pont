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
  licenseNumber: "VT/106136",
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
      "Official regional tourist registration number VT/106136"
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
// Fully mapped with user's exact area, description, and image numbers (1-36)
export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: "p1",
    imageNumber: 1,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/a580aefe-b244-4b44-bd0d-7619594d8ab6.jpeg",
    alt: "Swimming pool at ES Pont with panoramic bay views",
    category: "exterior",
    area: "Swimming Pool",
    caption: "The 10m × 5m private swimming pool and sun deck with sweeping panoramic views over Palma, the bay and the Cathedral."
  },
  {
    id: "p2",
    imageNumber: 2,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/d411eac3-e1a1-4af2-a836-b4d0a1e94f40.jpeg",
    alt: "Indoor lounge at ES Pont",
    category: "interior",
    area: "Indoor Lounge",
    caption: "Indoor lounge with comfortable seating and generous space for relaxing."
  },
  {
    id: "p3",
    imageNumber: 3,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/56a124b2-1356-4bd1-8b97-10b47f97b69f.jpeg",
    alt: "Basketball court at ES Pont",
    category: "exterior",
    area: "Basketball Court",
    caption: "Private basketball court located directly on the 2,200 m² villa grounds."
  },
  {
    id: "p4",
    imageNumber: 4,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/55e9a1c2-2f02-435b-838e-ce467ad23e15.jpeg",
    alt: "Bedroom with 1 double bed or twin setup at ES Pont",
    category: "bedrooms",
    area: "Bedroom",
    caption: "Bedroom with 1 double bed (or twin setup) offering peaceful garden orientation and tranquil comfort."
  },
  {
    id: "p5",
    imageNumber: 5,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/acbf6e26-0a5a-4d4b-821c-b2af18cb1a10.jpeg",
    alt: "Bathroom with walk-in shower at ES Pont",
    category: "interior",
    area: "Bathroom",
    caption: "Modern bathroom with full walk-in shower and premium amenities."
  },
  {
    id: "p6",
    imageNumber: 6,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/b0893833-37d1-484e-844e-ed814b22af3e.jpeg",
    alt: "Kitchen at ES Pont",
    category: "kitchen",
    area: "Kitchen",
    caption: "Fully equipped kitchen with appliances and prep counter."
  },
  {
    id: "p7",
    imageNumber: 7,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/a60d741f-4059-422e-9d6f-f1a1e611bc3a.png",
    alt: "Outdoor area and walkway at ES Pont",
    category: "exterior",
    area: "Outdoor Area / Walkway",
    caption: "Outdoor area and stone walkway winding across the Mediterranean grounds."
  },
  {
    id: "p8",
    imageNumber: 8,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/0ba7a31e-1fdb-452c-9238-5b5ae62ea160.jpeg",
    alt: "Hallway with terracotta tiles at ES Pont",
    category: "interior",
    area: "Hallway",
    caption: "Interior hallway with Spanish architectural terracotta tiles."
  },
  {
    id: "p9",
    imageNumber: 9,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/f6e58b7b-38df-4158-9373-bb912284466b.jpeg",
    alt: "Bright hallway connecting villa suites at ES Pont",
    category: "interior",
    area: "Hallway",
    caption: "Bright hallway connecting villa living spaces and suites."
  },
  {
    id: "p10",
    imageNumber: 10,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/316fec02-4f6b-4b8d-9104-71d09ad760fd.jpeg",
    alt: "Dining area at ES Pont",
    category: "kitchen",
    area: "Dining",
    caption: "Indoor dining area setting for group meals and entertaining."
  },
  {
    id: "p11",
    imageNumber: 11,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/509ffe73-d2bd-400b-ba3b-c248a133f16e.jpeg",
    alt: "Lounge with traditional fireplace at ES Pont",
    category: "interior",
    area: "Lounge with Fireplace",
    caption: "Comfortable lounge featuring a traditional open fireplace."
  },
  {
    id: "p12",
    imageNumber: 12,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/5296d5ac-c744-4a0f-8daa-6320399960a0.jpeg",
    alt: "Main salon lounge with fireplace and TV at ES Pont",
    category: "interior",
    area: "Lounge with Fireplace and TV",
    caption: "Spacious main salon lounge with fireplace, television, and deep sofas."
  },
  {
    id: "p13",
    imageNumber: 13,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/931b32d9-d11c-499c-af57-f2d4fc6c1600.jpeg",
    alt: "Cozy lounge corner with fireplace at ES Pont",
    category: "interior",
    area: "Lounge with Fireplace",
    caption: "Warm living lounge corner with fireplace and cozy seating."
  },
  {
    id: "p14",
    imageNumber: 14,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/ff8f5a80-198c-44ce-9cfa-0aa405ac1d02.jpeg",
    alt: "Balcony terrace with shade at ES Pont",
    category: "exterior",
    area: "Balcony with Shade",
    caption: "Covered balcony terrace with cool shade and hillside views."
  },
  {
    id: "p15",
    imageNumber: 15,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/d6e137ec-c831-412a-8be2-fb93577669a0.jpeg",
    alt: "Interior corridor at ES Pont",
    category: "interior",
    area: "Hallway",
    caption: "Interior corridor and passage connecting the bedrooms."
  },
  {
    id: "p16",
    imageNumber: 16,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/f9209425-bc44-402b-9d82-b67a9d195bf1.jpeg",
    alt: "Chef kitchen at ES Pont",
    category: "kitchen",
    area: "Kitchen",
    caption: "Chef kitchen space with extensive cabinetry and food prep counters."
  },
  {
    id: "p17",
    imageNumber: 17,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/2b61c4f2-35e7-49b4-98bb-a3056ded4603.jpeg",
    alt: "Breakfast dining corner at ES Pont",
    category: "kitchen",
    area: "Breakfast Dining with Refrigerator",
    caption: "Breakfast dining corner equipped with refrigerator and morning light."
  },
  {
    id: "p18",
    imageNumber: 18,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/394fe604-d942-4fd6-8894-c8fb8641bcd0.jpeg",
    alt: "Outdoor barbecue grilling station at ES Pont",
    category: "exterior",
    area: "Outdoor Barbecue",
    caption: "Outdoor barbecue grilling station for memorable al fresco dining."
  },
  {
    id: "p19",
    imageNumber: 19,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/b97338ad-43fa-4271-bd3b-063ac4826962.jpeg",
    alt: "Hallway with built-in wardrobes at ES Pont",
    category: "interior",
    area: "Hallway with Wardrobe",
    caption: "Spacious hallway featuring built-in wardrobes for storage."
  },
  {
    id: "p20",
    imageNumber: 20,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/7907a0fd-05a9-42fb-8f8c-fbbee9e0d632.png",
    alt: "Bedroom with 1 queen bed at ES Pont",
    category: "bedrooms",
    area: "Bedroom",
    caption: "Bedroom with 1 queen bed, crisp linens, and serene garden views."
  },
  {
    id: "p21",
    imageNumber: 21,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/c00ad4b1-9a76-412d-aaa2-0083c8720b10.png",
    alt: "Perspective of the queen bedroom at ES Pont",
    category: "bedrooms",
    area: "Bedroom",
    caption: "Perspective of the queen bedroom showing individual climate control and restful interior atmosphere."
  },
  {
    id: "p22",
    imageNumber: 22,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/21b7f2b3-7f84-4155-a64d-dc8bf4e90ef8.jpeg",
    alt: "Full bathroom with clean fixtures and mirror at ES Pont",
    category: "interior",
    area: "Bathroom",
    caption: "Full bathroom with clean fixtures, mirror, and walk-in shower."
  },
  {
    id: "p23",
    imageNumber: 23,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/18221ce2-e8c1-4093-afca-b3bf1c5c4df2.png",
    alt: "Bedroom with private balcony access at ES Pont",
    category: "bedrooms",
    area: "Bedroom",
    caption: "Bedroom with private balcony access and views over Son Vida."
  },
  {
    id: "p24",
    imageNumber: 24,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/caf5e595-f16c-449c-8f89-3ec25ad6ba25.jpeg",
    alt: "Perspective of bedroom with 1 double bed or twin setup at ES Pont",
    category: "bedrooms",
    area: "Bedroom",
    caption: "Perspective of the bedroom with 1 double bed (or twin setup), featuring comfortable bedding and peaceful ambiance."
  },
  {
    id: "p25",
    imageNumber: 25,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/054b3920-b41f-4668-b868-dfcc0c05e0db.png",
    alt: "Outdoor lounge with pool access at ES Pont",
    category: "exterior",
    area: "Outdoor Lounge with Pool Access",
    caption: "Outdoor lounge terrace with direct steps leading to the swimming pool."
  },
  {
    id: "p26",
    imageNumber: 26,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/0ef8fa43-e4e7-433c-8cbf-e91f2080eb7c.png",
    alt: "Bright double bedroom offering quiet privacy at ES Pont",
    category: "bedrooms",
    area: "Bedroom",
    caption: "Bright double bedroom offering quiet privacy."
  },
  {
    id: "p27",
    imageNumber: 27,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/3facf5df-5788-4104-a53f-c3d5ab16ba53.png",
    alt: "Bedroom with twin beds at ES Pont",
    category: "bedrooms",
    area: "Bedroom with Twin Beds",
    caption: "Bedroom with twin single beds, ideal for guests, children, or friends."
  },
  {
    id: "p28",
    imageNumber: 28,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/4bab215b-7d7d-4e0a-b43b-e87bd62096af.jpeg",
    alt: "Freshwater swimming pool with sun loungers at ES Pont",
    category: "exterior",
    area: "Swimming Pool",
    caption: "Crystal-clear 10m × 5m freshwater swimming pool surrounded by sun loungers."
  },
  {
    id: "p29",
    imageNumber: 29,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/561ed09d-c1cd-43d6-a138-42726540852b.jpeg",
    alt: "Covered outdoor corridor at ES Pont",
    category: "exterior",
    area: "Outdoor Corridor",
    caption: "Covered outdoor corridor connecting villa terraces and garden paths."
  },
  {
    id: "p30",
    imageNumber: 30,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/86cb1ec1-b17f-4d78-835e-4bac1ef80ee0.jpeg",
    alt: "Barbecue area near swimming pool at ES Pont",
    category: "exterior",
    area: "Barbecue Near Swimming Pool",
    caption: "Al fresco barbecue grilling station situated conveniently near the swimming pool."
  },
  {
    id: "p31",
    imageNumber: 31,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/8c993aec-f847-46a9-b3c7-41adbe713760.png",
    alt: "Mature Mediterranean garden with sea views at ES Pont",
    category: "surroundings",
    area: "Garden with Sea View",
    caption: "Mature Mediterranean garden with panoramic sea views over Palma Bay."
  },
  {
    id: "p32",
    imageNumber: 32,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/c35b182c-179b-4a4d-8cc0-d93a20d73f88.png",
    alt: "Workout and fitness equipment at ES Pont",
    category: "interior",
    area: "Workout Equipment",
    caption: "Dedicated workout and fitness equipment on premises."
  },
  {
    id: "p33",
    imageNumber: 33,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/ef21c7e0-4d6f-4aba-8785-fd8cc6fd78cb.png",
    alt: "Private entrance gate and driveway at ES Pont",
    category: "exterior",
    area: "Entrance Gate",
    caption: "Private secure gated entry and parking driveway."
  },
  {
    id: "p34",
    imageNumber: 34,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/f1259678-2b7e-4090-9ca8-f6e4dfb566cb.jpeg",
    alt: "Secluded garden corner under pine trees at ES Pont",
    category: "surroundings",
    area: "Secluded Garden Corner",
    caption: "Quiet, secluded garden corner sheltered under mature pine canopies."
  },
  {
    id: "p35",
    imageNumber: 35,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/fc13f15f-93e1-4d23-9ee0-c60b7621bca3.jpeg",
    alt: "Aerial perspective of swimming pool, basketball court and villa at ES Pont",
    category: "exterior",
    area: "Bird's-Eye View of Pool, Basketball Court & Villa",
    caption: "Spectacular bird's-eye perspective capturing the swimming pool, basketball court, and private villa grounds."
  },
  {
    id: "p36",
    imageNumber: 36,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/fc9dc582-9bdd-4ccb-9085-2a575d83ebab.jpeg",
    alt: "Open sky over swimming pool and terrace at ES Pont",
    category: "exterior",
    area: "Open Sky with Pool",
    caption: "Expansive open Mediterranean sky over the private swimming pool and sun terrace."
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
    name: "Bedroom 1 (Master Bedroom)",
    bedType: "1 King Bed",
    capacity: "2 Guests",
    description: "Spacious master suite featuring private balcony access, panoramic views over Son Vida, peaceful ambiance, and direct bathroom access.",
    features: ["King size bed", "Private balcony access", "Panoramic Son Vida views", "Air conditioning", "Direct bathroom access"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/18221ce2-e8c1-4093-afca-b3bf1c5c4df2.png" // Image 23 (Private balcony view)
  },
  {
    id: "b2",
    name: "Bedroom 2",
    bedType: "1 Queen Bed",
    capacity: "2 Guests",
    description: "Serene bedroom with 1 queen bed, crisp linens, peaceful garden orientation, and ample wardrobe storage.",
    features: ["1 Queen bed", "Garden & mountain hillside view", "Air conditioning", "Built-in wardrobes"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/7907a0fd-05a9-42fb-8f8c-fbbee9e0d632.png" // Image 20
  },
  {
    id: "b3",
    name: "Bedroom 3",
    bedType: "Twin Beds",
    capacity: "2 Guests",
    description: "Versatile bedroom furnished with twin single beds, ideal for guests, children, or friends.",
    features: ["Twin single beds", "Quiet garden orientation", "Reading lamps", "Air conditioning"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/3facf5df-5788-4104-a53f-c3d5ab16ba53.png" // Image 27
  },
  {
    id: "b4",
    name: "Bedroom 4",
    bedType: "1 Queen Bed",
    capacity: "2 Guests",
    description: "Restful bedroom suite with individual climate control, queen bedding, and tranquil garden views.",
    features: ["1 Queen bed", "Individual climate control", "Garden orientation", "Wardrobe space"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/c00ad4b1-9a76-412d-aaa2-0083c8720b10.png" // Image 21
  },
  {
    id: "b5",
    name: "Bedroom 5",
    bedType: "1 Double Bed",
    capacity: "2 Guests",
    description: "Bright double bedroom offering quiet privacy and natural daylight.",
    features: ["1 Double bed", "Natural daylight", "Air conditioning", "Adjacent bathroom access"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/0ef8fa43-e4e7-433c-8cbf-e91f2080eb7c.png" // Image 26
  },
  {
    id: "b6",
    name: "Bedroom 6",
    bedType: "Twin Beds (or Double setup)",
    capacity: "2 Guests",
    description: "Inviting bedroom with twin beds (configurable as a double bed), comfortable bedding, and quiet ambiance.",
    features: ["Twin Beds / Double setup", "Comfortable mattresses", "Fresh cotton linens", "High-speed Wi-Fi access"],
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1755000796983746698/original/55e9a1c2-2f02-435b-838e-ce467ad23e15.jpeg" // Image 4 / 24
  }
];

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    name: "Son Vida Golf",
    distance: "1.2 km",
    driveTime: "3 min drive",
    description: "Mallorca's oldest and most prestigious 18-hole golf course, offering legendary fairways and clubhouse dining.",
    category: "nature"
  },
  {
    name: "Son Muntaner & Son Quint Golf",
    distance: "2.4 km",
    driveTime: "5 min drive",
    description: "Two premier championship 18-hole golf courses surrounded by olive groves and panoramic views.",
    category: "nature"
  },
  {
    name: "Palma Historic Old Town & Cathedral (La Seu)",
    distance: "5.5 km",
    driveTime: "10 min drive",
    description: "The Gothic masterpiece Cathedral of Santa Maria, ancient cobblestone alleys, artisan boutiques, and courtyards.",
    category: "village"
  },
  {
    name: "Paseo Marítimo & Palma Marina",
    distance: "6.0 km",
    driveTime: "10 min drive",
    description: "Vibrant seafront promenade lined with superyachts, waterfront cocktail bars, and Michelin-starred restaurants.",
    category: "dining"
  },
  {
    name: "Cala Major Beach",
    distance: "7.8 km",
    driveTime: "12 min drive",
    description: "Golden sandy cove beach with crystal turquoise waters, sun loungers, and seaside seafood chiringuitos.",
    category: "beach"
  },
  {
    name: "Palma International Airport (PMI)",
    distance: "16 km",
    driveTime: "18 min drive",
    description: "Fast highway connection to Mallorca's international airport with effortless rental car or private chauffeur transit.",
    category: "transport"
  }
];

export const DIRECT_BOOKING_PERKS = [
  {
    title: "Best Rate Guaranteed",
    desc: "Book directly without intermediary service charges or OTA portal markups.",
    description: "Book directly without intermediary service charges or OTA portal markups."
  },
  {
    title: "Contactless Check-In",
    desc: "Smart encrypted keybox arrival with host assistance whenever needed.",
    description: "Smart encrypted keybox arrival with host assistance whenever needed."
  },
  {
    title: "Personal Host Contact",
    desc: "Direct relationship for bespoke requests, golf reservations, and recommendations.",
    description: "Direct relationship for bespoke requests, golf reservations, and recommendations."
  },
  {
    title: "Flexible Terms",
    desc: "Full refund up to 14 days before arrival with straightforward communication.",
    description: "Full refund up to 14 days before arrival with straightforward communication."
  }
];

