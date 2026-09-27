export type Language = 'en' | 'es' | 'de';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

export const TRANSLATIONS = {
  en: {
    nav: {
      overview: 'Overview',
      gallery: 'Gallery',
      amenities: 'Amenities',
      bedrooms: 'Bedrooms',
      location: 'Location',
      faq: 'FAQ',
      inquire: 'Inquire',
      bookDirect: 'Book Direct',
      bookDirectLong: 'Book Directly with Host',
      guaranteeNote: 'Direct booking guarantees lowest rates with zero booking fees'
    },
    hero: {
      locationKicker: 'Carrer Marola 4, Son Vida',
      locationSub: 'Palma, Mallorca, Spain',
      bestPriceBadge: 'Direct Booking Best Price',
      luxuryTag: 'LUXURY PRIVATE ESTATE · SON VIDA, MALLORCA',
      subtitle: 'A private Spanish-style villa in prestigious Son Vida with sweeping views over Palma, the bay and the Cathedral, featuring a 10 × 5 m pool, basketball court and 2,200 m² of secluded grounds.',
      upTo10: 'Up to 10',
      guests: 'Guests',
      six: '6',
      bedrooms: 'Bedrooms',
      four: '4',
      bathrooms: 'Bathrooms',
      poolDim: '10m × 5m',
      pool: 'Pool',
      checkAvail: 'Check Availability & Book Direct',
      viewGallery: 'View Photo Gallery (36)',
      directNote: 'Direct host booking with official Best Price Guarantee, instant confirmation & no third-party platform markups.'
    },
    perks: {
      badge: 'Direct Host Advantage',
      title: 'Why Reserve Villa Es Pont Directly?',
      subtitle: 'By booking directly through our official management portal, you eliminate intermediary commissions and receive personalized VIP estate care.',
      items: [
        {
          title: 'Best Rate Guaranteed',
          description: 'Book directly without intermediary service charges or OTA portal markups.'
        },
        {
          title: 'Contactless Check-In',
          description: 'Smart encrypted keybox arrival with host assistance whenever needed.'
        },
        {
          title: 'Personal Host Contact',
          description: 'Direct relationship for bespoke requests, golf reservations, and recommendations.'
        },
        {
          title: 'Flexible Terms',
          description: 'Full refund up to 14 days before arrival with straightforward communication.'
        }
      ]
    },
    overview: {
      badge: 'The Property · Son Vida Estate',
      heading: 'A Secluded Mediterranean Sanctuary',
      subtitle: 'Set within over 2,200 m² of private grounds in Mallorca’s most prestigious residential enclave.',
      metrics: {
        guests: '10 Guests',
        guestsLabel: 'Max. Capacity',
        bedrooms: '6 Bedrooms',
        bedroomsLabel: 'Luxury Suites',
        bathrooms: '4 Bathrooms',
        bathroomsLabel: 'Full Facilities',
        pool: '10m × 5m Pool',
        poolLabel: 'Private Freshwater',
        plot: '2,200 m²',
        plotLabel: 'Private Estate Grounds',
        living: '450 m²',
        livingLabel: 'Interior Living Space'
      },
      summary: 'Es Pont is a private Spanish-style villa in the prestigious residential area of Son Vida, with sweeping views over Palma, the bay and the Cathedral. Set within more than 2,200 m² of secluded grounds, the property offers 6 bedrooms, 4 bathrooms, a 10 x 5 m pool, mature Mediterranean gardens, elegant outdoor living and a private basketball court. A peaceful retreat of character and privacy, only minutes from Palma.',
      p1: 'The villa combines authentic Mediterranean character with generous indoor and outdoor living. Guests can enjoy several terraces, a fully equipped kitchen, air conditioning, high-speed Wi-Fi, free parking, a barbecue area and a beautifully landscaped garden designed for privacy and relaxation.',
      p2: 'Guests have access to the entire villa and its outdoor areas, including the pool, terraces, gardens, barbecue area and basketball court. The property is private and intended for a peaceful and comfortable stay.',
      p3: 'Es Pont is ideal for families and groups looking for privacy, comfort and a premium setting in Son Vida. The expansive 10m × 5m swimming pool is nestled amidst lush subtropical foliage and offers open sunbathing decks, comfortable loungers, and captivating vistas of Palma’s city skyline and shimmering Mediterranean waters.',
      p4: 'Conveniently positioned in Son Vida—widely celebrated as one of the most exclusive enclaves in the Mediterranean—the villa is just a 10-minute drive from the historic quarter of Palma, world-class dining, and marinas, while premier championship golf courses (Son Vida Golf, Son Muntaner, Son Quint) are just around the corner.',
      highlightsTitle: 'Estate Highlights',
      officialLicense: 'Official Tourism Registration',
      reserveCta: 'Reserve ES PONT'
    },
    gallery: {
      badge: 'Complete Photographic Tour',
      heading: 'Capturing ES PONT',
      subtitle: 'Explore the private villa, sun terraces, suites, and secluded Mediterranean grounds.',
      openLightbox: 'Open Lightbox',
      showPreview: 'Show preview rows (12 photos)',
      showAll: 'Show all 36 photos',
      filterAll: 'All Photos',
      filterExterior: 'Pool, Terraces & Sports',
      filterInterior: 'Lounges, Hallways & Bathrooms',
      filterBedrooms: 'Bedrooms',
      filterKitchen: 'Kitchen & Dining',
      filterSurroundings: 'Gardens & Views',
      fitToScreen: 'Fit to Screen',
      fullSize: 'Full Size',
      brandingHeader: 'ES PONT · Son Vida, Mallorca'
    },
    amenities: {
      badge: 'Features & Estate Facilities',
      heading: 'Everything for an Unforgettable Stay',
      subtitle: 'Every comfort has been considered—from high-speed connectivity to private outdoor sports facilities.',
      filterAll: 'All Amenities',
      filterViews: 'Scenic Views',
      filterOutdoor: 'Outdoor & Pool',
      filterKitchen: 'Kitchen & Dining',
      filterCooling: 'Air Conditioning',
      filterInternet: 'Wifi & Office',
      filterSafety: 'Safety',
      categories: {
        views: 'Scenic views',
        bathroom: 'Bathroom',
        bedroom_laundry: 'Bedroom and laundry',
        entertainment: 'Entertainment',
        heating_cooling: 'Heating and cooling',
        home_safety: 'Home safety',
        internet_office: 'Internet and office',
        kitchen_dining: 'Kitchen and dining',
        location_features: 'Location features',
        outdoor: 'Outdoor',
        parking_facilities: 'Parking and facilities',
        services: 'Services'
      }
    },
    bedrooms: {
      badge: 'Rest & Rejuvenation',
      heading: '6 Bedrooms & 4 Bathrooms',
      subtitle: 'Designed for deep rest and peaceful silence in residential Son Vida. Accommodating up to 10 guests across 6 private bedrooms with 4 bathrooms, independent climate control, and fresh hotel-grade linens.',
      bathroomsHighlightTitle: '4 Full Bathrooms with Rain Showers & Vanities',
      bathroomsHighlightDesc: 'Equipped with modern fittings, high-pressure hot water, organic soaps, plush bath sheets, and dedicated swimming pool towels for all guests.',
      groupsHighlightTitle: 'Accommodating Groups up to 10 Guests',
      groupsHighlightDesc: '6 separate bedrooms offering privacy for families or retreat groups, with baby cots and children high chairs prepared complimentary upon request.'
    },
    booking: {
      badge: 'Direct Host Reservation',
      heading: 'Reserve ES PONT Directly',
      subtitle: 'Official direct booking engine powered by Smoobu. Guaranteed lowest available rates with direct host protection.',
      liveBadge: 'Official Live Calendar & Rates',
      sslText: '256-bit SSL encrypted connection · Bank-level checkout security',
      instantText: 'Instant booking confirmation directly from the property owner',
      guaranteeTitle: 'Direct Booking Guarantees',
      guarantees: [
        'Zero commission fees or hidden portal markups',
        'Direct priority communication with estate management',
        'Flexible 14-day cancellation policy prior to arrival',
        'Full access to all 2,200 m² private grounds & basketball court',
        'Complimentary high-speed Wi-Fi, linen set, and pool towels'
      ],
      needAssistance: 'Prefer to contact the host directly first?',
      inquireBtn: 'Send Host Inquiry'
    },
    location: {
      badge: 'The Destination · Son Vida, Palma',
      heading: 'Mallorca’s Most Prestigious Enclave',
      subtitle: 'Son Vida is celebrated globally for its supreme privacy, round-the-clock security, world-class golf courses, and sweeping perspectives over the Bay of Palma.',
      addressCardTitle: 'Villa Es Pont Location',
      addressCardText: 'Carrer Marola 4, 07013 Son Vida, Palma de Mallorca, Spain',
      directionsBtn: 'Open in Google Maps',
      nearbyHighlightsTitle: 'Prime Distances & Surroundings'
    },
    rules: {
      badge: 'Stay Guidelines & Policies',
      heading: 'Property Details & House Policies',
      subtitle: 'Transparent policies ensuring a tranquil, respectful, and well-managed experience for every guest.',
      arrivalTitle: 'Arrival & Departure',
      checkinLabel: 'Check-in Window:',
      checkinVal: 'From 15:00 onwards (contactless smart keybox or host greeting)',
      checkoutLabel: 'Check-out:',
      checkoutVal: 'Until 11:00 AM',
      earlyCheckinNote: 'Early check-in or luggage drop-off can be arranged in advance subject to availability.',
      guidelinesTitle: 'House Guidelines',
      depositsTitle: 'Deposits & Balearic Tax',
      depositLabel: 'Refundable Security Deposit:',
      depositVal: '€500 refundable security deposit (reimbursed upon departure inspection)',
      taxLabel: 'Sustainable Tourism Ecotasa:',
      taxVal: 'Balearic Sustainable Tourism Tax (Ecotasa) €2.20 per adult per night',
      cancellationLabel: 'Cancellation Policy:',
      cancellationVal: 'Direct booking flexible cancellation policy: Full refund up to 14 days prior to arrival'
    },
    faq: {
      badge: 'Questions & Answers',
      heading: 'ES Pont',
      subtitle: 'Frequently asked questions about ES Pont in Son Vida.'
    },
    contactModal: {
      badge: 'Direct Host Communication',
      heading: 'Inquire About Villa Es Pont',
      subtitle: 'Connect directly with our local Son Vida estate management team.',
      nameLabel: 'Your Full Name *',
      namePlaceholder: 'e.g. Maria Gonzalez',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'e.g. maria@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+34 600 000 000',
      guestsLabel: 'Expected Guests',
      checkinLabel: 'Target Arrival Date',
      checkoutLabel: 'Target Departure Date',
      messageLabel: 'Your Message or Special Inquiries',
      messagePlaceholder: 'Tell us about your group, preferred dates, or specific questions about Villa Es Pont...',
      cancelBtn: 'Cancel',
      submitBtn: 'Send Direct Inquiry',
      submittedTitle: 'Inquiry Received',
      submittedDesc: 'Thank you! Our estate team will review your inquiry and respond to your email within a few hours.',
      closeBtn: 'Close Window',
      privacyNote: 'Your contact details are encrypted and used solely to coordinate your reservation.'
    },
    footer: {
      villaPrefix: 'VILLA',
      description: 'Exclusive private Spanish-style villa in prestigious Son Vida, Palma de Mallorca. Featuring a 10m × 5m swimming pool, private basketball court, and sweeping panoramic views over Palma Bay and the Cathedral.',
      officialLicense: 'Official Tourism License:',
      exploreTitle: 'Explore Property',
      directTitle: 'Direct Booking',
      directDesc: 'Guaranteed best pricing directly with the property host. Zero hidden fees, instant booking, and personal concierge.',
      bookBtn: 'Check Dates & Reserve',
      contactTitle: 'Host & Contact',
      responseNote: 'Fast response within 2 hours',
      inquireBtn: 'Send Message to Host',
      rights: 'All rights reserved.',
      directBrandNote: 'Official direct booking website for Villa Es Pont, Son Vida, Mallorca.',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      imprint: 'Legal Imprint'
    },
    mobileBar: {
      bestRate: 'Direct Host Best Rate',
      bookDirect: 'Book Direct'
    }
  },

  es: {
    nav: {
      overview: 'Descripción',
      gallery: 'Galería',
      amenities: 'Comodidades',
      bedrooms: 'Dormitorios',
      location: 'Ubicación',
      faq: 'Preguntas',
      inquire: 'Consultar',
      bookDirect: 'Reservar Directo',
      bookDirectLong: 'Reservar Directamente con el Propietario',
      guaranteeNote: 'La reserva directa garantiza las tarifas más bajas sin comisiones de intermediarios'
    },
    hero: {
      locationKicker: 'Carrer Marola 4, Son Vida',
      locationSub: 'Palma, Mallorca, España',
      bestPriceBadge: 'Mejor Precio de Reserva Directa',
      luxuryTag: 'FINCA PRIVADA DE LUJO · SON VIDA, MALLORCA',
      subtitle: 'Una villa privada de estilo español en la prestigiosa zona de Son Vida con impresionantes vistas panorámicas de Palma, la bahía y la Catedral, piscina de 10 × 5 m, cancha de baloncesto y 2.200 m² de jardines privados.',
      upTo10: 'Hasta 10',
      guests: 'Huéspedes',
      six: '6',
      bedrooms: 'Dormitorios',
      four: '4',
      bathrooms: 'Baños',
      poolDim: '10m × 5m',
      pool: 'Piscina',
      checkAvail: 'Comprobar Disponibilidad y Reservar',
      viewGallery: 'Ver Galería de Fotos (36)',
      directNote: 'Reserva directa con el anfitrión con Mejor Precio Garantizado oficial, confirmación instantánea y sin comisiones de portales.'
    },
    perks: {
      badge: 'Ventaja de Reserva Directa',
      title: '¿Por qué reservar Villa Es Pont directamente?',
      subtitle: 'Al reservar directamente a través de nuestro portal oficial, elimina las comisiones de intermediarios y disfruta de una atención personalizada VIP.',
      items: [
        {
          title: 'Mejor Precio Garantizado',
          description: 'Reserve directamente sin recargos de intermediarios ni comisiones de agencias OTA.'
        },
        {
          title: 'Llegada sin Contacto',
          description: 'Acceso seguro mediante caja de llaves inteligente con asistencia del anfitrión disponible.'
        },
        {
          title: 'Trato Directo con el Anfitrión',
          description: 'Contacto directo para peticiones personalizadas, reservas de golf y recomendaciones locales.'
        },
        {
          title: 'Condiciones Flexibles',
          description: 'Reembolso íntegro hasta 14 días antes de la llegada con una comunicación clara y sencilla.'
        }
      ]
    },
    overview: {
      badge: 'La Propiedad · Finca en Son Vida',
      heading: 'Un Refugio Mediterráneo Exclusivo y Privado',
      subtitle: 'Ubicada en más de 2.200 m² de jardines privados en la urbanización residencial más prestigiosa de Mallorca.',
      metrics: {
        guests: '10 Huéspedes',
        guestsLabel: 'Capacidad Máx.',
        bedrooms: '6 Dormitorios',
        bedroomsLabel: 'Suites de Lujo',
        bathrooms: '4 Baños',
        bathroomsLabel: 'Baños Completos',
        pool: 'Piscina 10m × 5m',
        poolLabel: 'Agua Dulce Privada',
        plot: '2.200 m²',
        plotLabel: 'Terreno Privado',
        living: '450 m²',
        livingLabel: 'Superficie Habitable'
      },
      summary: 'Es Pont es una villa privada de estilo español situada en la prestigiosa zona residencial de Son Vida, con magníficas vistas panorámicas de Palma, la bahía y la Catedral. Ubicada en una parcela privada de más de 2.200 m², la propiedad ofrece 6 dormitorios, 4 baños, piscina de 10 x 5 m, maduros jardines mediterráneos, elegantes zonas de estar exteriores y una cancha de baloncesto privada. Un remanso de paz con carácter y total privacidad, a solo minutos de Palma.',
      p1: 'La villa combina el auténtico carácter mediterráneo con generosos espacios interiores y al aire libre. Los huéspedes pueden disfrutar de varias terrazas, cocina totalmente equipada, aire acondicionado, Wi-Fi de alta velocidad, aparcamiento gratuito, zona de barbacoa y un jardín meticulosamente diseñado para el descanso y la máxima tranquilidad.',
      p2: 'Los huéspedes tienen acceso completo a toda la villa y sus zonas exteriores, incluidas la piscina, terrazas, jardines, zona de barbacoa y cancha de baloncesto. La propiedad es completamente privada y está pensada para estancias confortables y relajadas.',
      p3: 'Es Pont es ideal para familias y grupos que buscan privacidad, confort y un entorno distinguido en Son Vida. La gran piscina de 10 m × 5 m se encuentra rodeada de exuberante vegetación subtropical y cuenta con terrazas solárium, cómodas tumbonas y vistas cautivadoras del skyline de Palma y las aguas del Mediterráneo.',
      p4: 'Con una ubicación privilegiada en Son Vida, reconocida internacionalmente como una de las urbanizaciones más exclusivas del Mediterráneo, la villa se encuentra a solo 10 minutos en coche del centro histórico de Palma, restaurantes de primera clase y puertos deportivos, con campos de golf de campeonato (Son Vida Golf, Son Muntaner, Son Quint) justo al lado.',
      highlightsTitle: 'Aspectos Destacados de la Finca',
      officialLicense: 'Número de Registro Turístico Oficial',
      reserveCta: 'Reservar ES PONT'
    },
    gallery: {
      badge: 'Recorrido Fotográfico Completo',
      heading: 'Descubra ES PONT',
      subtitle: 'Explore la villa privada, las terrazas soleadas, las suites y los jardines mediterráneos.',
      openLightbox: 'Abrir Visor de Fotos',
      showPreview: 'Mostrar 12 fotos iniciales',
      showAll: 'Ver las 36 fotos',
      filterAll: 'Todas las Fotos',
      filterExterior: 'Piscina, Terrazas y Deportes',
      filterInterior: 'Salones, Pasillos y Baños',
      filterBedrooms: 'Dormitorios',
      filterKitchen: 'Cocina y Comedor',
      filterSurroundings: 'Jardines y Vistas',
      fitToScreen: 'Ajustar a Pantalla',
      fullSize: 'Tamaño Completo',
      brandingHeader: 'ES PONT · Son Vida, Mallorca'
    },
    amenities: {
      badge: 'Instalaciones y Servicios',
      heading: 'Todo lo Necesario para una Estancia Inolvidable',
      subtitle: 'Cada detalle ha sido diseñado con esmero: desde conectividad de alta velocidad hasta instalaciones deportivas privadas.',
      filterAll: 'Todas las Comodidades',
      filterViews: 'Vistas Panorámicas',
      filterOutdoor: 'Exterior y Piscina',
      filterKitchen: 'Cocina y Comedor',
      filterCooling: 'Aire Acondicionado',
      filterInternet: 'Wifi y Despacho',
      filterSafety: 'Seguridad',
      categories: {
        views: 'Vistas panorámicas',
        bathroom: 'Baño',
        bedroom_laundry: 'Dormitorio y lavandería',
        entertainment: 'Entretenimiento',
        heating_cooling: 'Climatización y calefacción',
        home_safety: 'Seguridad en el hogar',
        internet_office: 'Internet y oficina',
        kitchen_dining: 'Cocina y comedor',
        location_features: 'Características de ubicación',
        outdoor: 'Exteriores',
        parking_facilities: 'Aparcamiento e instalaciones',
        services: 'Servicios'
      }
    },
    bedrooms: {
      badge: 'Descanso y Confort',
      heading: '6 Dormitorios y 4 Baños',
      subtitle: 'Diseñado para el descanso absoluto y el silencio más plácido en la zona residencial de Son Vida. Capacidad para hasta 10 huéspedes en 6 dormitorios privados con 4 baños, aire acondicionado individual y ropa de cama de calidad hotelera.',
      bathroomsHighlightTitle: '4 Baños Completos con Duchas Italianas y Tocadores',
      bathroomsHighlightDesc: 'Equipados con grifería moderna, agua caliente continua, jabones orgánicos, toallas suaves de algodón y toallas exclusivas para la piscina.',
      groupsHighlightTitle: 'Ideal para Grupos de hasta 10 Huéspedes',
      groupsHighlightDesc: '6 dormitorios independientes que ofrecen total intimidad para familias o retiros, con cunas y tronas para bebés disponibles de forma gratuita previa solicitud.'
    },
    booking: {
      badge: 'Reserva Directa con el Propietario',
      heading: 'Reserve ES PONT Directamente',
      subtitle: 'Motor de reservas oficial gestionado por Smoobu. Mejor tarifa garantizada con total seguridad y atención directa del anfitrión.',
      liveBadge: 'Calendario Oficial en Tiempo Real y Tarifas',
      sslText: 'Conexión cifrada SSL de 256 bits · Máxima seguridad bancaria',
      instantText: 'Confirmación instantánea de reserva directamente del propietario',
      guaranteeTitle: 'Garantías de la Reserva Directa',
      guarantees: [
        'Cero comisiones ni recargos ocultos de plataformas intermediarias',
        'Comunicación prioritaria directa con el equipo de gestión de la finca',
        'Política de cancelación flexible hasta 14 días antes de la llegada',
        'Acceso exclusivo a los 2.200 m² de terreno privado y cancha de baloncesto',
        'Wi-Fi de alta velocidad, ropa de cama y toallas de piscina incluidas'
      ],
      needAssistance: '¿Prefiere consultar primero al anfitrión?',
      inquireBtn: 'Enviar Consulta al Anfitrión'
    },
    location: {
      badge: 'El Destino · Son Vida, Palma',
      heading: 'El Enclave Más Exclusivo de Mallorca',
      subtitle: 'Son Vida es célebre a nivel internacional por su máxima privacidad, vigilancia privada 24 horas, campos de golf de prestigio mundial y panorámicas espectaculares sobre la Bahía de Palma.',
      addressCardTitle: 'Ubicación de Villa Es Pont',
      addressCardText: 'Carrer Marola 4, 07013 Son Vida, Palma de Mallorca, España',
      directionsBtn: 'Abrir en Google Maps',
      nearbyHighlightsTitle: 'Distancias Clave y Entorno'
    },
    rules: {
      badge: 'Normas y Políticas de Estancia',
      heading: 'Detalles de la Propiedad y Políticas',
      subtitle: 'Normas transparentes para garantizar una experiencia tranquila, respetuosa y cuidada para cada huésped.',
      arrivalTitle: 'Llegada y Salida',
      checkinLabel: 'Horario de Entrada:',
      checkinVal: 'A partir de las 15:00 h (caja de llaves inteligente o bienvenida personal)',
      checkoutLabel: 'Horario de Salida:',
      checkoutVal: 'Hasta las 11:00 h',
      earlyCheckinNote: 'La entrada anticipada o custodia de equipaje se puede coordinar con antelación según disponibilidad.',
      guidelinesTitle: 'Normas de Convivencia',
      depositsTitle: 'Fianza y Tasa Turística Balear',
      depositLabel: 'Fianza Reembolsable:',
      depositVal: '500 € de depósito de seguridad reembolsable (devuelto tras la inspección de salida)',
      taxLabel: 'Ecotasa de Turismo Sostenible:',
      taxVal: 'Impuesto Balear de Turismo Sostenible (Ecotasa) 2,20 € por adulto y noche',
      cancellationLabel: 'Política de Cancelación:',
      cancellationVal: 'Política flexible de reserva directa: Reembolso completo hasta 14 días antes de la llegada'
    },
    faq: {
      badge: 'Preguntas y Respuestas',
      heading: 'ES Pont',
      subtitle: 'Preguntas frecuentes sobre ES Pont en Son Vida.'
    },
    contactModal: {
      badge: 'Comunicación Directa con el Anfitrión',
      heading: 'Consultar sobre Villa Es Pont',
      subtitle: 'Contacte directamente con nuestro equipo local de gestión en Son Vida.',
      nameLabel: 'Nombre Completo *',
      namePlaceholder: 'p. ej. María González',
      emailLabel: 'Correo Electrónico *',
      emailPlaceholder: 'p. ej. maria@ejemplo.com',
      phoneLabel: 'Teléfono',
      phonePlaceholder: '+34 600 000 000',
      guestsLabel: 'Número de Huéspedes',
      checkinLabel: 'Fecha Prevista de Entrada',
      checkoutLabel: 'Fecha Prevista de Salida',
      messageLabel: 'Su Mensaje o Consultas Específicas',
      messagePlaceholder: 'Cuéntenos sobre su grupo, fechas deseadas o dudas específicas sobre Villa Es Pont...',
      cancelBtn: 'Cancelar',
      submitBtn: 'Enviar Consulta Directa',
      submittedTitle: 'Consulta Recibida',
      submittedDesc: '¡Muchas gracias! Nuestro equipo revisará su solicitud y le responderá a su correo electrónico en pocas horas.',
      closeBtn: 'Cerrar Ventana',
      privacyNote: 'Sus datos de contacto están protegidos y se utilizan exclusivamente para coordinar su estancia.'
    },
    footer: {
      villaPrefix: 'VILLA',
      description: 'Exclusiva villa privada de estilo español en la prestigiosa zona de Son Vida, Palma de Mallorca. Cuenta con piscina de 10 m × 5 m, cancha de baloncesto privada y amplias vistas a la Bahía de Palma y la Catedral.',
      officialLicense: 'Licencia Turística Oficial:',
      exploreTitle: 'Explorar la Finca',
      directTitle: 'Reserva Directa',
      directDesc: 'El mejor precio garantizado directamente con el propietario. Sin comisiones ocultas, confirmación instantánea y atención personalizada.',
      bookBtn: 'Comprobar Fechas y Reservar',
      contactTitle: 'Contacto y Anfitrión',
      responseNote: 'Respuesta rápida en menos de 2 horas',
      inquireBtn: 'Enviar Mensaje al Anfitrión',
      rights: 'Todos los derechos reservados.',
      directBrandNote: 'Sitio web oficial de reserva directa para Villa Es Pont, Son Vida, Mallorca.',
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
      imprint: 'Aviso Legal'
    },
    mobileBar: {
      bestRate: 'Mejor Tarifa con Propietario',
      bookDirect: 'Reservar'
    }
  },

  de: {
    nav: {
      overview: 'Übersicht',
      gallery: 'Galerie',
      amenities: 'Ausstattung',
      bedrooms: 'Schlafzimmer',
      location: 'Lage',
      faq: 'FAQ',
      inquire: 'Anfragen',
      bookDirect: 'Direkt buchen',
      bookDirectLong: 'Direkt beim Gastgeber buchen',
      guaranteeNote: 'Direktbuchung garantiert die besten Preise ohne Portalgebühren'
    },
    hero: {
      locationKicker: 'Carrer Marola 4, Son Vida',
      locationSub: 'Palma, Mallorca, Spanien',
      bestPriceBadge: 'Bestpreis bei Direktbuchung',
      luxuryTag: 'EXKLUSIVES PRIVATANWESEN · SON VIDA, MALLORCA',
      subtitle: 'Eine private Villa im spanischen Stil im renommierten Son Vida mit weitem Panoramablick auf Palma, die Bucht und die Kathedrale, privatem 10 × 5 m Pool, Basketballplatz und 2.200 m² uneinsehbarem Grundstück.',
      upTo10: 'Bis zu 10',
      guests: 'Gäste',
      six: '6',
      bedrooms: 'Schlafzimmer',
      four: '4',
      bathrooms: 'Badezimmer',
      poolDim: '10m × 5m',
      pool: 'Pool',
      checkAvail: 'Verfügbarkeit prüfen & direkt buchen',
      viewGallery: 'Fotogalerie ansehen (36)',
      directNote: 'Direktbuchung beim Eigentümer mit offizieller Bestpreisgarantie, sofortiger Bestätigung und ohne Aufschläge von Buchungsportalen.'
    },
    perks: {
      badge: 'Vorteil der Direktbuchung',
      title: 'Warum Villa Es Pont direkt buchen?',
      subtitle: 'Wenn Sie direkt über unser offizielles Buchungsportal reservieren, entfallen Vermittlungsgebühren und Sie genießen persönlichen VIP-Service vor Ort.',
      items: [
        {
          title: 'Bestpreisgarantie',
          description: 'Buchen Sie direkt ohne Buchungsgebühren oder Aufschläge von Buchungsplattformen.'
        },
        {
          title: 'Kontaktloser Check-In',
          description: 'Sichere Anreise per codiertem Schlüsselsafe mit persönlicher Betreuung bei Bedarf.'
        },
        {
          title: 'Persönlicher Kontakt',
          description: 'Direkter Draht zum Gastgeber für individuelle Wünsche, Golfreservierungen und Tipps.'
        },
        {
          title: 'Flexible Bedingungen',
          description: 'Volle Rückerstattung bis zu 14 Tage vor Anreise bei unkomplizierter Abwicklung.'
        }
      ]
    },
    overview: {
      badge: 'Das Anwesen · Son Vida',
      heading: 'Ein privates mediterranes Refugium',
      subtitle: 'Eingebettet in über 2.200 m² privates Grundstück in Mallorcas renommiertester Wohngegend.',
      metrics: {
        guests: '10 Gäste',
        guestsLabel: 'Max. Belegung',
        bedrooms: '6 Schlafzimmer',
        bedroomsLabel: 'Luxuriöse Suiten',
        bathrooms: '4 Badezimmer',
        bathroomsLabel: 'Voll ausgestattete Bäder',
        pool: '10m × 5m Pool',
        poolLabel: 'Privater Süßwasserpool',
        plot: '2.200 m²',
        plotLabel: 'Privatgrundstück',
        living: '450 m²',
        livingLabel: 'Wohnfläche'
      },
      summary: 'Es Pont ist eine private Villa im spanischen Stil in der renommierten Wohngegend Son Vida mit weitem Blick über Palma, die Bucht und die Kathedrale. Auf mehr als 2.200 m² privatem Grund bietet die Villa 6 Schlafzimmer, 4 Badezimmer, einen 10 x 5 m Pool, mediterrane Gärten, geschmackvolle Terrassen und einen privaten Basketballplatz. Eine Oase der Ruhe und Privatsphäre, nur wenige Minuten von Palma entfernt.',
      p1: 'Die Villa vereint authentischen mediterranen Charme mit großzügigem Wohnkomfort im Innen- und Außenbereich. Gäste genießen mehrere Terrassen, eine komplett ausgestattete Küche, Klimaanlage, Highspeed-WLAN, kostenlose Parkplätze, einen Grillbereich und einen liebevoll angelegten Garten für erholsame Stunden.',
      p2: 'Ihnen steht die gesamte Villa samt Außenbereich exklusiv zur Verfügung – einschließlich Pool, Sonnenterrassen, Gärten, Grillplatz und Basketballplatz. Die Liegenschaft ist privat und bietet höchsten Komfort und Ruhe.',
      p3: 'Es Pont ist ideal für Familien und Reisegruppen, die Wert auf Privatsphäre, Komfort und eine erstklassige Lage in Son Vida legen. Der großzügige 10m × 5m Swimmingpool liegt eingebettet in subtropische Vegetation und bietet sonnige Decks, bequeme Liegen sowie einen herrlichen Ausblick auf Palma und das glitzernde Mittelmeer.',
      p4: 'In Son Vida – weithin bekannt als eine der exklusivsten Lagen des Mittelmeers – wohnen Sie nur 10 Fahrminuten von der historischen Altstadt Palmas, Spitzenrestaurants und Yachthäfen entfernt. Die traditionsreichen Meisterschafts-Golfplätze (Son Vida Golf, Son Muntaner, Son Quint) liegen direkt vor der Haustür.',
      highlightsTitle: 'Höhepunkte des Anwesens',
      officialLicense: 'Offizielle touristische Lizenznummer',
      reserveCta: 'ES PONT buchen'
    },
    gallery: {
      badge: 'Vollständige Fototour',
      heading: 'Einblicke in ES PONT',
      subtitle: 'Entdecken Sie die private Villa, Sonnenterrassen, Suiten und das mediterrane Anwesen.',
      openLightbox: 'Galerie öffnen',
      showPreview: 'Vorschau anzeigen (12 Fotos)',
      showAll: 'Alle 36 Fotos anzeigen',
      filterAll: 'Alle Fotos',
      filterExterior: 'Pool, Terrassen & Sport',
      filterInterior: 'Lounges, Flure & Bäder',
      filterBedrooms: 'Schlafzimmer',
      filterKitchen: 'Küche & Essbereich',
      filterSurroundings: 'Garten & Aussicht',
      fitToScreen: 'An Bildschirm anpassen',
      fullSize: 'Originalgröße',
      brandingHeader: 'ES PONT · Son Vida, Mallorca'
    },
    amenities: {
      badge: 'Ausstattung & Annehmlichkeiten',
      heading: 'Alles für einen unvergesslichen Aufenthalt',
      subtitle: 'An jedes Detail wurde gedacht – von schnellem WLAN bis zu privaten Freizeitsport-Möglichkeiten.',
      filterAll: 'Alle Ausstattungen',
      filterViews: 'Panoramablick',
      filterOutdoor: 'Außenbereich & Pool',
      filterKitchen: 'Küche & Speisen',
      filterCooling: 'Klimaanlage',
      filterInternet: 'WLAN & Arbeitsplatz',
      filterSafety: 'Sicherheit',
      categories: {
        views: 'Malerische Aussichten',
        bathroom: 'Badezimmer',
        bedroom_laundry: 'Schlafzimmer und Wäsche',
        entertainment: 'Unterhaltung',
        heating_cooling: 'Heizung und Klimatisierung',
        home_safety: 'Sicherheit',
        internet_office: 'Internet und Arbeitsplatz',
        kitchen_dining: 'Küche und Essbereich',
        location_features: 'Lagemerkmale',
        outdoor: 'Außenbereich',
        parking_facilities: 'Parkmöglichkeiten und Anlagen',
        services: 'Services'
      }
    },
    bedrooms: {
      badge: 'Erholung & Schlafkomfort',
      heading: '6 Schlafzimmer & 4 Badezimmer',
      subtitle: 'Konzipiert für tiefen Schlaf und vollkommene Ruhe im Wohnviertel Son Vida. Bietet Platz für bis zu 10 Gäste in 6 privaten Schlafzimmern mit 4 Badezimmern, individueller Klimatisierung und frischer Bettwäsche in Hotelqualität.',
      bathroomsHighlightTitle: '4 voll ausgestattete Badezimmer mit Regenduschen',
      bathroomsHighlightDesc: 'Modern ausgestattet mit zuverlässigem Warmwasser, biologischen Seifen, weichen Duschtüchern und separaten Poolhandtüchern für alle Gäste.',
      groupsHighlightTitle: 'Ideal für Reisegruppen bis zu 10 Personen',
      groupsHighlightDesc: '6 separate Schlafzimmer für maximale Privatsphäre von Familien oder Gruppen. Babybetten und Hochstühle stellen wir auf Wunsch gerne kostenfrei bereit.'
    },
    booking: {
      badge: 'Direktbuchung beim Eigentümer',
      heading: 'Reservieren Sie ES PONT direkt',
      subtitle: 'Offizielles Direktbuchungssystem über Smoobu. Garantiert beste Preise mit persönlichem Schutz direkt vom Eigentümer.',
      liveBadge: 'Offizieller Live-Kalender & Tarife',
      sslText: '256-Bit SSL-verschlüsselte Verbindung · Bankenstandard bei der Zahlungsabwicklung',
      instantText: 'Sofortige Buchungsbestätigung direkt vom Anwesenseigentümer',
      guaranteeTitle: 'Vorteile der Direktbuchung',
      guarantees: [
        'Keine Buchungsgebühren oder versteckte Plattformaufschläge',
        'Direkter und bevorzugter Kontakt zum Anwesen-Management',
        'Flexible Stornierung mit voller Erstattung bis zu 14 Tage vor Anreise',
        'Voller exklusiver Zugang zu allen 2.200 m² Grundstück und Basketballplatz',
        'Inklusive Highspeed-WLAN, Bettwäsche und Poolhandtücher'
      ],
      needAssistance: 'Möchten Sie vorab direkt eine Anfrage senden?',
      inquireBtn: 'Nachricht an den Gastgeber'
    },
    location: {
      badge: 'Die Lage · Son Vida, Palma',
      heading: 'Mallorcas exklusivste Wohnadresse',
      subtitle: 'Son Vida ist weltberühmt für seine Privatsphäre, den 24-Stunden-Sicherheitsdienst, renommierte Meisterschaftsgolfplätze und die weite Aussicht auf die Bucht von Palma.',
      addressCardTitle: 'Lage der Villa Es Pont',
      addressCardText: 'Carrer Marola 4, 07013 Son Vida, Palma de Mallorca, Spanien',
      directionsBtn: 'In Google Maps öffnen',
      nearbyHighlightsTitle: 'Distanzen & Umgebung'
    },
    rules: {
      badge: 'Richtlinien & Hausordnung',
      heading: 'Hausordnung & Buchungsrichtlinien',
      subtitle: 'Klare und transparente Richtlinien für einen entspannten, respektvollen und angenehmen Aufenthalt.',
      arrivalTitle: 'Anreise & Abreise',
      checkinLabel: 'Check-in:',
      checkinVal: 'Ab 15:00 Uhr (kontaktloser Schlüsselsafe oder persönlicher Empfang)',
      checkoutLabel: 'Check-out:',
      checkoutVal: 'Bis 11:00 Uhr',
      earlyCheckinNote: 'Früherer Check-in oder Gepäckaufbewahrung nach vorheriger Absprache und Verfügbarkeit möglich.',
      guidelinesTitle: 'Hausregeln',
      depositsTitle: 'Kaution & Balearen-Ökosteuer',
      depositLabel: 'Erstattbare Kaution:',
      depositVal: '500 € Kaution (wird nach ordnungsgemäßer Abreisekontrolle erstattet)',
      taxLabel: 'Nachhaltige Tourismusabgabe (Ecotasa):',
      taxVal: 'Balearen-Ökosteuer (Ecotasa) 2,20 € pro Erwachsener und Nacht',
      cancellationLabel: 'Stornierungsbedingungen:',
      cancellationVal: 'Flexible Direktbuchungs-Stornierung: Volle Rückerstattung bis zu 14 Tage vor Ankunft'
    },
    faq: {
      badge: 'Fragen & Antworten',
      heading: 'ES Pont',
      subtitle: 'Häufig gestellte Fragen zu ES Pont in Son Vida.'
    },
    contactModal: {
      badge: 'Direkter Kontakt zum Gastgeber',
      heading: 'Anfrage zu Villa Es Pont',
      subtitle: 'Treten Sie direkt mit unserem Betreuungsteam vor Ort in Son Vida in Kontakt.',
      nameLabel: 'Ihr vollständiger Name *',
      namePlaceholder: 'z. B. Maria Schneider',
      emailLabel: 'E-Mail-Adresse *',
      emailPlaceholder: 'z. B. maria@beispiel.de',
      phoneLabel: 'Telefonnummer',
      phonePlaceholder: '+49 170 0000000',
      guestsLabel: 'Anzahl Gäste',
      checkinLabel: 'Gewünschtes Anreisedatum',
      checkoutLabel: 'Gewünschtes Abreisedatum',
      messageLabel: 'Ihre Nachricht oder spezielle Wünsche',
      messagePlaceholder: 'Erzählen Sie uns von Ihrer Gruppe, Reisedaten oder Fragen zu Villa Es Pont...',
      cancelBtn: 'Abbrechen',
      submitBtn: 'Direkte Anfrage senden',
      submittedTitle: 'Anfrage erhalten',
      submittedDesc: 'Vielen Dank! Unser Team prüft Ihre Anfrage und antwortet Ihnen innerhalb weniger Stunden per E-Mail.',
      closeBtn: 'Fenster schließen',
      privacyNote: 'Ihre Kontaktdaten werden vertraulich behandelt und ausschließlich zur Koordination Ihres Aufenthalts verwendet.'
    },
    footer: {
      villaPrefix: 'VILLA',
      description: 'Exklusive private Villa im spanischen Stil im renommierten Son Vida, Palma de Mallorca. Mit 10m × 5m Swimmingpool, privatem Basketballplatz und weitem Panoramablick auf die Bucht von Palma und die Kathedrale.',
      officialLicense: 'Offizielle Tourismuslizenz:',
      exploreTitle: 'Anwesen erkunden',
      directTitle: 'Direktbuchung',
      directDesc: 'Garantierter Bestpreis direkt beim Eigentümer. Keine versteckten Gebühren, sofortige Bestätigung und persönlicher Service.',
      bookBtn: 'Termine prüfen & buchen',
      contactTitle: 'Gastgeber & Kontakt',
      responseNote: 'Schnelle Antwort innerhalb von 2 Stunden',
      inquireBtn: 'Nachricht an Gastgeber senden',
      rights: 'Alle Rechte vorbehalten.',
      directBrandNote: 'Offizielle Direktbuchungs-Website für Villa Es Pont, Son Vida, Mallorca.',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz',
      imprint: 'Impressum'
    },
    mobileBar: {
      bestRate: 'Bestpreis beim Gastgeber',
      bookDirect: 'Direkt buchen'
    }
  }
};

