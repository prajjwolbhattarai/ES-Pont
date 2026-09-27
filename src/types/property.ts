export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  category: 'exterior' | 'interior' | 'bedrooms' | 'kitchen' | 'surroundings';
  caption: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: string;
  categoryTitle?: string;
  icon: string;
  description?: string;
  highlight?: boolean;
}

export interface BedroomInfo {
  id: string;
  name: string;
  bedType: string;
  capacity: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  driveTime: string;
  description: string;
  category: 'beach' | 'village' | 'nature' | 'dining' | 'transport';
}

export interface PropertyDetails {
  name: string;
  tagline: string;
  location: {
    village: string;
    region: string;
    island: string;
    country: string;
    fullAddress: string;
    coordinates: { lat: number; lng: number };
  };
  metrics: {
    guests: number;
    bedrooms: number;
    bathrooms: number;
    beds: number;
    livingAreaM2: number;
    plotAreaM2: number;
    poolSize: string;
  };
  licenseNumber: string;
  description: {
    summary: string;
    longDescription: string[];
    highlights: string[];
  };
  policies: {
    checkIn: string;
    checkOut: string;
    deposit: string;
    ecoTax: string;
    cancellation: string;
    rules: string[];
  };
}
