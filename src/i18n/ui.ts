export const defaultLang = 'es';

export type Lang = 'es' | 'en';

export const ui = {
  es: {
    // ──────────────────────────────────────────────
    // Navigation
    // ──────────────────────────────────────────────
    'nav.home': 'Inicio',
    'nav.fleet': 'Flota',
    'nav.whyUs': 'Por Que Nosotros',
    'nav.destinations': 'Destinos',
    'nav.pricing': 'Tarifas',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar Ahora',

    // ──────────────────────────────────────────────
    // Hero
    // ──────────────────────────────────────────────
    'hero.title': 'Explora Kenia a Tu Ritmo',
    'hero.subtitle':
      'Alquila un 4x4 preparado para safari y recorre las reservas mas impresionantes de Africa sin depender de tours grupales. Tu aventura, tus horarios, tu camino.',
    'hero.cta': 'Reserva por WhatsApp',
    'hero.ctaSecondary': 'Ver Nuestra Flota',
    'hero.badge': 'Mas de 500 aventureros confian en nosotros',

    // ──────────────────────────────────────────────
    // Fleet
    // ──────────────────────────────────────────────
    'fleet.title': 'Nuestra Flota Safari',
    'fleet.subtitle':
      'Vehiculos 4x4 inspeccionados antes de cada alquiler, equipados con techo elevable para avistamiento de fauna, nevera portatil y kit de emergencia.',

    'fleet.vehicle1.name': 'Toyota Land Cruiser Serie 70',
    'fleet.vehicle1.category': 'Buque Insignia Safari',
    'fleet.vehicle1.description':
      'El rey indiscutible del safari africano. Motor turbodiesel 4.5 L V8 con doble deposito de combustible para mas de 900 km de autonomia, techo elevable reforzado para avistamiento de fauna y suspension de largo recorrido que domina cualquier pista de Kenia.',
    'fleet.vehicle1.price': '$180',
    'fleet.vehicle1.seats': '5 pasajeros',
    'fleet.vehicle1.transmission': 'Manual',
    'fleet.vehicle1.fuel': 'Diesel',
    'fleet.vehicle1.drive': 'Traccion 4x4 permanente',

    'fleet.vehicle2.name': 'Toyota Land Cruiser Prado',
    'fleet.vehicle2.category': '4x4 Mas Popular',
    'fleet.vehicle2.description':
      'El favorito de los viajeros experimentados. Combina la robustez todoterreno con comodidad de turismo: aire acondicionado potente, techo elevable pop-up, tercera fila de asientos opcional y sistema multimedia con navegacion GPS integrada.',
    'fleet.vehicle2.price': '$120',
    'fleet.vehicle2.seats': '5-7 pasajeros',
    'fleet.vehicle2.transmission': 'Automatica',
    'fleet.vehicle2.fuel': 'Diesel',
    'fleet.vehicle2.drive': 'Traccion 4x4 con reductora',

    'fleet.vehicle3.name': 'Toyota Hilux Doble Cabina',
    'fleet.vehicle3.category': 'Aventura y Carga',
    'fleet.vehicle3.description':
      'Pick-up indestructible con caja trasera para equipaje y equipo de camping. Ideal para safaris autoguiados con tienda de techo. Motor 2.8 turbodiésel, proteccion de bajos reforzada y faros LED auxiliares para conduccion nocturna.',
    'fleet.vehicle3.price': '$95',
    'fleet.vehicle3.seats': '5 pasajeros',
    'fleet.vehicle3.transmission': 'Manual / Automatica',
    'fleet.vehicle3.fuel': 'Diesel',
    'fleet.vehicle3.drive': 'Traccion 4x4 seleccionable',

    'fleet.vehicle4.name': 'Toyota RAV4',
    'fleet.vehicle4.category': 'Ciudad y Turismo',
    'fleet.vehicle4.description':
      'Perfecto para recorrer Nairobi, la costa de Mombasa o rutas asfaltadas entre parques nacionales. Consumo eficiente, facil de aparcar y con espacio de sobra para dos maletas grandes. Incluye Bluetooth y camara de reversa.',
    'fleet.vehicle4.price': '$65',
    'fleet.vehicle4.seats': '5 pasajeros',
    'fleet.vehicle4.transmission': 'Automatica',
    'fleet.vehicle4.fuel': 'Gasolina',
    'fleet.vehicle4.drive': 'Traccion AWD',

    'fleet.vehicle5.name': 'Land Rover Defender',
    'fleet.vehicle5.category': 'Bestia Todoterreno',
    'fleet.vehicle5.description':
      'Para quienes buscan lo extremo. Iconico diseno britanico con capacidad todoterreno sin igual: bloqueo de diferenciales, vadeo de hasta 900 mm, techo elevable panoramico y anclajes para equipo de expedicion. La eleccion de los fotografos profesionales.',
    'fleet.vehicle5.price': '$150',
    'fleet.vehicle5.seats': '5 pasajeros',
    'fleet.vehicle5.transmission': 'Automatica',
    'fleet.vehicle5.fuel': 'Diesel',
    'fleet.vehicle5.drive': 'Traccion 4x4 permanente con Terrain Response',

    'fleet.vehicle6.name': 'Safari Van (Toyota HiAce Modificada)',
    'fleet.vehicle6.category': 'Tours en Grupo',
    'fleet.vehicle6.description':
      'Minivan con techo elevable extenso para avistamiento en grupo, ideal para familias o pequenos grupos. Asientos reclinables con vista elevada, nevera a bordo, tomas de corriente USB en cada fila y amplio espacio para equipaje.',
    'fleet.vehicle6.price': '$110',
    'fleet.vehicle6.seats': '7-9 pasajeros',
    'fleet.vehicle6.transmission': 'Automatica',
    'fleet.vehicle6.fuel': 'Diesel',
    'fleet.vehicle6.drive': 'Traccion trasera (rutas principales)',

    'fleet.viewAll': 'Ver Toda la Flota',
    'fleet.perDay': '/dia',

    // ──────────────────────────────────────────────
    // Why Us
    // ──────────────────────────────────────────────
    'whyUs.title': 'Por Que Elegirnos',
    'whyUs.subtitle':
      'Mas de una decada llevando viajeros por las pistas de Kenia. Esto es lo que nos diferencia.',

    'whyUs.reason1.title': 'Vehiculos Inspeccionados',
    'whyUs.reason1.description':
      'Cada vehiculo pasa una inspeccion de 42 puntos antes de cada alquiler: neumaticos, frenos, suspension, niveles de fluidos, comunicaciones y equipo de emergencia. Ningun coche sale de nuestra base sin el visto bueno del mecanico jefe.',

    'whyUs.reason2.title': 'Seguro Todo Incluido',
    'whyUs.reason2.description':
      'Seguro a terceros y contra danos propios incluido en el precio, sin franquicias sorpresa. Cobertura valida en todas las reservas y parques nacionales de Kenia. Opcion de seguro premium sin franquicia disponible.',

    'whyUs.reason3.title': 'Asistencia 24/7',
    'whyUs.reason3.description':
      'Linea directa de emergencia operativa las 24 horas, los 7 dias. Mecanicos de guardia en Nairobi, Mombasa y Nakuru con vehiculo de rescate. Si tienes un problema, estamos contigo en menos de lo que esperas.',

    'whyUs.reason4.title': 'Entrega en Aeropuerto u Hotel',
    'whyUs.reason4.description':
      'Recoge tu vehiculo directamente en el Aeropuerto Internacional Jomo Kenyatta, Wilson Airport o en la puerta de tu hotel en Nairobi y Mombasa. Sin taxis, sin esperas, sin complicaciones.',

    'whyUs.reason5.title': 'Sin Cargos Ocultos',
    'whyUs.reason5.description':
      'El precio que ves es el precio que pagas. Incluye kilometraje ilimitado en la mayoria de vehiculos, seguro basico, GPS y entrega en la ciudad. Sin sorpresas desagradables al devolver el coche.',

    'whyUs.reason6.title': 'Experiencia Local',
    'whyUs.reason6.description':
      'Nuestro equipo keniano te asesora sobre las mejores rutas, el estado de las pistas en tiempo real, las epocas de migracion y los campamentos recomendados. Tambien ofrecemos conductores-guia profesionales si lo prefieres.',

    // ──────────────────────────────────────────────
    // How It Works
    // ──────────────────────────────────────────────
    'howItWorks.title': 'Como Funciona',
    'howItWorks.subtitle':
      'Reservar tu 4x4 de safari es tan facil como enviar un mensaje. Tres pasos y estaras en camino.',

    'howItWorks.step1.title': '1. Cuentanos Tu Plan',
    'howItWorks.step1.description':
      'Escribenos por WhatsApp o correo con tus fechas, destinos y numero de viajeros. Te recomendaremos el vehiculo ideal y un itinerario optimizado.',

    'howItWorks.step2.title': '2. Confirma y Reserva',
    'howItWorks.step2.description':
      'Recibe tu presupuesto detallado sin compromiso. Confirma con un deposito del 30 % mediante tarjeta, transferencia o M-Pesa y tu vehiculo quedara reservado.',

    'howItWorks.step3.title': '3. Recoge y Explora',
    'howItWorks.step3.description':
      'Recoge el vehiculo en el aeropuerto o tu hotel, recibe una orientacion completa del coche y las rutas, y lanzate a descubrir Kenia a tu aire.',

    // ──────────────────────────────────────────────
    // Destinations
    // ──────────────────────────────────────────────
    'destinations.title': 'Destinos Imprescindibles',
    'destinations.subtitle':
      'Kenia alberga algunos de los ecosistemas mas espectaculares del planeta. Estos son los destinos estrella que puedes alcanzar con nuestros vehiculos.',

    'destinations.dest1.name': 'Masai Mara',
    'destinations.dest1.description':
      'La joya de la corona africana. Presencia la Gran Migracion de mas de dos millones de nus entre julio y octubre, avista a los Cinco Grandes en una sola manana y acampa bajo cielos estrellados en la sabana infinita. A solo 5 horas en 4x4 desde Nairobi.',

    'destinations.dest2.name': 'Amboseli',
    'destinations.dest2.description':
      'Manadas de elefantes caminando con el majestuoso Kilimanjaro nevado de fondo: la postal mas iconica de Africa. Parque compacto y facil de recorrer, perfecto para un safari de dos o tres dias combinado con Tsavo.',

    'destinations.dest3.name': 'Tsavo',
    'destinations.dest3.description':
      'El parque mas grande de Kenia, dividido en Tsavo Este y Tsavo Oeste. Paisajes volcanicos de lava roja, los famosos elefantes rojos, el manantial Mzima de aguas cristalinas y mucha menos afluencia turistica. Aventura autentica fuera de las rutas trilladas.',

    'destinations.dest4.name': 'Lago Nakuru',
    'destinations.dest4.description':
      'Miles de flamencos rosados tiñendo las orillas del lago, rinocerontes blancos y negros en un santuario protegido y bosques de euforbias unicos. A solo 2,5 horas de Nairobi, es la excursion perfecta de un dia o escala hacia el Mara.',

    'destinations.exploreCta': 'Planifica Tu Ruta',

    // ──────────────────────────────────────────────
    // Testimonials
    // ──────────────────────────────────────────────
    'testimonials.title': 'Lo Que Dicen Nuestros Viajeros',
    'testimonials.subtitle':
      'Cientos de aventureros de todo el mundo han recorrido Kenia con nuestros vehiculos. Estas son algunas de sus experiencias.',

    'testimonials.review1.text':
      'Alquilamos un Land Cruiser Serie 70 para diez dias por Masai Mara y Amboseli. El vehiculo estaba impecable, el techo elevable fue fantastico para las fotos y el equipo nos envio actualizaciones de las pistas por WhatsApp cada manana. Volveremos sin duda.',
    'testimonials.review1.author': 'Klaus & Ingrid Hoffmann',
    'testimonials.review1.country': 'Alemania',

    'testimonials.review2.text':
      'Eramos cuatro amigos y cogimos un Prado con conductor-guia. Fue la mejor decision del viaje. Joseph, nuestro guia, conocia cada rincón del Mara y nos llevo a avistamientos increibles lejos de las aglomeraciones. El precio con todo incluido fue muy competitivo.',
    'testimonials.review2.author': 'Maria y Pablo Garcia',
    'testimonials.review2.country': 'Espana',

    'testimonials.review3.text':
      'He hecho safaris en Botsuana, Tanzania y Sudafrica, y este ha sido el alquiler de vehiculo mas profesional con diferencia. Entrega puntual en el aeropuerto, documentacion clara, vehiculo en perfecto estado y un servicio de atencion que realmente responde. Muy recomendable.',
    'testimonials.review3.author': 'James Whitmore',
    'testimonials.review3.country': 'Reino Unido',

    // ──────────────────────────────────────────────
    // Pricing
    // ──────────────────────────────────────────────
    'pricing.title': 'Tarifas Transparentes',
    'pricing.subtitle':
      'Precios claros sin letra pequena. Cuanto mas largo el alquiler, mejor la tarifa. Todos los precios en dolares americanos.',

    'pricing.daily': 'Diario',
    'pricing.weekly': 'Semanal (-10 %)',
    'pricing.monthly': 'Mensual (-25 %)',

    'pricing.includes.title': 'Incluido en el Precio',
    'pricing.includes.item1': 'Seguro a terceros y contra danos',
    'pricing.includes.item2': 'Kilometraje ilimitado',
    'pricing.includes.item3': 'Asistencia en carretera 24/7',
    'pricing.includes.item4': 'Entrega y recogida en Nairobi',
    'pricing.includes.item5': 'Navegacion GPS y mapas offline',

    'pricing.excludes.title': 'No Incluido',
    'pricing.excludes.item1': 'Combustible (diesel aprox. $1.45/litro)',
    'pricing.excludes.item2': 'Tasas de entrada a parques nacionales',
    'pricing.excludes.item3': 'Permisos transfronterizos (Tanzania/Uganda)',

    'pricing.cta': 'Solicitar Presupuesto Personalizado',

    // ──────────────────────────────────────────────
    // FAQ
    // ──────────────────────────────────────────────
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle':
      'Resolvemos tus dudas mas habituales. Si no encuentras la respuesta aqui, escribenos por WhatsApp y te respondemos al instante.',

    'faq.q1': 'Que documentos necesito para alquilar un vehiculo?',
    'faq.a1':
      'Necesitas un permiso de conducir vigente de tu pais de origen (aceptamos licencias de la UE, Reino Unido, EE. UU., Canada y Australia sin carnet internacional), tu pasaporte y una tarjeta de credito a tu nombre para el deposito de garantia. Si tu licencia no esta en ingles, recomendamos obtener un Permiso Internacional de Conduccion (IDP).',

    'faq.q2': 'Que cubre el seguro incluido?',
    'faq.a2':
      'El seguro basico incluye responsabilidad civil a terceros y cobertura contra danos propios con una franquicia de $1,000. Ofrecemos un seguro premium opcional (desde $15/dia) que reduce la franquicia a $0 y anade cobertura de parabrisas, neumaticos y bajos del vehiculo, perfecto para pistas de safari exigentes.',

    'faq.q3': 'Cual es la politica de combustible?',
    'faq.a3':
      'Entregamos el vehiculo con el deposito lleno y te pedimos que lo devuelvas lleno. Si no es posible, aplicamos un cargo de repostaje a precio de mercado mas una pequena tasa de servicio de $20. En las zonas de safari hay gasolineras en los pueblos principales; te proporcionamos un mapa actualizado de puntos de repostaje.',

    'faq.q4': 'Puedo cruzar la frontera a Tanzania o Uganda?',
    'faq.a4':
      'Si, permitimos viajes transfronterizos a Tanzania y Uganda con autorizacion previa (minimo 72 horas de antelacion). Se requiere un permiso adicional ($150) y seguro ampliado para el pais de destino. Te ayudamos con toda la documentacion necesaria, incluidas las cartas de autorizacion del vehiculo.',

    'faq.q5': 'Cual es la edad minima para alquilar?',
    'faq.a5':
      'El conductor principal debe tener al menos 23 anos y un minimo de 2 anos de experiencia de conduccion. Para vehiculos de categoria premium (Land Cruiser Serie 70 y Land Rover Defender), la edad minima es de 25 anos. Se pueden agregar conductores adicionales sin coste extra.',

    'faq.q6': 'Cual es la politica de cancelacion?',
    'faq.a6':
      'Cancelacion gratuita hasta 14 dias antes de la fecha de recogida con devolucion completa del deposito. Entre 7 y 14 dias, retenemos el 50 % del deposito. Con menos de 7 dias de antelacion, el deposito no es reembolsable. En caso de fuerza mayor (cancelacion de vuelos, restricciones de viaje), ofrecemos reprogramacion sin coste.',

    // ──────────────────────────────────────────────
    // Contact
    // ──────────────────────────────────────────────
    'contact.title': 'Hablemos de Tu Aventura',
    'contact.subtitle':
      'Estamos en Nairobi y respondemos rapido. Elige el canal que prefieras y te ayudamos a planificar el safari perfecto.',

    'contact.whatsapp': '+254 700 000 000',
    'contact.whatsappDesc': 'Respuesta inmediata, incluso fines de semana',
    'contact.email': 'info@keniasafarirentals.com',
    'contact.emailDesc': 'Te respondemos en menos de 2 horas laborales',
    'contact.phone': '+254 700 000 000',
    'contact.phoneDesc': 'Lunes a sabado, 7:00 - 20:00 (hora de Nairobi)',

    'contact.form.name': 'Tu nombre completo',
    'contact.form.dates': 'Fechas de viaje (llegada - salida)',
    'contact.form.vehicle': 'Vehiculo de interes',
    'contact.form.message': 'Cuentanos sobre tu viaje: destinos, numero de viajeros, necesidades especiales...',
    'contact.form.submit': 'Enviar Solicitud',

    'contact.location': 'Westlands, Nairobi, Kenia',

    // ──────────────────────────────────────────────
    // Footer
    // ──────────────────────────────────────────────
    'footer.description':
      'Kenia Safari Rentals es tu aliado de confianza para alquiler de vehiculos 4x4 en Kenia. Flota propia, precios transparentes y un equipo local que conoce cada pista del pais.',
    'footer.quickLinks': 'Enlaces Rapidos',
    'footer.legal': 'Legal',
    'footer.followUs': 'Siguenos',
    'footer.privacy': 'Politica de Privacidad',
    'footer.terms': 'Terminos y Condiciones',
    'footer.cookies': 'Politica de Cookies',
    'footer.copyright': ' 2026 Kenia Safari Rentals. Todos los derechos reservados.',
    'footer.payments': 'Aceptamos: Visa, Mastercard, PayPal, M-Pesa y transferencia bancaria',

    // ──────────────────────────────────────────────
    // General
    // ──────────────────────────────────────────────
    'general.learnMore': 'Saber Mas',
    'general.bookNow': 'Reservar Ahora',
    'general.whatsappMessage':
      'Hola! Me interesa alquilar un vehiculo para safari en Kenia. Me podrian dar mas informacion?',
    'general.currency': 'USD',
    'general.langSwitch': 'English',
  },

  en: {
    // ──────────────────────────────────────────────
    // Navigation
    // ──────────────────────────────────────────────
    'nav.home': 'Home',
    'nav.fleet': 'Fleet',
    'nav.whyUs': 'Why Us',
    'nav.destinations': 'Destinations',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',

    // ──────────────────────────────────────────────
    // Hero
    // ──────────────────────────────────────────────
    'hero.title': 'Explore Kenya at Your Own Pace',
    'hero.subtitle':
      'Rent a safari-ready 4x4 and drive through Africa\'s most breathtaking reserves on your own schedule. No group tours, no rigid itineraries — just you and the wild.',
    'hero.cta': 'Book via WhatsApp',
    'hero.ctaSecondary': 'Browse Our Fleet',
    'hero.badge': 'Trusted by 500+ adventurers worldwide',

    // ──────────────────────────────────────────────
    // Fleet
    // ──────────────────────────────────────────────
    'fleet.title': 'Our Safari Fleet',
    'fleet.subtitle':
      'Every vehicle undergoes a rigorous pre-rental inspection and comes equipped with a pop-up roof for game viewing, a portable cooler, and a full emergency kit.',

    'fleet.vehicle1.name': 'Toyota Land Cruiser 70 Series',
    'fleet.vehicle1.category': 'Safari Flagship',
    'fleet.vehicle1.description':
      'The undisputed king of the African bush. Powered by a 4.5 L V8 turbodiesel with dual fuel tanks for over 900 km range, a reinforced pop-up roof for unobstructed game viewing, and long-travel suspension that conquers every track in Kenya.',
    'fleet.vehicle1.price': '$180',
    'fleet.vehicle1.seats': '5 passengers',
    'fleet.vehicle1.transmission': 'Manual',
    'fleet.vehicle1.fuel': 'Diesel',
    'fleet.vehicle1.drive': 'Permanent 4WD',

    'fleet.vehicle2.name': 'Toyota Land Cruiser Prado',
    'fleet.vehicle2.category': 'Most Popular 4x4',
    'fleet.vehicle2.description':
      'The seasoned traveler\'s favorite. Combines rugged off-road capability with touring comfort: powerful A/C, pop-up viewing roof, optional third-row seating, and an integrated GPS navigation and multimedia system.',
    'fleet.vehicle2.price': '$120',
    'fleet.vehicle2.seats': '5-7 passengers',
    'fleet.vehicle2.transmission': 'Automatic',
    'fleet.vehicle2.fuel': 'Diesel',
    'fleet.vehicle2.drive': '4WD with low-range transfer',

    'fleet.vehicle3.name': 'Toyota Hilux Double Cab',
    'fleet.vehicle3.category': 'Adventure & Cargo',
    'fleet.vehicle3.description':
      'The indestructible pickup with a load bed for luggage and camping gear. Perfect for self-drive safaris with a rooftop tent. 2.8 turbodiesel engine, reinforced underbody protection, and auxiliary LED lights for night driving.',
    'fleet.vehicle3.price': '$95',
    'fleet.vehicle3.seats': '5 passengers',
    'fleet.vehicle3.transmission': 'Manual / Automatic',
    'fleet.vehicle3.fuel': 'Diesel',
    'fleet.vehicle3.drive': 'Selectable 4WD',

    'fleet.vehicle4.name': 'Toyota RAV4',
    'fleet.vehicle4.category': 'City & Touring',
    'fleet.vehicle4.description':
      'Perfect for navigating Nairobi, the Mombasa coast, or paved routes between national parks. Fuel-efficient, easy to park, and with plenty of room for two large suitcases. Includes Bluetooth connectivity and a reversing camera.',
    'fleet.vehicle4.price': '$65',
    'fleet.vehicle4.seats': '5 passengers',
    'fleet.vehicle4.transmission': 'Automatic',
    'fleet.vehicle4.fuel': 'Petrol',
    'fleet.vehicle4.drive': 'AWD',

    'fleet.vehicle5.name': 'Land Rover Defender',
    'fleet.vehicle5.category': 'Off-Road Beast',
    'fleet.vehicle5.description':
      'For those who seek the extreme. Iconic British design with unmatched off-road prowess: locking differentials, 900 mm wading depth, a panoramic pop-up roof, and expedition equipment tie-down points. The choice of professional wildlife photographers.',
    'fleet.vehicle5.price': '$150',
    'fleet.vehicle5.seats': '5 passengers',
    'fleet.vehicle5.transmission': 'Automatic',
    'fleet.vehicle5.fuel': 'Diesel',
    'fleet.vehicle5.drive': 'Permanent 4WD with Terrain Response',

    'fleet.vehicle6.name': 'Safari Van (Modified Toyota HiAce)',
    'fleet.vehicle6.category': 'Group Tours',
    'fleet.vehicle6.description':
      'A purpose-built minivan with an extended pop-up roof for group game viewing, ideal for families or small parties. Reclining elevated seats, an onboard cooler, USB charging ports at every row, and generous luggage space.',
    'fleet.vehicle6.price': '$110',
    'fleet.vehicle6.seats': '7-9 passengers',
    'fleet.vehicle6.transmission': 'Automatic',
    'fleet.vehicle6.fuel': 'Diesel',
    'fleet.vehicle6.drive': 'Rear-wheel drive (main routes)',

    'fleet.viewAll': 'View Full Fleet',
    'fleet.perDay': '/day',

    // ──────────────────────────────────────────────
    // Why Us
    // ──────────────────────────────────────────────
    'whyUs.title': 'Why Choose Us',
    'whyUs.subtitle':
      'Over a decade of driving travelers through Kenya\'s wild tracks. Here is what sets us apart.',

    'whyUs.reason1.title': 'Inspected Vehicles',
    'whyUs.reason1.description':
      'Every vehicle passes a 42-point inspection before each rental: tires, brakes, suspension, fluid levels, communications, and emergency equipment. No car leaves our base without the head mechanic\'s sign-off.',

    'whyUs.reason2.title': 'All-Inclusive Insurance',
    'whyUs.reason2.description':
      'Third-party liability and collision damage coverage included in the price with no surprise excess fees. Valid across all of Kenya\'s reserves and national parks. Optional zero-excess premium cover available.',

    'whyUs.reason3.title': '24/7 Roadside Assistance',
    'whyUs.reason3.description':
      'A direct emergency hotline manned around the clock, seven days a week. On-call mechanics stationed in Nairobi, Mombasa, and Nakuru with a dedicated rescue vehicle. If something goes wrong, we are there faster than you expect.',

    'whyUs.reason4.title': 'Airport & Hotel Delivery',
    'whyUs.reason4.description':
      'Pick up your vehicle right at Jomo Kenyatta International Airport, Wilson Airport, or at the door of your hotel in Nairobi and Mombasa. No taxis, no waiting, no hassle.',

    'whyUs.reason5.title': 'No Hidden Fees',
    'whyUs.reason5.description':
      'The price you see is the price you pay. Unlimited mileage on most vehicles, basic insurance, GPS, and city delivery all included. No nasty surprises when you return the car.',

    'whyUs.reason6.title': 'Local Expertise',
    'whyUs.reason6.description':
      'Our Kenyan team advises you on the best routes, real-time track conditions, migration seasons, and recommended campsites. We also offer professional driver-guides if you prefer to sit back and enjoy the ride.',

    // ──────────────────────────────────────────────
    // How It Works
    // ──────────────────────────────────────────────
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle':
      'Booking your safari 4x4 is as easy as sending a message. Three steps and you are on your way.',

    'howItWorks.step1.title': '1. Tell Us Your Plan',
    'howItWorks.step1.description':
      'Message us on WhatsApp or email with your dates, destinations, and group size. We will recommend the perfect vehicle and an optimized itinerary.',

    'howItWorks.step2.title': '2. Confirm & Reserve',
    'howItWorks.step2.description':
      'Receive a detailed, no-obligation quote. Confirm with a 30% deposit via credit card, bank transfer, or M-Pesa and your vehicle is locked in.',

    'howItWorks.step3.title': '3. Collect & Explore',
    'howItWorks.step3.description':
      'Pick up the vehicle at the airport or your hotel, get a full orientation on the car and routes, and set off to discover Kenya your way.',

    // ──────────────────────────────────────────────
    // Destinations
    // ──────────────────────────────────────────────
    'destinations.title': 'Must-Visit Destinations',
    'destinations.subtitle':
      'Kenya is home to some of the most spectacular ecosystems on the planet. These are the star destinations you can reach with our vehicles.',

    'destinations.dest1.name': 'Masai Mara',
    'destinations.dest1.description':
      'Africa\'s crown jewel. Witness the Great Migration of over two million wildebeest between July and October, spot the Big Five in a single morning, and camp under star-filled skies on the endless savannah. Just a five-hour 4x4 drive from Nairobi.',

    'destinations.dest2.name': 'Amboseli',
    'destinations.dest2.description':
      'Herds of elephants marching against the backdrop of a snow-capped Kilimanjaro — Africa\'s most iconic postcard. A compact, easy-to-navigate park that is perfect for a two- to three-day safari combined with Tsavo.',

    'destinations.dest3.name': 'Tsavo',
    'destinations.dest3.description':
      'Kenya\'s largest park, split into Tsavo East and Tsavo West. Red volcanic landscapes, the famous red-dusted elephants, the crystal-clear Mzima Springs, and far fewer tourist crowds. Authentic adventure off the beaten path.',

    'destinations.dest4.name': 'Lake Nakuru',
    'destinations.dest4.description':
      'Thousands of pink flamingos painting the lakeshore, white and black rhinos in a protected sanctuary, and unique euphorbia forests. Just 2.5 hours from Nairobi, it is the perfect day trip or a stopover en route to the Mara.',

    'destinations.exploreCta': 'Plan Your Route',

    // ──────────────────────────────────────────────
    // Testimonials
    // ──────────────────────────────────────────────
    'testimonials.title': 'What Our Travelers Say',
    'testimonials.subtitle':
      'Hundreds of adventurers from around the globe have explored Kenya with our vehicles. Here are some of their stories.',

    'testimonials.review1.text':
      'We rented a Land Cruiser 70 Series for ten days across the Masai Mara and Amboseli. The vehicle was spotless, the pop-up roof was fantastic for photography, and the team sent us track condition updates via WhatsApp every morning. We will absolutely be back.',
    'testimonials.review1.author': 'Klaus & Ingrid Hoffmann',
    'testimonials.review1.country': 'Germany',

    'testimonials.review2.text':
      'We were a group of four friends and we hired a Prado with a driver-guide. Best decision of the entire trip. Joseph, our guide, knew every corner of the Mara and took us to incredible sightings far from the crowds. The all-inclusive price was very competitive.',
    'testimonials.review2.author': 'Maria & Pablo Garcia',
    'testimonials.review2.country': 'Spain',

    'testimonials.review3.text':
      'I have done safaris in Botswana, Tanzania, and South Africa, and this has been the most professional vehicle rental by far. Punctual delivery at the airport, clear paperwork, vehicle in perfect condition, and a support team that actually answers. Highly recommended.',
    'testimonials.review3.author': 'James Whitmore',
    'testimonials.review3.country': 'United Kingdom',

    // ──────────────────────────────────────────────
    // Pricing
    // ──────────────────────────────────────────────
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle':
      'Clear prices with no fine print. The longer you rent, the better the rate. All prices in US dollars.',

    'pricing.daily': 'Daily',
    'pricing.weekly': 'Weekly (-10%)',
    'pricing.monthly': 'Monthly (-25%)',

    'pricing.includes.title': 'Included in the Price',
    'pricing.includes.item1': 'Third-party and collision damage insurance',
    'pricing.includes.item2': 'Unlimited mileage',
    'pricing.includes.item3': '24/7 roadside assistance',
    'pricing.includes.item4': 'Delivery and collection in Nairobi',
    'pricing.includes.item5': 'GPS navigation and offline maps',

    'pricing.excludes.title': 'Not Included',
    'pricing.excludes.item1': 'Fuel (diesel approx. $1.45/liter)',
    'pricing.excludes.item2': 'National park entry fees',
    'pricing.excludes.item3': 'Cross-border permits (Tanzania/Uganda)',

    'pricing.cta': 'Request a Custom Quote',

    // ──────────────────────────────────────────────
    // FAQ
    // ──────────────────────────────────────────────
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle':
      'Answers to the most common questions. If you cannot find what you are looking for, message us on WhatsApp and we will reply instantly.',

    'faq.q1': 'What documents do I need to rent a vehicle?',
    'faq.a1':
      'You need a valid driving license from your home country (we accept EU, UK, US, Canadian, and Australian licenses without an international permit), your passport, and a credit card in your name for the security deposit. If your license is not in English, we recommend obtaining an International Driving Permit (IDP).',

    'faq.q2': 'What does the included insurance cover?',
    'faq.a2':
      'The basic insurance includes third-party liability and collision damage waiver with a $1,000 excess. We offer optional premium cover (from $15/day) that reduces the excess to $0 and adds windscreen, tire, and underbody protection — ideal for demanding safari tracks.',

    'faq.q3': 'What is the fuel policy?',
    'faq.a3':
      'We deliver the vehicle with a full tank and ask that you return it full. If that is not possible, we apply a refueling charge at market rate plus a small $20 service fee. There are fuel stations in major towns near safari areas; we provide an updated map of refueling points.',

    'faq.q4': 'Can I cross the border into Tanzania or Uganda?',
    'faq.a4':
      'Yes, we allow cross-border travel to Tanzania and Uganda with prior authorization (minimum 72 hours\' notice). An additional permit ($150) and extended insurance for the destination country are required. We help you with all necessary paperwork, including vehicle authorization letters.',

    'faq.q5': 'What is the minimum age to rent?',
    'faq.a5':
      'The primary driver must be at least 23 years old with a minimum of 2 years\' driving experience. For premium-category vehicles (Land Cruiser 70 Series and Land Rover Defender), the minimum age is 25. Additional drivers can be added at no extra cost.',

    'faq.q6': 'What is the cancellation policy?',
    'faq.a6':
      'Free cancellation up to 14 days before the pickup date with a full deposit refund. Between 7 and 14 days, we retain 50% of the deposit. Less than 7 days\' notice and the deposit is non-refundable. In cases of force majeure (flight cancellations, travel restrictions), we offer free rebooking.',

    // ──────────────────────────────────────────────
    // Contact
    // ──────────────────────────────────────────────
    'contact.title': 'Let\'s Talk About Your Adventure',
    'contact.subtitle':
      'We are based in Nairobi and we reply fast. Pick the channel you prefer and we will help you plan the perfect safari.',

    'contact.whatsapp': '+254 700 000 000',
    'contact.whatsappDesc': 'Instant replies, even on weekends',
    'contact.email': 'info@keniasafarirentals.com',
    'contact.emailDesc': 'We respond within 2 business hours',
    'contact.phone': '+254 700 000 000',
    'contact.phoneDesc': 'Monday to Saturday, 7:00 AM - 8:00 PM (Nairobi time)',

    'contact.form.name': 'Your full name',
    'contact.form.dates': 'Travel dates (arrival - departure)',
    'contact.form.vehicle': 'Vehicle of interest',
    'contact.form.message': 'Tell us about your trip: destinations, number of travelers, special requirements...',
    'contact.form.submit': 'Send Inquiry',

    'contact.location': 'Westlands, Nairobi, Kenya',

    // ──────────────────────────────────────────────
    // Footer
    // ──────────────────────────────────────────────
    'footer.description':
      'Kenia Safari Rentals is your trusted partner for 4x4 vehicle hire in Kenya. Owner-operated fleet, transparent pricing, and a local team that knows every track in the country.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.followUs': 'Follow Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.cookies': 'Cookie Policy',
    'footer.copyright': ' 2026 Kenia Safari Rentals. All rights reserved.',
    'footer.payments': 'We accept: Visa, Mastercard, PayPal, M-Pesa, and bank transfer',

    // ──────────────────────────────────────────────
    // General
    // ──────────────────────────────────────────────
    'general.learnMore': 'Learn More',
    'general.bookNow': 'Book Now',
    'general.whatsappMessage':
      'Hi! I am interested in renting a safari vehicle in Kenya. Could you send me more information?',
    'general.currency': 'USD',
    'general.langSwitch': 'Espanol',
  },
} as const;