// MULTILINGUAL CAPTIONS FOR ALL 36 ORIGINAL MUSCACHE PHOTOS
export const PHOTO_CAPTIONS: Record<Language, Record<string, string>> = {
  en: {
    p1: "The 10m × 5m private swimming pool and sun deck with sweeping panoramic views over Palma, the bay and the Cathedral.",
    p2: "Indoor lounge with comfortable seating and generous space for relaxing.",
    p3: "Private basketball court located directly on the 2,200 m² villa grounds.",
    p4: "Bedroom with 1 double bed (or twin setup) offering peaceful garden orientation and tranquil comfort.",
    p5: "Modern bathroom with full walk-in shower and premium amenities.",
    p6: "Fully equipped kitchen with appliances and prep counter.",
    p7: "Outdoor area and stone walkway winding across the Mediterranean grounds.",
    p8: "Interior hallway with Spanish architectural terracotta tiles.",
    p9: "Bright hallway connecting villa living spaces and suites.",
    p10: "Indoor dining area setting for group meals and entertaining.",
    p11: "Comfortable lounge featuring a traditional open fireplace.",
    p12: "Spacious main salon lounge with fireplace, television, and deep sofas.",
    p13: "Warm living lounge corner with fireplace and cozy seating.",
    p14: "Covered balcony terrace with cool shade and hillside views.",
    p15: "Interior corridor and passage connecting the bedrooms.",
    p16: "Chef kitchen space with extensive cabinetry and food prep counters.",
    p17: "Breakfast dining corner equipped with refrigerator and morning light.",
    p18: "Outdoor barbecue grilling station for memorable al fresco dining.",
    p19: "Spacious hallway featuring built-in wardrobes for storage.",
    p20: "Bedroom with 1 queen bed, crisp linens, and serene garden views.",
    p21: "Perspective of the queen bedroom showing individual climate control and restful interior atmosphere.",
    p22: "Full bathroom with clean fixtures, mirror, and walk-in shower.",
    p23: "Bedroom with private balcony access and views over Son Vida.",
    p24: "Perspective of the bedroom with 1 double bed (or twin setup), featuring comfortable bedding and peaceful ambiance.",
    p25: "Outdoor lounge terrace with direct steps leading to the swimming pool.",
    p26: "Bright double bedroom offering quiet privacy.",
    p27: "Bedroom with twin single beds, ideal for guests, children, or friends.",
    p28: "Crystal-clear 10m × 5m freshwater swimming pool surrounded by sun loungers.",
    p29: "Covered outdoor corridor connecting villa terraces and garden paths.",
    p30: "Al fresco barbecue grilling station situated conveniently near the swimming pool.",
    p31: "Mature Mediterranean garden with panoramic sea views over Palma Bay.",
    p32: "Dedicated workout and fitness equipment on premises.",
    p33: "Private secure gated entry and parking driveway.",
    p34: "Quiet, secluded garden corner sheltered under mature pine canopies.",
    p35: "Spectacular bird's-eye perspective capturing the swimming pool, basketball court, and private villa grounds.",
    p36: "Expansive open Mediterranean sky over the private swimming pool and sun terrace."
  },
  es: {
    p1: "La piscina privada de 10 m × 5 m y terraza solárium con amplias vistas panorámicas a Palma, la bahía y la Catedral.",
    p2: "Salón interior con cómodos asientos y un espacio generoso para relajarse.",
    p3: "Cancha de baloncesto privada situada directamente en los 2.200 m² de la villa.",
    p4: "Dormitorio con 1 cama doble (o configuración de dos camas) con orientación tranquila al jardín.",
    p5: "Cuarto de baño moderno con amplia ducha a ras de suelo y equipamiento de primera calidad.",
    p6: "Cocina totalmente equipada con electrodomésticos y encimera de preparación.",
    p7: "Zona exterior y sendero de piedra que serpentea por los jardines mediterráneos.",
    p8: "Pasillo interior con tradicionales baldosas de terracota de estilo español.",
    p9: "Luminoso pasillo que conecta las diferentes estancias y suites de la villa.",
    p10: "Comedor interior para almuerzos y cenas en grupo.",
    p11: "Agradable salón con chimenea tradicional de leña.",
    p12: "Amplio salón principal con chimenea abierta, televisión y cómodos sofás.",
    p13: "Cálido rincón de estar con chimenea y ambiente hogareño.",
    p14: "Terraza cubierta con sombra agradable y vistas a la ladera de Son Vida.",
    p15: "Pasillo interior de distribución hacia los dormitorios.",
    p16: "Espacio de cocina amplia con generoso almacenamiento y encimeras de preparación.",
    p17: "Rincón de desayuno equipado con frigorífico y luz matinal natural.",
    p18: "Zona de barbacoa al aire libre para disfrutar de inolvidables cenas al fresco.",
    p19: "Amplio distribuidor con armarios empotrados para almacenaje.",
    p20: "Dormitorio con 1 cama queen, sábanas de algodón y serenas vistas al jardín.",
    p21: "Perspectiva del dormitorio queen con climatización individual y ambiente sosegado.",
    p22: "Baño completo con acabados impecables, espejo y ducha a ras de suelo.",
    p23: "Dormitorio con acceso directo a balcón privado y vistas sobre Son Vida.",
    p24: "Perspectiva del dormitorio con cama doble o dos camas individuales, cómodo y silencioso.",
    p25: "Terraza lounge exterior con escalones de acceso directo a la piscina.",
    p26: "Luminoso dormitorio doble que ofrece total intimidad y descanso.",
    p27: "Dormitorio con dos camas individuales, ideal para acompañantes, niños o amigos.",
    p28: "Piscina de agua dulce de 10 m × 5 m rodeada de cómodas tumbonas.",
    p29: "Galería exterior cubierta que comunica las terrazas de la villa con el jardín.",
    p30: "Zona de barbacoa situada convenientemente junto al área de la piscina.",
    p31: "Jardín mediterráneo maduro con vistas panorámicas al mar sobre la Bahía de Palma.",
    p32: "Equipamiento de entrenamiento y fitness disponible en la propiedad.",
    p33: "Puerta de acceso privada y cancela de seguridad para vehículos.",
    p34: "Rincón tranquilo y reservado del jardín bajo la sombra de los pinos.",
    p35: "Espectacular vista aérea que abarca la piscina, la cancha de baloncesto y la villa.",
    p36: "Amplio cielo mediterráneo sobre la piscina privada y la terraza solárium."
  },
  de: {
    p1: "Der 10 x 5 m große private Swimmingpool und das Sonnendeck mit weitem Panoramablick auf Palma, die Bucht und die Kathedrale.",
    p2: "Gemütliche Lounge im Innenbereich mit bequemen Sitzgelegenheiten und viel Platz zum Entspannen.",
    p3: "Eigener privater Basketballplatz direkt auf dem 2.200 m² großen Anwesen der Villa.",
    p4: "Schlafzimmer mit 1 Doppelbett (oder zwei Einzelbetten) mit ruhiger Gartenausrichtung und Komfort.",
    p5: "Modernes Badezimmer mit ebenerdiger Dusche und hochwertiger Ausstattung.",
    p6: "Voll ausgestattete Küche mit modernen Geräten und großer Arbeitsfläche.",
    p7: "Außenbereich und gepflasterter Natursteinweg durch das mediterrane Anwesen.",
    p8: "Flurbereich mit traditionellen spanischen Terrakotta-Bodenfliesen.",
    p9: "Heller Flur, der die Wohnbereiche und Suiten der Villa harmonisch verbindet.",
    p10: "Großer Essbereich im Innenbereich für gemeinsame Mahlzeiten mit Familie und Freunden.",
    p11: "Behagliche Wohnlounge mit traditionellem offenem Kamin.",
    p12: "Großzügiger Hauptsalon mit Kamin, Fernseher und tiefen Sofas.",
    p13: "Gemütliche Leseecke im Salon mit Kamin und warmer Atmosphäre.",
    p14: "Überdachter Balkon mit angenehmem Schatten und Blick auf die Hügel.",
    p15: "Innenflur und Durchgang zu den privaten Schlafsuiten.",
    p16: "Geräumige Küche mit umfangreichem Stauraum und Arbeitsflächen.",
    p17: "Frühstücksecke mit Kühlschrank und herrlichem Morgensonnenschein.",
    p18: "Außengrillstation für stimmungsvolle Barbecues unter freiem Himmel.",
    p19: "Flur mit großzügigen Einbauschränken für Kleidung und Reisegepäck.",
    p20: "Schlafzimmer mit Queen-Size-Bett, frischer Bettwäsche und ruhigem Gartenblick.",
    p21: "Perspektive des Queen-Schlafzimmers mit individueller Klimatisierung und Ruhe.",
    p22: "Vollbad mit hochwertigen Armaturen, Spiegel und begehbarer Dusche.",
    p23: "Schlafzimmer mit direktem Balkonzugang und Blick über Son Vida.",
    p24: "Blick auf das Schlafzimmer mit Doppelbett oder Twin-Betten in ruhiger Lage.",
    p25: "Außenlounge-Terrasse mit direktem Stufenabgang zum Swimmingpool.",
    p26: "Helles Doppelschlafzimmer mit angenehmer Privatsphäre und Ruhe.",
    p27: "Schlafzimmer mit zwei Einzelbetten, optimal für Gäste, Kinder oder Freunde.",
    p28: "Kristallklarer 10m × 5m Süßwasser-Pool umgeben von bequemen Sonnenliegen.",
    p29: "Überdachter Verbindungsgang zwischen den Villenterrassen und dem Garten.",
    p30: "Grillbereich direkt neben dem Pool für gesellige Sommertage.",
    p31: "Eingewachsener mediterraner Garten mit weitem Meerblick auf die Bucht von Palma.",
    p32: "Ausgewählte Fitness- und Sportgeräte auf dem Anwesen vorhanden.",
    p33: "Privates gesichertes Eingangstor und Parkeinfahrt für mehrere Fahrzeuge.",
    p34: "Ruhige, lauschige Gartenecke unter dem Schatten alter Kiefern.",
    p35: "Spektakuläre Vogelperspektive auf Pool, Basketballplatz und das gesamte Anwesen.",
    p36: "Offener mallorquinischer Himmel über dem privaten Pool und der Sonnenterrasse."
  }
};

