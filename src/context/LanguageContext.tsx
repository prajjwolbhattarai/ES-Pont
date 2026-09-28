import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import {
  Language,
  TRANSLATIONS,
  PHOTO_CAPTIONS,
  BEDROOMS_TRANSLATIONS,
  FAQS_TRANSLATIONS,
  ATTRACTIONS_TRANSLATIONS,
  AMENITIES_TRANSLATIONS
} from '../i18n/translations';
import { PROPERTY_DATA, GALLERY_PHOTOS, AMENITIES_LIST, BEDROOMS_LIST, NEARBY_ATTRACTIONS } from '../data/propertyData';
import { PropertyDetails, PhotoItem, Amenity, BedroomInfo, NearbyAttraction } from '../types/property';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof TRANSLATIONS)['en'];
  propertyData: PropertyDetails;
  galleryPhotos: PhotoItem[];
  amenitiesList: Amenity[];
  bedroomsList: BedroomInfo[];
  nearbyAttractions: NearbyAttraction[];
  faqs: { q: string; a: string }[];
  perks: { title: string; description: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('espont_lang') as Language;
      if (saved && (saved === 'en' || saved === 'es' || saved === 'de')) {
        return saved;
      }
      const navLang = navigator.language.slice(0, 2).toLowerCase();
      if (navLang === 'es') return 'es';
      if (navLang === 'de') return 'de';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('espont_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useMemo(() => TRANSLATIONS[language], [language]);

  // Dynamically translate PROPERTY_DATA
  const propertyData: PropertyDetails = useMemo(() => {
    const ov = t.overview;
    const rl = t.rules;
    return {
      ...PROPERTY_DATA,
      tagline:
        language === 'es'
          ? "Villa Privada de Estilo Español en Son Vida con Vistas Panorámicas a la Bahía de Palma"
          : language === 'de'
          ? "Private Villa im spanischen Stil in Son Vida mit Panoramablick auf die Bucht von Palma"
          : PROPERTY_DATA.tagline,
      metrics: {
        ...PROPERTY_DATA.metrics,
        poolSize:
          language === 'es'
            ? "Piscina privada de agua dulce de 10 m × 5 m"
            : language === 'de'
            ? "Privater 10 m × 5 m Süßwasserpool"
            : PROPERTY_DATA.metrics.poolSize
      },
      description: {
        summary: ov.summary,
        longDescription: [ov.p1, ov.p2, ov.p3, ov.p4],
        highlights:
          language === 'es'
            ? [
                "Impresionantes vistas panorámicas de Palma, la bahía y la Catedral",
                "Ubicada en más de 2.200 m² de terreno privado con máxima privacidad",
                "Gran piscina privada de 10 m × 5 m con terraza solárium",
                "Cancha de baloncesto privada reglamentaria dentro de la propiedad",
                "Maduros jardines mediterráneos y múltiples terrazas con sombra",
                "6 amplios dormitorios y 4 baños completos",
                "Cocina de chef totalmente equipada, chimenea de leña y zona de barbacoa",
                "Wi-Fi de alta velocidad y aire acondicionado individual en todas las estancias",
                "Prestigiosa dirección en Son Vida a solo 10 minutos del centro de Palma",
                "Número oficial de registro turístico VT/106136"
              ]
            : language === 'de'
            ? [
                "Weitläufiger Blick auf Palma, die Bucht und die Kathedrale",
                "Über 2.200 m² privates, abgeschirmtes Anwesen",
                "Privater 10 m × 5 m Süßwasserpool mit großem Sonnendeck",
                "Eigener Basketballplatz direkt auf dem Villengelände",
                "Eingewachsene mediterrane Gärten und mehrere Schattenterrassen",
                "6 großzügige Schlafzimmer und 4 vollwertige Badezimmer",
                "Voll ausgestattete Chef-Küche, offener Kamin und Grillbereich",
                "Highspeed-WLAN und individuelle Klimaanlagen in allen Räumen",
                "Exklusive Son Vida-Adresse nur 10 Fahrminuten vom Zentrum Palmas",
                "Offizielle regionale Tourismus-Registrierungsnummer VT/106136"
              ]
            : PROPERTY_DATA.description.highlights
      },
      policies: {
        checkIn: rl.checkinVal,
        checkOut: rl.checkoutVal,
        deposit: rl.depositVal,
        ecoTax: rl.taxVal,
        cancellation: rl.cancellationVal,
        rules:
          language === 'es'
            ? [
                "Ocupación máxima: 8 huéspedes (ideal para familias y grupos tranquilos)",
                "Estrictamente prohibidas fiestas, celebraciones o eventos ruidosos",
                "Se admiten mascotas bajo petición previa con el anfitrión",
                "Horas de silencio: 23:00 – 08:00 (protocolo vecinal residencial)",
                "Prohibido fumar en el interior de la villa",
                "Se recomienda coche de alquiler para mayor comodidad de desplazamiento"
              ]
            : language === 'de'
            ? [
                "Maximale Belegung: 8 Gäste (ideal für Familien und ruhige Reisegruppen)",
                "Partys oder Veranstaltungen sind strengstens untersagt",
                "Haustiere nach vorheriger Absprache mit dem Gastgeber möglich",
                "Ruhezeiten: 23:00 – 08:00 Uhr (Protokoll der Wohngegend)",
                "Im Inneren der Villa gilt absolutes Rauchverbot",
                "Ein Mietwagen wird für maximale Flexibilität empfohlen"
              ]
            : PROPERTY_DATA.policies.rules
      }
    };
  }, [language, t]);

  // Dynamically translate GALLERY_PHOTOS with localized captions
  const galleryPhotos: PhotoItem[] = useMemo(() => {
    const langCaptions = PHOTO_CAPTIONS[language] || PHOTO_CAPTIONS.en;
    return GALLERY_PHOTOS.map((photo) => ({
      ...photo,
      caption: langCaptions[photo.id] || photo.caption
    }));
  }, [language]);

  // Dynamically translate BEDROOMS_LIST
  const bedroomsList: BedroomInfo[] = useMemo(() => {
    const langBedrooms = BEDROOMS_TRANSLATIONS[language] || BEDROOMS_TRANSLATIONS.en;
    return BEDROOMS_LIST.map((room, idx) => {
      const trans = langBedrooms[idx] || langBedrooms[0];
      return {
        ...room,
        name: trans.name || room.name,
        bedType: trans.bedType || room.bedType,
        capacity: trans.capacity || room.capacity,
        floor: trans.floor || room.floor,
        description: trans.description || room.description,
        features: trans.features || room.features
      };
    });
  }, [language]);

  // Dynamically translate AMENITIES_LIST
  const amenitiesList: Amenity[] = useMemo(() => {
    const langAmenities = AMENITIES_TRANSLATIONS[language] || AMENITIES_TRANSLATIONS.en;
    const catTitles = t.amenities.categories;
    return AMENITIES_LIST.map((item) => {
      const trans = langAmenities[item.id];
      const categoryTitle =
        catTitles[item.category as keyof typeof catTitles] || item.categoryTitle;
      return {
        ...item,
        name: trans?.name || item.name,
        description: trans?.description !== undefined ? trans.description : item.description,
        categoryTitle
      };
    });
  }, [language, t]);

  // Dynamically translate NEARBY_ATTRACTIONS
  const nearbyAttractions: NearbyAttraction[] = useMemo(() => {
    return ATTRACTIONS_TRANSLATIONS[language] || ATTRACTIONS_TRANSLATIONS.en;
  }, [language]);

  // Dynamically translate FAQS
  const faqs = useMemo(() => {
    return FAQS_TRANSLATIONS[language] || FAQS_TRANSLATIONS.en;
  }, [language]);

  const perks = useMemo(() => {
    return t.perks.items;
  }, [t]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        propertyData,
        galleryPhotos,
        amenitiesList,
        bedroomsList,
        nearbyAttractions,
        faqs,
        perks
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