// MULTILINGUAL BEDROOMS
export const BEDROOMS_TRANSLATIONS: Record<Language, any[]> = {
  en: [
    {
      id: "b1",
      name: "Bedroom 1 (Master Bedroom)",
      bedType: "1 King Bed",
      capacity: "2 Guests",
      description: "Spacious master suite featuring private balcony access, panoramic views over Son Vida, peaceful ambiance, and direct bathroom access.",
      features: ["King size bed", "Private balcony access", "Panoramic Son Vida views", "Air conditioning", "Direct bathroom access"]
    },
    {
      id: "b2",
      name: "Bedroom 2",
      bedType: "1 Queen Bed",
      capacity: "2 Guests",
      description: "Serene bedroom with 1 queen bed, crisp linens, peaceful garden orientation, and ample wardrobe storage.",
      features: ["1 Queen bed", "Garden & mountain hillside view", "Air conditioning", "Built-in wardrobes"]
    },
    {
      id: "b3",
      name: "Bedroom 3",
      bedType: "Twin Beds",
      capacity: "2 Guests",
      description: "Versatile bedroom furnished with twin single beds, ideal for guests, children, or friends.",
      features: ["Twin single beds", "Quiet garden orientation", "Reading lamps", "Air conditioning"]
    },
    {
      id: "b4",
      name: "Bedroom 4",
      bedType: "1 Queen Bed",
      capacity: "2 Guests",
      description: "Restful bedroom suite with individual climate control, queen bedding, and tranquil garden views.",
      features: ["1 Queen bed", "Individual climate control", "Garden orientation", "Wardrobe space"]
    },
    {
      id: "b5",
      name: "Bedroom 5",
      bedType: "1 Double Bed",
      capacity: "2 Guests",
      description: "Bright double bedroom offering quiet privacy and natural daylight.",
      features: ["1 Double bed", "Natural daylight", "Air conditioning", "Adjacent bathroom access"]
    },
    {
      id: "b6",
      name: "Bedroom 6",
      bedType: "Twin Beds (or Double setup)",
      capacity: "2 Guests",
      description: "Inviting bedroom with twin beds (configurable as a double bed), comfortable bedding, and quiet ambiance.",
      features: ["Twin Beds / Double setup", "Comfortable mattresses", "Fresh cotton linens", "High-speed Wi-Fi access"]
    }
  ],
  es: [
    {
      id: "b1",
      name: "Dormitorio 1 (Dormitorio Principal)",
      bedType: "1 Cama King",
      capacity: "2 Huéspedes",
      description: "Espaciosa suite principal con acceso a balcón privado, vistas panorámicas de Son Vida, atmósfera de tranquilidad y acceso directo al baño.",
      features: ["Cama King size", "Acceso a balcón privado", "Vistas panorámicas a Son Vida", "Aire acondicionado", "Acceso directo a baño"]
    },
    {
      id: "b2",
      name: "Dormitorio 2",
      bedType: "1 Cama Queen",
      capacity: "2 Huéspedes",
      description: "Sereno dormitorio con cama queen, sábanas de alta calidad, tranquila orientación al jardín y amplios armarios empotrados.",
      features: ["1 Cama Queen", "Vistas al jardín y la montaña", "Aire acondicionado", "Armarios empotrados"]
    },
    {
      id: "b3",
      name: "Dormitorio 3",
      bedType: "Dos Camas Individuales (Twin)",
      capacity: "2 Huéspedes",
      description: "Versátil dormitorio equipado con dos camas individuales, perfecto para acompañantes, niños o amigos.",
      features: ["Dos camas individuales", "Orientación tranquila al jardín", "Lámparas de lectura", "Aire acondicionado"]
    },
    {
      id: "b4",
      name: "Dormitorio 4",
      bedType: "1 Cama Queen",
      capacity: "2 Huéspedes",
      description: "Acogedora suite con climatización individual, cama queen y vistas relajantes al jardín.",
      features: ["1 Cama Queen", "Climatización individual", "Orientación al jardín", "Espacio de armario"]
    },
    {
      id: "b5",
      name: "Dormitorio 5",
      bedType: "1 Cama Doble",
      capacity: "2 Huéspedes",
      description: "Luminoso dormitorio doble con total intimidad, silencio y abundante luz natural.",
      features: ["1 Cama doble", "Luz natural exterior", "Aire acondicionado", "Acceso adyacente al baño"]
    },
    {
      id: "b6",
      name: "Dormitorio 6",
      bedType: "Dos Camas (o Doble)",
      capacity: "2 Huéspedes",
      description: "Confortable dormitorio con dos camas (modulables como cama doble), ropa de cama de calidad y ambiente tranquilo.",
      features: ["Camas Twin / Doble", "Colchones ergonómicos", "Ropa de algodón fresca", "Conexión Wi-Fi de alta velocidad"]
    }
  ],
  de: [
    {
      id: "b1",
      name: "Schlafzimmer 1 (Hauptschlafzimmer)",
      bedType: "1 King-Size-Bett",
      capacity: "2 Gäste",
      description: "Großzügige Mastersuite mit privatem Balkonzugang, weitem Panoramablick über Son Vida, herrlicher Ruhe und direktem Badezimmerzugang.",
      features: ["King-Size-Doppelbett", "Eigener Balkonzugang", "Panoramablick auf Son Vida", "Klimaanlage", "Direkter Badezimmerzugang"]
    },
    {
      id: "b2",
      name: "Schlafzimmer 2",
      bedType: "1 Queen-Size-Bett",
      capacity: "2 Gäste",
      description: "Ruhiges Schlafzimmer mit Queen-Size-Bett, feiner Bettwäsche, Gartenblick und großzügigen Einbauschränken.",
      features: ["1 Queen-Size-Bett", "Garten- und Hügelblick", "Klimaanlage", "Einbauschränke"]
    },
    {
      id: "b3",
      name: "Schlafzimmer 3",
      bedType: "2 Einzelbetten (Twin)",
      capacity: "2 Gäste",
      description: "Flexibles Schlafzimmer mit zwei bequemen Einzelbetten, ideal für Gäste, Kinder oder Freunde.",
      features: ["Zwei Einzelbetten", "Ruhige Gartenausrichtung", "Leselampen", "Klimaanlage"]
    },
    {
      id: "b4",
      name: "Schlafzimmer 4",
      bedType: "1 Queen-Size-Bett",
      capacity: "2 Gäste",
      description: "Erholsame Schlafsuite mit individueller Klimatisierung, Queen-Bett und friedlichem Blick ins Grüne.",
      features: ["1 Queen-Size-Bett", "Individuelle Klimatisierung", "Gartenausrichtung", "Geräumiger Kleiderschrank"]
    },
    {
      id: "b5",
      name: "Schlafzimmer 5",
      bedType: "1 Doppelbett",
      capacity: "2 Gäste",
      description: "Helles Doppelzimmer mit viel Privatsphäre, Ruhe und natürlichem Tageslicht.",
      features: ["1 Doppelbett", "Natürliches Tageslicht", "Klimaanlage", "Direkt angrenzendes Badezimmer"]
    },
    {
      id: "b6",
      name: "Schlafzimmer 6",
      bedType: "Twin-Betten (oder Doppelbett)",
      capacity: "2 Gäste",
      description: "Gemütliches Schlafzimmer mit zwei Einzelbetten (als Doppelbett kombinierbar), hochwertigen Matratzen und ruhiger Atmosphäre.",
      features: ["Twin-Betten / Doppelbett-Option", "Komfortmatratzen", "Frische Baumwollwäsche", "Schnelles WLAN"]
    }
  ]
};

// MULTILINGUAL FAQS (ALL 11 QUESTIONS)
export const FAQS_TRANSLATIONS: Record<Language, { q: string; a: string }[]> = {
  en: [
    {
      q: "How many guests can sleep at ES Pont?",
      a: "ES Pont can accommodate the following group size: 10 guests"
    },
    {
      q: "Is there a private pool available to guests staying at ES Pont?",
      a: "Yes, there is a private pool. You can find out more about this and the other facilities at ES Pont on this page."
    },
    {
      q: "Does ES Pont have a pool?",
      a: "Yes, this hotel has a pool. Find out the details about the pool and other facilities on this page."
    },
    {
      q: "Does ES Pont have a balcony?",
      a: "Yes, there are options at this property that have a balcony. You can find out more about this and the other facilities at ES Pont on this page."
    },
    {
      q: "Does ES Pont have a terrace?",
      a: "Yes, there are options at this property that have a terrace. You can find out more about this and the other facilities at ES Pont on this page."
    },
    {
      q: "What are the check-in and check-out times at ES Pont?",
      a: "Check-in at ES Pont is from 15:00, and check-out is until 11:00."
    },
    {
      q: "How many bedrooms does ES Pont have?",
      a: "ES Pont has the following number of bedrooms: 6 bedrooms"
    },
    {
      q: "How much does it cost to stay at ES Pont?",
      a: "The prices at ES Pont may vary depending on your stay (e.g. dates you select, hotel's policy etc.). See the prices by entering your dates."
    },
    {
      q: "What is there to do at ES Pont?",
      a: "ES Pont offers the following activities / services (charges may apply): Cycling, Hiking, Tennis court, Golf course (within 3 km), Fitness, Swimming pool"
    },
    {
      q: "How far is ES Pont from the centre of Son Vida?",
      a: "ES Pont is 700 m from the centre of Son Vida."
    },
    {
      q: "Is ES Pont popular with families?",
      a: "Yes, ES Pont is popular with guests booking family stays."
    }
  ],
  es: [
    {
      q: "¿Cuántos huéspedes pueden dormir en ES Pont?",
      a: "ES Pont tiene capacidad para el siguiente tamaño de grupo: 10 huéspedes"
    },
    {
      q: "¿Hay piscina privada disponible para los huéspedes de ES Pont?",
      a: "Sí, hay una piscina privada. Puede encontrar más detalles sobre esta y las demás instalaciones de ES Pont en esta página."
    },
    {
      q: "¿Tiene piscina ES Pont?",
      a: "Sí, la propiedad cuenta con piscina. Consulte todos los detalles sobre la piscina y otras instalaciones en esta página."
    },
    {
      q: "¿Tiene balcón ES Pont?",
      a: "Sí, la propiedad cuenta con opciones que disponen de balcón. Puede conocer más detalles sobre esto y otras comodidades en esta página."
    },
    {
      q: "¿Tiene terraza ES Pont?",
      a: "Sí, la propiedad cuenta con opciones que disponen de terraza. Puede conocer más detalles en esta página."
    },
    {
      q: "¿Cuáles son los horarios de entrada y salida en ES Pont?",
      a: "El horario de entrada en ES Pont es a partir de las 15:00 y la salida es hasta las 11:00."
    },
    {
      q: "¿Cuántos dormitorios tiene ES Pont?",
      a: "ES Pont cuenta con el siguiente número de dormitorios: 6 dormitorios"
    },
    {
      q: "¿Cuánto cuesta alojarse en ES Pont?",
      a: "Los precios en ES Pont pueden variar según la estancia (p. ej. fechas seleccionadas, condiciones del alojamiento, etc.). Ingrese sus fechas para ver los precios exactos."
    },
    {
      q: "¿Qué actividades se pueden realizar en ES Pont?",
      a: "ES Pont ofrece las siguientes actividades y servicios (pueden aplicarse cargos): Ciclismo, Senderismo, Pista de tenis, Campo de golf (a menos de 3 km), Fitness, Piscina"
    },
    {
      q: "¿A qué distancia está ES Pont del centro de Son Vida?",
      a: "ES Pont se encuentra a 700 m del centro de Son Vida."
    },
    {
      q: "¿Es ES Pont un alojamiento popular entre familias?",
      a: "Sí, ES Pont es muy popular entre las familias que reservan estancias vacacionales."
    }
  ],
  de: [
    {
      q: "Wie viele Gäste können in ES Pont übernachten?",
      a: "ES Pont bietet Platz für folgende Gruppengröße: 10 Gäste"
    },
    {
      q: "Gibt es bei ES Pont einen privaten Pool?",
      a: "Ja, es gibt einen privaten Pool. Weitere Informationen hierzu und zu den weiteren Einrichtungen finden Sie auf dieser Seite."
    },
    {
      q: "Verfügt ES Pont über einen Pool?",
      a: "Ja, dieses Anwesen verfügt über einen Swimmingpool. Einzelheiten zum Pool und den weiteren Einrichtungen finden Sie auf dieser Seite."
    },
    {
      q: "Hat ES Pont einen Balkon?",
      a: "Ja, es gibt Zimmeroptionen mit Balkon. Weitere Informationen hierzu finden Sie auf dieser Seite."
    },
    {
      q: "Hat ES Pont eine Terrasse?",
      a: "Ja, es gibt Terrassenbereiche bei dieser Unterkunft. Weitere Informationen finden Sie auf dieser Seite."
    },
    {
      q: "Wann sind die Check-in- und Check-out-Zeiten in ES Pont?",
      a: "Der Check-in in ES Pont ist ab 15:00 Uhr möglich, der Check-out erfolgt bis 11:00 Uhr."
    },
    {
      q: "Wie viele Schlafzimmer hat ES Pont?",
      a: "ES Pont verfügt über folgende Anzahl an Schlafzimmern: 6 Schlafzimmer"
    },
    {
      q: "Wie viel kostet ein Aufenthalt in ES Pont?",
      a: "Die Preise in ES Pont können je nach Aufenthalt variieren (z. B. gewählte Daten, Richtlinien etc.). Geben Sie Ihre Daten ein, um die aktuellen Preise zu sehen."
    },
    {
      q: "Welche Aktivitäten werden in ES Pont angeboten?",
      a: "ES Pont bietet folgende Aktivitäten und Services an (möglicherweise gebührenpflichtig): Radfahren, Wandern, Tennisplatz, Golfplatz (im Umkreis von 3 km), Fitness, Swimmingpool"
    },
    {
      q: "Wie weit ist ES Pont vom Zentrum von Son Vida entfernt?",
      a: "ES Pont ist 700 m vom Zentrum von Son Vida entfernt."
    },
    {
      q: "Ist ES Pont bei Familien beliebt?",
      a: "Ja, ES Pont ist bei Familien für Urlaubsaufenthalte sehr beliebt."
    }
  ]
};

// MULTILINGUAL NEARBY ATTRACTIONS
export const ATTRACTIONS_TRANSLATIONS: Record<Language, any[]> = {
  en: [
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
  ],
  es: [
    {
      name: "Son Vida Golf",
      distance: "1,2 km",
      driveTime: "3 min en coche",
      description: "El campo de golf de 18 hoyos más antiguo y prestigioso de Mallorca, con legendarias calles y restaurante en la casa club.",
      category: "nature"
    },
    {
      name: "Son Muntaner & Son Quint Golf",
      distance: "2,4 km",
      driveTime: "5 min en coche",
      description: "Dos campos de golf de campeonato de 18 hoyos rodeados de centenarios olivos y vistas panorámicas.",
      category: "nature"
    },
    {
      name: "Casco Antiguo de Palma y Catedral (La Seu)",
      distance: "5,5 km",
      driveTime: "10 min en coche",
      description: "La obra maestra gótica de la Catedral de Santa María, callejuelas empedradas, boutiques artesanas y patios señoriales.",
      category: "village"
    },
    {
      name: "Paseo Marítimo y Puerto Deportivo de Palma",
      distance: "6,0 km",
      driveTime: "10 min en coche",
      description: "Animado paseo marítimo frente al mar con yates exclusivos, coctelerías y restaurantes galardonados.",
      category: "dining"
    },
    {
      name: "Playa de Cala Major",
      distance: "7,8 km",
      driveTime: "12 min en coche",
      description: "Cala de arena dorada con aguas turquesas transparentes, tumbonas y chiringuitos de marisco fresco frente al mar.",
      category: "beach"
    },
    {
      name: "Aeropuerto Internacional de Palma (PMI)",
      distance: "16 km",
      driveTime: "18 min en coche",
      description: "Rápida conexión por autopista con el aeropuerto de Mallorca en coche de alquiler o chófer privado.",
      category: "transport"
    }
  ],
  de: [
    {
      name: "Son Vida Golf",
      distance: "1,2 km",
      driveTime: "3 Min. Fahrt",
      description: "Mallorcas ältester und renommiertester 18-Loch-Meisterschaftsplatz mit legendären Fairways und feinem Clubhaus-Restaurant.",
      category: "nature"
    },
    {
      name: "Son Muntaner & Son Quint Golf",
      distance: "2,4 km",
      driveTime: "5 Min. Fahrt",
      description: "Zwei erstklassige 18-Loch-Golfplätze eingebettet in jahrhundertealte Olivenhaine mit herrlicher Aussicht.",
      category: "nature"
    },
    {
      name: "Historische Altstadt von Palma & Kathedrale (La Seu)",
      distance: "5,5 km",
      driveTime: "10 Min. Fahrt",
      description: "Das gotische Meisterwerk La Seu, kopfsteingepflasterte Gassen, edle Boutiquen und traditionelle Innenhöfe.",
      category: "village"
    },
    {
      name: "Paseo Marítimo & Yachthafen von Palma",
      distance: "6,0 km",
      driveTime: "10 Min. Fahrt",
      description: "Lebendige Uferpromenade mit Luxusyachten, stilvollen Bars und erstklassiger Gastronomie am Wasser.",
      category: "dining"
    },
    {
      name: "Strand Cala Major",
      distance: "7,8 km",
      driveTime: "12 Min. Fahrt",
      description: "Feine Sandbucht mit kristallklarem türkisblauem Wasser, Liegen und Strandbars für fangfrische Meeresfrüchte.",
      category: "beach"
    },
    {
      name: "Flughafen Palma de Mallorca (PMI)",
      distance: "16 km",
      driveTime: "18 Min. Fahrt",
      description: "Schnelle Autobahnanbindung zum Flughafen per Mietwagen oder privatem Chauffeur-Transfer.",
      category: "transport"
    }
  ]
};

// MULTILINGUAL AMENITIES
export const AMENITIES_TRANSLATIONS: Record<Language, Record<string, { name: string; description?: string }>> = {
  en: {
    v1: { name: "City skyline view", description: "Expansive panoramic perspective over the historic Palma skyline" },
    v2: { name: "Bay view", description: "Breathtaking vistas across the open Mediterranean waters of Palma Bay" },
    v3: { name: "Pool view", description: "Overlooking the private freshwater swimming pool and sun deck" },
    v4: { name: "Sea view", description: "Sparkling Mediterranean horizon from elevated terraces" },
    b1: { name: "Hairdryer" },
    b2: { name: "Shampoo" },
    b3: { name: "Hot water", description: "Continuous reliable hot water supply across all 4 bathrooms" },
    bl1: { name: "Washing machine" },
    bl2: { name: "Tumble dryer" },
    bl3: { name: "Essentials", description: "Towels, bed sheets, soap and toilet paper" },
    bl4: { name: "Hangers" },
    bl5: { name: "Iron" },
    e1: { name: "TV", description: "High-definition television in the living salon" },
    hc1: { name: "Air conditioning", description: "Climate control units in living areas and bedrooms" },
    hc2: { name: "Indoor fireplace", description: "Traditional Spanish wood-burning fireplace" },
    hc3: { name: "Heating", description: "Comprehensive heating for year-round comfort" },
    hs1: { name: "Exterior security cameras on property", description: "Outside areas, such as the entryway, are monitored by security cameras." },
    hs2: { name: "Smoke alarm" },
    hs3: { name: "Carbon monoxide alarm" },
    io1: { name: "Wifi", description: "Fast, reliable wireless internet across the estate" },
    io2: { name: "Dedicated workspace", description: "Quiet desk setup suitable for remote work or study" },
    kd1: { name: "Kitchen", description: "Space where guests can cook their own meals" },
    kd2: { name: "Fridge", description: "Large refrigerator and freezer compartment" },
    kd3: { name: "Cooking basics", description: "Pots and pans, oil, salt and pepper" },
    kd4: { name: "Coffee maker", description: "Fresh morning coffee preparation" },
    lf1: { name: "Private entrance", description: "Separate street or building entrance" },
    od1: { name: "Outdoor furniture", description: "Dining tables, sun loungers, and shaded terrace seating" },
    pf1: { name: "Free parking on premises", description: "Secure private on-site parking for multiple cars" },
    pf2: { name: "Pool", description: "Private 10m × 5m freshwater swimming pool" },
    pf3: { name: "Gym", description: "Fitness facilities and basketball court on premises" },
    s1: { name: "Pets allowed", description: "Assistance animals are always allowed" },
    s2: { name: "Smoking allowed", description: "Permitted in designated outdoor areas" },
    s3: { name: "Host greets you", description: "Personal warm greeting on arrival or flexible smart lock access" }
  },
  es: {
    v1: { name: "Vistas al perfil de la ciudad", description: "Amplia perspectiva panorámica sobre el horizonte histórico de Palma" },
    v2: { name: "Vistas a la bahía", description: "Impresionantes vistas a las aguas abiertas de la Bahía de Palma" },
    v3: { name: "Vistas a la piscina", description: "Con vistas directas a la piscina privada y el solárium" },
    v4: { name: "Vistas al mar", description: "El brillante horizonte mediterráneo desde las terrazas elevadas" },
    b1: { name: "Secador de pelo" },
    b2: { name: "Champú y gel" },
    b3: { name: "Agua caliente continua", description: "Suministro continuo de agua caliente en los 4 baños" },
    bl1: { name: "Lavadora" },
    bl2: { name: "Secadora" },
    bl3: { name: "Elementos básicos", description: "Toallas, sábanas, jabón y papel higiénico" },
    bl4: { name: "Perchas" },
    bl5: { name: "Plancha" },
    e1: { name: "Televisión de alta definición", description: "Televisión de pantalla plana en el salón principal" },
    hc1: { name: "Aire acondicionado", description: "Unidades de climatización independiente en salones y dormitorios" },
    hc2: { name: "Chimenea interior", description: "Auténtica chimenea de leña de estilo español" },
    hc3: { name: "Calefacción integral", description: "Calefacción completa para confort en cualquier época del año" },
    hs1: { name: "Cámaras de seguridad exteriores", description: "Las zonas exteriores y el acceso cuentan con supervisión de seguridad." },
    hs2: { name: "Detector de humo" },
    hs3: { name: "Detector de monóxido de carbono" },
    io1: { name: "Conexión Wi-Fi rápida", description: "Internet inalámbrico rápido y fiable en toda la finca" },
    io2: { name: "Zona de trabajo dedicada", description: "Escritorio tranquilo idóneo para teletrabajo o lectura" },
    kd1: { name: "Cocina completa", description: "Espacio totalmente equipado para preparar comidas y cenas" },
    kd2: { name: "Frigorífico grande", description: "Refrigerador espacioso con compartimento congelador" },
    kd3: { name: "Utensilios básicos de cocina", description: "Ollas, sartenes, aceite, sal y pimienta" },
    kd4: { name: "Cafetera", description: "Cafetera para disfrutar del café recién hecho cada mañana" },
    lf1: { name: "Entrada privada independiente", description: "Acceso privado e independiente desde la calle" },
    od1: { name: "Mobiliario exterior de terraza", description: "Mesas de comedor exterior, tumbonas y asientos sombreados" },
    pf1: { name: "Aparcamiento gratuito en la finca", description: "Aparcamiento privado y seguro dentro del recinto para varios coches" },
    pf2: { name: "Piscina privada", description: "Piscina privada de agua dulce de 10 m × 5 m" },
    pf3: { name: "Gimnasio y pista de baloncesto", description: "Instalaciones de fitness y cancha de baloncesto privada" },
    s1: { name: "Mascotas permitidas", description: "Se admiten animales de asistencia y mascotas bajo petición previa" },
    s2: { name: "Zona fumadores exterior", description: "Permitido en las zonas exteriores designadas" },
    s3: { name: "Bienvenida por el anfitrión", description: "Recepción personalizada a la llegada o acceso autónomo con llave inteligente" }
  },
  de: {
    v1: { name: "Blick auf die Skyline der Stadt", description: "Weite Panoramasicht auf die historische Altstadt von Palma" },
    v2: { name: "Blick auf die Bucht", description: "Atemberaubender Blick über die Bucht von Palma und das Mittelmeer" },
    v3: { name: "Blick auf den Pool", description: "Direkter Ausblick auf den privaten Swimmingpool und das Sonnendeck" },
    v4: { name: "Meerblick", description: "Glitzernder mediterraner Horizont von den erhöhten Terrassen" },
    b1: { name: "Haartrockner" },
    b2: { name: "Shampoo & Duschgel" },
    b3: { name: "Warmwasser", description: "Zuverlässige kontinuierliche Warmwasserversorgung in allen 4 Bädern" },
    bl1: { name: "Waschmaschine" },
    bl2: { name: "Wäschetrockner" },
    bl3: { name: "Grundausstattung", description: "Handtücher, Bettwäsche, Seife und Toilettenpapier" },
    bl4: { name: "Kleiderbügel" },
    bl5: { name: "Bügeleisen" },
    e1: { name: "HD-Fernseher", description: "Großer Flachbildfernseher im Wohnsalon" },
    hc1: { name: "Klimaanlage", description: "Individuell regulierbare Klimageräte in Wohnräumen und Schlafzimmern" },
    hc2: { name: "Offener Kamin", description: "Traditioneller spanischer Holzkamin für gemütliche Stunden" },
    hc3: { name: "Heizung", description: "Ganzjährige angenehme Beheizung im gesamten Haus" },
    hs1: { name: "Außen-Sicherheitskameras", description: "Außenbereiche wie der Zufahrtsbereich werden videoüberwacht." },
    hs2: { name: "Rauchmelder" },
    hs3: { name: "Kohlenmonoxidmelder" },
    io1: { name: "Highspeed-WLAN", description: "Schnelles, stabiles kabelloses Internet auf dem gesamten Anwesen" },
    io2: { name: "Arbeitsplatz", description: "Ruhiger Schreibtischbereich für Remote-Arbeit oder Studium" },
    kd1: { name: "Voll ausgestattete Küche", description: "Perfekt ausgestattet zum gemeinsamen Kochen" },
    kd2: { name: "Kühlschrank & Gefrierfach", description: "Großer Kühlschrank mit ausreichend Platz für Vorräte" },
    kd3: { name: "Kochgrundausstattung", description: "Töpfe, Pfannen, Öl, Salz und Pfeffer" },
    kd4: { name: "Kaffeemaschine", description: "Frischer Kaffee für den perfekten Start in den Tag" },
    lf1: { name: "Eigener privater Eingang", description: "Separater privater Zugang zum Anwesen" },
    od1: { name: "Garten- & Terrassenmöbel", description: "Esstische im Freien, Sonnenliegen und schattige Loungemöbel" },
    pf1: { name: "Kostenloser Parkplatz auf dem Anwesen", description: "Sichere private Stellplätze auf dem abgeschlossenen Grundstück" },
    pf2: { name: "Privater Pool", description: "Großer privater 10 m × 5 m Süßwasserpool" },
    pf3: { name: "Fitness & Basketballplatz", description: "Fitnessgeräte und privater Basketballplatz auf dem Grundstück" },
    s1: { name: "Haustiere erlaubt", description: "Assistenztiere und Haustiere nach vorheriger Absprache willkommen" },
    s2: { name: "Rauchen im Freien gestattet", description: "In gekennzeichneten Außenbereichen gestattet" },
    s3: { name: "Persönlicher Empfang", description: "Persönliche Schlüsselübergabe oder flexibler kontaktloser Zugang per Smart Keybox" }
  }
};
